import './App.css'
import Login from './components/Login/index'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import {Switch, Route} from 'react-router-dom'
import VideoItemDetails from './components/VideoItemDetails'
import SavedContext from './context/SavedContext'
import SavedVideos from './components/SavedVideos'
import {useState} from 'react'

const App = () => {
  const [saved, setSaveList] = useState({saveList: [], saveIdList: []})

  console.log(saved.saveList)
  //  console.log(saved.saveIdList)

  const saveObjFunc = (saveId, obj) => {
    const {saveIdList, saveList} = saved

    const findObj = saveList.find(i => i.id === obj.id)

    if (findObj !== undefined) {
      const filteredList = saveList.filter(i => i.id !== obj.id)
      const filteredSaveIdList = saveIdList.filter(eachId => eachId !== saveId)

      setSaveList({
        saveIdList: filteredSaveIdList,
        saveList: filteredList,
      })
    } else {
      setSaveList(prevState => ({
        saveIdList: [...prevState.saveIdList, saveId],
        saveList: [...prevState.saveList, obj],
      }))
    }
  }

  return (
    <SavedContext.Provider value={{saved, saveObjFunc, isDark: false}}>
      <Switch>
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
        <ProtectedRoute exact path="/videos/:id" component={VideoItemDetails} />
      </Switch>
    </SavedContext.Provider>
  )
}

export default App

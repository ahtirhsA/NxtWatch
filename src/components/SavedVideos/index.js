import SavedContext from '../../context/SavedContext'

const SavedVideos = () => {
  return (
    <SavedContext.Consumer>
      {value => {
        const {saved} = value
        const {saveList} = saved
        console.log(saveList)
      }}
    </SavedContext.Consumer>
  )
}

export default SavedVideos

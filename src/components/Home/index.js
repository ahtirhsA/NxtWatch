import Header from '../Header/index'
import SideComponent from '../SideComponent/index'

import {
  VideosContainer,
  SearchInput,
  Divider,
  Search,
  VideosUnorder,
  LoaderCon,
  FailIm,
  Text,
  RetryButt,
} from './styledComponents'

import {FaSearch} from 'react-icons/fa'
import {useEffect, useState} from 'react'
import Cookie from 'js-cookie'
import Videos from '../Videos'
import Loader from 'react-loader-spinner'

const constants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  progress: 'INPROGRESS',
}

const Home = () => {
  const [search, setSearch] = useState('')
  const [val, setVal] = useState('')
  const [resObj, setObject] = useState({status: 'INITIAL', videoList: []})

  const searchFunc = event => {
    setSearch(event.target.value)
  }

  const setValFunc = () => {
    setVal(search)
  }

  const VideosApi = async () => {
    const Tkn = Cookie.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${val}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${Tkn}`,
      },
    }

    setObject({status: constants.progress})

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      setObject({status: constants.success, videoList: data.videos})
    } else {
      setObject({status: constants.failure})
    }
  }

  useEffect(() => {
    VideosApi()
  }, [val])

  const recallFunc = () => {
    VideosApi()
  }

  const NoItemFound = () => {
    return (
      <LoaderCon fail>
        <FailIm
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          alt="no videos"
        />
        <Text h> No Search results found </Text>
        <Text> Try different key words or remove search filter </Text>
        <RetryButt onClick={recallFunc}> Retry </RetryButt>
      </LoaderCon>
    )
  }

  const onSuccess = () => {
    const {videoList} = resObj

    return (
      <VideosUnorder>
        {videoList.length === 0
          ? NoItemFound()
          : videoList.map(i => <Videos key={i.id} videoItem={i} />)}
      </VideosUnorder>
    )
  }

  const loadingView = () => {
    return (
      <LoaderCon className="loader-container" data-testid="loader">
        <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
      </LoaderCon>
    )
  }

  const onFailure = () => {
    return (
      <LoaderCon fail>
        <FailIm src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png" />
        <Text h> Oops! Something Went Wrong </Text>
        <Text> We are having some trouble to complete your request.</Text>
        <Text> Please try again. </Text>
        <RetryButt onClick={recallFunc}> Retry </RetryButt>
      </LoaderCon>
    )
  }

  const switchFunc = () => {
    const {status} = resObj
    switch (status) {
      case constants.success:
        return onSuccess()
      case constants.progress:
        return loadingView()
      case constants.failure:
        return onFailure()
      default:
        return null
    }
  }

  return (
    <div>
      <Header />
      <Divider>
        <SideComponent />
        <VideosContainer>
          <Divider d>
            <SearchInput
              type="search"
              placeholder="Search"
              value={search}
              onChange={searchFunc}
            />
            <Search onClick={setValFunc}>
              <FaSearch />
            </Search>
          </Divider>
          {switchFunc()}
        </VideosContainer>
      </Divider>
    </div>
  )
}

export default Home

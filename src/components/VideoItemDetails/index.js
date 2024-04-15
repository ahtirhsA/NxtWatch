import Header from '../Header/index'
import SideComponent from '../SideComponent/index'

import {
  VideosContainer1,
  Divider1,
  Title1,
  DateCon1,
  Span1,
  LoaderCon1,
  IcPara,
  FailIm1,
  Text1,
  RetryButt1,
  Hr,
} from './styledComponents'

import {useEffect, useState} from 'react'
import {BiLike} from 'react-icons/bi'
import {BiDislike} from 'react-icons/bi'
import {BiListPlus} from 'react-icons/bi'
import Loader from 'react-loader-spinner'

import ReactPlayer from 'react-player'
import Cookie from 'js-cookie'
import SavedContext from '../../context/SavedContext'

import {formatDistanceToNow} from 'date-fns'

const constants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  progress: 'INPROGRESS',
}

const VideoItemDetails = props => {
  const [resObj, setItem] = useState({status: 'INITIAL', item: {}})
  const [uniqueId, setuniqueId] = useState('')

  const setLike = () => {
    setuniqueId('Like')
  }

  const setDislike = () => {
    setuniqueId('Dislike')
  }

  const videoItemApi = async () => {
    const {match} = props
    const {params} = match
    const {id} = params

    const tokenn = Cookie.get('jwt_token')

    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${tokenn}`,
      },
    }

    setItem({status: constants.progress})

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      setItem({status: constants.success, item: data.video_details})
    } else {
      setItem({status: constants.failure})
    }
  }

  useEffect(() => {
    videoItemApi()
  }, [])

  return (
    <SavedContext.Consumer>
      {value => {
        const {saved, saveObjFunc} = value
        const {saveList, saveIdList} = saved

        const setSave = () => {
          const {
            id,
            title,
            video_url,
            thumbnail_url,
            channel,
            view_count,
            published_at,
            description,
          } = resObj.item

          saveObjFunc(id, {id, thumbnail_url, published_at, view_count, title})
        }

        const loadingView = () => {
          return (
            <LoaderCon1 className="loader-container" data-testid="loader">
              <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
            </LoaderCon1>
          )
        }

        const onFailure = () => {
          return (
            <LoaderCon1 fail>
              <FailIm1 src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png" />
              <Text1 h> Oops! Something Went Wrong </Text1>
              <Text1>
                {' '}
                We are having some trouble to complete your request.
              </Text1>
              <Text1> Please try again. </Text1>
              <RetryButt1 onClick={recallFunc}> Retry </RetryButt1>
            </LoaderCon1>
          )
        }

        const onSuccess = () => {
          const {item} = resObj
          const {
            id,
            title,
            video_url,
            thumbnail_url,
            channel,
            view_count,
            published_at,
            description,
          } = item

          const bool1 = saveIdList.find(eachSaveId => eachSaveId === id)

          const txt = bool1 !== undefined ? 'Saved' : 'Save'

          const {name, profile_image_url, subscriber_count} = channel

          const [month, day, year] = published_at.split(' ')
          const newDate = `${day.slice(0, day.length - 1)} ${month} ${year}`
          const pastAbout = formatDistanceToNow(new Date(newDate)).split(' ')

          return (
            <div>
              <ReactPlayer url={video_url} width="100%" />
              <Title1> {title} </Title1>

              <DateCon1 bigg>
                <DateCon1>
                  <Title1 p> {view_count} views</Title1>
                  <Span1> . </Span1>
                  <Title1 p> {pastAbout[1]} years ago </Title1>
                </DateCon1>

                <DateCon1>
                  <DateCon1>
                    <button
                      onClick={setLike}
                      className={uniqueId === 'Like' ? 'like1' : 'like'}
                    >
                      <BiLike />
                    </button>
                    <IcPara> Like </IcPara>
                  </DateCon1>

                  <DateCon1 b>
                    <button
                      onClick={setDislike}
                      className={uniqueId === 'Dislike' ? 'like1' : 'like'}
                    >
                      <BiDislike />
                    </button>
                    <IcPara> Dislike </IcPara>
                  </DateCon1>

                  <DateCon1>
                    <button
                      className={bool1 !== undefined ? 'like1' : 'like'}
                      onClick={setSave}
                    >
                      <BiListPlus />
                    </button>
                    <IcPara k={bool1 !== undefined}> {txt} </IcPara>
                  </DateCon1>
                </DateCon1>
              </DateCon1>
              <Hr />
              <DateCon1>
                <img
                  src={profile_image_url}
                  style={{width: '3%', marginTop: '10px', marginRight: '10px'}}
                />
                <div>
                  <Title1> {name} </Title1>
                  <Title1 p> {subscriber_count} subscribers</Title1>
                  <Title1> {description} </Title1>
                </div>
              </DateCon1>
            </div>
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
            <Divider1>
              <SideComponent />
              <VideosContainer1>{switchFunc()}</VideosContainer1>
            </Divider1>
          </div>
        )
      }}
    </SavedContext.Consumer>
  )
}

export default VideoItemDetails

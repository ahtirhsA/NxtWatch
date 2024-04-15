import {
  Thumbnail,
  CmnIcon,
  Title,
  Span,
  DateCon,
  ListSty,
} from './styledComponents'
import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'

const Videos = props => {
  const {videoItem} = props
  const {id, title, thumbnail_url, channel, view_count, published_at} =
    videoItem
  const {name, profile_image_url, subscriber_count} = channel
  const [month, day, year] = published_at.split(' ')
  const newDate = `${day.slice(0, day.length - 1)} ${month} ${year}`
  const pastAbout = formatDistanceToNow(new Date(newDate)).split(' ')

  return (
    <ListSty>
      <Link
        to={`/videos/${id}`}
        style={{textDecoration: 'none', color: 'inherit'}}
      >
        <div>
          <Thumbnail src={thumbnail_url} />
          <DateCon>
            <CmnIcon src={profile_image_url} />
            <div>
              <Title> {title} </Title>
              <Title p> {name} </Title>
              <DateCon>
                <Title p> {view_count} views</Title>
                <Span> . </Span>
                <Title p> {pastAbout[1]} years ago </Title>
              </DateCon>
            </div>
          </DateCon>
        </div>
      </Link>
    </ListSty>
  )
}
export default Videos

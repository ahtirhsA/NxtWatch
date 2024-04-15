import {UnorderList, Heading, SIcon, CmnPara, SideBar} from './styledComponents'
import {MdHome} from 'react-icons/md'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import {useState} from 'react'

const SideComponent = () => {
  const [id, setId] = useState('Home')

  const homeFunc = () => {
    setId('Home')
  }

  const trendingFunc = () => {
    setId('Trending')
  }

  const gamingFunc = () => {
    setId('Gaming')
  }

  const savingFunc = () => {
    setId('Saving')
  }

  return (
    <SideBar>
      <UnorderList>
        <li onClick={homeFunc} className={id === 'Home' ? 'li1' : 'li'}>
          <div className={id === 'Home' ? 'b' : 'a'}>
            <MdHome />
          </div>
          <p className={id === 'Home' ? 'p1' : 'p'}> Home </p>
        </li>

        <li onClick={trendingFunc} className={id === 'Trending' ? 'li1' : 'li'}>
          <div className={id === 'Trending' ? 'b' : 'a'}>
            <HiFire />
          </div>
          <p className={id === 'Trending' ? 'p1' : 'p'}> Trending </p>
        </li>

        <li onClick={gamingFunc} className={id === 'Gaming' ? 'li1' : 'li'}>
          <div className={id === 'Gaming' ? 'b' : 'a'}>
            <SiYoutubegaming />
          </div>
          <p className={id === 'Gaming' ? 'p1' : 'p'}> Gaming </p>
        </li>

        <li onClick={savingFunc} className={id === 'Saving' ? 'li1' : 'li'}>
          <div className={id === 'Saving' ? 'b' : 'a'}>
            <BiListPlus />
          </div>
          <p className={id === 'Saving' ? 'p1' : 'p'}> Saved Videos </p>
        </li>
      </UnorderList>

      <div>
        <Heading> CONTACT US </Heading>
        <UnorderList small>
          <li>
            <SIcon
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
              alt="facebook logo"
            />
          </li>

          <li>
            <SIcon
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
              alt="twitter logo"
            />
          </li>

          <li>
            <SIcon
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
              alt="linked in logo"
            />
          </li>
        </UnorderList>
        <CmnPara>
          {' '}
          Enjoy! Now to see your <br /> channels and <br /> recommendations!{' '}
        </CmnPara>
      </div>
    </SideBar>
  )
}

export default SideComponent

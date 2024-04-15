import {NxtLogo, IconCon, Butt, SubCon} from './styledComponents'
import {FaMoon} from 'react-icons/fa'

const Header = () => {
  return (
    <SubCon big>
      <NxtLogo src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" />
      <SubCon>
        <IconCon>
          <FaMoon />
        </IconCon>
        <NxtLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
          alt="profile"
          profile
        />
        <Butt> Logout </Butt>
      </SubCon>
    </SubCon>
  )
}

export default Header

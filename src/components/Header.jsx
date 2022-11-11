import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import logo from '../assets/images/logo.png';
import '../styles/header.scss';

const Header = () => {

  return (
    <header className="header clearfix">
      <a href="/" className="logo">
        <img src={logo} alt="RP Tools logo" />
        <span className='logo-text'>Pointillism NFTs</span>
      </a>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <FontAwesomeIcon className="navicon" icon={solid('bars')} size="1x" />
      </label>
      <ul className="menu">
        <li>
          <Link className="menu_item" to="/">
            <FontAwesomeIcon className="icon_menu_li" icon={solid('house')} size="1x"/>
            Home
          </Link>
        </li>
        <li className="dropdown">
          <Link className="menu_item" to="/">
            <FontAwesomeIcon className="icon_menu_li" icon={solid('palette')} size="1x" spin/>
            NFTs
          </Link>
          <ul className="dropdown-content">
            <li>
              <Link to="/">
                <FontAwesomeIcon className="icon_menu_li" icon={solid('box')} size="1x" />
                Collectibles
              </Link>
            </li>
            <li>
              <Link to="/nfts-on-opensea">
                <FontAwesomeIcon className="icon_menu_li" icon={solid('ship')} color="#2081E2" size="1x" />
                NFTs on Opensea
              </Link>
            </li>
            <li>
              <Link to="/nfts-on-rarible">
                <FontAwesomeIcon className="icon_menu_li" icon={solid('r')} color="#feda03" size="1x" />
                NFTs on Rarible
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link className="menu_item" to="/about">
            <FontAwesomeIcon className="icon_menu_li" icon={solid('circle-info')} size="1x" />
            Info
          </Link>
        </li>
        <li>
          <Link className="menu_item" to="/documentation">
            <FontAwesomeIcon className="icon_menu_li" icon={solid('book')} size="1x" />
            Documentation
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;

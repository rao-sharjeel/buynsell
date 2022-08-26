import React, { useEffect, useState } from 'react'
import { useLocation, withRouter } from 'react-router-dom'
import { useDispatch, connect } from 'react-redux'

import Search from './Search'
import IssuesHistory from './IssuesHistory'
import Status from './Status'
import LanguageSwitcher from './LanguageSwitcher'
import Actions from './Actions'
import UserMenu from './UserMenu'
import bellIcon from './bell.svg'
import homeIcon from './homeIcon.svg'
import listIcon from './list-ul.svg'
import style from './style.module.scss'

const mapStateToProps = ({ menu, settings }) => ({
  menuData: menu.menuData,
  settings,
  flyoutActive:
    (settings.menuType === 'flyout' ||
      settings.menuType === 'compact' ||
      settings.isMenuCollapsed) &&
    !settings.isMobileView,
})

const TopBar = ({ settings }) => {
  const { pathname } = useLocation()
  const dispatch = useDispatch()
  const [name, setName] = useState('')

  const toggleMenu = e => {
    e.preventDefault()
    const { isMenuCollapsed } = settings
    dispatch({
      type: 'settings/CHANGE_SETTING',
      payload: {
        setting: 'isMenuCollapsed',
        value: !isMenuCollapsed,
      },
    })
  }

  useEffect(() => {
    console.log('pathname', pathname)
    if (pathname.includes('main-page')) {
      setName('Home')
    } else if (pathname.includes('category')) {
      setName('Category')
    } else if (pathname.includes('chat')) {
      setName('Chat')
    } else if (pathname.includes('listings')) {
      setName('Listings')
    } else if (pathname.includes('purchaseHistory')) {
      setName('History')
    } else if (pathname.includes('favorites')) {
      setName('Favourite')
    } else if (pathname.includes('apps/profile')) {
      setName('Profile')
    } else if (pathname.includes('ui-kits/bootstrap')) {
      setName('Setting')
    } else if (pathname.includes('sell')) {
      setName('Sell')
    } else setName('')
  }, [pathname])

  return (
    <div className={style.wraper}>
      <div style={{ display: 'flex' }}>
        <div className={style.homeWraper}>
          <a href="#" onClick={toggleMenu} onKeyDown={toggleMenu}>
            <img src={homeIcon} alt="home" width={25} height={25} />
          </a>
          <span
            style={{ color: 'white', margin: '0px', fontSize: '16px' }}
            className={style.menuStyle}
          >
            {name}
          </span>
        </div>
        <div
          className="d-flex justify-content-center flex-column p-4 "
          style={{ borderRight: '0.5px solid white', padding: '0px 20px' }}
        >
          <span>Location</span>
          <select
            style={{ color: 'white' }}
            className={`${style.selectBox} form-select  `}
            aria-label="Default select example"
          >
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <div className={style.topbar}>
        <div className="mr-4">
          <Search />
        </div>
        <div className="mr-4">
          <img src={listIcon} alt="asd" width={25} height={25} />
        </div>
        <div className="mr-4">
          <img src={bellIcon} alt="asd" width={25} height={25} />
        </div>
        <div>
          <UserMenu />
        </div>
      </div>
    </div>
  )
}

export default withRouter(connect(mapStateToProps)(TopBar))

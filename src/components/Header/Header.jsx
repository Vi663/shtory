import { NavLink } from "react-router-dom";
import React from "react";
import { useState } from "react";
import { FiMenu, FiXCircle, FiHome, FiImage, FiMessageCircle, FiInfo } from "react-icons/fi";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import s from './Header.module.css';

export const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false)
  
  const onMenuToggle = () => {
    setMobileMenu(prevState => !prevState)
  }

  return (
    <div>
      <header className={s.wrapper}>
        <span className={s.slogan}>Штори</span>
        <button
          className={s.mobileMenuBtn}
          onClick={onMenuToggle}
        >
          <div className={s.svg}>{mobileMenu? <FiXCircle/> : <FiMenu />}</div>
        </button>
        <nav className={s.nav_list}>
          <NavLink to='/' activeClassName={s.activeLink} className={s.nav_item}><FiHome/> Головна</NavLink>
          <NavLink to='/about' activeClassName={s.activeLink} className={s.nav_item}><FiInfo/> Про нас</NavLink>
          <NavLink to='/contacts' activeClassName={s.activeLink} className={s.nav_item}><FiMessageCircle/> Контакти</NavLink>
          <NavLink to='/portfolio' activeClassName={s.activeLink} className={s.nav_item}><FiImage/> Портфоліо</NavLink>
        </nav>
      </header>
      {mobileMenu && <MobileMenu closeMenu={onMenuToggle}/>}
    </div>
  )
}
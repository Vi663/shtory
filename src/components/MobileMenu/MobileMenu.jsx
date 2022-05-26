import React from "react";
import { NavLink } from "react-router-dom";
import { FiHome, FiImage, FiMessageCircle, FiInfo } from "react-icons/fi";
import s from "./MobileMenu.module.css";

export function MobileMenu({ closeMenu }) {
  return (
    <div className={s.wrapper}>
      <nav className={s.nav_list}>
          <NavLink to='/' activeClassName={s.activeLink} className={s.nav_item} onClick={closeMenu}><FiHome/> Головна</NavLink>
          <NavLink to='/about' activeClassName={s.activeLink} className={s.nav_item} onClick={closeMenu}><FiInfo/> Про нас</NavLink>
          <NavLink to='/contacts' activeClassName={s.activeLink} className={s.nav_item} onClick={closeMenu}><FiMessageCircle/> Контакти</NavLink>
          <NavLink to='/portfolio' activeClassName={s.activeLink} className={s.nav_item} onClick={closeMenu}><FiImage/> Портфоліо</NavLink>
        </nav>
    </div>
  )
}
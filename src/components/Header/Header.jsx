import { NavLink } from "react-router-dom";
import React from "react";
import s from './Header.module.css';

export const Header = () => {
  return (
    <div className={s.header}>
      <header >
      <span className={s.slogan}>Штори</span>
      {/* <svg className={s.logo} width={20} height={25}>
        <use herf='../../pictures/logo.svg'></use>
      </svg> */}
      <nav className={s.nav_list}>
        <NavLink to='/' activeClassName="active">Головна</NavLink>
        <NavLink to='/about' activeClassName="active">Про нас</NavLink>
        <NavLink to='/contacts' activeClassName="active">Контакти</NavLink>
        <NavLink to='/portfolio' activeClassName="active">Портфоліо</NavLink>
      </nav>
    </header>
    </div>
  )
}
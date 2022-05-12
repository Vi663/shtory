import React from "react";
import { Link } from "react-router-dom";
// import s from './PortfolioView.module.css';

export const PortfolioView = ({ works }) => {
  return (
    <div>
      <ul>
        {works.map(work => (
          <li key={work.id}>
            <img src={work.src} alt={work.id} width={200}/>
            <Link to={`/candles/${work.id}`}> {work.text} </Link>
            {work.availability ? <span>В наявності</span> : <span>Hемає в наявності</span>}
            {/* {console.log(work.src)} */}
          </li>
        ))}
      </ul>
    </div>
  )
}
import React from "react";
import { Link } from "react-router-dom";
// import { Card } from 'antd';
// import { Row, Col } from 'antd';
import s from './PortfolioView.module.css';

export const PortfolioView = ({ works }) => {
  // const { Meta } = Card;
  return (
    <div className={s.portfolioContainer}>
      <ul className={s.portfolioList}>
        {works.map(work => (
          // <li key={work.id} className={s.portfolioListItem}>
          //   <Card
          //     hoverable
          //     cover={<img alt={work.id} src={work.src} />}
          //   >
          //     <Meta title={work.text} />
          //     {work.availability ? <span>В наявності</span> : <span>Hемає в наявності</span>}
          //   </Card>
          // </li>
          <li key={work.id} className={s.portfolioListItem}>
            <img src={work.src} alt={work.id} width={200}/>
            <Link to={`/works/${work.id}`}> {work.text} </Link>
            {work.availability ? <span>В наявності</span> : <span>Hемає в наявності</span>}
            {/* {console.log(work.src)} */}
          </li>
          ))}
      </ul>
    </div>
  )
}
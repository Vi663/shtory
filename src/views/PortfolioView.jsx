import React from "react";
import { Link } from "react-router-dom";
// import { Card } from 'antd';
// import { Row, Col } from 'antd';
import s from './PortfolioView.module.css';

export const PortfolioView = ({ works }) => {
  // const { Meta } = Card;
  return (
    <div className={s.container}>
      <ul className={s.list}>
        {works.map(work => (
          // <li key={work.id} className={s.listItem}>
          //   <Card
          //     hoverable
          //     cover={<img alt={work.id} src={work.src} />}
          //   >
          //     <Meta title={work.text} />
          //     {work.availability ? <span>В наявності</span> : <span>Hемає в наявності</span>}
          //   </Card>
          // </li>
          <li key={work.id} className={s.listItem}>
            <div className={s.wrapper}>
              <img className={s.image} src={work.src} alt={work.id}/>
            </div>
            
            <Link to={`/works/${work.id}`}> {work.text} </Link>
            {work.availability ? <span>В наявності</span> : <span>Hемає в наявності</span>}
            {/* {console.log(work.src)} */}
          </li>
          ))}
      </ul>
    </div>
  )
}
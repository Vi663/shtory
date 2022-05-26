import React from "react";
import { Card } from 'antd';
import s from './PortfolioView.module.css';

export const PortfolioView = ({ works }) => {

  const { Meta } = Card;
  return (
    <div className={s.portfolioContainer}>
      <ul className={s.portfolioList}>
        {works.map(work => (
          <Card
            hoverable
            style={{ width: 30 }}
            cover={<img alt={work.id} src={work.src} />}
          >
            <Meta title={work.text} description={work.availability ? <span>В наявності</span> : <span>Hемає в наявності</span>} />
          </Card>
        ))}
      </ul>
    </div>
  )
}
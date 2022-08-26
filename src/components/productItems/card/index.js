import React from 'react'
import { useLocation } from 'react-router-dom'

import yellowStar from './card-images/star-fill.svg'
import heart from './card-images/heart.svg'
import greenHeart from './card-images/heart-fill.svg'
import chat from './card-images/chat.svg'
import style from './card.module.scss'

const Card = ({ img, fashion, title, description, price }) => {
  const { pathname } = useLocation()
  return (
    <div className={style.wraper}>
      <div className={style.imgSec}>
        <img src={img} alt="pic" className={style.imgTag} />
      </div>
      <div className={style.infoWraper}>
        <div className={style.container}>
          <div className={style.sub1}>
            <span>{fashion}</span>
            <h2>{title}</h2>
            <span>{description}</span>
            <div className={style.starSection}>
              <img src={yellowStar} alt="start img" style={{ marginRight: '5px' }} />
              <img src={yellowStar} alt="start img" style={{ marginRight: '5px' }} />
              <img src={yellowStar} alt="start img" style={{ marginRight: '5px' }} />
              <img src={yellowStar} alt="start img" style={{ marginRight: '5px' }} />
              <img src={yellowStar} alt="start img" style={{ marginRight: '5px' }} />

              <span style={{ marginLeft: '10px' }}>
                <b>5.0</b>
              </span>
            </div>
            <h2 style={{ color: 'green' }}>
              <b>{price}</b>
            </h2>
          </div>
          <div className={style.sub2}>
            <div className={style.favouriteSec}>
              <img src={pathname.includes('favorites') ? greenHeart : heart} alt="hear icon" />
            </div>
            <div className={style.status}>RESERVED</div>
            <div className={style.chat}>
              CHAT <img src={chat} alt="chat icon" style={{ marginLeft: '30px' }} />{' '}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card

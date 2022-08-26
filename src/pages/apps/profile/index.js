import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Tabs, Input, Button, Upload, Form } from 'antd'
import General1 from '@kit/widgets/General/1'
import General10v1 from '@kit/widgets/General/10v1'
import General12v1 from '@kit/widgets/General/12v1'
import General14 from '@kit/widgets/General/14'
import General15 from '@kit/widgets/General/15'
import List19 from '@kit/widgets/Lists/19'

import rightIcon from './right-arrow.svg'
import heartIcon from './images/heart.svg'
import chatIcon from './images/chat.svg'
import style from './profile.module.scss'
import InputRangeComponenet from './input-range'

const { TabPane } = Tabs

const AppsProfile = () => {
  const [tabKey, setTabKey] = useState('1')

  const changeTab = key => {
    setTabKey(key)
  }

  return (
    <div>
      {/* <h1>Profile here</h1> */}
      <Helmet title="Profile" />
      <div className="row">
        <div
          className="col-xl-4 col-lg-12"
          style={{ height: '100vh', borderRight: '0.5px solid lightgray' }}
        >
          <div className={style.profileSec1}>
            <div className={style.circular} />
            <div className={style.info}>
              <h4>Neha Zaman</h4>
              <p>neha.user@gmail.com</p>
              <button type="button" className={style.btn}>
                Edit Profile
              </button>
            </div>
          </div>
          <div className={style.list}>
            <ul>
              <li>Local Verified</li>
              <li>Active in last 3 days</li>
              <li>Joined 27 Dec, 2022</li>
            </ul>
          </div>
          <div className={style.dropDownWraper}>
            {listData.map(data => {
              return (
                <div className={style.item}>
                  <span style={{ fontSize: '14px' }}>{data.title}</span>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <p className={style.text}>{data.content}</p>
                    <img src={rightIcon} alt="icon " />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div style={{ padding: '40px' }} className="col-xl-8 col-lg-12">
          <div style={{ borderBottom: '1px solid lightgray', paddingBottom: '20px' }}>
            <div>
              <InputRangeComponenet />
            </div>
            <div className="d-flex justify-content-between mt-4">
              <div>
                <div className="d-flex">
                  <img src={heartIcon} alt="icon" style={{ marginRight: '10px' }} />
                  <span>Recommended -%</span>
                </div>
                <div className="d-flex justify-content-center">
                  <span>No Data Yet</span>
                </div>
              </div>
              <div>
                <div className="d-flex">
                  <span style={{ marginRight: '10px' }}>Recommended -%</span>
                  <img src={chatIcon} alt="icon" />
                </div>
                <div className="d-flex justify-content-center">
                  <span>No Data Yet</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppsProfile

const listData = [
  { title: '1 Badge', content: 'you have 4 feedbacks' },
  { title: '1 Badge', content: 'you have 4 feedbacks' },
  { title: '1 Badge', content: 'you have 4 feedbacks' },
  { title: '1 Badge', content: 'you have 4 feedbacks' },
]

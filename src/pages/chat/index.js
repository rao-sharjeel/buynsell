import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { SearchOutlined } from '@ant-design/icons'
import { Input, Tooltip } from 'antd'
import PerfectScrollbar from 'react-perfect-scrollbar'
import dialogs from './data.json'
import shareIcon from './share-fill.svg'
import dotsIcon from './dots.svg'
import shoeIcon from './show1.jpeg'
import style from './style.module.scss'

const ChatPage = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const { name, position, dialog, avatar, lastSeen } = dialogs[activeIndex]

  const changeDialog = (e, index) => {
    e.preventDefault()
    setActiveIndex(index)
  }

  return (
    <div>
      <Helmet title="Messaging" />
      <div className={style.TotalChatDiv}>
        <span>More Chats (90)</span>
      </div>
      <div className="row">
        <div className="col-12 col-md-3">
          <div className={style.dialogs}>
            <PerfectScrollbar>
              {dialogs.map((item, index) => (
                <a
                  href="#"
                  onClick={e => changeDialog(e, index)}
                  key={item.name}
                  className={`${style.item} ${
                    index === activeIndex ? style.current : ''
                  } d-flex flex-nowrap align-items-center`}
                >
                  <div
                    className="kit__utils__avatar kit__utils__avatar--size46 mr-3 flex-shrink-0"
                    style={{ borderRadius: '50%' }}
                  >
                    <img src={item.avatar} alt={item.name} />
                  </div>
                  <div className={`${style.info} flex-grow-1`}>
                    <div className="text-dark font-size-18 font-weight-bold text-truncate">
                      {item.name}
                    </div>
                    <div className="text-uppercase font-size-12 text-truncate text-gray-6">
                      {item.unreadSms}
                    </div>
                  </div>
                  <div
                    hidden={!item.unread}
                    className={`${style.unread} flex-shrink-0 align-self-start`}
                  >
                    <div className={`${style.circularDiv}  badge badge-success`}>{item.unread}</div>
                  </div>
                </a>
              ))}
            </PerfectScrollbar>
          </div>
        </div>
        <div className="col-12 col-md-9">
          <div className="card">
            <div className="card-header card-header-flex align-items-center">
              <div className="d-flex  justify-content-center mr-auto">
                <div>
                  <img
                    src={avatar}
                    alt="aasd"
                    style={{ borderRadius: '50%', marginRight: '20px' }}
                    width={45}
                    height={45}
                  />
                </div>
                <div>
                  <h5 className="mb-0 mr-2 font-size-18">{name}</h5>
                  <span className="font-size-14 text-gray-6">{lastSeen}</span>
                </div>
              </div>
              <div>
                <Tooltip placement="top" title="options">
                  <img src={dotsIcon} alt="fe fe-trash" />
                </Tooltip>
              </div>
            </div>
            <div className={style.offerBtn}>
              <div className={style.sec1}>
                <img
                  src={shoeIcon}
                  alt="icon"
                  width={40}
                  height={40}
                  style={{ marginRight: '15px' }}
                />
                <div className="d-flex flex-column">
                  <span className={style.info}>Nike Shoe Limited 24</span>
                  <span className={style.price}>$1,299</span>
                </div>
              </div>
              <div className={style.sec2}>
                <button type="button" className={style.makeOfferBtn}>
                  Make Offer
                </button>
                <span>View Seller</span>
              </div>
            </div>
            <div className="card-body">
              <div className="height-700">
                <PerfectScrollbar>
                  <div className="d-flex flex-column justify-content-end height-100p">
                    {dialog.map(message => (
                      <div
                        key={Math.random()}
                        className={`${style.message} ${
                          message.owner !== 'you' ? style.answer : ''
                        }`}
                      >
                        <div
                          className={style.messageContent}
                          style={{
                            backgroundColor: message.owner === 'you' ? '#5151ff' : '',
                            color: message.owner === 'you' ? 'white' : 'black',
                          }}
                        >
                          <div>{message.content}</div>
                          <div className="text-gray-4 font-size-10 d-flex justify-content-end  text-uppercase">
                            {message.time}
                          </div>
                        </div>
                        {message.owner !== 'you' && (
                          <div className={`${style.messageAvatar} kit__utils__avatar`}>
                            <img src={avatar} alt={name} style={{ borderRadius: '50%' }} />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </PerfectScrollbar>
              </div>
            </div>
            <div
              style={{ borderTop: '1px solid lightgray', marginTop: '20px' }}
              className={style.sendSmsWraper}
            >
              <div className={style.inputWraper}>
                <img src={shareIcon} alt="icon" style={{ margin: '0px 10px' }} />
                <input
                  style={{ border: 'none' }}
                  type="text"
                  className="form-control"
                  placeholder="Start Typing"
                />
              </div>
              <div className="input-group-append">
                <div
                  style={{
                    transform: 'rotate(45deg)',
                    marginRight: '35px',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <i className="fe fe-send align-middle" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatPage

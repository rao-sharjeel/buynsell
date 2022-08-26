import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Button, Spin, Pagination, List, Avatar } from 'antd'
import ProductItems from 'components/productItems'
import Catalog from 'components/catalog'
import fireIcon from './images/fire.svg'
// import butterfly from './images/butterfly.png'

import rightIcon from './right-arrow.svg'
import style from './style.module.scss'

const mapStateToProps = ({ category, product, dispatch }) => ({
  category,
  product,
  dispatch,
})

const UIKitBootstrap = ({ category, product, dispatch }) => {
  const [currentCategory, setCurrentCategory] = useState(-1)
  const [isCategoryList, setIsCategoryList] = useState(true)
  useEffect(() => {
    getProductDataByCategory()
  }, [currentCategory])
  const getProductDataByCategory = () => {
    dispatch({
      type: 'product/GET_PRODUCTS_BY_CATEGORY',
      payload: { id: currentCategory },
    })
  }

  return (
    <div className={style.wraper}>
      {isCategoryList ? (
        <List
          itemLayout="horizontal"
          dataSource={items}
          renderItem={item => (
            <List.Item
              className={style.cursorPointer}
              onClick={() => {
                console.log(item.id, false)
                // setCurrentCategory(item.id)
                // setIsCategoryList(false)
              }}
            >
              <List.Item.Meta
                // avatar={<span>as</span>}
                title={
                  <div className="d-flex justify-content-between p-2">
                    <div className="d-flex align-items-center">
                      <div
                        style={{
                          width: '25px',
                          height: '25px',
                          marginRight: '10px',
                          backgroundColor: '#f898f8',
                        }}
                      />
                      <span style={{ fontSize: '14px' }}> {item.name}</span>
                    </div>
                    <div>
                      <span style={{ marginRight: '15px' }}>{item.text}</span>
                      <img src={rightIcon} alt="icon" />
                    </div>
                  </div>
                }
                description=""
              />
            </List.Item>
          )}
        />
      ) : (
        <div>
          <Button className="mb-2" onClick={() => setIsCategoryList(true)}>
            Back
          </Button>
          <ProductItems />
        </div>
      )}
    </div>
  )
}

export default connect(mapStateToProps)(UIKitBootstrap)

const items = [
  { name: 'Get help', text: 'you have 4 rewards' },
  { name: 'Get help', text: 'you have 4 rewards' },
  { name: 'Get help', text: 'you have 4 rewards' },
  { name: 'Get help', text: 'you have 4 rewards' },
]

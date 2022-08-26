import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Button, Spin, Pagination, List, Avatar } from 'antd'
import ProductItems from 'components/productItems'
import Catalog from 'components/catalog'
import fireIcon from './images/fire.svg'
import butterfly from './images/butterfly.png'
import chair from './images/chair.png'
import fider from './images/fider.png'
import football from './images/football.png'
import lap from './images/lap.png'
import orange from './images/orange.png'
import pant from './images/pant.png'
import shirt from './images/shirt.png'
import xbox from './images/xbox.png'
import style from './style.module.scss'

const mapStateToProps = ({ category, product, dispatch }) => ({
  category,
  product,
  dispatch,
})

const CategoryPage = ({ category, product, dispatch }) => {
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
    <div style={{ border: '1px solid lightgray' }}>
      {isCategoryList ? (
        <List
          itemLayout="horizontal"
          dataSource={items}
          renderItem={item => (
            <List.Item
              className={style.cursorPointer}
              onClick={() => {
                setCurrentCategory(item.id)
                setIsCategoryList(false)
              }}
            >
              <List.Item.Meta
                avatar={<Avatar src={item?.image} />}
                title={
                  <div>
                    {item.name}
                    <div className={style.itemAction}>
                      <span />
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

export default connect(mapStateToProps)(CategoryPage)

const items = [
  { id: 1, name: 'Hot Items', image: fireIcon },
  { id: 2, name: 'Electronics & appliances', image: butterfly },
  { id: 3, name: 'Hot Items', image: chair },
  { id: 4, name: 'Electronics & appliances', image: fider },
  { id: 5, name: 'Hot Items', image: football },
  { id: 6, name: 'Electronics & appliances', image: xbox },
  { id: 7, name: 'Hot Items', image: shirt },
  { id: 8, name: 'Electronics & appliances', image: pant },
  { id: 9, name: 'Electronics & appliances', image: orange },
]

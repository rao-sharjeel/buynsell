import React from 'react'
import { Spin } from 'antd'
import { connect } from 'react-redux'
import Catalog from 'components/catalog'
import img from './images/show1.jpeg'
import pic1 from './images/pic1.jpeg'
import chair from './images/chair.jpeg'
import lady from './images/lady.jpeg'
import Card from './card/index'

const mapStateToProps = ({ category, product, dispatch }) => ({
  category,
  product,
  dispatch,
})

const ProductItems = ({ category, product, dispatch }) => {
  return (
    <Spin size="large" spinning={product.loading}>
      <div className="row">
        {items &&
          items.map(item => {
            const { imgage, name, fashion, description, price, title } = item
            return (
              <div key={Math.random()}>
                <Card
                  img={imgage}
                  description={description}
                  price={price}
                  fashion={fashion}
                  name={name}
                  title={title}
                />

                {/* <Catalog
                  isNew="true"
                  isFavorite="true"
                  image={image}
                  name={name}
                  description={description}
                  categories={categories}
                  price={price}
                  oldPrice={10}
                /> */}
              </div>
            )
          })}
      </div>
    </Spin>
  )
}

export default connect(mapStateToProps)(ProductItems)

const items = [
  {
    imgage: img,
    name: 'Nike Shoe',
    price: '$1299',
    description: 'Makati 1h 23m',
    fashion: 'Fashion',
    title: 'Nike shoe',
  },
  {
    imgage: pic1,
    name: 'Nike Shoe',
    price: '$1299',
    description: 'Makati 1h 23m',
    fashion: 'Fashion',
    title: 'Nike shoe',
  },
  {
    imgage: chair,
    name: 'Chair',
    price: '$1299',
    description: 'Makati 1h 23m',
    fashion: 'Fashion',
    title: 'Nike shoe',
  },
  {
    imgage: lady,
    name: 'Nike Shoe',
    price: '$1299',
    description: 'Makati 1h 23m',
    fashion: 'Fashion',
    title: 'Nike shoe',
  },
  {
    imgage: img,
    name: 'Nike Shoe',
    price: '$1299',
    description: 'Makati 1h 23m',
    fashion: 'Fashion',
    title: 'Nike shoe',
  },
]

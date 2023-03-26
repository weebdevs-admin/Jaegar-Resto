import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../Context/Context'
import './Order.scss'

function Order() {
  const { order, setOrder } = useContext(Context)
  const [id, setId] = useState(null)
  const [data, setData] = useState([])
  useEffect(() => {
    setData([...new Set(order)])
  }, [order])
  useEffect(() => {
    setData(data.filter((i) => i.id !== id))
    setOrder(data.filter((i) => i.id !== id))
  }, [id])
  console.log(data);
  let a = 0
  data.forEach((i) => {
    a += (i.price * i.count).toFixed(2) * 1
  })

  return (
    <div className='order'>
      <h2 className='order-title'>Orders #34562</h2>
      <div className="btn-group">
        <button className='btn activer'>Dine In</button>
        <button className='btn'>To Go</button>
        <button className='btn'>Delivery</button>
      </div>
      <ul className='list'>
        <li className='item'>
          <span>Item</span>
          <span>Qty</span>
          <span>Price</span>
        </li>
      </ul>
      <ul className='order-list'>
        {
          data && data.map((item, index) => (
            <li className='order-block' key={index}>
              <div className="block-1">
                <div className="product">
                  <div className="product-img">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="product-info">
                    <h3 className='title'>{item.title}</h3>
                    <span className='price'>{item.price} $</span>
                  </div>
                </div>
                <span className='count'>{item.count}</span>
                <span className='total-count'>{(item.price * item.count).toFixed(2)} $</span>
              </div>
              <div className="block-2">
                <input type="text" placeholder='Order Note' className='inp_note'/>
                <button onClick={() => setId(item.id)}><i className='bi bi-trash-fill'></i></button>
              </div>
            </li>
          ))
        }
      </ul>
      <button className='total-btn'>{a} $</button>
    </div>
  )
}

export default Order;

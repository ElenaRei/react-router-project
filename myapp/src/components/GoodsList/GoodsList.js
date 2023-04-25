import GoodsItem from '../GoodsItem/GoodsItem'
import React from 'react'
import styles from './GoodsList.module.css'
import { useNavigate } from 'react-router-dom'

export default function GoodsList(props) {
    const {goods}=props
    const navigate = useNavigate()

    const goForward = ()=>{
      navigate(1)
    }


  return (
    <div>
      <div>
      <button onClick={goForward}>Вернуться к товару</button>
      </div>
      <div>
        {goods.map(elem =>
        <GoodsItem 
        key={elem.id} 
        title={elem.title} 
        id={elem.id}
        price={elem.price}
        count={elem.rating.count}/>
        )}
      </div>
    </div>
  )
}

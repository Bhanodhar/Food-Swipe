import React, {useState} from 'react'
import { Display_Items_data } from '../Display_Items_data'

const ItemsDisplay = () => {
    const [itemsData, setItemsData] = useState(Display_Items_data);

  return (
    <div className='itemSection'>
        {itemsData.map((item)=>{
            return(
                <div className='gallery'>
                    <img src={item.item_img} alt={item.item_img} />
                </div>
            )
        })}
    </div>
  )
}

export default ItemsDisplay

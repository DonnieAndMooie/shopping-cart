import React from 'react'
import Nav from './Nav'

export default function Basket({basket, setBasket, numItems, total, setNumItems, setTotal}) {
  const formatter = new Intl.NumberFormat("en-UK", {
    style: "currency",
    currency: "GBP"
  })
  
  const deleteItem = (deletedIndex, deletedItem) => {
    setBasket(basket.filter((item, i) => i !== deletedIndex))
    setNumItems(numItems - deletedItem.quantity)
    setTotal(total - (deletedItem.item.price.substring(1) * deletedItem.quantity))
  }

  const submitOrder = () => {
    alert("You Checked Out!")
    setBasket([])
    setNumItems(0)
    setTotal(0)
  }

  return (
    <div>
      <Nav total={total} numItems={numItems}></Nav>
        <div className="basket-page">
      
          <h1 className='basket-title'>Your Basket</h1>
            {basket.map((item, i) => { return(
              <div className='basket-item' key={i}>
                <img src={item.item.imgSrc} alt={item.item.title} />
                <div className="basket-item-text">
                  <h3>{item.item.title}</h3>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: {formatter.format(item.item.price.substring(1) * item.quantity)}</p>
                  <button className="remove" onClick={() => deleteItem(i, item)}>Remove Item</button>
                </div>

              </div>
        )})}
        <button className="checkout" onClick={() => submitOrder()}>Checkout</button>
        </div>
    </div>

  )
}

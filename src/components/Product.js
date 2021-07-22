import React from 'react'
import '../App.css';

function Product({ product, cart, setCart, total, money }) {

    const cartItem = cart.find(item => item.id === product.id)

    const addToCart = () => {
        const checkCart = cart.find(item => item.id === product.id)
        if (checkCart) {
            checkCart.amount += 1
            setCart([...cart.filter(item => item.id !== product.id), checkCart])
        } else {
            setCart([...cart, {
                id: product.id,
                amount: 1
            }])
        }
    }

    const removeToCart = () => {
        const currentCart = cart.find(item => item.id === product.id)
        const cartWithoutCurrent = cart.filter(item => item.id !== product.id)
        currentCart.amount -= 1
        if (currentCart.amount === 0) {
            setCart([...cartWithoutCurrent])
        }
        else {
            setCart([...cartWithoutCurrent, currentCart])
        }
    }
    return (
        <div className="product">
            <img src={product.imgUrl} alt=""></img>
            <h6>{product.name}</h6>
            <div className="price">{product.price} ₺</div>
            <div className="actions">
                <button className="sell-btn" disabled={!cartItem} onClick={removeToCart}>Çıkar</button>
                <span className="amount">{(cartItem && cartItem.amount) || 0}</span>
                <button className="buy-btn" disabled={total + product.price > money} onClick={addToCart}>Ekle</button>
            </div>
        </div>
    )
}
export default Product;
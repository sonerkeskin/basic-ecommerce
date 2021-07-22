import React from 'react'
import CartItem from './CartItem'

function Cart({ cart, total, products, resetCart }) {
    return (
        <div >
            {cart.map(item => (
                <CartItem key={item.id} item={item} product={products.find(p => p.id === item.id)} />
            ))}
            <div className="total">Toplam: {total} ₺</div><button onClick={resetCart}>Sepeti sıfırla</button>
        </div>
    )
}
export default Cart;
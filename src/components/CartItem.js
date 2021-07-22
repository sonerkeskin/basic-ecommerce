import React from 'react'

function CartItem({ item, product }) {
    return (
        <div>
            {product.name} x {item.amount}
        </div>
    )
}
export default CartItem;
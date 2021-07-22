import React from 'react'
import { moneyFormat } from '../helpers'

function Header({ money, total }) {
    return (
        <div className="header">
            {total > 0 && money - total !== 0 && (
                <div className="header">Harcayacak <span>{moneyFormat(money - total)}</span> ₺ kaldı !</div>
            )}
            {total === 0 && (
                <div className="header">Harcamak için <span>{moneyFormat(money)}</span> ₺ paranız var !</div>
            )}
            {money - total === 0 && (
                <div className="header">Paran bitti!</div>
            )}
        </div>
    )
}
export default Header;
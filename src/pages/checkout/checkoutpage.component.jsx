import React from 'react';
import './checkoutpage.styles.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector';

const CheckoutPage = ({cartItems, total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => cartItem.name)
        }
        <div className='total'>
            <span>Total:{total}</span>
        </div>
    </div>
);

const mapStateoProps = createStructuredSelector({ 
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateoProps)(CheckoutPage);
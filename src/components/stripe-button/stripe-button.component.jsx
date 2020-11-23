import React from 'react';

import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HqZqCFYH4dXXrZo6Ntm1wxltxmzcSa1E22UkalCTkgDELiuSWdA0ZU6S7bGF1900nLclfKNcBc2QZpQWrM1p2sM00fuWuxWj3';


    const onToken = token => {
        console.log(token);
        alert('Payment Successful !!!');
    }

    return (
        <StripeCheckout 
            label ='Pay Now !!'
            name='CRWn Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`your total is ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;
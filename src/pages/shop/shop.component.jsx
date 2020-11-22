import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component.jsx';



const ShopPage = ({ collections }) => {

    return (
        <div className='shop-name'>
           <CollectionsOverview />
        </div>
    );
}

export default ShopPage;
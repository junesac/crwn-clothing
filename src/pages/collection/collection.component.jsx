import React from 'react';
import './collection.styles.scss';

import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selector';

const CollectionPage = ({ collection }) => {

    console.log('collecions: ',collection);
    return (
        <div className='category'>
            <h2>Collection Page !!!</h2>
        </div>
    );
};

const mapStateToProps=(state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);
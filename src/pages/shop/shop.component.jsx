import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component.jsx';

import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component.jsx';
import { convertCollectionSnapshotToMap, firestore } from '../../firebase/firebase.utils.js';

import { connect } from 'react-redux';
import { updateCollection } from '../../redux/shop/shop.actions.js';


class ShopPage extends React.Component {

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections }  = this.props;

        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionSnapshotToMap(snapshot);
            console.log('coll: ', collectionsMap);
            updateCollections(collectionsMap);
        });

    }

    render() {
        const { match } = this.props;
        return (
            <div className='shop-name'>
                <Route exact path={`${match.path}`} component={CollectionsOverview} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections:  collectionsMap => dispatch(updateCollection(collectionsMap)) 
});

/**
 * updateCollection is an action that component dispatch.
 * we call updateCollections method to dispatch shop action 
 * 
 */

export default connect(null, mapDispatchToProps)(ShopPage);
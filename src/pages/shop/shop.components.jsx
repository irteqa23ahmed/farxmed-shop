import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview';
import SHOP_DATA from '../../Data/shop.data'

class ShopPage extends React.Component {
    constructor(){
        super();
        this.state = {
            collections: SHOP_DATA
        }
    }

    render(){
        const {collections} = this.state;
        return (
            <div className='shop-page'>
            {
                collections.map(({id, ...oth}) => {
                    return (
                        <CollectionPreview key={id} {...oth}/>
                    );
                })
            }
            </div>
        );
    }
}

export default ShopPage;
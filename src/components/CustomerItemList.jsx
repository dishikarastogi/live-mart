import React from "react";
import CustomerShopComponent from "./CustomerShopComonent";
export default function CustomerItemList( {items}) {
    return <div className="shop row">
        {items.map(item => <CustomerShopComponent key={item.id} item={item} itemid={item.id} shop={item.shopDetails.id}/>)}
    </div>
}
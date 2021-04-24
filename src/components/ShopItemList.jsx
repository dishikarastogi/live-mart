import React from "react"
import ShopComponent from "./ShopComponent"

export default function ShopItemList( {items }) {
    return <div className="shop">
        {items.map(item => <ShopComponent key={item.id} item={item} />)}
    </div>
}
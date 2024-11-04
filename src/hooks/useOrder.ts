import { useState } from 'react';
import { MenuItem, OrderItems } from "../types/index"




export default function useOrder() {

    const [order, setOrder] = useState<OrderItems[]>([]);

    const addItem = (item: MenuItem) => {
        const ItemExist = order.find(orderItem => orderItem.id=== item.id)

        const newItem = { ...item, quantity: 1 }

        setOrder([...order, newItem]);

        console.log('agreagndo item.......', order)
    }
    return {

        addItem
    }
}
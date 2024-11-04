import type { MenuItem } from '../types'



type MenuItemsProps = {
  item: MenuItem;
  addItem: (item:MenuItem) => void;
}

export default function MenuItems({ item, addItem }: MenuItemsProps) {


  return (
    <button
      onClick={()=>addItem(item)}
      className='border-2 border-teal-400 w-full hover:bg-teal-200 py-3 px-2 transition-all flex justify-between'>


      <p className=''>{item.name}</p>
      <p className='font-black'>{item.price}</p>


    </button>
  )
}

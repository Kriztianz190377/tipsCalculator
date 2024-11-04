
import MenuItems from "./components/MenuItems.tsx"
import { menuItems } from "./data/db"
import useOrder from './hooks/useOrder.ts'




function App() {

const {addItem}=useOrder();

 
  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">Tip calculator</h1>
      </header>

      <main className="max-w-7xl mx-auto  py-20 grid md:grid-cols-2 ">
        <div className="p-5 ">
          <h2 className=" text-4xl font-black my-2">Menu</h2>

          <div className="space-y-2 ">

            {menuItems.map(item => (
              <MenuItems
                key={item.id}
                item={item}
                addItem={addItem}


              />
            ))}

          </div>
        </div>

        <div>
          <h2 className="text-center">Consumption</h2>
        </div>
      </main>









    </>
  )
}

export default App

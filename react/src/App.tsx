import './App.css'
import { ChaiCard } from './Components/ChaiCard.tsx'
import { Counter } from './Components/Counter.tsx'
import ChaiList from './Components/ChaiList.tsx';
import type {Chai} from "./types.ts";
import OrderForm from './Components/OrderForm.tsx';
import { Card } from './Components/Card.tsx';

const menu: Chai[] = [
  {id: 1, name: "Masala", price: 30},
  {id: 2, name: "Ginger", price: 50},
  {id: 3, name: "Lemon", price: 60},
]



function App() {
  return (
    <>
     <div>
      <h1>HI REACT</h1>
      <ChaiCard name="HeadPhones" price= {5000} />
      <ChaiCard  name="iPhone" price= {50000} />
     </div>
     <div>
      <Counter />
     </div>
     <div>
      <ChaiList  items={menu}
      />
     </div>
     <div>
      <OrderForm
      onSubmit={(order) => {
        console.log("Placed", order.name, order.cups)
      }}
      />
     </div>
     <div>
      <Card 
      title="Chai aur Typescript"
      footer= {<button>Order Now</button>}
      />
     </div>
    </>
  )
}

export default App
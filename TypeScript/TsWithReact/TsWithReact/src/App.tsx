import './App.css'
import { Card } from './components/Card.tsx'
import { Counter } from './components/Counter.tsx'

import type {Chai} from "./types/types.ts"
import ChaiList from './components/ChaiList.tsx'
import { OrderForm } from './components/OrderForm.tsx'
import { ReactOrNextCard } from './components/ReactOrNextCard.tsx'


const menu: Chai[] = [
  {id: 1, name: "Masala", price: 30},
  {id: 2, name: "Elaichi", price: 35},
  {id: 3, name: "Lemon", price: 10}
]

function App() {

  return (
    <>
      <section id="center">
        <div className="hero">
          Vite + React
        </div>
        <Card name="i phone 16" price={60000} isSpecial={true} />
        <Card name="i phone 17" price={70000} isSpecial={true} />

        <div>
          <Counter />
        </div>

        <br />
        
        <div>
          <ChaiList items={menu} />
        </div>

        <br />

        <div>
          <OrderForm onSubmit={(order)=>{ console.log("Placed :", order.name, order.cups )}} />
        </div>

        <br />

        <div>
          <ReactOrNextCard title='Title of the Card' footer={<button>Order Now</button>} />
        </div>
      </section>
    </>
  )
}

export default App

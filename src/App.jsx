import './App.css'
import Cart from './components/Cart.jsx'
import { data } from "./data/data.js"

export default function App() {


  return (
    <>
      <Cart data = { data } />
    </>
  )
}
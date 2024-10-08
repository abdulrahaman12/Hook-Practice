import { useState } from 'react'
import './App.css'
import Forms from './formmanagement/Forms'
import SubmitForm from './formmanagement/SubmitForm'
import Pagination from './pagination/Pagination'
import ShoppingList from './shoppinglist/ShoppingList'
import ReviewMain from './reviewfeature/Main/ReviewMain'
import Parent from './parenttochild/Parent'
import Child from './parenttochild/Child'
import WeatherApp from './weatherapp/WeatherApp'
import DigitalClock from './digitalclock/DigitalClock'
import SearchTable from './searchtable/SearchTable'



function App() {

  return (
    <>
      {/* <DigitalClock/> */}
      <SearchTable />
    </>
  )
}

export default App

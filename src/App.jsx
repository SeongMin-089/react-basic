import React from 'react'
import SquareCalc from './components/SquareCalc'
import SortableList from './components/SortableList'
import PeopleList from './components/PeopleList'
const App = () => {
  return (
    <div>
      <PeopleList/>
      <SortableList/>
      <SquareCalc/>
    </div>
  )
}

export default App
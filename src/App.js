import React, { useState } from "react";
import Card from './../src/components/Card/Card.jsx' 
import './App.css'
import Board from "./components/Board/Board.jsx";
function App() {
 const [page, setPage] = useState(0) 

function cardView(number=0) {
  setPage(number)
 
}
  return (
  <div className='App'>
    {page === 0?
    <>
     <div className='card1' onClick={() => cardView(1)} >Choose Cards</div>
     <div className='card2' onClick={() => cardView(2)} >Choose Board</div>
     </>
     : page === 1?
       <Card></Card>
     : <Board></Board>
  }
  </div>
  )
}

export default App;

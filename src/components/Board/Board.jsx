import React, { useState } from 'react';
import "./index.css"
const Board = () => {
    const [boards, setBoards] = useState([
    {id:1, title: 'TO DO', items: [{id: 1, title: "Go to the Shop"},{id: 2, title: "going in a bedroom"},{id: 3, title: "make a fun"}, ]},
    {id:2, title: 'DOING', items: [{id: 4, title: "cheating"},{id: 5, title: "walking in a park"},{id: 6, title: "eating ice cream"}, ]},
    {id:3, title: 'DONE', items: [{id: 7, title: "to sleep"},{id: 8, title: "watering flowers"},{id: 9, title: "gathering berries"}, ]}
])
const [currentBoard, setCurrentBoard] = useState(null)
const [currentCard, setCurrentCard] = useState(null)

function dragStartHandler(e, board, item) {
    setCurrentBoard(board)
    setCurrentCard(item)
    e.target.style.background = 'yellow'
  
  }
  function dragLeaveHandler(e) {
    e.target.style.background = 'white'
  }
  function dragEndHandler(e) {
    e.target.style.background = 'white'
  }
  function dragOverHandler(e) {
    e.preventDefault() 
    e.target.style.background = 'gray'
   
  }
  function dropHandler(e,board,item) {
    e.preventDefault() 
    console.log('currentCard', board.items.indexOf(currentCard));   
    e.target.style.background = 'lightgreen'  
   
   const currentIndex = currentBoard.items.indexOf(currentCard)  
   currentBoard.items.splice(currentIndex, 1)
   console.log('board',board);
   console.log('item',item);
   const dropIndex = board.items.indexOf(item)  
   board.items.splice(dropIndex+1, 0, currentCard)
   setBoards(boards.map(cards=>{
       if(cards.id ===board.id) {
           return board
       }
       if(cards.id === currentBoard.id){
           return currentBoard
       }
       return cards
   }
    
    ))
  }

function dropCardHandler(e,board){
    board.items.push(currentCard)
    const currentIndex = currentBoard.items.indexOf(currentCard)  
    currentBoard.items.splice(currentIndex, 1)
    setBoards(boards.map(cards=>{
        if(cards.id ===board.id) {
            return board
        }
        if(cards.id === currentBoard.id){
            return currentBoard
        }
        return cards
    }
     ))
}
    return (
        <div className='app'>
            {boards.map(board => 
                <div className="board"
                onDragOver={e => dragOverHandler(e)}
                onDrop={e => dropCardHandler(e,board)}
                >
                    <div className="board__title">{board.title}</div>
                    {board.items.map(item => 
                        <div 
                        onDragStart={e => dragStartHandler(e,board,item)}
                        onDragLeave={e => dragLeaveHandler(e)}
                        onDragEnd={e => dragEndHandler(e)}
                        onDragOver={e => dragOverHandler(e)}
                        onDrop={e => dropHandler(e,board,item)}
                        draggable={true}
                        className="item"
                        >{item.title}</div> )}
                </div>
                )}
        </div>
              
    );
};

export default Board;
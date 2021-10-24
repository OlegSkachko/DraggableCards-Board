import React, { useState } from 'react';
import './index.css'
const Card = () => {
    const [cardList, setCardList] = useState([
        {id: 1, order: 1, title: "CARD 1"},
        {id: 2, order: 2, title: "CARD 2"},
        {id: 3, order: 3, title: "CARD 3"},
        {id: 4, order: 4, title: "CARD 4"},
        {id: 5, order: 5, title: "CARD 5"},
    ])
    const [currentCard, setCurrenCard] = useState({})
  
    function dragStartHandler(e,card){
        console.log('карточка, которую взяли ',card)
        setCurrenCard(card)
        console.log(currentCard)
    }
    function dragLeaveHandler(e){
        e.target.style.background='white'
    }
    function dragEndHandler(e){
        
    }
    function dragOverHandler(e){
        e.preventDefault()
        e.target.style.background='gray'
    }
    function dropHandler(e, card) {
        e.preventDefault() 
  e.target.style.background = 'lightgreen'
  let elem = cardList.indexOf(card)
  let prevElem = cardList.indexOf(currentCard)
  console.log(cardList.indexOf(card))
  
  setCardList(cardList.map((c, index) =>{
    if(index === prevElem) {
     return card
    }
    if(index === elem) {
      return currentCard }
    return c
            }))
      }
    return (
        <div className='app'>
            {
                cardList.map(card =>
                    <div 
                    onDragStart={e => dragStartHandler(e,card)}
                    onDragLeave={e => dragLeaveHandler(e)}
                    onDragEnd={e => dragEndHandler(e)}
                    onDragOver={e => dragOverHandler(e)}
                    onDrop={e => dropHandler(e,card)}
                    draggable={true}
                    className="card">{card.title}</div>
                    )
            }
           
            
        </div>
    );
};

export default Card;
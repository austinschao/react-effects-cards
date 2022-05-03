import React, { useState, useEffect } from "react";
import axios from "axios";



/** Manage a deck of cards and draw one at a time
 *
 * state: useEffect(makes request to cards api) useState(each card that is drawn)
 *
 * Cards -> Card
 */
function CardGame() {
  const [card, setCard] = useState("");
  // {success: true, deck_id:, shuffled: true,, remaining: 52}
  const [deck, setDeck] = useState("");

  /** Getting a deck upon mounting */
  useEffect(function addDeck() {
    async function getDeck() {
      const deck = await axios.get("http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
      setDeck(deck.data);
    }
    getDeck()
  }, [])

  /** Drawing a card */
    async function drawCard() {
      const cardData = await axios.get(`http://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`)
      setCard(cardData.data)
  }
// 

function handleClick(evt){
    evt.preventDefault()
    if(card.remaining === 0){
      alert("Error: no cards remaining!")
      setCard("")
    } else{
      drawCard();
    }
  }

  if (deck.length === 0) return <p>Loading...</p>;

  return (
    <form>
      <div>
        {card && 
        card.cards[0].image }
      </div>
        <div className="mb-3 d-flex justify-content-between">
          <button className="btn-primary rig btn btn-sm CardGame-addBtn" onClick={handleClick}>
            Get Card!
          </button>
       </div>
    </form>
  );
}

export default CardGame;



/** Cards upon render, makes a request to API for a deck (useEffect)
 *  On click of a button, it will draw a card and display it
 */

/** Card receives data from API and renders card */
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import { createRenderer } from "react-dom/test-utils";
import "./CardGame.css";

const BASE_API_URL = "http://deckofcardsapi.com/api/deck/";

/** Manage a deck of cards and draw one at a time
 *
 * state: useEffect(makes request to cards api) useState(each card that is drawn)
 *
 * CardGame -> Card
 */
function CardGame() {
  // cards = [{cardData}, ...]
  const [cards, setCards] = useState([]);
  // {success: true, deck_id:, shuffled: true, remaining: 52}
  const [deck, setDeck] = useState(null);

  /** Getting a deck upon first rendering */
  useEffect(function addDeck() {
    async function getDeck() {
      const deck = await axios.get(`${BASE_API_URL}new/shuffle/?deck_count=1`);
      setDeck(deck.data);
    }
    getDeck();
  }, []);

  /** Drawing a card */
  async function drawCard() {
    const cardData = await axios.get(`${BASE_API_URL}${deck.deck_id}/draw/?count=1`);
    if (cardData.data.remaining === 0) {
      return alert("Error: no cards remaining!");
    }
    setCards(prevCards => [...prevCards, cardData.data]);
  }


  if (deck === null) return <p>Loading...</p>;

  return (
    <div>
      <div>
        {cards.length && cards.map(card => <Card card={card.cards[0]} key={card.cards[0].code} />)}
      </div>
      <div>
        <button className="card-game-btn" onClick={drawCard}>
          Get Card!
        </button>
      </div>
    </div>
  );
}

export default CardGame;
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
      const deck = axios.get("http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
      setDeck(deck.data);
    }
  })

  /** Drawing a card */
  useEffect(function drawCardOnChange() {
    async function drawCard() {

    }
  })
}





/** Cards upon render, makes a request to API for a deck (useEffect)
 *  On click of a button, it will draw a card and display it
 */

/** Card receives data from API and renders card */
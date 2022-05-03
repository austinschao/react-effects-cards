import "./Card.css"

/** Render a deck card
 *
 * props: [card, ...]
 *
 * CardGame -> Card
 */

function Card({ card }) {
  return (
    <div className="card">
      <img src={card.image} alt={card.code}/>
    </div>
  )
}

export default Card;
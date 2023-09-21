import { useState } from "react";

import "./Card.css";

export default function Card(probs) {

  const [isHovered, setIsHovered] = useState(false);

  function handleMouseOver() {
    setIsHovered(true);
  }

  function handleMouseOut() {
    setIsHovered(false);
  }

  return (
    <div className="card" 
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}>
      <div className="card__image"
        style={{ backgroundImage: `url(${probs.image})` }}>
      </div>
      {isHovered
        ? (<div className="card__title">
    
          <div className="card__button">
            <button>Shop Now</button>
          </div>
        </div>)
        : (<div className="card__title">
          {probs.title}
        </div>)
      }

    </div>
  );
}
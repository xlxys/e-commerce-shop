import { useState } from "react";

import "./Card.css";

interface CardProps {
  title: string;
  image: string;
}

export default function Card(props: CardProps) {

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
        style={{ backgroundImage: `url(${props.image})` }}>
      </div>
      {isHovered
        ? (<div className="card__title">
    
          <div className="card__button">
            <button>Shop Now</button>
          </div>
        </div>)
        : (<div className="card__title">
          {props.title}
        </div>)
      }

    </div>
  );
}

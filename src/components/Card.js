import React from 'react';
// import RatingStar from '../images/star.png';

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = 'sold out';
  } else if (props.location === 'Online') {
    badgeText = 'online';
  }
  return (
    <article className="card">
      <div className="card--photo">
        <img
          src={`./images/${props.coverImg}`}
          alt="card img"
          className="card--img"
        />
        {badgeText && <span className="card--available">{badgeText}</span>}
      </div>

      <div className="card--details">
        <div className="card--rating">
          <img
            src="./images/star.png"
            alt="rating"
            className="card--rating-star"
          />
          <div className="card--rating-number">
            <span>{props.stats.rating}</span> ({props.stats.reviewCount}) {props.location}
          </div>
        </div>
        <div className="card--info">{props.title}</div>
        <div className="card--price">
          <strong>From ${props.price}</strong> / person
        </div>
      </div>
    </article>
  );
}

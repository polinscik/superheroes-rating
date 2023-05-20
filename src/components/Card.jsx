import "../styles/card.css"

import blankStar from '../blank-star.svg';

function Card(props) {
  return (
    <div className="card">
      <h2 className="hero-name">{props.name}</h2>
      <div>Вселенная: {props.universe}</div>
      <div>Альтер-эго: {props.alterego}</div>
      <div>Род деятельности: {props.occupation}</div>
      <div>Друзья: {props.friends}</div>
      <div>Суперсила: {props.superpowers}</div>
      <img src={props.url} className="hero-img"></img>
      <button className="btn" id="btn${index}">
        Читать подробнее
      </button>
      <div className="rating" id="${index}">
        <img value="0" src={blankStar}></img>
        <img value="1" src={blankStar}></img>
        <img value="2" src={blankStar}></img>
        <img value="3" src={blankStar}></img>
        <img value="4" src={blankStar}></img>
      </div>
    </div>
  );
}

export default Card;
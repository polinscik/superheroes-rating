import "../styles/card.css"

import blankStar from '../blank-star.svg';

function Card({name, universe, alterego, occupation, friends, superpowers, url, index}) {
  return (
    <div className="card">
      <h2 className="hero-name">{name}</h2>
      <div>Вселенная: {universe}</div>
      <div>Альтер-эго: {alterego}</div>
      <div>Род деятельности: {occupation}</div>
      <div>Друзья: {friends}</div>
      <div>Суперсила: {superpowers}</div>
      <img src={url} className="hero-img"></img>
      <button className="btn" id={`btn${index}`}>
        Читать подробнее
      </button>
      <div className="rating" id={index}>
        <img value="0" src={blankStar} alt=''></img>
        <img value="1" src={blankStar} alt=''></img>
        <img value="2" src={blankStar} alt=''></img>
        <img value="3" src={blankStar} alt=''></img>
        <img value="4" src={blankStar} alt=''></img>
      </div>
    </div>
  );
}

export default Card;
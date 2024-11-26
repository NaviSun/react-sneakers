import React from "react"
import styles from './Card.module.scss'


function Card(props) {
  const [isAdded, setIsAdded] = React.useState(false)
  const [isFavorite, setIsFavorite] = React.useState(false)

  const handleOnPlus = () => {
    props.onClickPlusAddToCart()
    setIsAdded(!isAdded)
  }
  const handleOnFavorite = () => {
    props.onClickFavorite()
    setIsFavorite(!isFavorite)
  }

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img  onClick={handleOnFavorite} src={isFavorite ? "/img/heart1.svg" : "/img/heart0.svg" } alt="unliked" />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt={props.altImg} />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span>Цена:</span>
          <b>{props.price} руб</b>
        </div>
       
          <img onClick={handleOnPlus}  className={styles.plus} src={isAdded ? "/img/addcartactive.svg" : "/img/cardplus.svg" } alt="Добавить" />
        
      </div>
    </div>
  );
}

export default Card;

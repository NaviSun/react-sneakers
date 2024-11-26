function Drawer({onClickCart, items = [], onRemove}) {
  return (<div className="overlay">
    <div className="drawer">
      <h2 className="mb-30">
        Корзина{" "}
        <img onClick={onClickCart} className="removeBtn" src="/img/btn-remove.svg" alt="remove" />
      </h2>
      <div className="items">

        {
              items.map((item) => (
                <>
                  <div className="cartItem d-flex align-center mb-20">
                    <div
                      style={{ backgroundImage: `url(${item.imageUrl})` }}
                      className="cartItemImg"
                    ></div>
                    <div className="mr-20 flex">
                      <p className="mb-5">{item.title}</p>
                      <b>{item.price} руб.</b>
                    </div>
                    <img onClick={() => onRemove(item.id)} className="removeBtn" src="/img/btn-remove.svg" alt="remove" />
                </div>
                </>  ))
        }
     
      </div>
      <div className="cartTotalBlock">
        <ul>
          <li>
            <span>Итого:</span>
            <div></div>
            <b>21 498 руб.</b>
          </li>
          <li>
            <span>Налог 5%:</span>
            <div></div>
            <b>1074 руб.</b>
          </li>
        </ul>
        <button className="greenButton">
          Оформить заказ <img src="/img/arrow.svg" alt="arrow" />
        </button>
      </div>
    </div>
  </div>);
}

export default Drawer
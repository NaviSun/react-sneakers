import { Link } from "react-router-dom";
function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to={'/'}>
      <div className="d-flex align-center">
        
        <img width={40} height={40} src="/img/logo.png" alt="Лого" />
        
        <div className="headerInfo">
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">Магазин лучших кросовок</p>
        </div>
      </div>
      </Link>
      <div>
        <ul className="d-flex">
          <li onClick={props.onClickCart} className="mr-30 cu-p">
            <img  width={18} height={18} src="/img/cart.svg" alt="Корзина" />

            <span>1205 руб.</span>
          </li>
         <Link to={'/favorite'}> <li className="mr-30 cu-p">
            <img width={18} height={18} src="/img/favorite.svg" alt="Закладки" />

            <span>Закладки</span>
          </li>
          </Link>
          <li className="mr-30  cu-p">
            <img width={18} height={18} src="/img/user.svg" alt="Пользователь" />
            <span>Пользователь</span>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;

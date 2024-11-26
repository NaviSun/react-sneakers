import React from "react";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";

//https://www.figma.com/design/fw0toTyXMwM1y4WIe0YFrJ/React-Sneakers?node-id=60-2&node-type=frame&t=ESHPLIFYBk1TLv40-0

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);


 
  React.useEffect(() => {


    const arr = [
      {
        "title": "Мужские Кроссовки Nike ",
        "price": "12 999",
        "imageUrl": "/img/sneakers/image1.jpg",
        "altImg": "Кроссовки1",
        "key": 1
      },
      {
        "title": "Мужские Кроссовки Adidas Blazer Mid Suede",
        "price": "15 999",
        "imageUrl": "/img/sneakers/image2.jpg",
        "alt": "Кроссовки2",
        "key": 2
      },
    ]


    axios
      .get("https://6743461eb7464b1c2a643b91.mockapi.io/api/items")
      .then((res) => {
        setItems(res.data);
      })
      .catch((error) => {
        // обработка ошибки
        console.log(error);
      });

    axios
      .get("https://6743461eb7464b1c2a643b91.mockapi.io/api/cart")
      .then((res) => {
        setCartItems(res.data);
      })
      .catch((error) => {
        // обработка ошибки
        console.log(error);
      });

      onAddToFavorite(arr[0])

      
  }, []);

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onAddToCart = (obj) => {
    //Сделать проверку на наличие объектов в массиве
    axios.post("https://6743461eb7464b1c2a643b91.mockapi.io/api/cart", obj);

    setCartItems((prev) => [...prev, obj]);
  };

  const onAddToFavorite = (obj) => {
    //Сделать проверку на наличие объектов в массиве

    setFavorites((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    axios.delete(`https://6743461eb7464b1c2a643b91.mockapi.io/api/cart/${id}`);
  };
 
  return (


    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClickCart={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <Routes>
        <Route
          path="*"
          element={
            <Home
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
            />
          }
        />
        <Route 
        path="/favorite"
        element={
        <Favorite 
        items={favorites}
        />
      } 
        />
      </Routes>
    </div>
  );
}

export default App;

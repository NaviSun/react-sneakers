import Card from "../components/Card";
import React from "react";


export default function Home({
    items,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddToCart }) {


    return (
        <div className="content p-40">
            <div className="d-flex align-center mb-40 justify-between">
                <h1 className="">
                    {searchValue
                        ? `Поиск по запросу: "${searchValue}"`
                        : "Все кроссовки"}
                </h1>
                <div className="search d-flex">
                    <img src="/img/search.svg" alt="Search" />
                    {searchValue && (
                        <img
                            onClick={() => setSearchValue("")}
                            className="clearinp removeBtn"
                            src="/img/btn-remove.svg"
                            alt="clear"
                        />
                    )}
                    <input
                        onChange={onChangeSearchInput}
                        value={searchValue}
                        type="text"
                        placeholder="Поиск ...."
                    />
                </div>
            </div>
            <div className="d-flex flex-wrap">
                {items
                    .filter((item) =>
                        item.title.toLowerCase().includes(searchValue.toLowerCase())
                    )
                    .map((item, index) => (
                        <Card
                            key={index}
                            title={item.title}
                            price={item.price}
                            imageUrl={item.imageUrl}
                            altImg={item.altImg}
                            onClickFavorite={() => onAddToFavorite(item)}
                            onClickPlusAddToCart={() => onAddToCart(item)}
                        />
                    ))}
            </div>
        </div>
    )
}
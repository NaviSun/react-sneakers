import Card from "../components/Card"

function Favorite({items}) {
console.log(items);
    return (
        <div className="content p-40">
            <div className="d-flex align-center mb-40 justify-between">
                <h1 className="">
                    Мои Закладки
                </h1>

            </div>
            <div className="d-flex flex-wrap">
                {items.length > 0 ? items.map((item) => (
                    <Card title={item.title}
                        price={item.price}
                        imageUrl={item.imageUrl}
                        altImg={item.altImg}
                        
                        // onClickFavorite={() => onAddToFavorite(item)}
                        // onClickPlusAddToCart={() => onAddToCart(item)} 
                        />
                )) : 'Нет закладок'}
            </div>
        </div>
    )
}

export default Favorite
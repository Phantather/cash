import React from 'react';

const Card = () => {
    return (
        <div className="products__card">
            <img src="https://neal.fun/spend/images/big-mac.jpg" alt="" className="products__card-img"/>
            <h3 className="products__card-title">Big Mac</h3>
            <p className="products__card-price">$2</p>
            <div className="products__card-bottom">
                <button className="btn products__card-sale">
                    Продавать
                </button>
                <input type="number" className="products__card-input"
                       placeholder={"0"}
                />
                <button className="btn products__card-buy">
                    Купить
                </button>
            </div>
        </div>
    );
};

export default Card;
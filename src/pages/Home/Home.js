import React from 'react';
import Hero from "./Hero/Hero";
import Money from "./Money/Money";
import Products from "./Products/Products";

const Home = () => {
    return (
        <main>
            <Hero/>
            <Money/>
            <Products/>
        </main>
    );
};

export default Home;
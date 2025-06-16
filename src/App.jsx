import React from "react";
import Fashion1 from "/Baby Wear Product 1.png";
import Fashion2 from "/Baby Wear Product 2.png";
import Fashion3 from "/Baby Wear Product 3.png";
import Fashion4 from "/Baby Wear Product 4.png";
import Fashion5 from "/Baby Wear Product 5.png";
import Fashion6 from "/Baby Wear Product 6.png";

import Skin1 from "/Daily Skin Care Product 1.png";
import Skin2 from "/Daily Skin Care Product 2.png";
import Skin3 from "/Daily Skin Care Product 3.png";
import Skin4 from "/Daily Skin Care Product 4.png";
import Skin5 from "/Daily Skin Care Product 5.png";
import Skin6 from "/Daily Skin Care Product 6.png";

import Oral1 from "/Oral Care Product 1.png";
import Oral2 from "/Oral Care Product 2.png";
import Oral3 from "/Oral Care Product 3.png";
import Oral4 from "/Oral Care Product 4.png";
import Oral5 from "/Oral Care Product 5.png";
import Oral6 from "/Oral Care Product 6.png";

import Footwear1 from "/Baby Feet Product 1.png";
import Footwear2 from "/Baby Feet Product 2.png";
import Footwear3 from "/Baby Feet Product 3.png";
import Footwear4 from "/Baby Feet Product 4.png";

import Feeding1 from "/Baby Feeding Product 1.png";
import Feeding2 from "/Baby Feeding Product 2.png";
import Feeding3 from "/Baby Feeding Product 3.png";
import Feeding4 from "/Baby Feeding Product 4.png";

import Toy1 from "/Baby Toy Product 1.png";
import Toy2 from "/Baby Toy Product 2.png";
import Toy3 from "/Baby Toy Product 3.png";
import Toy4 from "/Baby Toy Product 4.png";
import Toy5 from "/Baby Toy Product 5.png";
import Toy6 from "/Baby Toy Product 6.png";


const App = () => {
  const fashionProducts = [
    {
      image: Fashion1,
      name: "Winter Essentials",
      description: "New Arrivals For Winter | Up To 24M",
    },
    {
      image: Fashion2,
      name: "Party Wear",
      description: "New Arrivals For Parties | Up To 24M",
    },
    {
      image: Fashion3,
      name: "Indian Looks",
      description: "New Arrivals for Festivles | 4 - 12 yrs",
    },
    {
      image: Fashion4,
      name: "Premium Wears For Her",
      description: "New Arrivals For Girls | 4 - 12 yrs",
    },
    {
      image: Fashion5,
      name: "Full Sleeves Style",
      description: "New Arrivals, Stylish all day | 4 - 12 yrs",
    },
    {
      image: Fashion6,
      name: "Wedding Wears",
      description: "New Arrivals For Weddings | 2 - 4 yrs",
    },
  ];
  const skinCareProducts = [Skin1, Skin2, Skin3, Skin4, Skin5, Skin6];
  const oralCareProducts = [Oral1, Oral2, Oral3, Oral4, Oral5, Oral6];
  const footwearProducts = [Footwear1, Footwear2, Footwear3, Footwear4];
  const feedingProducts = [
    {
      image: Feeding1,
      name: "Feeding Pillow",
    },
    {
      image: Feeding2,
      name: "Feeding Bottle",
    },
    {
      image: Feeding3,
      name: "Breast Pump",
    },
    {
      image: Feeding4,
      name: "Fedding Teats",
    },
  ];
  const toyProducts = [Toy1, Toy2, Toy3, Toy4, Toy5, Toy6];

  return (
    <main>
      <section className="landing_page" id="landing_page"></section>
      <section className="fashion" id="fashion">
        <h1 className="section-heading">New Arrivals</h1>
        <div className="fashion-products">
          {fashionProducts.map((product, index) => (
            <div className="fashion-product" key={index}>
              <img src={product.image} alt={product.name} />
              <div className="fashion-product-details">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="skin-care" id="skincare">
        <h1 className="section-heading">
          Daily Skin Care Products And Accessories
        </h1>
        <div className="skin-care-products">
          {skinCareProducts.map((product, index) => (
            <div className="skin-care-product" key={index}>
              <img src={product} alt={`Skin Care Product ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>
      <section className="oral-care" id="oralcare">
        <h1 className="section-heading">
          Baby Oral Care And Grooming Products
        </h1>
        <div className="oral-care-products">
          {oralCareProducts.map((product, index) => (
            <div className="oral-care-product" key={index}>
              <img src={product} alt={`Oral Care Product ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>
      <section className="footwear" id="footwear">
        <h1 className="section-heading">Baby Footwear And Accessories</h1>
        <div className="footwear-content">
          <h3>Happy Soles</h3>
          <p>Made for all your moves</p>
        </div>
        <div className="footwear-products">
          {footwearProducts.map((product, index) => (
            <div className="footwear-product" key={index}>
              <img src={product} alt={`Footwear Product ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>
      <section className="feeding" id="feeding">
        <h1 className="section-heading">Baby Feeding And Nursing Products</h1>
        <div className="feeding-products">
          {feedingProducts.map((product, index) => (
            <div className="feeding-product" key={index}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
            </div>
          ))}
        </div>
      </section>
      <section className="toys" id="toys">
        <h1 className="section-heading">Baby Toys And Play Products</h1>
        <div className="toy-products">
          {toyProducts.map((product, index) => (
            <div className="toy-product" key={index}>
              <img src={product} alt={product.name} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default App;

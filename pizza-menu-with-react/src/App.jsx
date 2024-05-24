import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <div className="pizzas">
        {pizzaData.map((pizza) => (
          // eslint-disable-next-line react/jsx-key
          <Pizza
            pizzaImage={pizza.photoName}
            title={pizza.name}
            param={pizza.ingredients}
            price={pizza.price}
            soldout={pizza.soldOut}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function Pizza({ pizzaImage, title, param, price, soldout }) {
  return (
    <li className={`pizza ${soldout ? "sold-out" : ""}`}>
      <img src={pizzaImage} alt="pizza-image" />
      <div>
        <h3>{title}</h3>
        <p>{param}</p>
        <span>{price}</span>
      </div>
    </li>
  );
}

function Header() {
  return (
    <div className="header">
      <h1>React Pizza CO.</h1>
    </div>
  );
}

function Footer() {
  // const currentHours = new Date().getHours;
  const openHour = 12;
  const closeHour = 22;
  const message = `We're open from ${openHour}:00 to ${closeHour}:00. Come visit us or order online.`;
  // const isOpen = openHour >= currentHours && closeHour <= currentHours;
  return (
    <div className="footer">
      <div className="order">
        <p>{message}</p>
        <button className="btn">Order</button>
      </div>
    </div>
  );
}

function Menu() {
  return (
    <div className="menu">
      <h2>our menu</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum et illum
        voluptatem iusto, placeat illo quaerat iste molestiae, consequatur
        debitis, atque delectus aliquam aspernatur dignissimos fugiat ullam.
        Fuga, nam optio!
      </p>
    </div>
  );
}

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "/public/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "/public/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "/public/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "/public/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "/public/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "/public/prosciutto.jpg",
    soldOut: false,
  },
];

export default App;

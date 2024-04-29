import { useContext, useState } from "react";
import "./home.scss";
import { useNavigate } from "react-router-dom";
import CartContext from "../../CartContext";
import { useDispatch } from "react-redux";
import { addToCart } from "../../app-redux/cart/cartSlice";

const Home = () => {
  const navigate = useNavigate();
  // const { addToCart } = useContext(CartContext);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = ["/explore.png", "/explore2.png", "/living.png"];

  const handleClick = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };
  const dispatch = useDispatch();

  const handleNavigate = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  // const handleNavigate = (product) => {
  //   addToCart(product);
  //   navigate("/cart");
  // };

  const renderBadge = () => {
    return <div className="badge">-50%</div>;
  };

  const greenBadge = () => {
    return <div className="greenbadge">New</div>;
  };

  const product = [
    {
      id: 1,
      name: "Syltherine",
      description: "Asgaard Family Sofa ",
      price: "Rs 2,500.000",
      image: "/product4.png",
      quantity: 1,
    },
    {
      id: 2,
      name: "Leviosata",
      description: "Stylish Cafe Chair",
      price: "Rs 500,000.0",
      image: "/product2.png",
      quantity: 1,
    },
    {
      id: 3,
      name: "Lolitogam",
      description: "Luxuary Big Sofa",
      price: "Rs 1,500.000",
      image: "/product3.png",
      quantity: 1,
    },
    {
      id: 4,
      name: "Stylishtom",
      description: "Comfortable Sofa",
      price: "Rs 100,000.0",
      image: "/product4.png",
      quantity: 1,
    },
  ];

  return (
    <div className="home">
      <img src="/background.png" alt="" width={1583} height={652} />
      <div className="overlay">
        <div className="title">New Arrival</div>
        <div className="heading">Discover Our</div>
        <div className="heading1">New Collection</div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
          tempora nam cum ab est non?
        </p>
        <button>BUY NOW</button>
      </div>
      <div className="Imgcontainer">
        <div className="title1">
          Browse The Range
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="images">
          <div className="image-container">
            <img src="/dining.png" alt="" />
            <div className="paragraph">
              <p className="p1">Dining</p>
            </div>
          </div>
          <div className="image-container">
            <img src="/living.png" alt="" />
            <div className="paragraph">
              <p className="p2">Living</p>
            </div>
          </div>
          <div className="image-container">
            <img src="/bedroom.png" alt="" />
            <div className="paragraph">
              <p className="p3">Bedroom</p>
            </div>
          </div>
        </div>
      </div>
      <div className="productcontainer">
        <div className="title2">Our Products</div>
        <div className="cards">
          {product.map((product) => (
            <div className="card" key={product.id}>
              <div className="">{renderBadge()}</div>
              <div className="overlay1">
                <button
                  className="add-to-cart"
                  onClick={() => handleNavigate(product)}
                >
                  Add to Cart
                </button>
                <div className="icons">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 10.6667C11.4747 10.6667 11 10.8734 10.644 11.2047L5.94 8.46671C5.97333 8.31337 6 8.16004 6 8.00004C6 7.84004 5.97333 7.68671 5.94 7.53337L10.64 4.79337C11 5.12671 11.4733 5.33337 12 5.33337C13.1067 5.33337 14 4.44004 14 3.33337C14 2.22671 13.1067 1.33337 12 1.33337C10.8933 1.33337 10 2.22671 10 3.33337C10 3.49337 10.0267 3.64671 10.06 3.80004L5.36 6.54004C5 6.20671 4.52667 6.00004 4 6.00004C2.89333 6.00004 2 6.89337 2 8.00004C2 9.10671 2.89333 10 4 10C4.52667 10 5 9.79337 5.36 9.46004L10.0587 12.2054C10.0211 12.3563 10.0014 12.5112 10 12.6667C10 13.0623 10.1173 13.4489 10.3371 13.7778C10.5568 14.1067 10.8692 14.3631 11.2346 14.5145C11.6001 14.6658 12.0022 14.7054 12.3902 14.6283C12.7781 14.5511 13.1345 14.3606 13.4142 14.0809C13.6939 13.8012 13.8844 13.4448 13.9616 13.0569C14.0387 12.6689 13.9991 12.2668 13.8478 11.9013C13.6964 11.5359 13.44 11.2235 13.1111 11.0038C12.7822 10.784 12.3956 10.6667 12 10.6667Z"
                      fill="white"
                    />
                  </svg>
                  <span>Share</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.08004 6L10.08 7L13.52 3.55L10 0L9.00004 1L10.8 2.8H1.00004V4.2H10.82L9.08004 6ZM4.86004 8L3.86004 7L0.420044 10.5L3.91004 14L4.91004 13L3.10004 11.2H13V9.8H3.10004L4.86004 8Z"
                      fill="white"
                    />
                  </svg>
                  <span>Compare</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.99973 14.0361C-5.33333 6.66669 3.99999 -1.33331 7.99973 3.72539C12 -1.33331 21.3333 6.66669 7.99973 14.0361Z"
                      stroke="white"
                      stroke-width="1.8"
                    />
                  </svg>
                  <span>Like</span>
                </div>
              </div>
              <div className="image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="info">
                <p>{product.name}</p>
                <p className="span">{product.description}</p>
                <p className="price">{product.price}</p>
              </div>
            </div>
          ))}
          {/* <div className="card">
            <div className="">{greenBadge()}</div>
            <div className="overlay1">
              <button className="add-to-cart"onClick={handleNavigate}>Add to Cart</button>
              <div className="icons">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 10.6667C11.4747 10.6667 11 10.8734 10.644 11.2047L5.94 8.46671C5.97333 8.31337 6 8.16004 6 8.00004C6 7.84004 5.97333 7.68671 5.94 7.53337L10.64 4.79337C11 5.12671 11.4733 5.33337 12 5.33337C13.1067 5.33337 14 4.44004 14 3.33337C14 2.22671 13.1067 1.33337 12 1.33337C10.8933 1.33337 10 2.22671 10 3.33337C10 3.49337 10.0267 3.64671 10.06 3.80004L5.36 6.54004C5 6.20671 4.52667 6.00004 4 6.00004C2.89333 6.00004 2 6.89337 2 8.00004C2 9.10671 2.89333 10 4 10C4.52667 10 5 9.79337 5.36 9.46004L10.0587 12.2054C10.0211 12.3563 10.0014 12.5112 10 12.6667C10 13.0623 10.1173 13.4489 10.3371 13.7778C10.5568 14.1067 10.8692 14.3631 11.2346 14.5145C11.6001 14.6658 12.0022 14.7054 12.3902 14.6283C12.7781 14.5511 13.1345 14.3606 13.4142 14.0809C13.6939 13.8012 13.8844 13.4448 13.9616 13.0569C14.0387 12.6689 13.9991 12.2668 13.8478 11.9013C13.6964 11.5359 13.44 11.2235 13.1111 11.0038C12.7822 10.784 12.3956 10.6667 12 10.6667Z"
                    fill="white"
                  />
                </svg>
                <span>Share</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.08004 6L10.08 7L13.52 3.55L10 0L9.00004 1L10.8 2.8H1.00004V4.2H10.82L9.08004 6ZM4.86004 8L3.86004 7L0.420044 10.5L3.91004 14L4.91004 13L3.10004 11.2H13V9.8H3.10004L4.86004 8Z"
                    fill="white"
                  />
                </svg>
                <span>Compare</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.99973 14.0361C-5.33333 6.66669 3.99999 -1.33331 7.99973 3.72539C12 -1.33331 21.3333 6.66669 7.99973 14.0361Z"
                    stroke="white"
                    stroke-width="1.8"
                  />
                </svg>
                <span>Like</span>
              </div>
            </div>
            <div className="image">
              <img src="/product2.png" alt="Product 2" />
            </div>
            <div className="info">
              <p>Leviosata</p>
              <p className="span">Stylish Cafe Chair</p>
              <p className="price">Rp 2,500.000</p>
            </div>
          </div>
          <div className="card">
            <div className="">{greenBadge()}</div>
            <div className="overlay1">
              <button className="add-to-cart"onClick={handleNavigate}>Add to Cart</button>
              <div className="icons">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 10.6667C11.4747 10.6667 11 10.8734 10.644 11.2047L5.94 8.46671C5.97333 8.31337 6 8.16004 6 8.00004C6 7.84004 5.97333 7.68671 5.94 7.53337L10.64 4.79337C11 5.12671 11.4733 5.33337 12 5.33337C13.1067 5.33337 14 4.44004 14 3.33337C14 2.22671 13.1067 1.33337 12 1.33337C10.8933 1.33337 10 2.22671 10 3.33337C10 3.49337 10.0267 3.64671 10.06 3.80004L5.36 6.54004C5 6.20671 4.52667 6.00004 4 6.00004C2.89333 6.00004 2 6.89337 2 8.00004C2 9.10671 2.89333 10 4 10C4.52667 10 5 9.79337 5.36 9.46004L10.0587 12.2054C10.0211 12.3563 10.0014 12.5112 10 12.6667C10 13.0623 10.1173 13.4489 10.3371 13.7778C10.5568 14.1067 10.8692 14.3631 11.2346 14.5145C11.6001 14.6658 12.0022 14.7054 12.3902 14.6283C12.7781 14.5511 13.1345 14.3606 13.4142 14.0809C13.6939 13.8012 13.8844 13.4448 13.9616 13.0569C14.0387 12.6689 13.9991 12.2668 13.8478 11.9013C13.6964 11.5359 13.44 11.2235 13.1111 11.0038C12.7822 10.784 12.3956 10.6667 12 10.6667Z"
                    fill="white"
                  />
                </svg>
                <span>Share</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.08004 6L10.08 7L13.52 3.55L10 0L9.00004 1L10.8 2.8H1.00004V4.2H10.82L9.08004 6ZM4.86004 8L3.86004 7L0.420044 10.5L3.91004 14L4.91004 13L3.10004 11.2H13V9.8H3.10004L4.86004 8Z"
                    fill="white"
                  />
                </svg>
                <span>Compare</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.99973 14.0361C-5.33333 6.66669 3.99999 -1.33331 7.99973 3.72539C12 -1.33331 21.3333 6.66669 7.99973 14.0361Z"
                    stroke="white"
                    stroke-width="1.8"
                  />
                </svg>
                <span>Like</span>
              </div>
            </div>
            <div className="image">
              <img src="/product3.png" alt="Product 2" />
            </div>
            <div className="info">
              <p>Lolitogam</p>
              <p className="span"> Luxuary Big Sofa</p>
              <p className="price">Rp 2,500.000</p>
            </div>
          </div>
          <div className="card">
            <div className="">{renderBadge()}</div>
            <div className="overlay1">
              <button className="add-to-cart"onClick={handleNavigate}>Add to Cart</button>
              <div className="icons">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 10.6667C11.4747 10.6667 11 10.8734 10.644 11.2047L5.94 8.46671C5.97333 8.31337 6 8.16004 6 8.00004C6 7.84004 5.97333 7.68671 5.94 7.53337L10.64 4.79337C11 5.12671 11.4733 5.33337 12 5.33337C13.1067 5.33337 14 4.44004 14 3.33337C14 2.22671 13.1067 1.33337 12 1.33337C10.8933 1.33337 10 2.22671 10 3.33337C10 3.49337 10.0267 3.64671 10.06 3.80004L5.36 6.54004C5 6.20671 4.52667 6.00004 4 6.00004C2.89333 6.00004 2 6.89337 2 8.00004C2 9.10671 2.89333 10 4 10C4.52667 10 5 9.79337 5.36 9.46004L10.0587 12.2054C10.0211 12.3563 10.0014 12.5112 10 12.6667C10 13.0623 10.1173 13.4489 10.3371 13.7778C10.5568 14.1067 10.8692 14.3631 11.2346 14.5145C11.6001 14.6658 12.0022 14.7054 12.3902 14.6283C12.7781 14.5511 13.1345 14.3606 13.4142 14.0809C13.6939 13.8012 13.8844 13.4448 13.9616 13.0569C14.0387 12.6689 13.9991 12.2668 13.8478 11.9013C13.6964 11.5359 13.44 11.2235 13.1111 11.0038C12.7822 10.784 12.3956 10.6667 12 10.6667Z"
                    fill="white"
                  />
                </svg>
                <span>Share</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.08004 6L10.08 7L13.52 3.55L10 0L9.00004 1L10.8 2.8H1.00004V4.2H10.82L9.08004 6ZM4.86004 8L3.86004 7L0.420044 10.5L3.91004 14L4.91004 13L3.10004 11.2H13V9.8H3.10004L4.86004 8Z"
                    fill="white"
                  />
                </svg>
                <span>Compare</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.99973 14.0361C-5.33333 6.66669 3.99999 -1.33331 7.99973 3.72539C12 -1.33331 21.3333 6.66669 7.99973 14.0361Z"
                    stroke="white"
                    stroke-width="1.8"
                  />
                </svg>
                <span>Like</span>
              </div>
            </div>
            <div className="image">
              <img src="/product4.png" alt="Product 2" />
            </div>
            <div className="info">
              <p>Stylishtom</p>
              <p className="span">Stylish Cafe Chair</p>
              <p className="price">Rp 2,500.000</p>
            </div>
          </div> */}
        </div>
        {/* <div className="cards">
          <div className="card">
            <div className="">{renderBadge()}</div>
            <div className="overlay1">
              <button className="add-to-cart" onClick={handleNavigate}>Add to Cart</button>
              <div className="icons">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 10.6667C11.4747 10.6667 11 10.8734 10.644 11.2047L5.94 8.46671C5.97333 8.31337 6 8.16004 6 8.00004C6 7.84004 5.97333 7.68671 5.94 7.53337L10.64 4.79337C11 5.12671 11.4733 5.33337 12 5.33337C13.1067 5.33337 14 4.44004 14 3.33337C14 2.22671 13.1067 1.33337 12 1.33337C10.8933 1.33337 10 2.22671 10 3.33337C10 3.49337 10.0267 3.64671 10.06 3.80004L5.36 6.54004C5 6.20671 4.52667 6.00004 4 6.00004C2.89333 6.00004 2 6.89337 2 8.00004C2 9.10671 2.89333 10 4 10C4.52667 10 5 9.79337 5.36 9.46004L10.0587 12.2054C10.0211 12.3563 10.0014 12.5112 10 12.6667C10 13.0623 10.1173 13.4489 10.3371 13.7778C10.5568 14.1067 10.8692 14.3631 11.2346 14.5145C11.6001 14.6658 12.0022 14.7054 12.3902 14.6283C12.7781 14.5511 13.1345 14.3606 13.4142 14.0809C13.6939 13.8012 13.8844 13.4448 13.9616 13.0569C14.0387 12.6689 13.9991 12.2668 13.8478 11.9013C13.6964 11.5359 13.44 11.2235 13.1111 11.0038C12.7822 10.784 12.3956 10.6667 12 10.6667Z"
                    fill="white"
                  />
                </svg>
                <span>Share</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.08004 6L10.08 7L13.52 3.55L10 0L9.00004 1L10.8 2.8H1.00004V4.2H10.82L9.08004 6ZM4.86004 8L3.86004 7L0.420044 10.5L3.91004 14L4.91004 13L3.10004 11.2H13V9.8H3.10004L4.86004 8Z"
                    fill="white"
                  />
                </svg>
                <span>Compare</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.99973 14.0361C-5.33333 6.66669 3.99999 -1.33331 7.99973 3.72539C12 -1.33331 21.3333 6.66669 7.99973 14.0361Z"
                    stroke="white"
                    stroke-width="1.8"
                  />
                </svg>
                <span>Like</span>
              </div>
            </div>
            <div className="image">
              <img src="/product 1.png" alt="Product 1" />
            </div>
            <div className="info">
              <p>Syltherine</p>
              <p className="span">Stylish Cafe Chair</p>
              <p className="price">Rp 2,500.000</p>
            </div>
          </div>
          <div className="card">
            <div className="">{greenBadge()}</div>
            <div className="overlay1">
              <button className="add-to-cart" onClick={handleNavigate}>Add to Cart</button>
              <div className="icons">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 10.6667C11.4747 10.6667 11 10.8734 10.644 11.2047L5.94 8.46671C5.97333 8.31337 6 8.16004 6 8.00004C6 7.84004 5.97333 7.68671 5.94 7.53337L10.64 4.79337C11 5.12671 11.4733 5.33337 12 5.33337C13.1067 5.33337 14 4.44004 14 3.33337C14 2.22671 13.1067 1.33337 12 1.33337C10.8933 1.33337 10 2.22671 10 3.33337C10 3.49337 10.0267 3.64671 10.06 3.80004L5.36 6.54004C5 6.20671 4.52667 6.00004 4 6.00004C2.89333 6.00004 2 6.89337 2 8.00004C2 9.10671 2.89333 10 4 10C4.52667 10 5 9.79337 5.36 9.46004L10.0587 12.2054C10.0211 12.3563 10.0014 12.5112 10 12.6667C10 13.0623 10.1173 13.4489 10.3371 13.7778C10.5568 14.1067 10.8692 14.3631 11.2346 14.5145C11.6001 14.6658 12.0022 14.7054 12.3902 14.6283C12.7781 14.5511 13.1345 14.3606 13.4142 14.0809C13.6939 13.8012 13.8844 13.4448 13.9616 13.0569C14.0387 12.6689 13.9991 12.2668 13.8478 11.9013C13.6964 11.5359 13.44 11.2235 13.1111 11.0038C12.7822 10.784 12.3956 10.6667 12 10.6667Z"
                    fill="white"
                  />
                </svg>
                <span>Share</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.08004 6L10.08 7L13.52 3.55L10 0L9.00004 1L10.8 2.8H1.00004V4.2H10.82L9.08004 6ZM4.86004 8L3.86004 7L0.420044 10.5L3.91004 14L4.91004 13L3.10004 11.2H13V9.8H3.10004L4.86004 8Z"
                    fill="white"
                  />
                </svg>
                <span>Compare</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.99973 14.0361C-5.33333 6.66669 3.99999 -1.33331 7.99973 3.72539C12 -1.33331 21.3333 6.66669 7.99973 14.0361Z"
                    stroke="white"
                    stroke-width="1.8"
                  />
                </svg>
                <span>Like</span>
              </div>
            </div>
            <div className="image">
              <img src="/product2.png" alt="Product 2" />
            </div>
            <div className="info">
              <p>Leviosata</p>
              <p className="span">Stylish Cafe Chair</p>
              <p className="price">Rp 2,500.000</p>
            </div>
          </div>
          <div className="card">
            <div className="">{greenBadge()}</div>
            <div className="overlay1">
              <button className="add-to-cart"onClick={handleNavigate}>Add to Cart</button>
              <div className="icons">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 10.6667C11.4747 10.6667 11 10.8734 10.644 11.2047L5.94 8.46671C5.97333 8.31337 6 8.16004 6 8.00004C6 7.84004 5.97333 7.68671 5.94 7.53337L10.64 4.79337C11 5.12671 11.4733 5.33337 12 5.33337C13.1067 5.33337 14 4.44004 14 3.33337C14 2.22671 13.1067 1.33337 12 1.33337C10.8933 1.33337 10 2.22671 10 3.33337C10 3.49337 10.0267 3.64671 10.06 3.80004L5.36 6.54004C5 6.20671 4.52667 6.00004 4 6.00004C2.89333 6.00004 2 6.89337 2 8.00004C2 9.10671 2.89333 10 4 10C4.52667 10 5 9.79337 5.36 9.46004L10.0587 12.2054C10.0211 12.3563 10.0014 12.5112 10 12.6667C10 13.0623 10.1173 13.4489 10.3371 13.7778C10.5568 14.1067 10.8692 14.3631 11.2346 14.5145C11.6001 14.6658 12.0022 14.7054 12.3902 14.6283C12.7781 14.5511 13.1345 14.3606 13.4142 14.0809C13.6939 13.8012 13.8844 13.4448 13.9616 13.0569C14.0387 12.6689 13.9991 12.2668 13.8478 11.9013C13.6964 11.5359 13.44 11.2235 13.1111 11.0038C12.7822 10.784 12.3956 10.6667 12 10.6667Z"
                    fill="white"
                  />
                </svg>
                <span>Share</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.08004 6L10.08 7L13.52 3.55L10 0L9.00004 1L10.8 2.8H1.00004V4.2H10.82L9.08004 6ZM4.86004 8L3.86004 7L0.420044 10.5L3.91004 14L4.91004 13L3.10004 11.2H13V9.8H3.10004L4.86004 8Z"
                    fill="white"
                  />
                </svg>
                <span>Compare</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.99973 14.0361C-5.33333 6.66669 3.99999 -1.33331 7.99973 3.72539C12 -1.33331 21.3333 6.66669 7.99973 14.0361Z"
                    stroke="white"
                    stroke-width="1.8"
                  />
                </svg>
                <span>Like</span>
              </div>
            </div>
            <div className="image">
              <img src="/product3.png" alt="Product 2" />
            </div>
            <div className="info">
              <p>Lolitogam</p>
              <p className="span"> Luxuary Big Sofa</p>
              <p className="price">Rp 2,500.000</p>
            </div>
          </div>
          <div className="card">
            <div className="">{renderBadge()}</div>
            <div className="overlay1">
              <button className="add-to-cart"onClick={handleNavigate}>Add to Cart</button>
              <div className="icons">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 10.6667C11.4747 10.6667 11 10.8734 10.644 11.2047L5.94 8.46671C5.97333 8.31337 6 8.16004 6 8.00004C6 7.84004 5.97333 7.68671 5.94 7.53337L10.64 4.79337C11 5.12671 11.4733 5.33337 12 5.33337C13.1067 5.33337 14 4.44004 14 3.33337C14 2.22671 13.1067 1.33337 12 1.33337C10.8933 1.33337 10 2.22671 10 3.33337C10 3.49337 10.0267 3.64671 10.06 3.80004L5.36 6.54004C5 6.20671 4.52667 6.00004 4 6.00004C2.89333 6.00004 2 6.89337 2 8.00004C2 9.10671 2.89333 10 4 10C4.52667 10 5 9.79337 5.36 9.46004L10.0587 12.2054C10.0211 12.3563 10.0014 12.5112 10 12.6667C10 13.0623 10.1173 13.4489 10.3371 13.7778C10.5568 14.1067 10.8692 14.3631 11.2346 14.5145C11.6001 14.6658 12.0022 14.7054 12.3902 14.6283C12.7781 14.5511 13.1345 14.3606 13.4142 14.0809C13.6939 13.8012 13.8844 13.4448 13.9616 13.0569C14.0387 12.6689 13.9991 12.2668 13.8478 11.9013C13.6964 11.5359 13.44 11.2235 13.1111 11.0038C12.7822 10.784 12.3956 10.6667 12 10.6667Z"
                    fill="white"
                  />
                </svg>
                <span>Share</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.08004 6L10.08 7L13.52 3.55L10 0L9.00004 1L10.8 2.8H1.00004V4.2H10.82L9.08004 6ZM4.86004 8L3.86004 7L0.420044 10.5L3.91004 14L4.91004 13L3.10004 11.2H13V9.8H3.10004L4.86004 8Z"
                    fill="white"
                  />
                </svg>
                <span>Compare</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.99973 14.0361C-5.33333 6.66669 3.99999 -1.33331 7.99973 3.72539C12 -1.33331 21.3333 6.66669 7.99973 14.0361Z"
                    stroke="white"
                    stroke-width="1.8"
                  />
                </svg>
                <span>Like</span>
              </div>
            </div>
            <div className="image">
              <img src="/product4.png" alt="Product 2" />
            </div>
            <div className="info">
              <p>Stylishtom</p>
              <p className="span">Stylish Cafe Chair</p>
              <p className="price">Rp 2,500.000</p>
            </div>
          </div>
        </div> */}
      </div>

      <div className="explore">
        <div className="explore-left">
          <h1>50+ Beautifull Rooms</h1>
          <p>Our designer already made a lot of beautiful</p>
          <p className="exp-text">prototipe of rooms that inspire you</p>
          <button>Explore More</button>
        </div>
        <div className="explore-center">
          <img src={images[currentImageIndex]} alt="Center Image" />
        </div>
        <div className="explore-right">
          <img
            src={images[(currentImageIndex + 1) % images.length]}
            alt="Right Image"
          />
          <svg
            width="78"
            height="78"
            viewBox="0 0 78 78"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="eclipse"
            onClick={handleClick}
          >
            <g filter="url(#filter0_d_117_484)">
              <circle cx="39" cy="35" r="24" fill="white" />
            </g>
            <defs>
              <filter
                id="filter0_d_117_484"
                x="0"
                y="0"
                width="78"
                height="78"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feMorphology
                  radius="1"
                  operator="dilate"
                  in="SourceAlpha"
                  result="effect1_dropShadow_117_484"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="7" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_117_484"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_117_484"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <svg
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="arrow"
            onClick={handleClick}
          >
            <path
              d="M1.00006 1L8.00006 8L1.00006 15"
              stroke="#B88E2F"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        {/* <div className="explore-end">
          <img src={images[(currentImageIndex + 2) % images.length]} alt="" />{" "}
        </div> */}
      </div>

      <div className="furnitureImages">
        <div className="title5">
          Share your setup with
          <p>#FurniroFurniture</p>
        </div>
        <div className="imgcontain">
          <img src="/img1.png" alt="" className="img1" />
          <img src="/img2.png" alt="" className="img2" />
          <img src="/img3.png" alt="" className="img3" />
          <img src="/img4.png" alt="" className="img4" />
          <img src="/img5.png" alt="" className="img5" />
          <img src="/img6.png" alt="" className="img6" />
          <img src="/img7.png" alt="" className="img7" />
          <img src="/img8.png" alt="" className="img8" />
          <img src="/img9.png" alt="" className="img9" />
        </div>
      </div>
    </div>
  );
};

export default Home;

import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Paintingdetails from "./paintingdetails";
import Cart from "./components/Cart";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SaleSection from "./components/SaleSection";

import paintingsData from "./Data";

function App() {

  /* 🔥 CART STATE */
  const [cart, setCart] = useState([]);

  /* 🔥 ADMIN LOGIN STATE */
  const [user, setUser] = useState(null);

  /* 🔥 PAINTINGS STATE */
  const [painting, setPainting] = useState(paintingsData);

  /* 🔥 ADD TO CART */
  const addCart = (paintingItem) => {

    setCart((prev) => {

      const exists = prev.find(
        (item) => item.id === paintingItem.id
      );

      if (exists) {

        return prev.map((item) =>
          item.id === paintingItem.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [...prev, { ...paintingItem, qty: 1 }];
    });
  };

  /* 🔥 INCREASE QUANTITY */
  const increaseQty = (id) => {

    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  /* 🔥 DECREASE QUANTITY */
  const decreaseQty = (id) => {

    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id && item.qty > 1
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  /* 🔥 REMOVE FROM CART */
  const removePaintings = (id) => {

    setCart((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  /* 🔥 DELETE PAINTING */
  const deletePaintings = (id) => {

    setPainting((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  /* 🔥 ADD NEW PAINTING */
  const addProd = (newProduct) => {

    setPainting((prev) => [
      ...prev,
      newProduct
    ]);
  };

  return (

    <BrowserRouter>

      {/* 🔥 NAVBAR */}
      <Navbar />

      {/* 🔥 ROUTES */}
      <Routes>

        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <Home
              paintings={painting}
              deletePaintings={deletePaintings}
              addCart={addCart}
            />
          }
        />

        {/* CART PAGE */}
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              removePaintings={removePaintings}
              decreaseQty={decreaseQty}
              increaseQty={increaseQty}
            />
          }
        />

        {/* PAINTING DETAILS PAGE */}
        <Route
          path="/paintingdetails/:id"
          element={
            <Paintingdetails
              paintings={painting}
              deletePaintings={deletePaintings}
            />
          }
        />


        {/* ABOUT PAGE */}
        <Route
          path="/about"
          element={<About />}
        />

        {/* CONTACT PAGE */}
        <Route
          path="/contact"
          element={<Contact />}
        />

        {/* SALE PAGE */}
        <Route
          path="/SaleSection"
          element={
            <SaleSection
              paintings={painting}
            />
          }
        />

      </Routes>

      {/* 🔥 FOOTER */}
      <Footer />

    </BrowserRouter>
  );
}

export default App;
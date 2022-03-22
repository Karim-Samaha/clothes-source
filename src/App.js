import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import Categories from './components/Categories';
import Products from './components/Products';
import News from './components/Newsletter';
import SingleProduct from './components/SingleProduct';
import ScrollToTop from './ScrollToTop';
import Cart from './components/Cart';
import SignIn from './components/SignInModule';
import Register from './components/Register';
import { useEffect, useState } from 'react';
function App() {
  //getting localstorage 
  const getLocalStorage = () => {
    const list = localStorage.getItem("cart");

    if (list) {
      return JSON.parse(localStorage.getItem("cart"))

    } else {
      return [];
    }

  }


  const [product, setProduct] = useState(getLocalStorage());
  const [productType, setProductType] = useState("");
  const [signinMoudle, setSigninMoudle] = useState(false);
  const [registerMoudle, setRegisterMoudle] = useState(false);
  //setting cart length
  useEffect(() => {
    document.querySelector(".cartCount").innerHTML = product.length;
  }, [product])
  return (
    <Router>
      <Navbar setSigninMoudle={setSigninMoudle}
        registerMoudle={registerMoudle} setRegisterMoudle={setRegisterMoudle} product={product} />
      <ScrollToTop />
      <SignIn signinMoudle={signinMoudle} setSigninMoudle={setSigninMoudle} />
      <Register registerMoudle={registerMoudle} setRegisterMoudle={setRegisterMoudle} />
      <Routes>
        <Route exact path="/clothes" element={<>
          <Cursor  />
          <Categories setProductType={setProductType} />
          <Products productType={productType} product={product}
            setProduct={setProduct} />
          <News /> </>}></Route>
        <Route exact path="/product/:id" element={<SingleProduct product={product}
          setProduct={setProduct}
        />}></Route>
        <Route exact path="/cart" element={<Cart product={product}
          setProduct={setProduct} />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

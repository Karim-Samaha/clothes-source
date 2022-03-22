
import { AllProdut } from '../data'
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai"
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
const Products = ({ productType, product, setProduct }) => {
    //adding product to cart 
    const [msg, setMsg] = useState(false)
    const handleCart = (name, img, price) => {
        setProduct([...product, {
            name: name,
            id: new Date().getTime().toString(),
            img: img,
            price: price

        }])
        setMsg(true)

    }
    useEffect(() => {
        const timeout = setTimeout(() => {
            setMsg(false)
        }, 3000)
        return () => clearTimeout(timeout);
    }, [msg])
    useEffect(() => {
        document.querySelector(".msgCount").innerHTML = product.length;
    }, [product])

    if (productType === "tshirt") {
        return <section id="product" className="products-section">
            <span

                style={{ opacity: msg ? "1" : 0, width: msg ? "250px" : "500px" }} className='mssg'>
                Product has been added to your cart
                <AiOutlineShoppingCart style={{ marginLeft: "10px" }} size="25px" />
                <span className='msgCount'>0</span>
            </span>
            {AllProdut.filter((item) => item.type === "tshirt")
                .map((item) => {
                    const { id, img, price, name } = item;
                    return <div key={id} className="product-item">
                        <Link to={`/product/${id}`}></Link>
                        <img src={img} alt="" />
                        <span onClick={() => handleCart(name, img, price)} className="icon cart">
                            <AiOutlineShoppingCart
                                size="25px" />
                        </span>
                        <span className="icon heart"><AiOutlineHeart size="25px" /></span>
                    </div>
                })}
        </section>
    } else if (productType === "loungewear") {
        return <section id="product" className="products-section">
            <span
                style={{ opacity: msg ? "1" : 0, width: msg ? "250px" : "500px" }} className='mssg'>
                Product has been added to your cart
                <AiOutlineShoppingCart style={{ marginLeft: "10px" }} size="25px" />
                <span className='msgCount'>0</span>
            </span>
            {AllProdut.filter((item) => item.type === "loungewear")
                .map((item) => {
                    const { id, img, price, name } = item;
                    return <div key={id} className="product-item">
                        <Link to={`/product/${id}`}></Link>
                        <img src={img} alt="" />
                        <span onClick={() => handleCart(name, img, price)} className="icon cart">
                            <AiOutlineShoppingCart size="25px" />
                        </span>
                        <span className="icon heart"><AiOutlineHeart size="25px" /></span>

                    </div>
                })}
        </section>
    } else if (productType === "jacket") {
        return <section id="product" className="products-section">
            <span
                style={{ opacity: msg ? "1" : 0, width: msg ? "250px" : "500px" }} className='mssg'>
                Product has been added to your cart
                <AiOutlineShoppingCart style={{ marginLeft: "10px" }} size="25px" />
                <span className='msgCount'>0</span>
            </span>
            {AllProdut.filter((item) => item.type === "jacket")
                .map((item) => {
                    const { id, img, price, name } = item;
                    return <div key={id} className="product-item">
                        <Link to={`/product/${id}`}></Link>
                        <img src={img} alt="" />
                        <span onClick={() => handleCart(name, img, price)} className="icon cart">
                            <AiOutlineShoppingCart size="25px" />
                        </span>
                        <span className="icon heart"><AiOutlineHeart size="25px" /></span>
                    </div>
                })}
        </section>
    }
    else {
        return <section id="product" className="products-section">
            <span
                style={{ opacity: msg ? "1" : 0, width: msg ? "250px" : "500px" }} className='mssg'>
                Product has been added to your cart
                <AiOutlineShoppingCart style={{ marginLeft: "10px" }} size="25px" />
                <span className='msgCount'>0</span>
            </span>
            {AllProdut.slice(0, 6).map((item) => {
                const { id, img, price, name } = item;
                return <div key={id} className="product-item">
                    <Link to={`/product/${id}`}></Link>
                    <img src={img} alt="" />
                    <span onClick={() => handleCart(name, img, price)} className="icon cart">
                        <AiOutlineShoppingCart size="25px" />
                    </span>
                    <span className="icon heart"><AiOutlineHeart size="25px" /></span>
                </div>
            })}
        </section>
    }

}

export default Products;
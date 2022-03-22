import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MdOutlineRemove } from 'react-icons/md'



const Cart = ({ product, setProduct }) => {

    //getting total price
    const getTotal = () => {
        if (product.length > 0) {
            let array = []
            product.map((item) => array.push(Number(item.price)))
            console.log(array)
            return array.reduce((x, y) => x + y).toString().substring(0, 6)
        } else {
            return 0
        }
    }
    // remove product from cart
    const removeProduct = (id) => {
        setProduct(product.filter((item) => item.id !== id));
    }
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(product))
    }, [product])
    if (product.length < 1) {
        return (
            <section className="cart-section">
                <div className="cartHeader" style={{ justifyContent: "center" }}>
                    <h2>Your Cart is Empty!</h2>
                    <Link style={{ backgroundColor: "white", color: "black" }} to="/clothes/"
                        className="shoping">Continue Shoping</Link>
                </div>
            </section>
        )
    }
    return <section className="cart-section">
        <div className="cartHeader">
            <Link to="/clothes/" className="shoping">Continue Shoping</Link>
            <h2>Your Cart</h2>
            <Link to="#">Checkout</Link>
            <div className="cartTotal"><span>Total: </span>{getTotal()}$</div>
        </div>
        <div className="cartList">
            {product.map((item) => {
                const { img, id, name, price } = item;
                return <div key={id} className="cartItem">
                    <img src={`/clothes//${img}`} alt="" />
                    <div className="cartInfo">
                        <ul>
                            <li><span>Product: </span>{name}</li>
                            <li><span>ID: </span>{id}</li>
                            <li><span>Size: </span>XL</li>
                        </ul>
                        <div className="price">{price}$</div>
                        <MdOutlineRemove onClick={() => removeProduct(id)}
                            className="removeIcon" size="20px" />
                    </div>
                </div>
            })}
        </div>
    </section>
}
export default Cart;
import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { AllProdut } from "../data"
const SingleProduct = ({ product, setProduct }) => {

    const { id } = useParams();
    const data = AllProdut.filter((item) => item.id == id);
    const { img, name, price, sizes, color } = data[0];

    const [productColor, setProductColor] = useState("");
    const [productSize, setProductSize] = useState("");
    const handelColor = (color) => {
        setProductColor(color)
    }
    const handleSize = (size) => {
        setProductSize(size)
    }
    //adding product to cart
    const handleCart = () => {
        setProduct([...product, {
            name: name,
            id: new Date().getTime().toString(),
            img: img,
            price: price

        }])

    }
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(product))
    }, [product])



    return <section className="singleProduct-section">
        <div className="sectionOne">
            <img src={`/clothes//${img}`} alt="" />
        </div>
        <div className="sectionTwo">
            <h1>{name}</h1>
            <h2>{price}$</h2>
            <div className="colors">
                {color.map((color, i) => {
                    return <div key={i} onClick={() => handelColor(color)}
                        style={{ backgroundColor: color, border: productColor === color ? "3px solid #028082" : "3px solid white" }}
                        className="color"></div>
                })}
            </div>
            <div className="sizes">
                {sizes.map((size, i) => {
                    return <div key={i} onClick={() => handleSize(size)}
                        style={{ backgroundColor: productSize === size || sizes.length === 1 ? " #028082" : "silver" }}
                        className="size">{size}</div>
                })}
            </div>
            <button onClick={handleCart} className="addToCart-button">ADD TO CART</button>
        </div>
    </section>
}

export default SingleProduct
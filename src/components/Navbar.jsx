import { useState } from 'react'
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Navbar = ({ setSigninMoudle, setRegisterMoudle, product }) => {
    const [moudleOpen, setMoudleOpen] = useState(false);
    return <section className="nav-section">
        <div className="nav-top">
            <p>Super Deal!! Free Shiping on orders over 50$</p>
        </div>
        <div className="nav-bottom">
            <div className="nav-left">
                <select className="langSelect">
                    <option>EN</option>
                    <option>AR</option>
                </select>
                <div className='search-container'>
                    <input type="text" />
                    <AiOutlineSearch className='searchIcon' />
                </div>
            </div>
            <div className="nav-center">
                <Link className='pageLogo' to="/clothes/">Store.</Link>
            </div>
            <div className="nav-right">
                <Link className='navLink' to="#" onClick={() => setRegisterMoudle(true)} >REGISTER</Link>
                <Link className='navLink' to="#" onClick={() => setSigninMoudle(true)} >SIGN IN</Link>
                <Link className='cartIcon' onMouseEnter={() => setMoudleOpen(true)}
                    onMouseLeave={() => setMoudleOpen(false)}
                    to="/cart"><AiOutlineShoppingCart size="30px" className='cartIcon' /></Link>
                <span className='cartCount'>0</span>
            </div>
            <div style={{
                height: moudleOpen && product.length > 0 ? "50vh" : "0px",
                opacity: moudleOpen && product.length > 0 ? "1" : "0"
            }}
                onMouseEnter={() => setMoudleOpen(true)}
                onMouseLeave={() => setMoudleOpen(false)}
                className='cartMoudle'>
                {product.map((item) => {
                    const { img, name, price, id } = item;
                    return <div key={id} style={{ opacity: moudleOpen ? "1" : "0" }} className='cartMoudle-item'>
                        <img src={`./${img}`} alt="" />
                        <h5>{name}</h5>
                        <h6>{price}$</h6>
                    </div>
                })}
            </div>
        </div>
    </section>
}

export default Navbar
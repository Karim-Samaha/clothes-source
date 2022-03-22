import { MdLocationOn, MdEmail } from 'react-icons/md'
import { AiFillPhone } from 'react-icons/ai'

const Footer = () => {
    return <section className="footer-section">
        <div className="sectionOne">
            <h2>About Us</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Integer metus ipsum, feugiat nec mattis eu
                , fringilla id sapien. Suspendisse erat nisi, auctor ac gravida et,
                iaculis ac nisi. Nam mollis vel leo ac lacinia. Maecenas erat elit,
                sodales et pretium vel, laoreet in dolor. Nullam volutpat euismod
                est, maximus posuere.
            </p>
        </div>
        <div className="sectionTwo">
            <h2>Useful Links</h2>
            <div className="lists">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Man Fashion</a></li>
                    <li><a href="#">Accessories</a></li>
                    <li><a href="#">Order Tracking</a></li>
                    <li><a href="#">Wishlist</a></li>
                </ul>
                <ul>
                    <li><a href="#">Cart</a></li>
                    <li><a href="#">Woman Fashion</a></li>
                    <li><a href="#">My Account</a></li>
                    <li><a href="#">Terms</a></li>

                </ul>
            </div>
        </div>
        <div className="sectionThree">
            <h2>Contact</h2>
            <div className='contact-item'>
                <MdLocationOn size="20px"/>
                <p>30 W Galewood Dr Wilson, New York(NY), 14172</p>
            </div>
            <div className='contact-item'>
                <AiFillPhone size="20px" />
                <p>+2012345678</p>
            </div>
            <div className='contact-item'>
                <MdEmail size="20px" />
                <p>lorem@gmail.com</p>
            </div>
            <div className='payment-options'>
                <img src="./assets/visa.png" alt="" />
                <img src="./assets/master.png" alt="" />
            </div>
        </div>
    </section>
}

export default Footer
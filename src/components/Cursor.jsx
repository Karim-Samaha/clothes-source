import { sliderItems } from "../data"
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { useState } from "react"
const Cursor = () => {
    const [sliderIndex, setSliderIndex] = useState(0);
    const handleSlider = (dir) => {
        if (dir === "left") {
            setSliderIndex(sliderIndex < 2 ? sliderIndex + 1 : 0)
        } else if (dir === "right") {
            setSliderIndex(sliderIndex > 0 ? sliderIndex - 1 : 2)
        }
    }
    return <section
        className="cursor-section">
        <IoIosArrowBack onClick={() => handleSlider("right")} size="80px" className="arrowLeft" />
        <IoIosArrowForward onClick={() => handleSlider("left")} size="80px" className="arrowRight" />
        <div className="slider-container">
            {sliderItems.map((item) => {
                const { id, img, desc, title, bg } = item;
                return <section style={{ transform: `translateX(${sliderIndex * -100}%)` }}
                    key={id} className="slide-item">
                    <div className="left-section">
                        <div style={{ backgroundColor: `${bg}` }} className="styleCircle"></div>
                        <img className="cursorImg" src={img} alt="" />
                    </div>
                    <div className="right-section">
                        <h2>{title}</h2>
                        <h5>{desc}</h5>
                        <a href="#categories" style={{ border: `2px solid ${bg}` }}>
                        Shop Now</a>
                    </div>
                </section>
            })}
        </div>
    </section>
}

export default Cursor

import { categories } from "../data";
const Categories = ({ setProductType }) => {

    const filter = (name) => {
        setProductType(name);
    }
    return <section id="categories" className="categories-section">
        {categories.map((item) => {
            const { id, img, title, functionPram } = item;
            return <div key={id} style={{ backgroundImage: `url(${img})` }}
                className="category-item">
                <h2>{title}</h2>
                <button  onClick={() => filter(functionPram)}><a href="#product">SHOP NOW</a></button>
            </div>
        })}
    </section>
}

export default Categories;
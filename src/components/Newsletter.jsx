import { AiOutlineSend } from 'react-icons/ai'
const News = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("done")
    }
    return <section className="news">
        <h2>Newsletter</h2>
        <p>Get timely updates from you favorite products.</p>
        <form onSubmit={handleSubmit}>
            <input className="form" type="text" placeholder="Your Email" />
            <input id='submitButton' style={{ display: "none" }} type="submit" />
            <label className='submit' htmlFor='submitButton'><AiOutlineSend size="30px" /></label>
        </form>

    </section>
}

export default News;
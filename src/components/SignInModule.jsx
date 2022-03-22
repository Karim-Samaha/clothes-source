import { AiOutlineClose } from 'react-icons/ai'
const SignIn = ({ signinMoudle, setSigninMoudle}) => {
    return <div style={{display: signinMoudle ? "block" : "none"}}
     className="signIn-moudle">
        <form>
            <AiOutlineClose onClick={() => setSigninMoudle(false)} className='closeMoudle' size="35px" />
            <input type="text" placeholder="Email Adress" required />
            <input type="password" placeholder="Password" required />
            <input id="signInSubmit" style={{ display: "none" }} type="submit" />
            <label className="signingButton" htmlFor="signInSubmit"><button>Sign In</button></label>
            <a href="#">Forget Password</a>
        </form>
    </div>
}
export default SignIn;
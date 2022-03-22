import { AiOutlineClose, AiOutlineGooglePlus, AiOutlineUserAdd } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'

const Register = ({ registerMoudle, setRegisterMoudle }) => {
    return <div style={{display: registerMoudle ? "block" : "none"}} className="registerModule">
        <AiOutlineClose onClick={() => setRegisterMoudle(false)} className='closeMoudle' size="35px" />
        <div className='register-options'>
            <div className='fc-register'><FaFacebookF className='reg-icon' size="30px" />Register with Facebook</div>
            <div className='go-register'><AiOutlineGooglePlus className='reg-icon' size="30px" />Register with Google</div>
            <div className='account-register'><AiOutlineUserAdd className='reg-icon' size="30px" />Make an Account</div>
        </div>
    </div>
}

export default Register;
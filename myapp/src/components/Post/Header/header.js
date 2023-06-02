import insta from '../../../images/insta.png'
import camera from '../../../images/camera.png'
import "./header.css"
import {Link} from "react-router-dom";

const Header = () =>{
    return(
        <div className='doc-head'>
        <div className='logo'>
            <span><img className='insta-pic' src={insta}/></span>
            <span><h2 className='insta-text'>Instagram</h2></span>
        </div>
        <div><span> <Link to="/post/new"><img className='camera-pic' src={camera}/></Link></span> </div>
        </div>
    )
}
export default Header
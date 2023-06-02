import "./landing.css"
import home from "../../images/home.png"
import {Link} from "react-router-dom"

const Landing = () =>{
    return(
        <div className="landing-parent">
        <div className="landing-page">
            <div className="image-section">
                <img className="team-image" src={home} alt="Landing..."/>
            </div>
            <div className="enter-section">
                <h2 className="x-heading">10X team 04</h2>
                <Link to={"post/All"}><button className="enter-button">Enter</button></Link>
                
            </div>
        </div>
        </div>
    )
}
export default Landing
import Searchbar from "../../component/searchbar/Searchbar";
import "./homePage.scss"

function HomePage() {

    return (
        <div className="homePage">
            <div className="textContainer">
                <div className="wrapper">
                    <h1>Find real state & find real state & Get your dream place</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Blanditiis consequatur, nihil explicabo quasi numquam illum?
                     Alias in sunt harum, natus maxime omnis quod, nisi et</p>
                    <Searchbar/>
                    <div className="boxes">
                        <div className="box">
                            <h1>16</h1>
                            <h2>Years of Experience</h2>
                        </div>
                        <div className="box">
                            <h1>200</h1>
                            <h2>Award Gaining</h2>
                        </div>
                        <div className="box">
                            <h1>1200</h1>
                            <h2>Property ready</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imgContainer">
                <img src="./bg.png" />
            </div>
        </div>
    )
}


export default HomePage;
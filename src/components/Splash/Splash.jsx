import "./Splash.css"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

const Splash = () => {
    return (
        <>
            <Navbar />
            <div>
                <div className="Square">
                    <div className="FullName">
                        <h1 className="Name"> <span className="WU"> WU</span> QINGGUI BJORK WEENK </h1>
                    </div>
                    <div className="line" />
                    <img className="splashPhoto" src="./albu.png" width={300} height={300} />
                </div>
            </div>
            <Footer/>

        </>
    );
}

export default Splash;
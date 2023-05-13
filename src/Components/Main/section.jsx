import img from "./images/img.png"
import udemy from "./images/udemy-logo.png"
import microsoft from "./images/microsoft_PNG4.png"
import down from "./images/download 1.png"
import fiver from "./images/1_pO9ttF1Z_KTOre0yGiClxQ.png"
import "./style.css"

export function Section() {
    return (
        <>
            <div className="wrapper">
                <div className="text">
                    <h2 className="first">Anytime,anywhereDevelop your skill
                        by Online

                    </h2>
                    <h1 className="second">
                        Online education is a form of education where students use their home computers through the internet. For many nontraditional students, among them all those who want to continue.
                    </h1>
                    <button className="btn">All Courses</button>
                </div>
                <div className="image">
                    <img src={img} alt="" />
                </div>
            </div>
            <div className="boxx">
                <h1 className="teext">Trusted by 30,000+ satisfied students</h1>
                <img src={udemy} alt="" />
                <img src={fiver} alt="" />
                <img src={down} alt="" />
                <img src={microsoft} alt="" />
            </div>
        </>
    )
}
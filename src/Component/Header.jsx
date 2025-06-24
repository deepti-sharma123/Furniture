import React, {useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
    const [isActive, setIsActive] = useState(false)
    const handleMenuBar = () =>{
        // console.log("button is working")
        if(!isActive){
           setIsActive(true)
        }
        else{
             setIsActive(false)
        }
        
    }

  return (
   <>
     <div className="header-main">
        <div className="container">
            <div className="header">
                <div className="logo">
                    <h1>Furni</h1>
                </div>
              <div className={`nav ${isActive ? "activee" : "close"}`}>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact us</a></li>
                    </ul>

                </div>
                <div className="menu-btn"
                onClick={handleMenuBar}
                >
                    <FontAwesomeIcon icon={faBars} />
                {/* <FontAwesomeIcon icon="fa-solid fa-bars" /> */}
                </div>
            </div>
        </div>
    </div>
   </>
  )
}

export default Header

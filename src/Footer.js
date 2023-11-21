import React from 'react'
import logo from './image/10xLogo.JPG'
import whatsappIcon from './image/whatsappbtn.png'



export default function Footer() {
    return (
        <>
            <footer>
                <div className="wrapper">
                    <div className="row m-0 align-items-center">
                        <img src={logo} alt="Logo" className="footer-logo" />
                        <img src={whatsappIcon} alt="Logo" className="whatsapp-logo" />
                        <p>+91 93464 03176</p>
                       
                    </div>
                </div>
            </footer>
        </>

    )
}

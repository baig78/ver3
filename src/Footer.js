import React from 'react'
import footerLogo from './image/footer-logo.png'
import whatsappIcon from './image/whatsappbtn.png'



export default function Footer() {
    return (
        <>
            <footer>
                <div className="wrapper">
                    <div className="row m-0 align-items-center">
                        <img src={footerLogo} alt="Logo" className="footer-logo" />
                        <img src={whatsappIcon} alt="Logo" className="whatsapp-logo" />
                        <a href="https://wa.me/919346403176" target="_blank" rel="noopener noreferrer">  <p>+91 93464 03176</p></a>
                       
                    </div>
                </div>
            </footer>
        </>

    )
}

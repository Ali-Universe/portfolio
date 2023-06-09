import React from 'react'
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
       <div className="footer__container container">
          <h1 className="footer__title">Kurbanov Ali</h1>
          <ul className="footer__list">
             <li>
                <a href="#about" className="footer__link">About</a>
             </li>
             <li>
                <a href="#portfolio" className="footer__link">Projects</a>
             </li>
             <li>
                <a href="#services" className="footer__link">Services</a>
             </li>
           
          </ul>

          <div className="footer__social">
          <a href="https://www.instagram.com/pixeldesign.kg/" className="footer__social-link" target="_blank">
       <i class="bx bxl-instagram"></i>
       </a>
       <a href="https://t.me/kurbanov_Ali" className="footer__social-link" target="_blank">
       <i class="bx bxl-telegram"></i>
       </a>
       <a href="https://www.linkedin.com/in/muratali-kurbanov-765509238/" className="footer__social-link" target="_blank">
       <i class="bx bxl-linkedin"></i>
       </a>
          </div>

          <span className="footer__copy">&#169; Crypticalcoder. All rights reserved</span>
       </div>
    </footer>
  )
}

export default Footer
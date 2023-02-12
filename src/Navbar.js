import React from 'react';
import { Link } from 'react-scroll'
import './style/Navbar.css'
import logo from './assets/logo2.png'
import Swal from 'sweetalert2'


const Navbar = () => {
  
  const handleSubmit = e => {
    Swal.fire({
      imageUrl: logo,
      imageWidth: 150,
      imageHeight: 150,
      html: `
      <input type="text" id="login" class="swal2-input" placeholder="Username">
      <input type="password" id="password" class="swal2-input" placeholder="Password">`,
      confirmButtonText: 'Sign in',
      focusConfirm: false,
      preConfirm: () => {
        const login = Swal.getPopup().querySelector('/login').value
        const password = Swal.getPopup().querySelector('/password').value
        if (!login || !password) {
          Swal.showValidationMessage(`Please enter login and password`)
        }
        return { login: login, password: password }
      }
    }).then((result) => {
      Swal.fire(`
        Login: ${result.value.login}
        Password: ${result.value.password}
      `.trim())
    })
  };
  


  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="" width="50" height="50"/>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link activeClass="active"
                to="about-section"
                spy={true}
                smooth={'easeOutExpo'}
                hashSpy={true}
                duration={0}
                delay={0}
                isDynamic={true}
                ignoreCancelEvents={false}
                spyThrottle={500}
              >
                <b>ABOUT US</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link activeClass="active"
                to="pricing-section"
                spy={true}
                smooth={'easeOutExpo'}
                hashSpy={true}
                duration={0}
                delay={0}
                isDynamic={true}
                ignoreCancelEvents={false}
                spyThrottle={500}
              >
                <b>PRICING</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link activeClass="active"
                to="contact-section"
                spy={true}
                smooth={'easeOutExpo'}
                hashSpy={true}
                duration={0}
                delay={0}
                isDynamic={true}
                ignoreCancelEvents={false}
                spyThrottle={500}
              >
                <b>CONTACT US</b>
              </Link>
            </li>
            <li className="nav-item">
              <button className='btn-login' onClick={handleSubmit}>login</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

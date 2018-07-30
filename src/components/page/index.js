import React from 'react';
import ImagenLogo from '../../assets/images/resource/banner-image-1.png';
import Logo from '../../assets/images/logo.png';

const MyComponent = () => (
  <div class="page-wrapper">
  <header className="main-header">

       	<div className="main-box">
           	<div className="auto-container">
               	<div className="outer-container clearfix">

                       <div className="logo-box">
                           <div className="logo"><a href="index.html"><img src={ Logo } alt=""></img></a></div>
                       </div>


                       <div className="nav-outer clearfix">

                           <nav className="main-menu">

                               <div className="navbar-header">

                                   <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                       <span className="icon-bar"></span>
                                       <span className="icon-bar"></span>
                                       <span className="icon-bar"></span>
                                   </button>
                               </div>

                               <div className="navbar-collapse collapse scroll-nav clearfix">
                                   <ul className="navigation clearfix">
                                       <li class="current"><a href="index.html#banner">Inicio</a></li>
                                       <li><a href="index.html#products">Mi</a></li>
                                       <li><a href="index.html#features">Blog</a></li>
                                       <li><a href="index.html#inventory">Inventario</a></li>
                                       <li><a href="index.html#contact">Nosotros</a></li>
                                    </ul>
                               </div>

                           </nav>



                           <div className="other-links">
                           	<a href="/" className="theme-btn btn-style-one">OFFICE 365</a>
                           </div>

                       </div>


               	</div>
               </div>
           </div>

       </header>
       <section className="main-banner banner-one" id="banner">
         <div className="auto-container">
             <div className="row clearfix">

                   <div className="text-column col-md-6 col-sm-12 col-xs-12">
                     <div className="inner">
                         <h4>Plataforma Comunitaria!</h4>
                           <h2>Entregate a ti mismo la oportunidad de mejores soluciones.</h2>
                           <p>Si todos aportamos, lograremos mas. Trabajemos en conjunto y desarrollemos una gran aplicación!</p>
                           <a href="#" className="theme-btn btn-style-two">Ver Introduccion <span className="icon ti-arrow-circle-right"></span></a>
                       </div>
                   </div>


                   <div className="image-column col-md-6 col-sm-12 col-xs-12">
                     <div className="inner">
                         <figure className="image"><img src={ ImagenLogo } alt="" /></figure>
                       </div>
                   </div>

               </div>
           </div>
       </section>
     </div>
);

export default MyComponent;

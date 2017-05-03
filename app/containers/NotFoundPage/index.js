/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import { Link } from 'react-router';

export default function NotFound() {
  return (
    <section id="wrapper" className="error-page">
      <div className="error-box">
        <div className="error-body text-center">
          <h1 className="text-danger">404</h1>
          <h3 className="text-uppercase">Page Not Found !</h3>
          <p className="text-muted m-t-30 m-b-30">YOU SEEM TO BE TRYING TO FIND HIS WAY HOME</p>
          <Link to='/' className="btn btn-danger btn-rounded waves-effect waves-light m-b-40">Back to home</Link>
        </div>
        <footer className="footer text-center">2017 © Ample Admin.</footer>
      </div>
    </section>
  );
}

import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Our Weather App</h5>
              <p className="grey-text text-lighten-4">For more information contact byrneg7code@gmail.com</p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Links</h5>
              <ul>
                <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            © 2019 Greg Byrne  & Michael Tierney
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;


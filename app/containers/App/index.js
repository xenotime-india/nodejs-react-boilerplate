/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';

import Header from 'components/Header';
import SideBar from 'components/SideBar';
import Footer from 'components/Footer';

export function App(props) {
  return (
    <div id="wrapper">
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
        meta={[
          { name: 'description', content: 'A React.js Boilerplate application' },
        ]}
      />
      <Header />
      <div id="page-wrapper">
        <div className="container-fluid">
          {React.Children.toArray(props.children)}
        </div>
        <Footer />
      </div>
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;

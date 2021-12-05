import React from 'react';
import './index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const vdom = <>
    <div className="ellipse1"></div>
    <div className="ellipse2"></div>
    <Header />
    <Main />
    <Footer />
</>
export default vdom;
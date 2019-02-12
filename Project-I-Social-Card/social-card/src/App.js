import React from 'react';
import './reset.css'
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faHeart, faRetweet, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import HeaderContainer from './components/HeaderComponents/HeaderContainer'
import CardContainer from './components/CardComponents/CardContainer'
import Footer from './components/FooterComponents/Footer'

library.add(faEnvelope, faHeart, faRetweet, faCommentAlt);

const App = () => {
  return (
    <div className="App">
      <HeaderContainer />
      <CardContainer />
      <Footer />
    </div>
  );
};

export default App;

import React, {Component} from 'react';
import Header from './components/header/header';
import Home from './components/home/home';
import Footer from './components/footer/footer';

class App extends Component {

  render() {
    return (
      <div>
        <Header/>
        <Home/>
        <Footer />
      </div>
    )
  }
}

export default App;
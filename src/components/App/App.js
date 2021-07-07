import React from 'react'
import '../App/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../Header/Header";
import Counter from "../Counter/Counter";
import About from '../About/about';
import Contact from '../Contact/contact';
import Info from '../Info/info';
import News from '../News/news';
import Footer from '../Footer/footer';


class App extends React.Component{
  render() {
    return <div className="App">
      <Header />
      <Counter />
      <About />
      <Contact />
      <Info />
      <News />
      <Footer/>
    </div>
  }
}

export default App;

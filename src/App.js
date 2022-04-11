
import './App.css';
import { connect } from 'react-redux';
import  React from 'react'
import {


  Route,
  Routes,

} from "react-router-dom";
import Home from './Components/MainComponents/Home';
import All from './Components/MainComponents/All';
import Tech from './Components/MainComponents/Tech';
import Clothes from './Components/MainComponents/Clothes';
import Cartpage from './Components/SubComponents/Cartpage'
import {Banner} from './Components/SubComponents/elements'


function mapStateToProps(state) {
  return {
      
      banner: state.banner
  };
}

class App extends React.Component {


  render(){
  return (
    <>

    <Banner active={this.props.banner.active}>
  <h1>{this.props.banner.value}</h1>
    </Banner>
    <Home/>
    <Routes>
     <Route path="/" element={<All/>}/>
     <Route path="/tech" element={<Tech/>}/>
     <Route path="/clothes" element={<Clothes/>}/>
     <Route path="/cart" element={<Cartpage/>}/>
  
    </Routes>
    </>
  );
  }
}


export default connect(
  mapStateToProps
)(App);


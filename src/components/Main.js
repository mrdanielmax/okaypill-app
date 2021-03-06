import React, { Component } from 'react';
import '../css/Main.css';
import Cookies from 'universal-cookie';
import Okay from './Okay';
import NotOkay from './NotOkay';

const cookies = new Cookies();

class Main extends Component {

  constructor(props) {
    super(props);
    const initCookieState = cookies.get('visited');
    this.state = { MainPage : initCookieState };
    this.emailSubmitted = this.emailSubmitted.bind(this)
  }

  emailSubmitted(){
    cookies.set('visited', 'visited', { path: '/' });
    this.setState({
      MainPage: "visited"
    })
  }

  render() {
    if(this.state.MainPage === "visited"){
      return (
        <NotOkay/>
      );
    } else {
      return (
        <Okay emailSubmitted={this.emailSubmitted}/>
      );
    }
  }
}

export default Main;

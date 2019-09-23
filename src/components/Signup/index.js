//import liraries
import React, { Component } from "react";

import { Header, Body, Title } from "native-base";

import SignupForm from "./SignupForm";
// create a component
class Signup extends Component {
  render() {
    return (
      <React.Fragment>
        <Header>
          <Body>
            <Title>Signup</Title>
          </Body>
        </Header>
        <SignupForm/>
      </React.Fragment>
    );
  }
}

//make this component available to the app
export default Signup;

import React, { Component } from 'react';
import { create } from 'jss';
import JssProvider from 'react-jss/lib/JssProvider';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';
import styled, { keyframes } from 'styled-components';
import { logo } from 'assets';

const styleNode = document.createComment('insertion-point-jss');
document.head.insertBefore(styleNode, document.head.firstChild);

const generateClassName = createGenerateClassName();
const jss = create(jssPreset());
jss.options.insertionPoint = 'insertion-point-jss';

const AppWrapper = styled.div`
  text-align: center;
`;

const AppLogoSpin = keyframes`
  from { 
    transform: rotate(0deg); 
  }

  to { 
    transform: rotate(360deg); 
  }
`;

const AppLogo = styled.img`
  animation: ${AppLogoSpin} infinite 20s linear;
  height: 80px;
`;

const AppHeader = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const AppTitle = styled.h1`
  font-size: 1.5em;
`;

const AppIntro = styled.p`
  font-size: large;
`;

class App extends Component {
  render() {
    return (
      <JssProvider jss={jss} generateClassName={generateClassName}>
        <AppWrapper>
          <AppHeader>
            <AppLogo src={logo} alt="logo" />
            <AppTitle>Welcome to React</AppTitle>
          </AppHeader>
          <AppIntro>
            To get started, edit <code>src/App.js</code> and save to reload.
          </AppIntro>
        </AppWrapper>
      </JssProvider>
    );
  }
}

export default App;

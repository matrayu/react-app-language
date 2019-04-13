import React, { Component } from 'react';
import Child from './components/Child';
import LangControls from './components/LangControls';
import LanguageContext from './components/LanguageContext';
import './App.css';

export default class App extends Component {
  state = {
    lang: window.navigator.language
  };

  handleSetLang = (lang) => {
    this.setState({ lang })
  };

  render() {
    const contextValue = {
      lang: this.state.lang,
      setLang: this.handleSetLang
    }

    return (
      <LanguageContext.Provider
        //we need to add the data back in 
        //by providing a prop called value to the Provider 
        //with the same object we expect (moved it to state)
        value={contextValue}>
        <div className="App">
          <header className="App-header">
            <LangControls onSetLang={this.handleSetLang} />
            <Child />
          </header>
        </div>
      </LanguageContext.Provider>
    );
  }
}
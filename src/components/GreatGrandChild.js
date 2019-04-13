import React, { Component } from 'react';
import LanguageContext from './LanguageContext';
import languageSpecificCopy from './languageSpecificCopy';

class GreatGrandChild extends Component {
  //when to use 'static'?
  static contextType = LanguageContext;

  render() {
    const copy = languageSpecificCopy[this.context.lang] || {}
    return (
      <section>
        <h2>{copy.title}</h2>
        <p>{copy.body}</p>
        <button onClick={() => this.context.setLang('klingon')}>
          Klingon!{' '}
          <span role='img' aria-label='klingon'>🖖</span>
        </button>
      </section>
    )
  }
}

export default GreatGrandChild
import React from 'react';
import AppHeader from '../header';

export const MyFunction = () => {
  return (
    <section id="learnMore" className="hero-block">
    <header id="header">
        <AppHeader />
      </header>  
    <div>
      <h1>Hello from myNewFile.js!</h1>
      <p>This is some text to display on the web page.</p>
    </div>
    </section>
  );
}

export default MyFunction;

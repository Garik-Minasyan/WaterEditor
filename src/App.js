import React, { useState } from 'react';
import Header from './pages/Header';
import Content from './pages/Content';
import Footer from './pages/Footer';
export const SETTINGS_PANEL = "SETTINGS_PANEL";
export const SETTINGS_LOGO = "SETTINGS_LOGO";
export const SETTINGS_TEXT = 'SETTINGS_TEXT'; //const

const App = () => {
  const [type, setType] = useState(SETTINGS_PANEL);

  return (
    <div className="app">
      <Header />
      <Content type={type} setType={setType} />
      <Footer type={type} setType={setType} />
    </div>
  );
};

export default App;

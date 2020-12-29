import React, { useState } from 'react';
import Header from './pages/Header';
import Content from './pages/Content';
import Footer from './pages/Footer';
import { SETTINGS_PANEL } from './components/constants'

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

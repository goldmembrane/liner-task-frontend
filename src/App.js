import React from 'react';
import Header from './component/header.js';
import Leftmenu from './component/leftbar.js';

const App = () => {
  return(
    <div>
      <Header />
      <div>
        <Leftmenu />
      </div>
    </div>
  );
};

export default App;
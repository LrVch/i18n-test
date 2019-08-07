import React, { Suspense } from 'react';
import './App.css';
// import Loader from './components/Loader/Loader'
import Page from './components/Page/Page'

function App() {
  return (
    <Suspense fallback="">
      <Page/>
    </Suspense>
  );
}

export default App;

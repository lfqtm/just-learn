import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/*React.StrictMode 检查App及以下的组件是否合理*/}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// reportWebVitals();

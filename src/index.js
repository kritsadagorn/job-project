import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Rootlayout from './layout/Rootlayout';
import Learn from './Pages/Learn';
import About from './Pages/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([{
  element: <Rootlayout/>,
  children: [{
    path: "/",
    element: <App/>
  },{
    path: "/learn",
    element: <Learn/>
  },{
    path: "/about",
    element: <About/>
  }]
}])
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
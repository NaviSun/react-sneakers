import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.scss';
import App from './App';
import 'macro-css'
import Favorite from './pages/Favorite';

//https://www.figma.com/design/fw0toTyXMwM1y4WIe0YFrJ/React-Sneakers?node-id=60-2&node-type=frame&t=ESHPLIFYBk1TLv40-0


const router = createBrowserRouter([
  {
    path: "/",
    element: <App /> ,
    children: [
      {
        path: "/favorite",
        element: <Favorite/>
      }
    ]
  },
  
 
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

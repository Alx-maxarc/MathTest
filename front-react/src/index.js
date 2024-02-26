import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SimpleMathTest from './component/game/gameOne';
import MoyenMathTest from './component/game/gameTen';
import { UserDataProvider } from './component/contexte/userData';
import DifficileMathTest from './component/game/gameHundred';
import SignUpForm from './component/subscribe';
import Auth from './component/auth';


const router = createBrowserRouter([

  {
    path: '/',
    element: <App/>},
    {
      path: '/enregistrement',
      element: <SignUpForm/>
    },
    {
      path: '/moncompte',
      element: <Auth/>,
      children: [{
        path: 'niveau-simple',
        element: <SimpleMathTest/>
      },
      {
        path: 'niveau-moyen',
        element: <MoyenMathTest/>
      },
      {
        path: 'niveau-difficile',
        element: <DifficileMathTest/>
      }]
  }
  

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserDataProvider>
    <RouterProvider router={router}/>
    </UserDataProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

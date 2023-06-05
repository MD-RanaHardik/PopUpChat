/* eslint-disable no-unused-vars */
import React, { createContext, useState,} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './State/Store/Store.js'
import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
    
  
)

import React from 'react'
import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import Navbar from './Navbar/Navbar'
import store from '../store/Store';


const RootLayout = () => {
  return (
    <div>
        <Provider store={store}>
            <Navbar />
            <main>
          <Outlet />
        </main>
        </Provider>
    </div>
  )
}

export default RootLayout
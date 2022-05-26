import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Modal } from '../Modal/Modal';
import { ThemeProvider } from '../ThemeProvider/ThemeProvider'
import { HomeView } from '../../views/HomeView';
import { AboutView } from '../../views/AboutView';
import { ContactsView } from '../../views/ContactsView';
import { PortfolioView } from '../../views/PortfolioView';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as porfolio from '../../portfolio.json';

const App = () => (
  <ThemeProvider>
    <Header />
    <Modal />
    <Suspense fallback={<h1>Downloading...</h1>}>
      <Routes>
        <Route path='/' element={<HomeView />} />
        <Route path='/about' element={<AboutView />} />
        <Route path='/contacts' element={<ContactsView />} />
        <Route path='/portfolio' element={<PortfolioView works={ porfolio.default }/>} />
      </Routes>
    </Suspense>
    {/* <ToastContainer position="top-right" theme="dark" autoClose='5000'/> */}
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </ThemeProvider>
);

export default App;
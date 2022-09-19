import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Header from './layout/header/Header'
import Bookmarks from './pages/bookmarks/Bookmarks'
import Home from './pages/home/Home'
import UpcomingLaunches from './pages/upcomingLaunches/UpcomingLaunches'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upcoming-launches" element={<UpcomingLaunches />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

import React from 'react'
import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <>
        <header>Header</header>
        <Outlet />
        <footer>Footer</footer>
    </>
  )
}

export default MainLayout
import React from 'react';
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from 'react-router-dom';
import MainLayout from '../MainLayout';
import HomePage from '../../pages/HomePage';
import HowItWorksPage from '../../pages/HowItWorksPage';
import NotFoundPage from '../../pages/NotFoundPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/how-it-works' element={<HowItWorksPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>,
  ),
);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;

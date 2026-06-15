import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/sign-in/index.jsx';
import CreatePostPage from './pages/articles/create/index.jsx';
import RootLayout from './components/Layout.jsx';
import RegisterPage from './pages/register/index.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<App />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='register' element={<RegisterPage />} />
        <Route path='articles'>
          <Route path='create' element={<CreatePostPage />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
);

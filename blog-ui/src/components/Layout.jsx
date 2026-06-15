import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { Toaster } from 'react-hot-toast';
export default function RootLayout() {
  return (
    <>
      <Navbar />
      <Toaster />
      <Outlet />
    </>
  );
}

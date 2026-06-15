import { HiOutlinePencilSquare } from 'react-icons/hi2';
import { RiQuillPenLine } from 'react-icons/ri';
import { MdOutlineLogout } from 'react-icons/md';
import { HiOutlineHome } from 'react-icons/hi2';

export default function Navbar() {
  return (
    <div className='navbar bg-base-100 border-b border-base-200 px-4 lg:px-8 sticky top-0 z-50'>
      <div className='navbar-start'>
        <div className='flex items-center gap-2 cursor-pointer'>
          <RiQuillPenLine className='text-primary text-2xl' />
          <span className='text-xl font-bold tracking-tight'>BlogSpace</span>
        </div>
      </div>

      <div className='navbar-end gap-2'>
        <button className='btn btn-ghost btn-sm gap-2 hidden sm:flex'>
          Home
        </button>
        <div className='dropdown dropdown-end'>
          <div
            tabIndex={0}
            role='button'
            className='avatar placeholder cursor-pointer'
          >
            <div className='bg-primary text-primary-content rounded-full w-9'>
              <span className='text-sm font-bold'></span>
            </div>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow-lg border border-base-200'
          >
            <li className='menu-title px-4 py-1'>
              <span className='text-xs text-base-content/50'>Ahmad Fauzi</span>
              <span className='text-xs text-base-content/40 font-normal'>
                ahmad@example.com
              </span>
            </li>
            <div className='divider my-1'></div>
            <li>
              <a onClick={() => navigate('login')} className='text-error gap-2'>
                <MdOutlineLogout className='text-base' />
                Keluar
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

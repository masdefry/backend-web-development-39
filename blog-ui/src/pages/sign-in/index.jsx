import { RiQuillPenLine } from 'react-icons/ri';
import { HiOutlineEnvelope, HiOutlineLockClosed } from 'react-icons/hi2';

export default function LoginPage() {
  return (
    <div className='min-h-screen bg-base-200 flex items-center justify-center px-4'>
      <div className='w-full max-w-md'>
        {/* Card */}
        <div className='card bg-base-100 shadow-sm border border-base-200'>
          {/* Logo */}
          <div className='text-center mt-7'>
            <div className='inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-2xl'>
              <RiQuillPenLine className='text-primary text-3xl' />
            </div>
            <h1 className='text-2xl tracking-tight'>
              Welcome in <span className='font-bold'>BlogSpace</span>
            </h1>
            <p className='text-sm text-base-content/50 mt-1'>
              Sign in into your account
            </p>
          </div>
          <div className='card-body gap-4'>
            {/* Email */}
            <label className='form-control w-full'>
              <div className='label pb-1'>
                <span className='label-text font-semibold text-sm'>Email</span>
              </div>
              <label className='input input-bordered flex items-center gap-2 w-full focus-within:outline-none focus-within:ring-0 focus-within:border-gray-400'>
                <HiOutlineEnvelope className='text-base-content/40 text-base shrink-0' />
                <input
                  type='email'
                  className='grow'
                  placeholder='nama@email.com'
                  defaultValue='ahmad@example.com'
                />
              </label>
            </label>

            {/* Password */}
            <label className='form-control w-full'>
              <div className='label pb-1'>
                <span className='label-text font-semibold text-sm'>
                  Password
                </span>
              </div>
              <label className='input input-bordered flex items-center gap-2 w-full focus-within:outline-none focus-within:ring-0 focus-within:border-gray-400'>
                <HiOutlineLockClosed className='text-base-content/40 text-base shrink-0' />
                <input
                  type='password'
                  className='grow focus:outline-none'
                  placeholder='••••••••'
                  defaultValue='123456'
                />
              </label>
              <div className='label pt-1'>
                <span className='label-text-alt text-base-content/40'>
                  Forgot password?
                </span>
              </div>
            </label>

            {/* Submit */}
            <button className='btn btn-primary w-full mt-1'>Sign In</button>

            <div className='divider text-xs text-base-content/40'>or</div>

            {/* Register link */}
            <p className='text-center text-sm text-base-content/60'>
              Don't have account?{' '}
              <span className='text-primary font-semibold cursor-pointer hover:underline'>
                Register now!
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

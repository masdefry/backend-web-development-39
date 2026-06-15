import { RiQuillPenLine } from 'react-icons/ri';
import { HiOutlineEnvelope, HiOutlineLockClosed } from 'react-icons/hi2';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerValidationSchema } from './../../features/register/schemas/register-validation-schema';
import axios from 'axios';
export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerValidationSchema),
  });

  const onHandleRegister = async ({ email, username, password, fullName }) => {
    try {
      await axios.post('http://localhost:8000/api/v1/auth/register', {
        email,
        username,
        password,
        fullName,
      });
    } catch (error) {
      console.log(error);
    }
  };

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
              Register your new account
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onHandleRegister)}
            className='card-body gap-4'
          >
            {/* FullName */}
            <label className='form-control w-full'>
              <div className='label pb-1'>
                <span className='label-text font-semibold text-sm'>
                  FullName
                </span>
              </div>
              <label className='input input-bordered flex items-center gap-2 w-full focus-within:outline-none focus-within:ring-0 focus-within:border-gray-400'>
                <HiOutlineEnvelope className='text-base-content/40 text-base shrink-0' />
                <input
                  type='text'
                  {...register('fullName')}
                  className='grow'
                  placeholder='John Doe '
                />
              </label>
              <span>{errors?.fullName && errors?.fullName?.message}</span>
            </label>

            {/* Email */}
            <label className='form-control w-full'>
              <div className='label pb-1'>
                <span className='label-text font-semibold text-sm'>Email</span>
              </div>
              <label className='input input-bordered flex items-center gap-2 w-full focus-within:outline-none focus-within:ring-0 focus-within:border-gray-400'>
                <HiOutlineEnvelope className='text-base-content/40 text-base shrink-0' />
                <input
                  type='text'
                  {...register('email')}
                  className='grow'
                  placeholder='johndoe@email.com'
                />
              </label>
              <span>{errors?.email && errors?.email?.message}</span>
            </label>

            {/* Username */}
            <label className='form-control w-full'>
              <div className='label pb-1'>
                <span className='label-text font-semibold text-sm'>
                  Username
                </span>
              </div>
              <label className='input input-bordered flex items-center gap-2 w-full focus-within:outline-none focus-within:ring-0 focus-within:border-gray-400'>
                <HiOutlineEnvelope className='text-base-content/40 text-base shrink-0' />
                <input
                  type='text'
                  {...register('username')}
                  className='grow'
                  placeholder='johndoe'
                />
              </label>
              <span>{errors?.username && errors?.username?.message}</span>
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
                  {...register('password')}
                  className='grow focus:outline-none'
                  placeholder='••••••••'
                />
              </label>
              <span>{errors?.password && errors?.password?.message}</span>
            </label>

            {/* Submit */}
            <button type='submit' className='btn btn-primary w-full mt-1'>
              Register Account
            </button>

            <div className='divider text-xs text-base-content/40'>or</div>

            {/* Login Link */}
            <p className='text-center text-sm text-base-content/60'>
              Already have account?{' '}
              <span className='text-primary font-semibold cursor-pointer hover:underline'>
                Login now!
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

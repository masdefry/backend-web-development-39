import { RiQuillPenLine } from 'react-icons/ri';
import { HiOutlineEnvelope, HiOutlineLockClosed } from 'react-icons/hi2';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginValidationSchema } from '../../features/sign-in/schemas/login-validation-schema';
import { axiosInstance } from '../../utils/axios-instance';
import toast from 'react-hot-toast';

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginValidationSchema),
  });

  const onHandleLogin = async ({ emailOrUsername, password }) => {
    try {
      const res = await axiosInstance.post('/auth/login', {
        usernameOrEmail: emailOrUsername,
        password,
      });

      toast.success(res?.data?.message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
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
              Sign in into your account
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onHandleLogin)}
            className='card-body gap-4'
          >
            {/* Email or Username */}
            <label className='form-control w-full'>
              <div className='label pb-1'>
                <span className='label-text font-semibold text-sm'>
                  User Account
                </span>
              </div>
              <label className='input input-bordered flex items-center gap-2 w-full focus-within:outline-none focus-within:ring-0 focus-within:border-gray-400'>
                <HiOutlineEnvelope className='text-base-content/40 text-base shrink-0' />
                <input
                  type='text'
                  {...register('emailOrUsername')}
                  className='grow'
                  placeholder='Email/Username'
                />
              </label>
              <span>
                {errors?.emailOrUsername && errors?.emailOrUsername?.message}
              </span>
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
            <button className='btn btn-primary w-full mt-1'>Sign In</button>

            <div className='divider text-xs text-base-content/40'>or</div>

            {/* Register link */}
            <p className='text-center text-sm text-base-content/60'>
              Don't have account?{' '}
              <span className='text-primary font-semibold cursor-pointer hover:underline'>
                Register now!
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

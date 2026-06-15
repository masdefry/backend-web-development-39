import {
  HiOutlineArrowLeft,
  HiOutlinePaperAirplane,
  HiOutlineTag,
} from 'react-icons/hi2';
import Navbar from '../../../components/Navbar';
import { useForm } from 'react-hook-form';
import { axiosInstance } from '../../../utils/axios-instance';
import useAuthStore from '../../../stores/useAuthStore';

const CATEGORIES = ['LIFESTYLE', 'POLITIC', 'SPORT', 'FASHION', 'RELIGIOUS'];

export default function CreatePostPage() {
  const {users} = useAuthStore()
  const { register, handleSubmit } = useForm();

  const onHandlePublishArticle = async ({
    title,
    exerpt,
    imageUrl,
    content,
    category,
  }) => {
    try {
      console.log({ title, exerpt, imageUrl, content, category });
      await axiosInstance.post('/articles', {title, exerpt, imageUrl, content, category}, {
        headers: {
          Authorization: users?.id
        }
      })
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='min-h-screen bg-base-200'>
      <div className='max-w-3xl mx-auto px-4 lg:px-8 py-8'>
        {/* Page Header */}
        <div className='flex items-center gap-3 mb-6'>
          <button className='btn btn-ghost btn-sm btn-circle'>
            <HiOutlineArrowLeft className='text-lg' />
          </button>
          <div>
            <h1 className='text-2xl font-bold tracking-tight'>
              Write New Article
            </h1>
            <p className='text-sm text-base-content/50 mt-0.5'>
              Share your knowledge to the world
            </p>
          </div>
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit(onHandlePublishArticle)}
          className='card bg-base-100 border border-base-200 shadow-sm'
        >
          <div className='card-body gap-5'>
            {/* Title */}
            <label className='form-control w-full'>
              <div className='label pb-1'>
                <span className='label-text font-semibold text-sm'>
                  Title of Article <span className='text-error'>*</span>
                </span>
                <span className='label-text-alt text-base-content/40'>
                  0/120
                </span>
              </div>
              <input
                type='text'
                {...register('title')}
                className='input input-bordered w-full'
                placeholder='Panduan Lengkap React Hooks untuk Pemula'
                maxLength={120}
              />
            </label>

            {/* Category */}
            <label className='form-control w-full'>
              <div className='label pb-1'>
                <span className='label-text font-semibold text-sm'>
                  Category
                </span>
              </div>
              <select
                {...register('category')}
                className='select select-bordered w-full'
              >
                {CATEGORIES.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </label>

            {/* Image URL */}
            <label className='form-control w-full'>
              <div className='label pb-1'>
                <span className='label-text font-semibold text-sm'>
                  Image URL of Article <span className='text-error'>*</span>
                </span>
              </div>
              <input
                type='text'
                {...register('imageUrl')}
                className='input input-bordered w-full'
                placeholder='https://blog-space.com/your-image-url'
                maxLength={120}
              />
            </label>

            {/* Excerpt */}
            <label className='form-control w-full'>
              <div className='label pb-1'>
                <span className='label-text font-semibold text-sm'>
                  Exerpt <span className='text-error'>*</span>
                </span>
                <span className='label-text-alt text-base-content/40'>
                  0/300
                </span>
              </div>
              <textarea
                {...register('exerpt')}
                className='textarea textarea-bordered w-full h-24 leading-relaxed'
                placeholder='Write short description of your article...'
                maxLength={300}
              />
            </label>

            {/* Content */}
            <label className='form-control w-full'>
              <div className='label pb-1'>
                <span className='label-text font-semibold text-sm'>
                  Content <span className='text-error'>*</span>
                </span>
                <span className='label-text-alt text-base-content/40'>
                  0/5000
                </span>
              </div>
              <textarea
                {...register('content')}
                className='textarea textarea-bordered w-full h-52 leading-relaxed'
                placeholder='Write article content of your article...'
                maxLength={5000}
              />
            </label>

            <div className='divider my-0'></div>

            {/* Actions */}
            <div className='flex justify-end gap-3'>
              <button className='btn btn-ghost btn-sm'>Cancel</button>
              <button type='submit' className='btn btn-primary btn-sm gap-2'>
                <HiOutlinePaperAirplane className='text-base' />
                Publish
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

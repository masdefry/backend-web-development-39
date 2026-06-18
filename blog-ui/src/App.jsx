import {
  HiOutlineMagnifyingGlass,
  HiOutlinePencilSquare,
} from 'react-icons/hi2';
import {
  HiOutlineDocumentText,
  HiOutlineTag,
  HiOutlineUserGroup,
} from 'react-icons/hi2';
import { PiArticleNyTimesFill } from 'react-icons/pi';
import { LuCircleFadingPlus } from 'react-icons/lu';
import Navbar from './components/Navbar';
import PostCard from './components/PostCard';
import DeleteModal from './components/DeleteModal';
import { Link } from 'react-router-dom';
import { axiosInstance } from './utils/axios-instance';
import { useEffect, useState } from 'react';
import useAuthStore from './stores/useAuthStore';

export default function App() {
  const { users } = useAuthStore();
  const [articleList, setArticleList] = useState([]);

  const onGetArticles = async () => {
    try {
      const res = await axiosInstance.get('/articles');
      console.log(res?.data?.data);
      setArticleList(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onGetArticles();
  }, []);

  return (
    <div className='min-h-screen bg-base-200'>
      <div className='max-w-5xl mx-auto px-4 lg:px-8 py-8'>
        {/* Header */}
        <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6'>
          <div>
            <h1 className='text-2xl font-bold tracking-tight'>Article Post</h1>
            <p className='text-sm text-base-content/50 mt-0.5'>
              Hello,{' '}
              <span className='font-semibold text-base-content/70'>
                Ahmad Fauzi
              </span>
              ! Enjoy reading 😊
            </p>
          </div>
          <Link
            to='/articles/create'
            className='btn btn-primary btn-sm gap-2 self-start sm:self-auto'
          >
            <LuCircleFadingPlus className='text-base' />
            Write Article
          </Link>
        </div>

        {/* Stats */}
        {/* <div className='stats stats-horizontal shadow-sm border border-base-200 bg-base-100 w-full mb-6'>
          <div className='stat'>
            <div className='stat-figure text-primary'>
              <HiOutlineDocumentText className='text-2xl' />
            </div>
            <div className='stat-title text-xs'>Total Post</div>
            <div className='stat-value text-primary text-2xl'>6</div>
          </div>
          <div className='stat'>
            <div className='stat-figure text-secondary'>
              <HiOutlineUserGroup className='text-2xl' />
            </div>
            <div className='stat-title text-xs'>Post Saya</div>
            <div className='stat-value text-secondary text-2xl'>2</div>
          </div>
          <div className='stat'>
            <div className='stat-figure text-accent'>
              <HiOutlineTag className='text-2xl' />
            </div>
            <div className='stat-title text-xs'>Kategori</div>
            <div className='stat-value text-accent text-2xl'>5</div>
          </div>
        </div> */}

        {/* Search & Filter */}
        <div className='flex flex-col sm:flex-row gap-3 mb-6'>
          <label className='input input-bordered flex items-center gap-2 flex-1'>
            <HiOutlineMagnifyingGlass className='text-base-content/40 text-base shrink-0' />
            <input
              type='text'
              className='grow'
              placeholder='Search title or author'
            />
          </label>
          <select className='select select-bordered w-full sm:w-44'>
            <option value='all'>Category</option>
          </select>
        </div>

        {/* Post Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {articleList.map((post) => (
            <Link key={post.id} to={`/articles/detail/${post.id}`}>
              <PostCard post={post} isOwner={post.userId === users?.id} />
            </Link>
          ))}
        </div>
        <div className='flex justify-end py-10'>
          <div className='join grid grid-cols-2'>
            <button className='join-item btn btn-outline'>Previous page</button>
            <button className='join-item btn btn-outline'>Next</button>
          </div>
        </div>
      </div>

      <DeleteModal />
    </div>
  );
}

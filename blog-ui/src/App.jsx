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

const DUMMY_POSTS = [
  {
    id: 1,
    title: 'Memulai Perjalanan dengan React.js',
    excerpt:
      'React adalah library JavaScript yang powerful untuk membangun UI. Pelajari konsep dasar component, props, dan state dalam artikel ini.',
    category: 'React',
    tags: ['javascript', 'react', 'frontend'],
    author: 'Ahmad Fauzi',
    date: '12 Jun 2025',
    authorId: 1,
  },
  {
    id: 2,
    title: 'Panduan Lengkap REST API dengan Express.js',
    excerpt:
      'Bangun backend yang robust menggunakan Express.js. Dari routing, middleware, sampai error handling — semua dibahas tuntas.',
    category: 'Backend',
    tags: ['nodejs', 'express', 'api'],
    author: 'Siti Rahayu',
    date: '10 Jun 2025',
    authorId: 2,
  },
  {
    id: 3,
    title: 'Database Design: PostgreSQL Best Practices',
    excerpt:
      'Rancang schema database yang scalable dan efisien. Indexing, normalisasi, dan query optimization dijelaskan dengan contoh nyata.',
    category: 'Database',
    tags: ['postgresql', 'database', 'sql'],
    author: 'Budi Santoso',
    date: '8 Jun 2025',
    authorId: 3,
  },
  {
    id: 4,
    title: 'Memahami JWT Authentication dari Nol',
    excerpt:
      'JSON Web Token adalah standar industri untuk autentikasi stateless. Artikel ini membahas cara kerja, implementasi, dan best practices keamanannya.',
    category: 'Backend',
    tags: ['jwt', 'auth', 'security'],
    author: 'Ahmad Fauzi',
    date: '5 Jun 2025',
    authorId: 1,
  },
  {
    id: 5,
    title: 'Tailwind CSS: Utility-First yang Mengubah Cara Kita Styling',
    excerpt:
      'Tingkatkan produktivitas styling dengan pendekatan utility-first. Tidak perlu lagi bolak-balik file CSS — semua ada di satu tempat.',
    category: 'UI/UX',
    tags: ['tailwind', 'css', 'design'],
    author: 'Rina Kartika',
    date: '3 Jun 2025',
    authorId: 4,
  },
  {
    id: 6,
    title: 'Docker untuk Developer: Dari Nol Sampai Deploy',
    excerpt:
      'Containerisasi aplikasimu dengan Docker. Mulai dari konsep image, container, volume, hingga docker-compose untuk development workflow.',
    category: 'DevOps',
    tags: ['docker', 'devops', 'deployment'],
    author: 'Dani Pratama',
    date: '1 Jun 2025',
    authorId: 5,
  },
];

const CURRENT_USER_ID = 1;

export default function App() {
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
          {DUMMY_POSTS.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              isOwner={post.authorId === CURRENT_USER_ID}
            />
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

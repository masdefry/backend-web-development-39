import {
  HiOutlineCalendar,
  HiOutlineUser,
  HiOutlinePencil,
  HiOutlineTrash,
} from 'react-icons/hi2';
import { BsThreeDots } from 'react-icons/bs';
import { formatInTimeZone } from 'date-fns-tz';

export default function PostCard({ post, isOwner = false }) {
  return (
    <div className='card bg-base-100 border border-base-200 hover:shadow-md transition-shadow duration-200'>
      <div className='card-body gap-3'>
        {/* Category + Owner badge */}
        <div className='flex items-center gap-2 flex-wrap'>
          <span className='border p-1 rounded-xs font-bold badge-primary badge-outline text-xs'>
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h2 className='card-title text-base font-bold leading-snug hover:text-primary cursor-pointer transition-colors'>
          {post.title}
        </h2>

        {/* Excerpt */}
        <p className='text-sm text-base-content/60 leading-relaxed line-clamp-2'>
          {post?.exerpt}
        </p>

        <div className='divider my-0'></div>

        {/* Meta + Actions */}
        <div className='flex items-center justify-between gap-2 flex-wrap'>
          <div className='flex items-center gap-3 text-xs text-base-content/50'>
            <span className='flex items-center gap-1'>
              <HiOutlineUser className='text-sm' />
              {post?.users?.fullName}
            </span>
            <span className='flex items-center gap-1'>
              <HiOutlineCalendar className='text-sm' />
              {formatInTimeZone(
                new Date(post?.createdAt),
                'Asia/Jakarta',
                'yyyy MMMM dd HH:mm:ss',
              )}
            </span>
          </div>

          {isOwner && (
            <div className='flex items-center gap-2'>
              <div className='dropdown dropdown-end'>
                <div
                  tabIndex={0}
                  role='button'
                  className='avatar placeholder cursor-pointer'
                >
                  <BsThreeDots size={20} />
                </div>
                <ul
                  tabIndex={0}
                  className='menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 shadow-lg border border-base-200'
                >
                  <li className='py-1'>
                    <button className='btn btn-ghost btn-xs text-gray-500 gap-1'>
                      Edit
                    </button>
                    <button
                      className='btn btn-ghost btn-xs text-error gap-1'
                      onClick={() =>
                        document.getElementById('modal_delete').showModal()
                      }
                    >
                      Delete
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

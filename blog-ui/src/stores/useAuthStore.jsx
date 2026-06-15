import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create()(
  persist(
    (set) => ({
      users: {
        username: '',
        email: '',
        id: '',
        fullName: ''
      },
      setAuth: (payload) =>
        set((_) => ({
          users: payload,
        })),
    }),
    {
      name: 'users',
      partialize: (state) => ({
        users: { id: state?.users?.id },
      }),
    },
  ),
);

export default useAuthStore;

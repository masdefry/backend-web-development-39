import { HiOutlineTrash } from "react-icons/hi2";

export default function DeleteModal() {
  return (
    <dialog id="modal_delete" className="modal">
      <div className="modal-box max-w-sm text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-error/10 rounded-full p-4">
            <HiOutlineTrash className="text-error text-3xl" />
          </div>
        </div>
        <h3 className="font-bold text-lg mb-1">Hapus Post?</h3>
        <p className="text-sm text-base-content/60 mb-6">
          Post ini akan dihapus secara permanen dan tidak bisa dikembalikan.
        </p>
        <div className="flex gap-3 justify-center">
          <form method="dialog">
            <button className="btn btn-ghost btn-sm">Batal</button>
          </form>
          <form method="dialog">
            <button className="btn btn-error btn-sm">Ya, Hapus</button>
          </form>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

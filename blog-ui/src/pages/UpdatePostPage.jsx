import { HiOutlineArrowLeft, HiOutlineTag, HiOutlineBookmarkSquare } from "react-icons/hi2";
import Navbar from "../components/Navbar";

const CATEGORIES = [
  "React", "Vue", "Angular", "Backend", "Database",
  "DevOps", "Mobile", "UI/UX", "Tutorial", "Tips & Tricks",
];

// Dummy existing post data untuk ditampilkan di form
const EXISTING_POST = {
  title: "Memulai Perjalanan dengan React.js",
  category: "React",
  tags: ["javascript", "react", "frontend"],
  excerpt:
    "React adalah library JavaScript yang powerful untuk membangun UI. Pelajari konsep dasar component, props, dan state dalam artikel ini.",
  content:
    "React adalah library JavaScript yang dikembangkan oleh Facebook. Dengan konsep Virtual DOM, React memungkinkan pembuatan UI yang cepat dan efisien. Kita bisa memecah UI menjadi komponen-komponen kecil yang reusable, membuat kode lebih mudah dipelihara dan dikembangkan.",
};

export default function UpdatePostPage({ navigate }) {
  return (
    <div className="min-h-screen bg-base-200">
      <Navbar navigate={navigate} />

      <div className="max-w-3xl mx-auto px-4 lg:px-8 py-8">
        {/* Page Header */}
        <div className="flex items-center gap-3 mb-6">
          <button
            className="btn btn-ghost btn-sm btn-circle"
            onClick={() => navigate("list")}
          >
            <HiOutlineArrowLeft className="text-lg" />
          </button>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Edit Post</h1>
            <p className="text-sm text-base-content/50 mt-0.5">
              Perbarui konten postmu
            </p>
          </div>
        </div>

        {/* Last edited info */}
        <div className="alert alert-info mb-5 py-3">
          <span className="text-sm">
            Terakhir diperbarui: <strong>12 Jun 2025, 14:30 WIB</strong>
          </span>
        </div>

        {/* Form Card */}
        <div className="card bg-base-100 border border-base-200 shadow-sm">
          <div className="card-body gap-5">
            {/* Title */}
            <label className="form-control w-full">
              <div className="label pb-1">
                <span className="label-text font-semibold text-sm">
                  Judul Post <span className="text-error">*</span>
                </span>
                <span className="label-text-alt text-base-content/40">
                  {EXISTING_POST.title.length}/120
                </span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full"
                defaultValue={EXISTING_POST.title}
                maxLength={120}
              />
            </label>

            {/* Category + Tags row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Category */}
              <label className="form-control w-full">
                <div className="label pb-1">
                  <span className="label-text font-semibold text-sm">Kategori</span>
                </div>
                <select
                  className="select select-bordered w-full"
                  defaultValue={EXISTING_POST.category}
                >
                  {CATEGORIES.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </label>

              {/* Tags */}
              <label className="form-control w-full">
                <div className="label pb-1">
                  <span className="label-text font-semibold text-sm">Tags</span>
                  <span className="label-text-alt text-base-content/40">maks. 5</span>
                </div>
                <label className="input input-bordered flex items-center gap-2">
                  <HiOutlineTag className="text-base-content/40 text-base shrink-0" />
                  <input
                    type="text"
                    className="grow"
                    placeholder="Ketik lalu tekan Enter..."
                  />
                </label>
                {/* Existing tags */}
                <div className="flex flex-wrap gap-1 mt-2">
                  {EXISTING_POST.tags.map((tag) => (
                    <span
                      key={tag}
                      className="badge badge-primary badge-outline gap-1 cursor-pointer hover:badge-error transition-all"
                    >
                      #{tag}
                      <span className="text-xs leading-none">×</span>
                    </span>
                  ))}
                </div>
              </label>
            </div>

            {/* Excerpt */}
            <label className="form-control w-full">
              <div className="label pb-1">
                <span className="label-text font-semibold text-sm">
                  Ringkasan <span className="text-error">*</span>
                </span>
                <span className="label-text-alt text-base-content/40">
                  {EXISTING_POST.excerpt.length}/300
                </span>
              </div>
              <textarea
                className="textarea textarea-bordered w-full h-24 leading-relaxed"
                defaultValue={EXISTING_POST.excerpt}
                maxLength={300}
              />
            </label>

            {/* Content */}
            <label className="form-control w-full">
              <div className="label pb-1">
                <span className="label-text font-semibold text-sm">
                  Konten Lengkap <span className="text-error">*</span>
                </span>
                <span className="label-text-alt text-base-content/40">
                  {EXISTING_POST.content.length}/5000
                </span>
              </div>
              <textarea
                className="textarea textarea-bordered w-full h-52 leading-relaxed"
                defaultValue={EXISTING_POST.content}
                maxLength={5000}
              />
            </label>

            <div className="divider my-0"></div>

            {/* Actions */}
            <div className="flex justify-end gap-3">
              <button
                className="btn btn-ghost btn-sm"
                onClick={() => navigate("list")}
              >
                Batal
              </button>
              <button className="btn btn-primary btn-sm gap-2">
                <HiOutlineBookmarkSquare className="text-base" />
                Simpan Perubahan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

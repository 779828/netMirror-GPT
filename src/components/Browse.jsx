import { BROWSE_BG } from "../utils/constants";
import Header from "./Header";

const Browse = () => {

  return (
    <>
      <Header />
      <div className="relative h-full sm:min-h-screen">
        <img
          className="h-screen w-full fixed"
          src={BROWSE_BG}
          alt="bg-img"
        />
        <div className="absolute flex top-28 left-0 right-0 flex-wrap justify-center gap-4 px-4">
          <div className="text-white h-64 w-48 rounded-xl bg-gradient-to-t from-yellow-700 shadow-lg sm:h-72 sm:w-56">
            <img
              className="rounded-t-xl h-32 w-full object-cover sm:h-40"
              src="https://wallpapergod.com/images/hd/netflix-2000X1122-wallpaper-z16yswlqxnwom6wk.jpeg"
              alt="logo"
            />
            <div>
              <div>
                <button className="ml-2 mt-2 rounded-lg p-2 text-xs bg-slate-400 w-1/4 sm:text-sm">
                  Add
                </button>
                <button className="ml-2 mt-2 rounded-lg p-2 text-xs bg-blue-500 w-1/4 sm:text-sm">
                  LIKE
                </button>
                <button className="ml-2 mt-2 rounded-lg p-2 text-xs bg-red-500 w-1/3 sm:text-sm">
                  DELETE
                </button>
              </div>
            </div>
          </div>
          <div className="text-white h-64 w-48 rounded-xl bg-gradient-to-t from-gray-500 shadow-lg sm:h-72 sm:w-56">
            <img
              className="rounded-t-xl h-32 w-full object-cover sm:h-40"
              src="https://wallpapercat.com/w/full/6/a/e/115875-1920x1080-desktop-full-hd-netflix-background-image.jpg"
              alt="logo"
            />
            <div>
              <button
                className="ml-2 mt-2 rounded-lg p-2 text-sm bg-slate-400 w-1/4"
                onClick={() => {}}
              >
                Add
              </button>
              <button className="ml-2 mt-2 rounded-lg p-2 text-sm bg-blue-500 w-1/4">
                LIKE
              </button>
              <button className="ml-2 mt-2 rounded-lg p-2 text-sm bg-red-500 w-1/3">
                DELETE
              </button>
            </div>
          </div>
          <div className="text-white h-64 w-48 rounded-xl bg-gradient-to-t from-red-500 shadow-lg sm:h-72 sm:w-56">
            <img
              className="rounded-t-xl h-32 w-full object-cover sm:h-40"
              src="https://img.freepik.com/free-psd/3d-cinema-blank-banner-background_23-2150822410.jpg"
              alt="logo"
            />
            <div>
              <button
                className="ml-2 mt-2 rounded-lg p-2 text-sm bg-slate-400 w-1/4"
                onClick={() => {}}
              >
                Add
              </button>
              <button className="ml-2 mt-2 rounded-lg p-2 text-sm bg-blue-500 w-1/4">
                LIKE
              </button>
              <button className="ml-2 mt-2 rounded-lg p-2 text-sm bg-red-500 w-1/3">
                DELETE
              </button>
            </div>
          </div>
          <div className="text-white h-64 w-48 rounded-xl bg-gradient-to-t from-teal-500 shadow-lg sm:h-72 sm:w-56">
            <img
              className="rounded-t-xl h-32 w-full object-cover sm:h-40"
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8205b9c-5815-4d27-8dd8-6c258c452145/dakndej-3c5e495e-6007-465c-b290-1f07938f0ff1.jpg/v1/fill/w_1024,h_670,q_75,strp/netflix_logo_underwater_background_wallpaper_by_espioartwork_102_dakndej-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjcwIiwicGF0aCI6IlwvZlwvZTgyMDViOWMtNTgxNS00ZDI3LThkZDgtNmMyNThjNDUyMTQ1XC9kYWtuZGVqLTNjNWU0OTVlLTYwMDctNDY1Yy1iMjkwLTFmMDc5MzhmMGZmMS5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.krsIE-nKqnlqdnTN2zCXiHhAFKcxMwc-QgZeBvvMyYg"
              alt="logo"
            />
            <div>
              <button
                className="ml-2 mt-2 rounded-lg p-2 text-sm bg-slate-400 w-1/4"
                onClick={() => {}}
              >
                Add
              </button>
              <button className="ml-2 mt-2 rounded-lg p-2 text-sm bg-blue-500 w-1/4">
                LIKE
              </button>
              <button className="ml-2 mt-2 rounded-lg p-2 text-sm bg-red-500 w-1/3">
                DELETE
              </button>
            </div>
          </div>
        </div>
        {/* <span>Hey you are on Browse Page. Thank You!</span> */}
      </div>
    </>
  )
};

export default Browse;

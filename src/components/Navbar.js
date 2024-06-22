import { ShoppingCartIcon, SearchIcon, MoonIcon } from '@heroicons/react/outline';
const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center">
          <div className="bg-teal-500 rounded-full w-12 h-12 flex items-center justify-center mr-3">
            <span className="text-white text-2xl font-bold">m</span>
          </div>
          <span className="text-xl font-bold text-gray-800">MyCourse.io</span>
        </a>

        <div className="flex items-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for course"
              className="px-5 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
            />
            <SearchIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-600" />
          </div>

          <a href="/become-instructor" className="ml-4 text-gray-600 hover:text-gray-800">
            Become Instructor
          </a>

          <div className="ml-4">
            <a href="/cart" className="text-gray-600 hover:text-gray-800">
              <ShoppingCartIcon className="h-6 w-6" />
            </a>
          </div>

          <a href="/login" className="ml-4 px-3 py-2 rounded-lg border border-gray-300 text-gray-600 hover:text-gray-800">
            Login
          </a>

          <a href="/signup" className="ml-4 px-3 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 flex items-center">
            <span>Sign Up</span>
            <div className="border border-white rounded-full p-1 ml-2">
              <MoonIcon className="h-4 w-4 text-white-500" />
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

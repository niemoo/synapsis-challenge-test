import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="p-3 bg-teal-400 shadow-lg">
      <nav className="max-w-screen-md mx-auto flex justify-center gap-5">
        <Link href="/" className="p-2 hover:bg-teal-500 text-white rounded-xl">
          Home
        </Link>
        <Link href="/posts" className="p-2 hover:bg-teal-500 text-white rounded-xl">
          Posts
        </Link>
        <Link href="/users" className="p-2 hover:bg-teal-500 text-white rounded-xl">
          Users
        </Link>
        <Link href="/history" className="p-2 hover:bg-teal-500 text-white rounded-xl">
          History
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;

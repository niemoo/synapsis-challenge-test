import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="bg-red-500">
      <Link href="/">Home</Link>
      <Link href="/posts">Posts</Link>
      <Link href="/users">Users</Link>
    </header>
  );
};

export default Navbar;

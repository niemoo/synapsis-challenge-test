import Link from 'next/link';

const Header = ({ title, linkHref }) => {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex items-center">
        <div className="border-l-2 border-red-500 h-6 mr-2"></div> {/* Vertical line */}
        <h1 className="my-3 text-xl font-semibold">{title}</h1>
      </div>
      {linkHref ? (
        <Link href={linkHref} className="text-xs text-white py-1 px-2 bg-emerald-500 hover:bg-emerald-700 rounded-md transition-all">
          See All
        </Link>
      ) : null}
    </div>
  );
};

export default Header;

import Link from 'next/link';

const Header = ({ title, linkHref }) => {
  return (
    <div className="flex justify-between items-center w-full mt-5">
      <div className="flex items-center">
        <div className="border-l-2 border-teal-500 h-6 mr-2"></div> {/* Vertical line */}
        <h1 className="my-3 text-xl font-semibold">{title}</h1>
      </div>
      {linkHref ? (
        <Link href={linkHref} className="text-xs text-white py-1 px-2 bg-teal-500 hover:bg-teal-700 rounded-md transition-all">
          See All
        </Link>
      ) : null}
    </div>
  );
};

export default Header;

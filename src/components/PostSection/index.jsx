import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';

const PostSection = ({ data }) => {
  const limitTitleText = (text, limit) => {
    return text.length > limit ? `${text.slice(0, limit)}...` : text;
  };

  const limitBodyText = (text, limit) => {
    return text.length > limit ? `${text.slice(0, limit)}...` : text;
  };

  return (
    <section className="grid md:grid-cols-5 sm:grid-cols-3  gap-5">
      {data?.map((data) => {
        return (
          <div key={data.id} className="relative p-4 w-full border border-gray-500 rounded-xl bg-white shadow-xl">
            <h1 className="font-semibold flex-grow mb-5 line-clamp-2">{limitTitleText(data.title, 50)}</h1>
            <hr className="mb-5" />
            <p className="flex-grow text-gray-600 mb-10">{limitBodyText(data.body, 150)}</p>

            <Link href={`/post/${data.id}`} className="absolute bottom-2 right-2 bg-emerald-300 hover:bg-emerald-500 rounded-full p-3">
              <FaExternalLinkAlt className="text-xl" />
            </Link>
          </div>
        );
      })}
    </section>
  );
};

export default PostSection;

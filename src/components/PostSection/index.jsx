const PostSection = ({ data }) => {
  const limitTitleText = (text, limit) => {
    return text.length > limit ? `${text.slice(0, limit)}...` : text;
  };

  const limitBodyText = (text, limit) => {
    return text.length > limit ? `${text.slice(0, limit)}...` : text;
  };

  return (
    <section className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-5">
      {data.map((data) => {
        return (
          <div key={data.id} className="p-4 w-full border border-gray-500 rounded-xl bg-white shadow-xl">
            <h1 className="font-semibold flex-grow mb-5 line-clamp-2">{limitTitleText(data.title, 50)}</h1>
            <hr className="mb-5" />
            <p className="flex-grow text-gray-600">{limitBodyText(data.body, 150)}</p>
          </div>
        );
      })}
    </section>
  );
};

export default PostSection;

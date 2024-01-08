const PostSection = ({ data }) => {
  return (
    <section className="flex gap-5">
      {data.map((data) => {
        return (
          <div key={data.id} className="p-4 w-1/5 border border-gray-500 rounded-xl bg-white shadow-xl">
            <h1 className="font-semibold mb-5">{data.title}</h1>
            <hr className="mb-5" />
            <p className="flex-grow text-gray-600">{data.body}</p>
          </div>
        );
      })}
    </section>
  );
};

export default PostSection;

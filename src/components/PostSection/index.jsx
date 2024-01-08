const PostSection = ({ data }) => {
  return (
    <section className="flex gap-5">
      {data.map((data) => {
        return (
          <div key={data.id} className="p-4 border border-white rounded-xl text-white">
            <h1 className="mb-10">{data.title}</h1>
            <p className="flex-grow">{data.body}</p>
          </div>
        );
      })}
    </section>
  );
};

export default PostSection;

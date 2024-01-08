import { getSpecifiedPostData, getSpecifiedCommentData } from '@/app/libs/api-libs';

const SpecifiedPage = async ({ params: { id } }) => {
  const postdata = await getSpecifiedPostData(`/posts/${id}`);
  const commentdata = await getSpecifiedCommentData(`/${id}`);
  console.log(commentdata);

  return (
    <div className="max-w-screen-md mx-auto border border-black rounded-md p-5">
      <h1 className="font-bold text-2xl mb-5">{postdata.title}</h1>
      <p>{postdata.body}</p>

      <section className="mt-20">
        <h1 className="font-bold text-xl mb-5">Comments</h1>
        <hr />
        <div className="flex flex-col gap-10 mt-5">
          {commentdata.map((comment) => (
            <div key={comment.id}>
              <div className="md:flex gap-2">
                <h3 className="font-semibold">{comment.name}</h3>
                <h3 className="hidden md:inline">|</h3>
                <h3 className="text-gray-600">{comment.email}</h3>
              </div>
              <p className="mt-3">{comment.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SpecifiedPage;

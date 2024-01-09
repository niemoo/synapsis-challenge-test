import { getSpecifiedPostData, getSpecifiedCommentData } from '@/app/libs/api-libs';
import { IoArrowBackCircle } from 'react-icons/io5';
import Link from 'next/link';

const SpecifiedPage = async ({ params: { id } }) => {
  const postdata = await getSpecifiedPostData(`/posts/${id}`);

  const commentdata = await getSpecifiedCommentData(`/${id}`);

  return (
    <main className="md:flex md:justify-center md:gap-5 max-w-screen-md mx-auto p-5">
      <div>
        <Link href="/posts">
          <IoArrowBackCircle className="text-4xl text-teal-500 hover:text-teal-700" />
        </Link>
      </div>
      <section className="border border-gray-500 rounded-md shadow-xl p-5">
        <h1 className="font-bold text-2xl mb-5">{postdata.title}</h1>
        <p>{postdata.body}</p>

        <section className="mt-20">
          <h1 className="font-bold text-xl mb-5">Comments</h1>
          <hr />
          <div className="flex flex-col gap-5 mt-5">
            {commentdata.length === 0 ? (
              <p className="flex justify-center text-gray-500">- No comments -</p>
            ) : (
              commentdata.map((comment) => (
                <div key={comment.id} className="border border-gray-300 rounded-md p-2">
                  <div className="md:flex gap-2">
                    <h3 className="font-semibold">{comment.name}</h3>
                    <h3 className="hidden md:inline">|</h3>
                    <h3 className="text-gray-600">{comment.email}</h3>
                  </div>
                  <hr className="my-2" />
                  <p>{comment.body}</p>
                </div>
              ))
            )}
          </div>
        </section>
      </section>
    </main>
  );
};

export default SpecifiedPage;

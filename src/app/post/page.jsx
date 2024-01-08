'use client';
import Header from '@/components/Header';
import { useEffect, useState } from 'react';
import { getDataResponse } from '../libs/api-libs';

const Post = () => {
  const [postData, setPostData] = useState();
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDataResponse('/posts', `page=${page}&per_page=5`);
        setPostData(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [page]);

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage((prevState) => prevState - 1);
    }
  };

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
  };

  return (
    <main className="max-w-screen-xl mx-auto">
      <Header title={`All Post #${page}`} />
      <section className="flex gap-5">
        {postData?.map((postData) => (
          <div key={postData.id} className="p-4 w-1/5 border border-gray-500 rounded-xl bg-white shadow-xl">
            <h1 className="font-semibold mb-5">{postData.title}</h1>
            <hr className="mb-5" />
            <p className="flex-grow text-gray-600">{postData.body}</p>
          </div>
        ))}
      </section>

      {/* Pagination */}
      <div className="flex justify-center mt-10">
        <button onClick={handlePreviousPage} className="font-semibold hover:bg-white rounded-md py-2 px-3">
          {`< Previous`}
        </button>
        <h1 className="flex items-center mx-5 font-semibold">{page}</h1>
        <button onClick={handleNextPage} className="font-semibold hover:bg-white rounded-md py-2 px-3">
          {`Next >`}
        </button>
      </div>
    </main>
  );
};

export default Post;

'use client';
import Header from '@/components/Header';
import PostSection from '@/components/PostSection';
import { useEffect, useState } from 'react';
import { getDataResponse } from '../libs/api-libs';

const Posts = () => {
  const [postData, setPostData] = useState();
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDataResponse('/posts', `page=${page}&per_page=20`);
        setPostData(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [page]);

  const scrollTop = () => {
    scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      scrollTop();
      setPage((prevState) => prevState - 1);
    }
  };

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };

  return (
    <main className="max-w-screen-xl mx-auto">
      <Header title={`All Post #${page}`} />
      <PostSection data={postData} />

      {/* Pagination */}
      <div className="flex justify-center mt-10">
        <button onClick={handlePreviousPage} className={`font-semibold rounded-md py-2 px-3 ${page === 1 ? 'text-zinc-500' : 'hover:bg-white'}`} disabled={page === 1}>
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

export default Posts;

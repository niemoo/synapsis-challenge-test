'use client';
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
    <section className="text-white">
      <h1>asd</h1>
      {postData?.map((postData) => (
        <div key={postData.id} className="">
          <h1 className="bg-red-500">{postData.title}</h1>
          <p className="bg-blue-500">{postData.body}</p>
        </div>
      ))}

      {/* Pagination */}
      <div>
        <button onClick={handlePreviousPage}>Previous</button>
        <h1>{page}</h1>
        <button onClick={handleNextPage}>Next</button>
      </div>
    </section>
  );
};

export default Post;

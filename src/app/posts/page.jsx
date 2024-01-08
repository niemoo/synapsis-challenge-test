'use client';
import Header from '@/components/utils/Header';
import PostSection from '@/components/PostSection';
import Pagination from '@/components/utils/Pagination';
import { useEffect, useState } from 'react';
import { getDataResponse } from '../libs/api-libs';

const PostsPage = () => {
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

  return (
    <main className="max-w-screen-xl mx-auto p-5">
      <Header title={`All Post #${page}`} />
      <PostSection data={postData} />
      <Pagination page={page} setPage={setPage} />
    </main>
  );
};

export default PostsPage;

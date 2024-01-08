import Header from '@/components/utils/Header';
import PostSection from '@/components/PostSection';
import { getDataResponse } from './libs/api-libs';

const Home = async () => {
  const postData = await getDataResponse('/posts', 'page=1&per_page=10');

  return (
    <main className="flex flex-col items-center max-w-screen-xl mx-auto p-5">
      <Header title="Post" linkHref="/posts" />
      <PostSection data={postData} />
    </main>
  );
};

export default Home;

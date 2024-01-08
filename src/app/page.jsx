import Header from '@/components/Header';
import PostSection from '@/components/PostSection';
import { getDataResponse } from './libs/api-libs';

const Home = async () => {
  const postData = await getDataResponse('/posts', 'page=1&per_page=5');

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Header title="Post" linkHref="/post" />
      <PostSection data={postData} />
    </main>
  );
};

export default Home;

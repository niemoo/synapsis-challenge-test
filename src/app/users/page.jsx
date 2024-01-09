import UsersList from '@/components/UsersList';
import { getDataResponse } from '../libs/api-libs';

const UsersPage = async () => {
  const data = await getDataResponse('/users', 'page=1&per_page=10');

  return (
    <main className="max-w-screen-md mx-auto p-5">
      <UsersList data={data} />
    </main>
  );
};

export default UsersPage;

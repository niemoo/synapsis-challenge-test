import { getDataResponse } from '@/app/libs/api-libs';
import Header from '@/components/utils/Header';
import UsersList from '@/components/UsersList';
import SearchBar from '@/components/SearchBar';

const SearchPage = async ({ params: { keyword } }) => {
  const decodedKeyword = decodeURI(keyword);
  const data = await getDataResponse('/users', `name=${keyword}`);

  return (
    <main className="max-w-screen-md mx-auto p-5">
      <SearchBar />
      <Header title={`Results found : ${decodedKeyword}`} />
      <UsersList data={data} />
    </main>
  );
};

export default SearchPage;

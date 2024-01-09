'use client';

import { getDataResponse } from '@/app/libs/api-libs';
import Header from '@/components/utils/Header';
import UsersList from '@/components/UsersList';
import SearchBar from '@/components/SearchBar';
import { useEffect, useState } from 'react';

const SearchPage = ({ params: { keyword } }) => {
  const [data, setData] = useState();
  const decodedKeyword = decodeURI(keyword);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDataResponse('/users', `name=${keyword}`);
        setData(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <main className="max-w-screen-md mx-auto p-5">
      <SearchBar />
      <Header title={`Results found : ${decodedKeyword}`} />
      <UsersList data={data} />
    </main>
  );
};

export default SearchPage;

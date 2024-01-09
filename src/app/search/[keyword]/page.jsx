'use client';

import { getDataResponse } from '@/app/libs/api-libs';
import { IoArrowBackCircle } from 'react-icons/io5';
import Header from '@/components/utils/Header';
import UsersList from '@/components/UsersList';
import SearchBar from '@/components/SearchBar';
import { useEffect, useState } from 'react';
import Link from 'next/link';

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
    <main className="md:flex md:justify-center md:gap-5 max-w-screen-md mx-auto p-5">
      <div>
        <Link href="/users">
          <IoArrowBackCircle className="text-4xl text-teal-500 hover:text-teal-700" />
        </Link>
      </div>
      <div className="w-full">
        <SearchBar />
        <Header title={`Results found : ${decodedKeyword}`} />
        <UsersList data={data} />
      </div>
    </main>
  );
};

export default SearchPage;

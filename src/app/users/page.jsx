'use client';
import AddBar from '@/components/AddButton';
import SearchBar from '@/components/SearchBar';
import UsersList from '@/components/UsersList';
import Pagination from '@/components/utils/Pagination';
import { useEffect, useState } from 'react';
import { getDataResponse } from '../libs/api-libs';

const UsersPage = () => {
  const [usersData, setUsersData] = useState();
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDataResponse('/users', `page=${page}&per_page=10`);
        setUsersData(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [page]);

  return (
    <main className="max-w-screen-md mx-auto p-5">
      <SearchBar />
      <AddBar />
      <UsersList data={usersData} />
      <Pagination page={page} setPage={setPage} />
    </main>
  );
};

export default UsersPage;

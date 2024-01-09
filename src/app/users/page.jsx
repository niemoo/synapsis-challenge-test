'use client';
import AddButton from '@/components/Button';
import SearchBar from '@/components/SearchBar';
import UsersList from '@/components/UsersList';
import Pagination from '@/components/utils/Pagination';
import AddModal from '@/components/AddModal';
import { IoPersonAdd } from 'react-icons/io5';
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
      <AddButton title="Add New Data" icon={<IoPersonAdd className="text-xl" />} modal={AddModal} className=" bg-green-400 hover:bg-green-500" />
      <UsersList data={usersData} />
      <Pagination page={page} setPage={setPage} />
    </main>
  );
};

export default UsersPage;

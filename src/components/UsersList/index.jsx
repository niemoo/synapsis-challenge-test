import { FaUserEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';

const UsersList = ({ data }) => {
  return (
    <section className="flex flex-col gap-5">
      {data?.map((user) => (
        <div key={user.id} className="border border-gray-500 rounded-md p-5 shadow-md">
          <div>
            <h2 className="font-semibold mb-2">{user.name}</h2>
            <h3 className="text-sm text-gray-500">Id : {user.id}</h3>
            <h3 className="text-sm text-gray-500">Email : {user.email}</h3>
            <h3 className="text-sm text-gray-500">Gender : {user.gender}</h3>
            <h3 className="text-sm text-gray-500">Status : {user.status}</h3>
          </div>
          <div className="flex gap-5 mt-5">
            <button className="flex items-center gap-2 bg-green-400 hover:bg-green-500 border border-gray-400 py-1 px-2 rounded-md">
              <FaUserEdit />
              <p>Edit Data</p>
            </button>
            <button className="flex items-center gap-2 bg-red-500 hover:bg-red-700 border border-gray-400 py-1 px-2 rounded-md">
              <MdDeleteForever />
              <p>Delete Data</p>
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default UsersList;

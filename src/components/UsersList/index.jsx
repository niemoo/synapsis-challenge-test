const UsersList = ({ data }) => {
  return (
    <section className="flex flex-col gap-5">
      {data?.map((user) => (
        <div key={user.id} className="border border-gray-500 rounded-md p-5">
          <h2 className="font-semibold mb-2">{user.name}</h2>
          <h3 className="text-sm text-gray-500">Id : {user.id}</h3>
          <h3 className="text-sm text-gray-500">Email : {user.email}</h3>
          <h3 className="text-sm text-gray-500">Gender : {user.gender}</h3>
          <h3 className="text-sm text-gray-500">Status : {user.status}</h3>
        </div>
      ))}
    </section>
  );
};

export default UsersList;

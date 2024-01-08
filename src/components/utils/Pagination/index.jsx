const Pagination = ({ page, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      scrollTop();
      setPage((prevState) => prevState - 1);
    }
  };

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };

  return (
    <section className="flex justify-center mt-10">
      <button onClick={handlePreviousPage} className={`font-semibold rounded-md py-2 px-3 ${page === 1 ? 'text-zinc-500' : 'hover:bg-white'}`} disabled={page === 1}>
        {`< Previous`}
      </button>
      <h1 className="flex items-center mx-5 font-semibold">{page}</h1>
      <button onClick={handleNextPage} className="font-semibold hover:bg-white rounded-md py-2 px-3">
        {`Next >`}
      </button>
    </section>
  );
};

export default Pagination;

'use client';
import { LuSearch } from 'react-icons/lu';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

const SearchBar = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (e) => {
    const keyword = searchRef.current.value;

    if (!keyword) return;

    if (e.key === 'Enter' || e.type === 'click') {
      e.preventDefault();
      router.push(`/search/${searchRef.current.value}`);
    }
  };

  return (
    <div className="relative mb-10">
      <input placeholder="Search User..." className="w-full p-2 md:mt-0 mt-1 text-black rounded-md border border-gray-400" ref={searchRef} onKeyPress={handleSearch} />
      <button title="Search User" className="absolute md:top-2 top-3 pb-1 end-2 bg-white" onClick={handleSearch}>
        <LuSearch size={24} weight="bold" />
      </button>
    </div>
  );
};
export default SearchBar;

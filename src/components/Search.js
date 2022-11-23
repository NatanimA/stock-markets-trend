import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { filterCompany } from '../redux/stock/stock';

const Search = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(filterCompany(''));
  }, [dispatch]);
  const [searchInput, setSearch] = useState('');
  const handleChange = (e) => {
    setSearch(e.target.value);
    dispatch(filterCompany(e.target.value));
  };
  return (
    <section id="search" className="search-section">
      <input onChange={handleChange} value={searchInput} type="text" name="company-name" placeholder="Search by company name..." />
      <FaSearch />
    </section>
  );
};

export default Search;

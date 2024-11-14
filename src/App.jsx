import { useState, useEffect } from 'react';
import Card from './components/cards/Card';
import Filter from './components/filters/Filter';
import Pagination from './components/pagination/Pagination';
import Search from './components/search/Search.jsx';

const App = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [fetchedData, setFetchedData] = useState([]);
  const { results } = fetchedData;
  const [searchedData, setSearchedData] = useState("");
  const [charStatus, setCharStatus] = useState("");
  const [charGender, setCharGender] = useState("");
  const [charSpecies, setCharSpecies] = useState("");


  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${searchedData}&status=${charStatus}&species=${charSpecies}&gender=${charGender}`;

  // Fetching data from the API
  useEffect(() => { 
    (async () => {
      const data = await fetch(api).then(res => res.json());
      setFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="max-w-[1240px] mx-auto flex flex-col justify-between gap-5 relative p-4">
      <h1 className='text-center text-3xl font-semibold mb-4'>
        Rick and Morty <span className='text-blue-500'>Wiki</span>
      </h1>
      <Search setSearchedData={setSearchedData} setPageNumber={setPageNumber} />
      <div className='flex flex-col  md:flex-row justify-between gap-5'>
        <div className='w-full md:w-1/4 '>
          <Filter
            setCharStatus={setCharStatus}
            setCharSpecies={setCharSpecies}
            setCharGender={setCharGender}
            setPageNumber={setPageNumber}
          
          />
        </div>
        <div className='w-full md:w-3/4'>
          <Card results={results} />
        </div>
      </div>
      <div className='z-10 mt-4'>
        <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
      </div>
    </div>
  );
}

export default App;
import { FaSearch } from "react-icons/fa";

export default function Search({setSearchedData,setPageNumber}) {
    return (
      <form className="flex mx-auto items-center gap-1 my-6">
        <input
          type="text"
                placeholder="Search..."
                
                onChange={(e) => {
                    setPageNumber(1)
                    setSearchedData(e.target.value)
                }}
          className="border p-2 focus:outline-none rounded-l-md  mx-w-lg lg:w-[400px] border-blue-300 focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
        />
            <button onClick={(e)=>e.preventDefault()}
                className="bg-blue-400 text-white  px-4 rounded-r-md hover:bg-blue-600 transition duration-200 py-[10px]">
          <FaSearch size={24}/>
        </button>
      </form>
    );
  }
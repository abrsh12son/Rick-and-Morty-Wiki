import Gender from "./category/Gender";
import Species from "./category/Species";
import Status from "./category/Status";
import { useState } from "react";

export default function Filter({setPageNumber,setCharStatus,setCharSpecies,setCharGender}) {
  const [openIndex, setOpenIndex] = useState(null);

  function handleToggle(index) {
    setOpenIndex(openIndex === index ? null : index);
  }
  function clear() {
    setPageNumber(1)
      setCharStatus("")
      setCharSpecies("")
      setCharGender("")
  }
  

  return (
    <div className="flex flex-col items-start  rounded-lg shadow-md p-4 absolute top-24 left-6">
      <div className="ml-5">
      <h1 className="text-xl font-semibold mb-4 text-center ">Filter</h1>
        <button className="mb-4 text-blue-600 hover:underline text-center "
        onClick={clear}
        >
          
          Clear Filter</button>
     </div>
      <div className="-ml-3 flex flex-col transition duration-200 ease-in-out">
      <Status
        isOpen={openIndex === 0}
          onToggle={() => handleToggle(0)}
          setPageNumber={setPageNumber}
          setCharStatus={setCharStatus}

      />
      <Species
        isOpen={openIndex === 1}
          onToggle={() => handleToggle(1)}
          setPageNumber={setPageNumber}
          setCharSpecies={setCharSpecies}

      />
      <Gender
        isOpen={openIndex === 2}
          onToggle={() => handleToggle(2)}
          setPageNumber={setPageNumber}
          setCharGender={setCharGender}

          
      />
     </div>
    </div>
  );
}
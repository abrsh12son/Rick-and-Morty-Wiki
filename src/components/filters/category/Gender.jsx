
import DownToggler from "../../Icons/ReactIcon";

import FilterButton from '../FilterButton.jsx'

const Gender = ({ isOpen, onToggle,setCharGender,setPageNumber }) => {
    let Genders = ["female", "male", "genderless", "unknown"]
    
  return (
    <div className="border-b border-blue-300 w-[250px] mr-3 transition duration-200 ease-in-out">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full p-4 text-left bg-blue-50 hover:bg-blue-100 focus:outline-none transition duration-200"
        >
        <span className="font-bold  text-lg">Gender</span>
        <DownToggler isOpen={isOpen} />
      </button>
      {isOpen && (
        <div className="p-4 text-blue-700 bg-blue-50 border-t border-blue-300 flex flex-col gap-3">
          {Genders.map((gender, index) => (
              <FilterButton key={index}
                  items={gender}
                  
                  setPageNumber={setPageNumber}
                  setCharGender={setCharGender}
              />
          ))}
        </div>
      )}
      
    </div>
  );
};

export default Gender;
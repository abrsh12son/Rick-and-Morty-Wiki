import DownToggler from "../../Icons/ReactIcon";
import FilterButton from '../FilterButton'

const Species = ({ isOpen, onToggle ,setPageNumber,setCharSpecies}) => {
    let specieses = [
        "Human",
        "Alien",
        "Unknown",
        "Humanoid",
        "Poopybutthole",
        "Mythological",
        "Animal",
        "Disease",
        "Robot",
        "Cronenberg",
        "Planet",

    ]
  return (
    <div className="border-b border-blue-200  w-[250px] mr-3 transition duration-200 ease-in-out">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full p-4 text-left bg-blue-50 hover:bg-blue-100 focus:outline-none transition duration-200"
        >
        <span className="font-bold  text-lg">Species</span>
        <DownToggler isOpen={isOpen} />
      </button>
      {isOpen && (
              <div className="p-4 text-blue-700 bg-blue-50 border-t border-blue-200">
          {specieses.map((species, index) => (
              <FilterButton key={index}
                  items={species}
                  setPageNumber={setPageNumber}
                  tasks={setCharSpecies}
              />
          ))}
        </div>
      )}
    </div>
  );
};

export default Species;
export default function FilterButton({ items,  isActive, tasks ,setPageNumber}) {
    function handleClick() {
        setPageNumber(1)
        tasks(items)
    }

    return (
        <button
            onClick={handleClick}
            className={`transition duration-200 ease-in-out p-2 w-fit border-2 border-blue-200 
              m-3 rounded-lg text-stone-800 
            ${isActive ? 'bg-blue-700 hover:bg-blue-700' : 'bg-blue-50 hover:bg-blue-700'} 
            focus:outline-none focus:ring-2 focus:ring-blue-200`}
        >
          {items}
        </button>
      );
    
}

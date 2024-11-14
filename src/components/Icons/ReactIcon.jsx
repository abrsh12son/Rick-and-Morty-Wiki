import { FaChevronDown } from "react-icons/fa6";

export default function DownToggler({isOpen}) {
  return (
    <div>
          <FaChevronDown
              size={20}
              className={`w-4 h-4 transition-transform duration-200 text-stone-600 ${
                isOpen ? "transform rotate-180" : ""
              }`}
          />
           
        
    </div>
  )
}




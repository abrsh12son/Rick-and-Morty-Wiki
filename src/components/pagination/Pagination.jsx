import { FaArrowLeft, FaArrowRight } from "react-icons/fa6"

export default function Pagination({ pageNumber, setPageNumber }) {
    let next = () => {
        if(pageNumber>41) return
        setPageNumber(x=>x+1)
    }
    let prev = () => {
        if(pageNumber ===1) return
        setPageNumber(x=>x-1)
    }

  return (
    <div className="flex justify-center items-center mt-5 mb-3 bg-gray-100">
          <div className="space-x-4">
              
          <button
                  onClick={prev}
                  className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transition duration-200">
                  <FaArrowLeft/>
              </button>
              <button
                  className="bg-blue-500 text-white px-4 py-1 w-fit rounded-sm">{pageNumber}</button>
              <button
                  onClick={next}
                  className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transition duration-200">
          <FaArrowRight/>
              </button>
              
             
    </div>
</div>
  )
}

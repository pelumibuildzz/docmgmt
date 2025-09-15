'use client'
import { ChevronLeft, ChevronRight } from "lucide-react"

type PaginationProps = {
  page: number;
  totalPages: number;
  changePage?: (page: number) => void;
};

const Pagination = ({ page, totalPages, changePage }: PaginationProps) => {
  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages && changePage) {
      changePage(newPage);
    } else {
      console.log(`Page ${newPage} requested`);
    }
  };

  return (
    <footer className="w-full justify-center flex space-x-4 mt-auto items-center">
        <button 
          className={`text-gray ${page <= 1 ? 'opacity-50 cursor-not-allowed' : 'hover:text-primary'}`} 
          onClick={() => handlePageChange(page - 1)}
          disabled={page <= 1}
        >
          <ChevronLeft width={20} height={20} />
        </button>
        <ul className="flex space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
                <li 
                  key={i} 
                  className={`px-3.5 py-2 rounded-xl cursor-pointer ${i + 1 === page ? "bg-primary text-white" : "text-gray hover:bg-primary-light hover:text-primary"}`} 
                  onClick={() => handlePageChange(i + 1)}
                >
                    {i + 1}
                </li>
            ))}
        </ul>
        <button 
          className={`text-gray ${page >= totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:text-primary'}`} 
          onClick={() => handlePageChange(page + 1)}
          disabled={page >= totalPages}
        >
          <ChevronRight width={20} height={20} />
        </button>
    </footer>
  )
}

export default Pagination
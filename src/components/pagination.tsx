'use client'
import { ChevronLeft, ChevronRight } from "lucide-react"

type PaginationProps = {
  page: number;
  totalPages: number;
//   changePage: (page: number) => void;
};

const Pagination = ({ page, totalPages }: PaginationProps) => {
  return (
    <footer className="w-full justify-center flex space-x-4 mt-auto items-center">
        <button className="text-gray" onClick={() => console.log(page - 1)}><ChevronLeft  width={20} height={20} /></button>
        <ul className="flex space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
                <li key={i} className={`px-3.5 py-2 rounded-xl ${i + 1 === page ? "bg-primary text-white" : "text-gray"}`} onClick={() => console.log(i + 1)}>
                    {i + 1}
                </li>
            ))}
        </ul>
        <button className="text-gray" onClick={() => console.log(page + 1)}><ChevronRight width={20} height={20} /></button>
    </footer>
  )
}

export default Pagination
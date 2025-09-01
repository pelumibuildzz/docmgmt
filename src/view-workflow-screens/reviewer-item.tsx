import { ChevronDown, Dot } from "lucide-react"

const ReviewerItem = () => {
  return (
    <li className="flex space-x-[26px]">
        <div className="flex flex-col space-y-0.5 items-center">
            <span className="rounded-full bg-primary text-white w-6 h-6 text-center">
                <span className="p-2">1</span>
            </span>
            <span className="h-8 w-[3px] bg-primary"></span>
        </div>
        <div className="flex space-x-4 rounded-xl px-6 py-1 items-center border-[.5px] border-gray-300">
            <div className="flex flex-col space-y-2 min-w-[260px]">
                <h3 className="text-[14px]">Adibogun Aminat</h3>
                <div className="flex justify-between text-gray items-center text-[12px] w-5/6">
                    <h5>abidogun088@gmail.com</h5>
                    <Dot width={24} height={24}/>
                    <h5>Finance</h5>
                </div>
                <button className="bg-primary text-white px-2 py-1 text-[14px] w-fit rounded-md">Remove</button>
            </div>
            <button className="flex rounded-xl border-[.5px] border-gray-300 items-center">
                {/* Reviewer or Approver */}
                <span className="p-2 text-[14px]">Reviewer</span>
                <ChevronDown width={24} height={24} />
            </button>
        </div>
    </li>
  )
}

export default ReviewerItem
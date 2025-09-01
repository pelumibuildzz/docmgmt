import { Dot } from "lucide-react"
import Image from "next/image"

const RecentInteractSidebar = () => {
  return (
    <div className={`col-span-2 px-5 py-10 border-r-[.5px] border-r-gray flex flex-col space-y-8 bg-primary-lighter`}>
        <h2 className="h-[26px] flex items-center space-x-2">
            <Image src="/logo/c-logo.png" alt="Logo" width={27} height={26} />
            <Image src="/logo/CmAG.png" alt="Logo" width={45} height={20} />
        </h2>
        <ul className="flex flex-col space-y-4">
            <li className="py-2 flex flex-col space-y-0.5">
                <h3 className="text-[14px]">Adibogun Aminat</h3>
                <div className="flex justify-between text-gray items-center text-[12px] w-3/4">
                    <h5>abidogun088@gmail.com</h5>
                    <Dot width={24} height={24}/>
                    <h5>Finance</h5>
                </div>
            </li>
            <li className="py-2 flex flex-col space-y-0.5">
                <h3 className="text-[14px]">Adibogun Aminat</h3>
                <div className="flex justify-between text-gray items-center text-[12px] w-3/4">
                    <h5>abidogun088@gmail.com</h5>
                    <Dot width={24} height={24}/>
                    <h5>Finance</h5>
                </div>
            </li>
            <li className="py-2 flex flex-col space-y-0.5">
                <h3 className="text-[14px]">Adibogun Aminat</h3>
                <div className="flex justify-between text-gray items-center text-[12px] w-3/4">
                    <h5>abidogun088@gmail.com</h5>
                    <Dot width={24} height={24}/>
                    <h5>Finance</h5>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default RecentInteractSidebar
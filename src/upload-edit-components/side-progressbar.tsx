import Image from "next/image"
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const SideProgressBar = () => {
  return (
    <div className={`col-span-2 px-11 py-10 border-r-[.5px] border-r-gray flex flex-col space-y-[87px] ${poppins.className} bg-primary-lighter min-h-screen`}>
      <h2 className="h-[26px] flex items-center space-x-2">
        <Image src="/logo/c-logo.png" alt="Logo" width={27} height={26} />
        <Image src="/logo/CmAG.png" alt="Logo" width={45} height={20} />
      </h2>
      <ul className="flex flex-col ">
        <li className="flex space-x-3">
          <div>
            <div className="bg-primary w-[16px] h-[16px] rounded-full"></div>
            <div className="w-[3px] h-12 bg-primary mx-auto"></div>
          </div>
          <span className="text-[14px] text-primary">Upload New Document</span>
        </li>
        <li className="flex space-x-3">
          <div>
            <div className="bg-gray w-[16px] h-[16px] rounded-full"></div>
            <div className="w-[3px] h-12 bg-gray mx-auto"></div>
          </div>
          <span className="text-[14px] text-gray">Upload New Document</span>
        </li>
        <li className="flex space-x-3">
          <div>
            <div className="bg-gray w-[16px] h-[16px] rounded-full"></div>
          </div>
          <span className="text-[14px] text-gray">Upload New Document</span>
        </li>
      </ul>
    </div>
  )
}

export default SideProgressBar
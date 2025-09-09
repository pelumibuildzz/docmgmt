import { Paperclip, Smile, X, Image } from 'lucide-react'

const AddMinute = () => {
  return (
    <div className='py-3 px-6 border-[.2px] border-gray-300 rounded-xl relative'>
        <textarea name="" id="" placeholder='Type in new minutes' className='w-full h-52 focus:outline-none resize-none'></textarea>
        <button className='absolute top-6 right-6'><X width={24} height={24} className='text-gray cursor-pointer'/></button>
        <div className='pt-4 border-t-[.5px] border-gray-300 flex justify-between w-full'>
            <div className='flex space-x-[17px]'>
                <Image width={24} height={24} className='text-gray cursor-pointer' />
                <Paperclip width={24} height={24} className='text-gray cursor-pointer' />
                <Smile width={24} height={24} className='text-gray cursor-pointer' />
            </div>
            <button className='py-1 p-2 text-[12px] font-medium text-white bg-primary rounded-lg'>Add Minute</button>
        </div>
    </div>
  )
}

export default AddMinute
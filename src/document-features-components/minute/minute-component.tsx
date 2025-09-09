import { Dot, EllipsisVertical, MessageCircle } from 'lucide-react'


const MinuteComponent = () => {
  return (
    <div className='p-6 border-b-[.5px] border-gray-300 flex flex-col space-y-3'>
        <div className='flex justify-between items-center'>
            <div className='flex space-x-2 items-end'>
                <h3 className='text-[16px] font-medium'>Adibogun AMinat</h3>
                <span className=" flex items-end text-[12px] text-gray">09/12/2023 <Dot width={24} height={24} className='mx-0.5'/> 9:45am</span>
            </div>
            <EllipsisVertical width={24} height={24} className='text-gray cursor-pointer'/>
        </div>
        <p className='text-gray text-[14px]'>What is Lorem Ipsum?<br/>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
        <div className='flex space-x-8'>
            <button className='flex space-x-2 text-gray items-center'>
                <MessageCircle width={24} height={24} className=''/>
                <span className='text-[14px]'>252 Replies</span>
            </button>
            <button className='py-2 px-4 text-primary border-[.5px] border-gray-300 rounded-lg'>Reply</button>
        </div>
        
        {/*Nested For Replies should be done with Logic*/}
        <div className='p-6 flex flex-col space-y-3'>
            <div className='flex justify-between items-center'>
                <div className='flex space-x-2 items-end'>
                    <h3 className='text-[16px] font-medium'>Adibogun AMinat</h3>
                    <span className=" flex items-end text-[12px] text-gray">09/12/2023 <Dot width={24} height={24} className='mx-0.5'/> 9:45am</span>
                </div>
                <EllipsisVertical width={24} height={24} className='text-gray cursor-pointer'/>
            </div>
            <p className='text-gray text-[14px]'>What is Lorem Ipsum?<br/>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            <div className='flex space-x-8'>
                <button className='flex space-x-2 text-gray items-center'>
                    <MessageCircle width={24} height={24} className=''/>
                    <span className='text-[14px]'>252 Replies</span>
                </button>
                <button className='py-2 px-4 text-primary border-[.5px] border-gray-300 rounded-lg'>Reply</button>
            </div>
        </div>
    </div>
  )
}

export default MinuteComponent
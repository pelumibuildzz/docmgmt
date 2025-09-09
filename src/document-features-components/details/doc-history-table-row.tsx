import { Dot } from "lucide-react"

const DocHistoryTableRow = () => {
  return (
    <tr className="grid grid-cols-12 gap-4 p-4 border-b border-gray-300">
      <td className="col-span-2">01</td>
      <td className="col-span-3">John Doe</td>
      <td className="col-span-2">Reviewer</td>
      <td className="col-span-2 text-status-completed">Reviewed</td>
      <td className="col-span-3 flex items-center">09/12/2023 <Dot width={24} height={24} className='m-1'/> 9:45am</td>
    </tr>
  )
}

export default DocHistoryTableRow
import React from 'react'
import MyDocsTableRow from '@/knowledge-management-components/my-docs-table-row'

const MyDocsTable = () => {
  return (
    <table className="w-full flex flex-col space-y-6 text-[16px]">
        <thead className=" text-primary">
            <tr className="grid grid-cols-12 gap-4 rounded-xl p-4 bg-primary-lighter text-left">
                <th className="col-span-1">Date Created</th>
                <th className="col-span-2">Doc Name</th>
                <th className="col-span-2">Doc Id</th>
                <th className="col-span-3">File Name</th>
                <th className="col-span-2">File Id</th>
                <th className="col-span-2">Actions</th>
            </tr>
        </thead>
        <tbody className="space-y-6 text-gray">
            <MyDocsTableRow />
        </tbody>
    </table>
  )
}

export default MyDocsTable
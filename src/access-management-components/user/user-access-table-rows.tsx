
const UserAccessTableRows = () => {
  return (
    <>
      <tr className="p-4 grid grid-cols-10 w-full border-gray border-b-[.5px]">
          <td className="col-span-1 col-start-1">Document Mgt</td>
          <td className="p-1 col-span-1 colstart-2 flex justify-center"><input type="checkbox" name="view" id="" className="accent-primary" /></td>
          <td className="p-1 col-span-1 colstart-3 flex justify-center"><input type="checkbox" name="update" id="" className="accent-primary" /></td>
          <td className="p-1 col-span-1 colstart-4 flex justify-center"><input type="checkbox" name="create" id="" className="accent-primary" /></td>
          <td className="p-1 col-span-1 colstart-5 flex justify-center"><input type="checkbox" name="send" id="" className="accent-primary" /></td>
          <td className="p-1 col-span-1 colstart-6 flex justify-center"><input type="checkbox" name="assign" id="" className="accent-primary" /></td>
          <td className="p-1 col-span-1 colstart-7 flex justify-center"><input type="checkbox" name="sign" id="" className="accent-primary" /></td>
          <td className="p-1 col-span-1 colstart-8 flex justify-center"><input type="checkbox" name="archive" id="" className="accent-primary" /></td>
          <td className="p-1 col-span-1 colstart-9 flex justify-center"><input type="checkbox" name="download" id="" className="accent-primary" /></td>
          <td className="p-1 col-span-1 colstart-10 flex justify-center"><input type="checkbox" name="delete" id="" className="accent-primary" /></td>
      </tr>
      <tr className="p-4 grid grid-cols-10 w-full border-gray border-b-[.5px]">
          <td className="col-span-1 col-start-1">Workflow</td>
          <td className="p-1 col-span-1 col-start-2 flex justify-center"><input type="checkbox" name="view" id="" className="accent-primary" /></td>
          <td className="p-1 col-span-1 col-start-3 flex justify-center"><input type="checkbox" name="update" id="" className="accent-primary" /></td>
          <td className="p-1 col-span-1 col-start-4 flex justify-center"><input type="checkbox" name="create" id="" className="accent-primary" /></td>
          <td className="p-1 col-span-1 col-start-10 flex justify-center"><input type="checkbox" name="delete" id="" className="accent-primary" /></td>
      </tr>
      <tr className="p-4 grid grid-cols-10 w-full border-gray border-b-[.5px]">
          <td className="col-span-1 col-start-1">Teams</td>
          <td className="p-1 col-span-1 col-start-2 flex justify-center"><input type="checkbox" name="view" id="" className="accent-primary" /></td>
          <td className="p-1 col-span-1 col-start-3 flex justify-center"><input type="checkbox" name="update" id="" className="accent-primary" /></td>
          <td className="p-1 col-span-1 col-start-4 flex justify-center"><input type="checkbox" name="create" id="" className="accent-primary" /></td>
          <td className="p-1 col-span-1 col-start-10 flex justify-center"><input type="checkbox" name="delete" id="" className="accent-primary" /></td>
      </tr>
      <tr className="p-4 grid grid-cols-10 w-full border-gray border-b-[.5px]">
          <td className="col-span-1 col-start-1">Audit Log</td>
          <td className="p-1 col-span-1 col-start-2 flex justify-center"><input type="checkbox" name="view" id="" className="accent-primary" /></td>
      </tr>
      <tr className="p-4 grid grid-cols-10 w-full border-gray border-b-[.5px]">
          <td className="col-span-1 col-start-1">Access Mgt</td>
          <td className="p-1 col-span-1 col-start-2 flex justify-center"><input type="checkbox" name="view" id="" className="accent-primary" /></td>
          <td className="p-1 col-span-1 col-start-3 flex justify-center"><input type="checkbox" name="update" id="" className="accent-primary" /></td>
      </tr>
      <tr className="p-4 grid grid-cols-10 w-full border-gray border-b-[.5px]">
          <td className="col-span-1 col-start-1">Recycle Bin</td>
          <td className="p-1 col-span-1 col-start-2 flex justify-center"><input type="checkbox" name="view" id="" className="accent-primary" /></td>
          <td className="p-1 col-span-1 col-start-3 flex justify-center"><input type="checkbox" name="update" id="" className="accent-primary" /></td>
      </tr>
    </>
  )
}

export default UserAccessTableRows

const UserAccessTableRows = () => {
  return (
    <>
      <tr className="p-4 grid grid-cols-10 gap-4 w-full border-gray border-b-[.5px]">
          <td className="col-span-1">Document Mgt</td>
          <td className="col-span-1 p-1 flex justify-center"><input type="checkbox" name="view" id="" className="accent-primary" /></td>
          <td className="col-span-1 p-1 flex justify-center"><input type="checkbox" name="update" id="" className="accent-primary" /></td>
          <td className="col-span-1 p-1 flex justify-center"><input type="checkbox" name="create" id="" className="accent-primary" /></td>
          <td className="col-span-1 p-1 flex justify-center"><input type="checkbox" name="send" id="" className="accent-primary" /></td>
          <td className="col-span-1 p-1 flex justify-center"><input type="checkbox" name="assign" id="" className="accent-primary" /></td>
          <td className="col-span-1 p-1 flex justify-center"><input type="checkbox" name="sign" id="" className="accent-primary" /></td>
          <td className="col-span-1 p-1 flex justify-center"><input type="checkbox" name="archive" id="" className="accent-primary" /></td>
          <td className="col-span-1 p-1 flex justify-center"><input type="checkbox" name="download" id="" className="accent-primary" /></td>
          <td className="col-span-1 p-1 flex justify-center"><input type="checkbox" name="delete" id="" className="accent-primary" /></td>
      </tr>
      <tr className="p-4 grid grid-cols-10 gap-4 w-full border-gray border-b-[.5px]">
          <td className="col-span-1">Workflow</td>
          <td className="col-span-1 p-1 flex justify-center"><input type="checkbox" name="view" id="" className="accent-primary" /></td>
          <td className="col-span-1 p-1 flex justify-center"><input type="checkbox" name="update" id="" className="accent-primary" /></td>
          <td className="col-span-1 p-1 flex justify-center"><input type="checkbox" name="create" id="" className="accent-primary" /></td>
          <td className="col-span-1"></td>
          <td className="col-span-1"></td>
          <td className="col-span-1"></td>
          <td className="col-span-1"></td>
          <td className="col-span-1"></td>
          <td className="col-span-1 p-1 flex justify-center"><input type="checkbox" name="delete" id="" className="accent-primary" /></td>
      </tr>
      <tr className="p-4 grid grid-cols-10 gap-4 w-full border-gray border-b-[.5px]">
          <td className="col-span-1">Teams</td>
          <td className="col-span-1 p-1 flex justify-center"><input type="checkbox" name="view" id="" className="accent-primary" /></td>
          <td className="col-span-1 p-1 flex justify-center"><input type="checkbox" name="update" id="" className="accent-primary" /></td>
          <td className="col-span-1 p-1 flex justify-center"><input type="checkbox" name="create" id="" className="accent-primary" /></td>
          <td className="col-span-1"></td>
          <td className="col-span-1"></td>
          <td className="col-span-1"></td>
          <td className="col-span-1"></td>
          <td className="col-span-1"></td>
          <td className="col-span-1 p-1 flex justify-center"><input type="checkbox" name="delete" id="" className="accent-primary" /></td>
      </tr>
      <tr className="p-4 grid grid-cols-10 gap-4 w-full border-gray border-b-[.5px]">
          <td className="col-span-1">Audit Log</td>
          <td className="col-span-1 p-1 flex justify-center"><input type="checkbox" name="view" id="" className="accent-primary" /></td>
          <td className="col-span-1"></td>
          <td className="col-span-1"></td>
          <td className="col-span-1"></td>
          <td className="col-span-1"></td>
          <td className="col-span-1"></td>
          <td className="col-span-1"></td>
          <td className="col-span-1"></td>
          <td className="col-span-1"></td>
      </tr>
      <tr className="p-4 grid grid-cols-10 gap-4 w-full border-gray border-b-[.5px]">
          <td className="col-span-1">Access Mgt</td>
          <td className="col-span-1 p-1 flex justify-center"><input type="checkbox" name="view" id="" className="accent-primary" /></td>
          <td className="col-span-1 p-1 flex justify-center"><input type="checkbox" name="update" id="" className="accent-primary" /></td>
          <td className="col-span-1"></td>
          <td className="col-span-1"></td>
          <td className="col-span-1"></td>
          <td className="col-span-1"></td>
          <td className="col-span-1"></td>
          <td className="col-span-1"></td>
          <td className="col-span-1"></td>
      </tr>
      <tr className="p-4 grid grid-cols-10 gap-4 w-full border-gray border-b-[.5px]">
          <td className="col-span-1">Recycle Bin</td>
          <td className="col-span-1 p-1 flex justify-center"><input type="checkbox" name="view" id="" className="accent-primary" /></td>
          <td className="col-span-1 p-1 flex justify-center"><input type="checkbox" name="update" id="" className="accent-primary" /></td>
          <td className="col-span-1"></td>
          <td className="col-span-1"></td>
          <td className="col-span-1"></td>
          <td className="col-span-1"></td>
          <td className="col-span-1"></td>
          <td className="col-span-1"></td>
          <td className="col-span-1"></td>
      </tr>
    </>
  )
}

export default UserAccessTableRows

interface UserAccessData {
  [key: string]: {
    view?: boolean;
    update?: boolean;
    create?: boolean;
    send?: boolean;
    assign?: boolean;
    sign?: boolean;
    archive?: boolean;
    download?: boolean;
    delete?: boolean;
  };
}

interface UserAccessTableRowsProps {
  accessData: UserAccessData;
  onAccessChange: (module: string, permission: string, checked: boolean) => void;
}

const UserAccessTableRows = ({ accessData, onAccessChange }: UserAccessTableRowsProps) => {
  const modules = [
    { key: 'documentMgt', label: 'Document Mgt', permissions: ['view', 'update', 'create', 'send', 'assign', 'sign', 'archive', 'download', 'delete'] },
    { key: 'workflow', label: 'Workflow', permissions: ['view', 'update', 'create', '', '', '', '', '', 'delete'] },
    { key: 'teams', label: 'Teams', permissions: ['view', 'update', 'create', '', '', '', '', '', 'delete'] },
    { key: 'auditLog', label: 'Audit Log', permissions: ['view', '', '', '', '', '', '', '', ''] },
    { key: 'accessMgt', label: 'Access Mgt', permissions: ['view', 'update', '', '', '', '', '', '', ''] },
    { key: 'recycleBin', label: 'Recycle Bin', permissions: ['view', 'update', '', '', '', '', '', '', ''] },
  ];

  return (
    <>
      {modules.map(module => (
        <tr key={module.key} className="p-4 grid grid-cols-11 gap-4 w-full border-gray-300 border-b-[.5px]">
          <td className="col-span-2">{module.label}</td>
          {module.permissions.map((permission, index) => (
            <td key={index} className="col-span-1 p-1 flex justify-center">
              {permission ? (
                <input 
                  type="checkbox" 
                  name={permission} 
                  checked={accessData[module.key]?.[permission as keyof typeof accessData[string]] || false}
                  onChange={(e) => onAccessChange(module.key, permission, e.target.checked)}
                  className="accent-primary" 
                />
              ) : null}
            </td>
          ))}
        </tr>
      ))}
    </>
  )
}

export default UserAccessTableRows
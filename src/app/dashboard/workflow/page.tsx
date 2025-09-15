import WorkflowTable from "@/workflow-components/workflow-table"
import Link from "next/link"
import Pagination from "@/components/pagination"  

const WorkflowDashboardPage = () => {
  return (
    <main className="w-full p-5 flex flex-col space-y-4 min-h-[640px]">
        <div className="w-full flex justify-end">
          <Link href={"/workflow/new"} className="px-4 py-2 text-white bg-primary rounded-xl font-semibold text-[16px]">
            Create New Workflow
          </Link>
        </div>
        <WorkflowTable />
        {/* <Pagination page={1} totalPages={5} 
        // changePage={(page) => console.log(page)} 
        /> */}
    </main>
  )
}

export default WorkflowDashboardPage
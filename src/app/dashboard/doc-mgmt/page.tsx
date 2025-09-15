"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import DocGrid from "@/doc-mgmt-components/doc/doc-grid"
import DocTable from "@/doc-mgmt-components/doc/doc-table"
import FolderTable from "@/doc-mgmt-components/folder/folder-table"
import FolderGrid from "@/doc-mgmt-components/folder/folder-grid"
import FilterDropdown from "@/app/dashboard/doc-mgmt/filter-dropdown"
import ActiveFilters from "@/components/active-filters"
import { LayoutGrid, List } from "lucide-react"
import Link from "next/link"
import { Document, FilterState, SidenavFilter } from "@/types/document"
import { mockDocuments } from "@/data/mockDocuments"
import { filterDocuments, getActiveFiltersDisplay } from "@/utils/documentFilters"

// Queries will be taken from the path and query parameters and used to query the api
// Result will be passed as a prop into the DocTable or DocGrid component to render
const Docpage = () => {
  const [contentType, setContentType] = useState<'document' | 'file'>('document')
  const [viewType, setViewType] = useState<'table' | 'grid'>('table')
  const [documents] = useState<Document[]>(mockDocuments)
  const [filteredDocuments, setFilteredDocuments] = useState<Document[]>(mockDocuments)
  const [filters, setFilters] = useState<FilterState>({})
  
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  // Get sidenav filter from URL params
  const sidenavFilter = searchParams.get('filter') as SidenavFilter | null

  // Update filtered documents when filters change
  useEffect(() => {
    const filtered = filterDocuments(documents, filters, sidenavFilter || undefined)
    setFilteredDocuments(filtered)
  }, [documents, filters, sidenavFilter])

  // Initialize filters from URL params on component mount
  useEffect(() => {
    const urlFilters: FilterState = {}
    
    // Check for any additional filter params that might be in the URL
    const priority = searchParams.get('priority') as FilterState['priority']
    const status = searchParams.get('status') as FilterState['status']
    const dueDateFrom = searchParams.get('dueDateFrom')
    const dueDateTo = searchParams.get('dueDateTo')
    const dateReceivedFrom = searchParams.get('dateReceivedFrom')
    const dateReceivedTo = searchParams.get('dateReceivedTo')

    if (priority) urlFilters.priority = priority
    if (status) urlFilters.status = status
    if (dueDateFrom) urlFilters.dueDateFrom = dueDateFrom
    if (dueDateTo) urlFilters.dueDateTo = dueDateTo
    if (dateReceivedFrom) urlFilters.dateReceivedFrom = dateReceivedFrom
    if (dateReceivedTo) urlFilters.dateReceivedTo = dateReceivedTo

    setFilters(urlFilters)
  }, [searchParams])

  const handleFilterChange = (filterType: string, value: string) => {
    console.log(`Filter applied: ${filterType} = ${value}`);
    
    setFilters(prev => {
      const newFilters = { ...prev }
      
      // Handle different filter types
      switch (filterType) {
        case 'priority':
          newFilters.priority = value as FilterState['priority']
          break
        case 'status':
          newFilters.status = value as FilterState['status']
          break
        case 'due-date-from':
          newFilters.dueDateFrom = value
          break
        case 'due-date-to':
          newFilters.dueDateTo = value
          break
        case 'date-received-from':
          newFilters.dateReceivedFrom = value
          break
        case 'date-received-to':
          newFilters.dateReceivedTo = value
          break
        default:
          break
      }
      
      return newFilters
    })
  }

  const handleRemoveFilter = (filterKey: string) => {
    if (filterKey === 'sidenav') {
      // Remove sidenav filter by navigating to base path
      router.push(pathname)
      return
    }

    setFilters(prev => {
      const newFilters = { ...prev }
      
      switch (filterKey) {
        case 'priority':
          delete newFilters.priority
          break
        case 'status':
          delete newFilters.status
          break
        case 'dueDateFrom':
          delete newFilters.dueDateFrom
          break
        case 'dueDateTo':
          delete newFilters.dueDateTo
          break
        case 'dateReceivedFrom':
          delete newFilters.dateReceivedFrom
          break
        case 'dateReceivedTo':
          delete newFilters.dateReceivedTo
          break
        default:
          break
      }
      
      return newFilters
    })
  }

  const handleClearAllFilters = () => {
    setFilters({})
    router.push(pathname) // Remove all URL params
  }

  // Get active filters for display
  const activeFilters = getActiveFiltersDisplay(filters, sidenavFilter || undefined)
  return (
    <main className="w-full py-8 px-6 flex flex-col space-y-5">
        <div className="flex flex-col space-y-6">
            <div className="flex justify-between">
                <div className="flex space-x-4 rounded-xl border-gray-300 border-[.5px]">
                    <button 
                        className={`px-3 py-2 rounded-l-xl ${
                            contentType === 'file' 
                                ? 'bg-primary-light text-primary' 
                                : 'text-gray'
                        }`}
                        onClick={() => setContentType('file')}
                    >
                        File
                    </button>
                    <button 
                        className={`px-3 py-2 rounded-r-xl ${
                            contentType === 'document' 
                                ? 'bg-primary-light text-primary' 
                                : 'text-gray'
                        }`}
                        onClick={() => setContentType('document')}
                    >
                        Document
                    </button>
                </div>
                <div className="">
                    <button 
                        className=""
                        onClick={() => setViewType('table')}
                    >
                        <List className={`p-2 border-[.2px] border-r-0 border-gray-300 ${
                            viewType === 'table' 
                                ? 'bg-primary-light text-primary' 
                                : ''
                        }`} width={34} height={34} />
                    </button>
                    <button 
                        className=""
                        onClick={() => setViewType('grid')}
                    >
                        <LayoutGrid className={`p-2 rounded-r-xl border-[.2px] border-l-0 border-gray-300 ${
                            viewType === 'grid' 
                                ? 'bg-primary-light text-primary' 
                                : ''
                        }`} width={34} height={34} />
                    </button>
                </div>
            </div>
            <div className="w-full flex justify-end space-x-3 text-[16px] font-semibold">
                <FilterDropdown onFilterChange={handleFilterChange} />
                <Link href="/upload-doc" className="px-4 py-2 bg-primary rounded-xl text-white">Upload Document</Link>
            </div>
        </div>
        
        {/* Display active filters */}
        <ActiveFilters 
          filters={activeFilters}
          onRemoveFilter={handleRemoveFilter}
          onClearAll={handleClearAllFilters}
        />
        
        {contentType === 'document' ? (
            viewType === 'table' ? <DocTable documents={filteredDocuments} /> : <DocGrid documents={filteredDocuments} />
        ) : (
            viewType === 'table' ? <FolderTable /> : <FolderGrid />
        )}
    </main>
  )
}

export default Docpage
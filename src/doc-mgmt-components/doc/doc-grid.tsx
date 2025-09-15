import DocGridCell from "./doc-grid-cell"
import { Document } from "@/types/document"

interface DocGridProps {
  documents: Document[]
}

const DocGrid = ({ documents }: DocGridProps) => {
  return (
    <section className="w-full grid grid-cols-3 gap-6">
        {documents.map((document) => (
            <DocGridCell key={document.id} document={document} />
        ))}
        {documents.length === 0 && (
            <div className="col-span-3 text-center py-8 text-gray-500">
                No documents found matching the current filters.
            </div>
        )}
    </section>
  )
}

export default DocGrid
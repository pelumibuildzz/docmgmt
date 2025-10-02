import { useState } from "react"
import FolderGridCell from "./folder-grid-cell"
import FileDetailsModal from "./file-details-modal"

const FolderGrid = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => setIsModalOpen(true)
  const handleCloseModal = () => setIsModalOpen(false)

  return (
    <>
      <section className="w-full grid grid-cols-3 gap-6">
          {/* Placeholder for future grid view implementation */}
          <FolderGridCell onOpenModal={handleOpenModal} />
          <FolderGridCell onOpenModal={handleOpenModal} />
          <FolderGridCell onOpenModal={handleOpenModal} />
          <FolderGridCell onOpenModal={handleOpenModal} />
          <FolderGridCell onOpenModal={handleOpenModal} />
      </section>
      <FileDetailsModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  )
}


export default FolderGrid
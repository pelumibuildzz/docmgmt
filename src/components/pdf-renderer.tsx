'use client'
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

// Dynamically import react-pdf components to avoid SSR issues
const Document = dynamic(
  () => import('react-pdf').then((mod) => mod.Document),
  { ssr: false }
);

const Page = dynamic(
  () => import('react-pdf').then((mod) => mod.Page),
  { ssr: false }
);

// Set up worker only on client side
if (typeof window !== 'undefined') {
  import('react-pdf').then((pdfjs) => {
    pdfjs.pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';
  });
}

interface PDFRendererProps {
  pdfUrl: string;
  signatures?: {
    manual?: boolean;
    auto?: boolean;
  };
}

const PDFRenderer = ({ pdfUrl, signatures }: PDFRendererProps) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [mounted, setMounted] = useState<boolean>(false);

  // Ensure component only renders on client side
  useEffect(() => {
    setMounted(true);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setLoading(false);
  };

  const goToPrevPage = () => {
    setPageNumber(page => Math.max(1, page - 1));
  };

  const goToNextPage = () => {
    setPageNumber(page => Math.min(numPages, page + 1));
  };

  // Don't render anything on server side
  if (!mounted) {
    return (
      <div className="flex items-center justify-center h-[600px] w-[800px] border border-gray-300 rounded-lg">
        <div className="text-gray-500">Loading PDF...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* PDF Document */}
      <div className="border border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm relative">
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className="flex items-center justify-center h-[600px] w-[800px]">
              <div className="text-gray-500">Loading PDF...</div>
            </div>
          }
          error={
            <div className="flex items-center justify-center h-[600px] w-[800px]">
              <div className="text-red-500">Failed to load PDF</div>
            </div>
          }
        >
          <Page
            pageNumber={pageNumber}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            scale={1.2}
            loading={
              <div className="flex items-center justify-center h-[600px] w-[800px]">
                <div className="text-gray-500">Loading page...</div>
              </div>
            }
          />
        </Document>
        
        {/* Signature Overlays */}
        {signatures?.manual && (
          <div className="absolute top-4 right-4 z-10">
            <Image 
              src="/manual-sign.png" 
              alt="Manual Signature" 
              width={120} 
              height={60}
              className="opacity-90"
            />
          </div>
        )}
        
        {signatures?.auto && (
          <div className="absolute top-4 left-4 z-10">
            <Image 
              src="/auto-sign.png" 
              alt="Auto Signature" 
              width={120} 
              height={60}
              className="opacity-90"
            />
          </div>
        )}
      </div>

      {/* Navigation Controls */}
      {!loading && numPages > 0 && (
        <div className="flex items-center space-x-4 py-2">
          <button
            onClick={goToPrevPage}
            disabled={pageNumber <= 1}
            className="p-2 rounded-md border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft width={20} height={20} />
          </button>
          
          <span className="text-gray-700 font-medium">
            {pageNumber} of {numPages}
          </span>
          
          <button
            onClick={goToNextPage}
            disabled={pageNumber >= numPages}
            className="p-2 rounded-md border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
          >
            <ChevronRight width={20} height={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default PDFRenderer;
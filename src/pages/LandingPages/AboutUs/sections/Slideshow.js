import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
// import pdfFile from "/EMED PROFILE.pdf"; // Ensure it's inside the public folder

// Fix the GlobalWorkerOptions error
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
const PDFSlideshow = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setPageNumber((prev) => (prev < numPages ? prev + 1 : 1));
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [numPages]);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <Document file="/EMED PROFILE.pdf" onLoadSuccess={({ numPages }) => setNumPages(numPages)}>
        <Page pageNumber={pageNumber} width={600} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
};

export default PDFSlideshow;

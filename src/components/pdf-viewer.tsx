"use client";

// import { pdfjs, Document, Page } from "react-pdf";
// import { Viewer, Worker } from "@react-pdf-viewer/core";
// // import "@react-pdf-viewer/default-layout/lib/styles/index.css";

// import "@react-pdf-viewer/core/lib/styles/index.css";
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// interface Props {
//     fileUrl: string;
//     classname:string
//   }

// export const PDFViewer = ({ fileUrl,classname }: Props) => (

//     <div>
//         <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.js">
//        <div className="space-x-10">
//         <Viewer classname={classname} fileUrl={fileUrl}
//         // plugins={[defaultLayoutPluginInstance]}
//         />
//        </div>
//         </Worker>

//     </div>
// )

interface Props {
  fileUrl: string;
  classname?: string;
}


export function PDFViewer({ fileUrl, classname }: Props) {
  return (
    <div className={classname}>
      {/* <Document
        file={fileUrl}
        className="my-react-pdf"
      >
        <Page pageNumber={1} />
      </Document> */}
      <object data={fileUrl} className="font-sans text-xs dark:prose-invert"  type="application/pdf" style={{  height: "900px", width: "100%" }}>
        <p>
          Your browser does not support PDFs. Please download the PDF to view
          it: <a href={fileUrl}>Download PDF</a>.
        </p>
      </object>
    </div>
  );
}

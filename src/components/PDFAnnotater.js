import React from 'react';
import { SketchField, Tools } from 'react-sketch';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class PDFAnnotater extends React.Component {
  state = { pageNumber: 1 };

  goToPrevPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
  goToNextPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber + 1 }));

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div className="PDFAnnotater">       
        <div className="PDFAnnotater__wrapper">
          <div className="PDFAnnotater__loaded">
            {/* Loads PDF */}
            <Document
              className="PDFAnnotater__loaded-PDF"
              file="./AaronNguyenResume.pdf"
              onLoadSuccess={this.onDocumentLoadSuccess}
            >
              <Page pageNumber={pageNumber} width={780} />
            </Document>
          </div>
          {/* Loads Canvas over PDF */}
          <div className="PDFAnnotater__loaded-canvas">
            <SketchField tool={Tools.Rectangle} lineColor='red' lineWidth={2} height={1009}/>
          </div>
        </div>
      </div>
    )
  }
}

export default PDFAnnotater;
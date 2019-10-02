import React from 'react';
import ReactToPrint from 'react-to-print';
import PDFAnnotater from './PDFAnnotater';

class Print extends React.Component {
  render(){
    return (
      <div className="print">
        <h2 className="print__header">Draw on the PDF!</h2>
        {/* Imports PDF Annotater component to be target for print */}
        <PDFAnnotater ref={el => (this.componentRef = el)} />
        {/* Creates Print button and targets component to print */}
        <ReactToPrint 
          trigger={() => <button className="print__button" href="#">Print PDF</button>}
          content={() => this.componentRef}
        />
      </div>
    );
  };
};

export default Print;
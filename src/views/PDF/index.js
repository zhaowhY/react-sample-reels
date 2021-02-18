import React, { Component } from 'react';
import { Document } from 'react-pdf/dist/esm/entry.webpack';
import { Page } from 'react-pdf';
import { Button } from 'antd';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import pdfFile from './test.pdf';
import styles from './index.module.less';

class PDF extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNumber: 1,
      numPages: 1,
    };
  }

   onDocumentLoadSuccess= ({ numPages }) => {
     this.setState({
       numPages
     });
   }

   changePage = (type) => {
     this.setState((state) => {
       // eslint-disable-next-line prefer-const
       let { pageNumber: page, numPages } = state;
       if (type === 'prev') page -= 1;
       else page += 1;
       if (page < 1) page = 1;
       if (page > numPages) page = numPages;
       this.pageNumber = page;
       return {
         pageNumber: page
       };
     });
   }

   render() {
     const { pageNumber, numPages } = this.state;
     return (
       <div style={{ height: 900 }}>
         <div className={styles.header}>
           <div style={{ marginBottom: 16 }}>
             <Button
               onClick={() => this.changePage('prev')}
               type="primary"
               style={{ marginRight: 16 }}
             >
               <ArrowLeftOutlined />
               前进
             </Button>
             <Button
               onClick={() => this.changePage('next')}
               type="primary"
             >
               后退
               <ArrowRightOutlined />
             </Button>
           </div>
           <div
             style={{ fontSize: 17, fontWeight: 'bold' }}
           >
             {pageNumber}
             /
             {numPages}
           </div>
         </div>

         <Document
           file={pdfFile}
           loading=""
           onLoadSuccess={this.onDocumentLoadSuccess}
         >
           <Page
             pageNumber={pageNumber}
             loading=""
             width={500}
           />
         </Document>
       </div>
     );
   }
}

export default PDF;

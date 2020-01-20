import { Component } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { chart1, chart2, chart3 } from './helper';
import { elementStart } from '@angular/core/src/render3';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'pdfMaker';


  genPDF() {

    const elements = [];

    const h12 = (842 - 100) / 2;
    const w12 = (595 - 100) / 2;

    // chart 1
    elements.push({
      columns: [
        {
          width: w12,
          text: 'Amount Traded Per Currency',
          fontSize: 14,
          bold: true,
          margin: [0, 0, 0, 16],
        }
      ],
    });

    // chart 1 * hack with -60 to have same size as chart 2
    elements.push({
      columns: [
        {
          width: w12,
          // height: h12,
          svg: `<svg>${chart1}</svg>`,
          alignment: 'left',
        }, {
          text: "Lorem Ipsum is simply dummy text o Lorem Ipsum is simply dummy text oLorem Ipsum is simply dummy text oLorem Ipsum is simply dummy text oLorem Ipsum is simply dummy text oLorem Ipsum is simply dummy text oLorem Ipsum is simply dummy text oLorem Ipsum is simply dummy text oLorem Ipsum is simply dummy text oLorem Ipsum is simply dummy text oLorem Ipsum is simply dummy text oLorem Ipsum is simply dummy text oLorem Ipsum is simply dummy text o",
          fontSize: 11,
          bold: false,
        },
      ],
      columnGap: 10,
      // height: h12
    });

    // chart 2
    elements.push({
      columns: [
        {
          width: w12,
          text: ''
        }, {
          width: w12 * 2,
          text: 'Amount Traded Per Products',
          fontSize: 14,
          bold: true,
          margin: [0, 0, 0, 0],
        }
      ],
    });
    elements.push({
      columns: [
        {
          width: w12,
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
          fontSize: 11,
          bold: false,
          margin: [0, h12, 0, 0]
        },
        {
          // width: (w12 * 2) + 20,
          svg: `<svg>${chart2}</svg>`,
          alignment: 'right',
          // fit: [w12, h12],
        }
      ],
      columnGap: 10,
    });
    elements.push({
      text: 'HELLLLLLLLLLLLLLLLLLLLLLLLL'
    });

    const docDefinition = {
      pageSize: 'A4',
      content: [
        ...elements,
      ]
    };
    pdfMake.createPdf(docDefinition).open();
  }

}

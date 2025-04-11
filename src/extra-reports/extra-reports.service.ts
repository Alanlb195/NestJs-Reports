import fs from 'fs';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrinterService } from 'src/printer/printer.service';
import { footerSection, getCommunityReport, headerSection } from 'src/reports';
import { getHtmlContent } from 'helpers/html-to-pdfmake';
import { TDocumentDefinitions } from 'pdfmake/interfaces';

@Injectable()
export class ExtraReportsService extends PrismaClient implements OnModuleInit {


    constructor(
        private readonly printerService: PrinterService
    ) {
        super();
    }

    async onModuleInit() {
        await this.$connect();
        // console.log(`Database connected`)
    }

    getHtmlReport() {

        const html = fs.readFileSync('src/reports/html/basic-03.html', 'utf8')
        const content = getHtmlContent(html, {
            client: 'Alan LB'
        });


        const docDefinition: TDocumentDefinitions = {
            pageMargins: [40, 110, 40, 60],
            header: headerSection({
                title: 'HTML a PDFMake',
                subTitle: 'Convertir HTML a PDFMake'
            }),
            footer: footerSection,
            content: content
        }


        const doc = this.printerService.createPdf(docDefinition);

        return doc;

    }

    getComunityRp() {

        const docDefinition = getCommunityReport();

        const doc = this.printerService.createPdf(docDefinition);

        return doc;
    }


    getCustomSize() {
        const doc = this.printerService.createPdf({
            // pageSize: 'TABLOID',
            pageSize: {
                width: 150,
                height: 300,
            },
            content: [
                {
                    qr: 'https://devtalles.com',
                    fit: 100,
                    alignment: 'center',
                },
                {
                    text: 'Reporte con tamaño',
                    fontSize: 10,
                    alignment: 'center',
                    margin: [0, 20],
                },
            ],
        });

        return doc;
    }

}




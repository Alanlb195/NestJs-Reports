import fs from 'fs';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrinterService } from 'src/printer/printer.service';
import { footerSection, getHelloWorldReport, headerSection } from 'src/reports';
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

}




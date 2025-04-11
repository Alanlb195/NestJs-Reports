import { Controller, Get, Res } from '@nestjs/common';
import { ExtraReportsService } from './extra-reports.service';
import { Response } from 'express';

@Controller('extra-reports')
export class ExtraReportsController {

  constructor(
    private readonly extraReportsService: ExtraReportsService,
  ) { }

  @Get('html-report')
  async getHtmlReport(@Res() res: Response) {
    const pdfDoc = this.extraReportsService.getHtmlReport();
    res.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = 'HTML-Report'
    pdfDoc.pipe(res);
    pdfDoc.end();
  }


  @Get('comunity-report')
  async getComunityReport(@Res() res: Response) {
    const pdfDoc = this.extraReportsService.getComunityRp();

    res.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = 'Billing-Report'
    pdfDoc.pipe(res);
    pdfDoc.end();
  }

  @Get('custom-size')
  async getCustomSize(@Res() response: Response) {
    const pdfDoc = this.extraReportsService.getCustomSize();

    response.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = 'Custom-Size';
    pdfDoc.pipe(response);
    pdfDoc.end();
  }

}

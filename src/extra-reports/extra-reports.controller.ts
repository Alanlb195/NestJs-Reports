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
    pdfDoc.pipe(res);
    pdfDoc.end();
  }


}

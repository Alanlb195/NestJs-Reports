import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrinterService } from 'src/printer/printer.service';
import { getEmploymentLetter, getEmploymentLetterById, getHelloWorldReport } from 'src/reports';

@Injectable()
export class BasicReportsService extends PrismaClient implements OnModuleInit {

    constructor(
        private readonly printerService: PrinterService
    ) {
        super();
    }

    async onModuleInit() {
        await this.$connect();
        // console.log(`Database connected`)
    }

    hello() {

        const report = getHelloWorldReport({
            name: 'Alan Lopez'
        });

        const doc = this.printerService.createPdf(report);

        return doc;

    }

    employmentLetter() {

        const report = getEmploymentLetter();

        const doc = this.printerService.createPdf(report);

        return doc;

    }   

    async employmentLetterById(employeeId: number) {


        const employee = await this.employees.findUnique({
            where: {
                id: employeeId
            }
        });

        if (!employee) {
            throw new NotFoundException(`Employee with id ${employeeId} not found.`);
        }

        const report = getEmploymentLetterById({
            employeeName: employee.name,
            employeeHours: employee.hours_per_day,
            employeePosition: employee.position,
            employeeStartDate: employee.start_date,
            employeeWorkSchedule: employee.work_schedule,
            employerCompany: 'Tucan Code Corp.',
            employerName: 'Alan LB.',
            employerPosition: 'Gerente de RRHH'
        });

        const doc = this.printerService.createPdf(report);

        return doc;
    }


}

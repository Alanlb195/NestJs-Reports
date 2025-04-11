import { TDocumentDefinitions } from "pdfmake/interfaces";

interface ReportOptions {
    name: string;
}

export const getHelloWorldReport = ({ name }: ReportOptions) => {
    const docDefinition: TDocumentDefinitions = {
        content: [`Hola ${ name }`],
    }

    return docDefinition;
}
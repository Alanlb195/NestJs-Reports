import { TDocumentDefinitions } from "pdfmake/interfaces";

interface ReportOptions {
    name: string;
}

export const getHelloWorldReport = ({ name }: ReportOptions) => {

    const docDefinition = {
        content: [
            `Hello world to pdfmake with NestJS, This paragraph fills full width, as there are no columns.
            Next paragraph however consists of three columns`,
            {
                columns: [
                    {
                        // auto-sized columns have their widths based on their content
                        width: 'auto',
                        text: 'First column',
                    },
                    {
                        // star-sized columns fill the remaining space
                        // if there's more than one star-column, available width is divided equally
                        width: '*',
                        text: 'Second column'
                    },
                    {
                        // fixed width
                        width: 100,
                        text: 'Third column'
                    },
                    {
                        // % width
                        width: '20%',
                        text: 'Fourth column'
                    }
                ],
                // optional space between columns
                columnGap: 10
            },
            'This paragraph goes below all columns and has full width'
        ]
    };

    return docDefinition;
}
import { DateFormatter } from 'helpers/date-formatter';
import { Content } from 'pdfmake/interfaces';

const logo: Content = {
    image: 'src/assets/tucan-code-logo.png',
    width: 100,
    height: 100,
    margin: [0, 0, 0, 20],
};

const currentDate: Content = {
    text: DateFormatter.getDDMMMMYYYY(new Date()),
    alignment: 'right',
    margin: [20, 30],
};

interface HeaderOptions {
    title?: string;
    subTitle?: string;
    showLogo?: boolean;
    showDate?: boolean;
}

export const headerSection = (options: HeaderOptions): Content => {
    const { title, subTitle, showLogo = true, showDate = true } = options;

    const headerLogo: Content = showLogo ? logo : '';
    const headerDate: Content = showDate ? currentDate : '';

    const headerSubTitle: Content = subTitle
        ? {
            text: subTitle,
            margin: [0, 2, 0, 0],
            style: {
                fontSize: 16,
                bold: true,
            },
        }
        : '';

    const headerTitle: Content = title
        ? {
            alignment: 'center',
            stack: [
                {
                    text: title,
                    margin: [0, 15, 0, 0],
                    style: {
                        bold: true,
                        fontSize: 22,
                    },
                },
                headerSubTitle,
            ],
        }
        : '';

    return {
        columns: [
            { width: 100, stack: [headerLogo] },
            { width: '*', stack: [headerTitle] },
            { width: 100, stack: [headerDate] },
        ],
    };
};
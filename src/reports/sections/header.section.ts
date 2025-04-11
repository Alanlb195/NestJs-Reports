import { DateFormatter } from "helpers";
import { Content } from "pdfmake/interfaces";

interface HeaderOptions {
    title?: string;
    subTitle?: string;
    showLogo?: boolean;
    showDate?: boolean
}

const logo: Content = {
    image: 'src/assets/tucan-code-logo.png',
    width: 100,
    height: 100,
    alignment: 'center',
    margin: [0, 0, 0, 20],
}


export const headerSection = (options: HeaderOptions): Content => {

    const { subTitle, showDate = true, showLogo = true, title } = options;
    const headerLogo: Content = showLogo ? logo : '';
    const headerDate: Content = showDate
        ? {
            text: DateFormatter.getDDMMMMYYYY(new Date()),
            alignment: 'right',
            margin: [0, 20, 20, 0],
        }
        : '';
    const headerTitle: Content = title ? {
        text: title,
        style: {
            bold: true,
            alignment: 'center',
        }
    }
        : '';

    return {
        columns: [
            headerLogo,
            headerTitle,
            headerDate,
        ],
    }


}
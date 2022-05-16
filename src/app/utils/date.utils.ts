import { FormatDateModel, LanguageFormat } from '../models/date';

const formatDate = (options: FormatDateModel) => {
    const dateData = {
        year: options.date.getFullYear(),
        month: options.date.getMonth() + 1,
        day: options.date.getDate()
    };
    const dates = Object.values(dateData);
    switch (options.type) {
        case LanguageFormat.FR: return dates.reverse().join('-');
        default: return dates.join('-');
    }
};

export { formatDate };

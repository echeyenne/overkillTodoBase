type FormatDateModel = {
    type?: LanguageFormat,
    date: Date
};

enum LanguageFormat {
    EN = 'en',
    FR = 'fr'
}

export { FormatDateModel, LanguageFormat };

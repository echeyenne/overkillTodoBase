type ValidInput = {
    name: string;
    type?: string
};

type ErrorInput = {
    fieldName: string;
    errorName: FormError
};

enum FormError {
    Required = 'required'
}

export { ValidInput, ErrorInput, FormError };

enum ValidationErrors {
    REQUIRED = 'reuqired'
}

export default class Validation {
    static required(value) {
        if (!value) {
            return ValidationErrors.REQUIRED;
        }
    }

    static minLength(value, length) {
        console.log(value);
        if (value.length < length) {
            return `minLength`
        }
    }
}
const validator = (config) => {

    const validate = (name, value) => {
        const {rules, label} = config[name]
        let error;

        if (rules.required && value.trim() === '') {
            error = `Le champ ${label} est requis`;
        }

        if (rules.pattern && value.trim() !== '') {
            const valid = rules.pattern.test(value)
            if(!valid) {
                error = `Le champ ${label} ne respecte pas le format autorisée.`;
            }
        }

        if (rules.minLength && value.length < rules.minLength) {
            error = `Le champ ${label} doit contenir ${rules.minLength} caractères au minimum.`;
        }

        if (rules.maxLength && value.length > rules.maxLength) {
            error = `Le champ ${label} ne peut pas contenir plus de ${rules.maxLength} caractères.`
        }

        return error;
    }

    const validateAll = (state) => {
        let error;
        Object.keys(state).map((key) => {
            const errortest = validate(key, state[key]);
            if(errortest) {
                error = errortest;
            }
        })
        return error;
    }

    return {
        validate,
        validateAll
    }
}

export default validator;
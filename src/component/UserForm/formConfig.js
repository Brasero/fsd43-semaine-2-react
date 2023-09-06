const config = {
    name: {
        type: 'text',
        name: 'name',
        label: 'Nom',
        rules: {
            required: true,
            pattern: /^[a-zA-z]{1}[a-zA-Z ]*$/,
            minLength: 2,
            maxLength: 10
        }
    },
    surname: {
        type: 'text',
        name: 'surname',
        label: 'Prénom',
        rules: {
            required: true,
            pattern: /^[a-zA-z]{1}[a-zA-Z ]*$/,
            minLength: 2,
            maxLength: 25
        }
    }
}

export default config;
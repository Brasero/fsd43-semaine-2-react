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
    }
}

export default config;
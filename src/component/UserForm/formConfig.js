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
    age: {
        type: 'text',
        name: 'age',
        label: 'Age',
        rules: {
            required: true,
            pattern: /^[0-9]{1,3}$/
        }
    },
    gender: {
        type: 'select',
        name: 'gender',
        label: 'Genre',
        rules: {
            required: true
        },
        options: {
            male: {
                label: 'Homme',
                value: 'homme'
            },
            female: {
                label: 'Femme',
                value: 'femme'
            },
            other: {
                label: 'Autre',
                value: 'autre'
            }
        }
    }
}

export default config;
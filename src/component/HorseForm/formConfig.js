const config = {
    name: {
        type: 'text',
        name: "name",
        label: 'Nom',
        rules: {
            required: true,
            pattern: /^[a-zA-Z ]*$/
        }
    },
    size: {
        type: "text",
        name: 'size',
        label: 'Taille',
        rules: {
            required: true,
            pattern: /^[0-9]*([.|,]{1}[0-9]*)?$/
        }
    }
}

export default config
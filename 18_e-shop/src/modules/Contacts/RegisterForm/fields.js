const fields = {
    username: {
        type: "text",
        placeholder: "Ваше имя",
        name: "username",
        rules: {
            required: "Username must be exist"
        }
    },
    email: {
        type: "email",
        placeholder: "Ваш еmail",
        name: "email",
        rules: {
            required: "Email must be exist"
        }
    },
    masage: {
        type: "text",
        placeholder: "Введите сообщение",
        name: "masage",
        rules: {
            required: "Username must be exist"
        }
    }
};

export default fields;
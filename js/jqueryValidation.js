$('.validate').validate({
    rules: {
        name: {
            required: true,
            minlength: 2 
        },
        email:{
            required: true,
            pattern: /^[a-z0-9]+@[a-z]+\.[a-z]{2,4}$/
        },
        surname:{
            minlength: 2,
            required: true
        },
        pass:{
            required: 2,
            minlength: 6
        }
    },

    messages:{
        name:{
            required: "Поле не повинно бути порожнім!",
            minlength: "Занадто коротке ім'я!"
        },
        email:{
            required: "Поле не повинно бути порожнім!",
            pattern: "Введіть пошту згідно формату!"
        },
        surname:{
            required: "Поле не повинно бути порожнім!",
            minlength: "Занадто коротке прізвище!"
        },
        pass:{
            required: "Поле не повинно бути порожнім!",
            minlength: "Пароль має містити мінімум 6 символів!"
        }
    }
})
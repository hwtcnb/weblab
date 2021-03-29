
function formJQuerySend(form){

    const dataServer = document.createElement('p')
    dataServer.classList.add('dataServer')
    document.querySelector('.response-content').append(dataServer)


    const formData = new FormData(form)

    const data_obj = {}

    formData.forEach((value, key) =>{
        data_obj[key] = value
    })

    $.ajax({
        url: `server.php`,
        type: "POST", 
        contentType: "application/json",
        data: JSON.stringify(data_obj),
        success: (data, textStatus) => {
            if (textStatus === 'success') {
                dataServer.innerHTML = data
                // form.reset()
            }
        },
        error: (jqXHR, textStatus, errorThrown) => {
            console.log(textStatus)
            console.log(errorThrown)
            dataServer.innerHTML = 'Fail'
        }
    })
}



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
            required: true,
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
    },

    submitHandler: function (form) {
        formJQuerySend(form)
        document.getElementById('response-popup').style.display = 'block'
    }
})
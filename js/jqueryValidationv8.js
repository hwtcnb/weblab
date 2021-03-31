function formJSSend(form) {
    const dataServer = document.createElement('p')
    dataServer.classList.add('dataServer')
    document.querySelector('.response-content').append(dataServer)

    const request = new XMLHttpRequest()

    request.open('POST', 'server.php')
    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8')
    
    const formData = new FormData(form)

    const data_obj = {}

    formData.forEach((value, key) => {
        data_obj[key] = value
    })

    const data = JSON.stringify(data_obj)

    request.send(data)

    request.addEventListener('load', () => {
        if (request.status === 200) {
          dataServer.innerHTML = request.response
          form.reset()
          setTimeout(() => {
            dataServer.innerHTML = ''
            document.getElementById('response-popup').style.display = 'none'
          }, 10000)
        } else {
          dataServer.innerHTML = 'Fail'
        }
      })
}



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
                form.reset()
                setTimeout(() => {
            dataServer.innerHTML = ''
            document.getElementById('response-popup').style.display = 'none'
          }, 10000)
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
            required: "<br><span>Поле не повинно бути порожнім!</span>",
            minlength: "<br><span>Занадто коротке ім'я!</span>"
        },
        email:{
            required: "<br><span>Поле не повинно бути порожнім!</span>",
            pattern: "<br><span>Введіть пошту згідно формату!</span>"
        },
        surname:{
            required: "<br><span>Поле не повинно бути порожнім!</span>",
            minlength: "<br><span>Занадто коротке прізвище!</span>"
        },
        pass:{
            required: "<br><span>Поле не повинно бути порожнім!</span>",
            minlength: "<br><span>Пароль має містити мінімум 6 символів!</span>"
        }
    },

    submitHandler: function (form) {
        const chooser = prompt('Enter "jq" if you want jQuery_send, enter "js" if you want JavaScript_send')

        if (chooser === 'jq') {
            formJQuerySend(form)
        }
        else{
            formJSSend(form)
        }
        document.getElementById('response-popup').style.display = 'block'
    }
})
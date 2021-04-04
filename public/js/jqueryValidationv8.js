function formJSSend(form) {
    const dataServer = document.createElement('p')
    const serverStatus = document.createElement('p')
    dataServer.classList.add('dataServer')
    serverStatus.classList.add('serverStatus')
    document.querySelector('.response-content').append(dataServer)
    document.querySelect('.response-content').append(serverStatus)

    const request = new XMLHttpRequest()

    request.open('POST', '/form', true)
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
          
        const data = JSON.parse(request.response)
        dataServer.innerHTML = data.name +' '+ data.surname +' '+ data.email +' '+ data.pass +' '+ data.sex +' '+ data.year
        serverStatus.textContent = request.status
          form.reset()
          setTimeout(() => {
            dataServer.innerHTML = ''
            serverStatus.textContent = ''
            document.getElementById('response-popup').style.display = 'none'
          }, 10000)
        } else {
          dataServer.innerHTML = 'Fail'
        }
      })
}



function formJQuerySend(form){
    const messages = {
        loading : "Loading...",
        success : "Success!",
        failure : "Failure!"
    }

    const dataServer = document.createElement('p')
    const serverStatus = document.createElement('p')
    dataServer.classList.add('dataServer')
    serverStatus.classList.add('serverStatus')
    document.querySelector('.response-content').append(dataServer)
    document.querySelector('.response-content').append(serverStatus)
    serverStatus.textContent = messages.loading


    const formData = new FormData(form)

    const data_obj = {}

    formData.forEach((value, key) =>{
        data_obj[key] = value
    })

    $.ajax({
        url: '/form',
        type: "POST", 
        contentType: "application/json",
        data: JSON.stringify(data_obj),
        success: (data, textStatus) => {
            if (textStatus === 'success') {
                dataServer.innerHTML = data.name +' '+ data.surname +' '+ data.email +' '+ data.pass +' '+ data.sex +' '+ data.year
                serverStatus.textContent = messages.success
                form.reset()
                setTimeout(() => {
            dataServer.innerHTML = ''
            serverStatus.textContent = ''
            document.getElementById('response-popup').style.display = 'none'
          }, 10000)
            }
        },
        error: (jqXHR, textStatus, errorThrown) => {
            console.log(textStatus)
            console.log(errorThrown)
            dataServer.innerHTML = ''
            serverStatus.textContent = messages.failure
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
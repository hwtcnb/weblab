function jsValid() {
    const firstName = document.querySelector('[name = "name"]').value;
    const lastName = document.querySelector('[name = "surname"]').value;
    const email = document.querySelector('[name = "email"]').value;
    const passwd = document.querySelector('[name = "pass"]').value;

    const nameReg = "^[а-яА-ЯЇїІіЄєҐґ]"
    const emailReg = /^[a-z0-9]+@[a-z]+\.[a-z]{2,4}$/;

    // Перевірка для ім'я
    if (!firstName) {
        alert("Поле ім'я не може бути порожнім!")
        
    }else if (firstName.length < 2) {
        alert("Поле ім'я має містити більше двох символів!")
        
    }else if (!firstName.match(nameReg) && firstName){
        alert("Ім'я має бути введено кирилицею!")
        
    }

    // Перевірка для прізвища
    if (!lastName){
        alert("Поле прізвище не може бути порожнім!")
        
    }else if (firstName.length < 2){
        alert("Поле прізвище має містити більше двох символів!")
        
    }else if (!lastName.match(nameReg) && lastName){
        alert("Прізвище має бути введено кирилицею!")
        
    }

    // Перевірка для пошти
    if (!email) {
        alert("Поле email не може бути порожнім!")
        
    }else if (!email.match(emailReg) && email) {
        alert("Введіть пошту вигляду: example123@gmail.com")
        
    }

    // Перевірка для паролю
    if (!passwd){
        alert("Поле пароль не може бути порожнім!")
        
    }else if (passwd.length < 6) {
        alert("Пароль має містити не менше 6 символів!")
        
    }

    
}


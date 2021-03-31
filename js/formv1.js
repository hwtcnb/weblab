function dplay(){
    $('#popup').css({'display':'block'});
}

// setTimeout(dplay, 10000)

const select = document.getElementById('selector')
const now = new Date()
// alert(now.getFullYear())
for (let i = 2000; i <= now.getFullYear(); i++) {
   let options = i
   let el = document.createElement('option')
   el.textContent = options
   el.value = options
   select.appendChild(el) 
}

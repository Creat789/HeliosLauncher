const loginOptionsCancelContainer = document.getElementById('loginOptionCancelContainer')
const loginOptionMicrosoft = document.getElementById('loginOptionMicrosoft')
const loginOptionMojang = document.getElementById('loginOptionMojang')
const loginOptionsCancelButton = document.getElementById('loginOptionCancelButton')

let loginOptionsCancellable = false

let loginOptionsViewOnLoginSuccess
let loginOptionsViewOnLoginCancel
let loginOptionsViewOnCancel
let loginOptionsViewCancelHandler

function loginOptionsCancelEnabled(val){
    if(val){
        loginOptionsCancelContainer.style.display = 'block'
    } else {
        loginOptionsCancelContainer.style.display = 'none'
    }
}

function loginCancelEnabled(val){
    if(val){
        loginOptionsCancelContainer.style.display = 'block';
    } else {
        loginOptionsCancelContainer.style.display = 'none';
    }
}


loginOptionMojang.onclick = (e) => {
    switchView(getCurrentView(), VIEWS.login, 500, 500, () => {
        loginViewOnSuccess = loginOptionsViewOnLoginSuccess
        loginViewOnCancel = loginOptionsViewOnLoginCancel
        loginCancelEnabled(true)
    })
}

loginOptionsCancelButton.onclick = (e) => {
    switchView(getCurrentView(), loginOptionsViewOnCancel, 500, 500, () => {
        // Clear login values (Mojang login)
        // No cleanup needed for Microsoft.
        loginUsername.value = ''
        if(loginOptionsViewCancelHandler != null){
            loginOptionsViewCancelHandler()
            loginOptionsViewCancelHandler = null
        }
    })
}
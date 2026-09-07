function obtenerAlias(){
    let alias = document.getElementById("alias");
    if(validarString(alias.value, 2, 20)){
        return alias;
    }else{
        alert("El alias debe tener entre 2 y 20 caracteres");
        return null;
    }
}

function obtenerEmail(){
    let email = document.getElementById("email");
    if(validarString(email.value, 5, 50)){
        return email;
    }else{
        alert("El email debe tener entre 5 y 50 caracteres");
        return null;
    }
}

function obtenerContraseña(){
    let contraseña = document.getElementById("contraseña");
    if(validarString(contraseña.value, 8, 20)){
        return contraseña;
    }else{
        alert("La contraseña debe tener entre 8 y 20 caracteres");
        return null;
    }
}

function validarFloat(value, min, max){
    let trimmedValue = value.trim();
    if(trimmedValue === "" || isNaN(trimmedValue)){
        return false;
    }
    let numero = parseFloat(trimmedValue);
    if(min !== undefined && numero < min){
        return false;
    }
    if(max !== undefined && numero > max){
        return false;
    }
    return true;
}

function validarString(text, min, max){
    if(typeof text !== "string"){
        return false;
    }
    let trimmedText = text.trim();
    if(trimmedText.length >= min && trimmedText.length <= max){
        return true;
    }else{
        return false;
    }
}

function obtenerInfo(){
    let alias = obtenerAlias();
    let email = obtenerEmail();
    let contraseña = obtenerContraseña();
}

function iniciarSesion(){
    let alias = obtenerAliasLogin();
    if(alias == null){
        return;
    }

    let password = obtenerPasswordLogin();
    if(password == null){
        return;
    }
    window.location.href = "./home.html";
}

function obtenerAliasLogin(){
    let alias = document.getElementById("login-alias");
    if(validarString(alias.value, 2, 20)){
        return alias;
    }else{
        alert("El alias debe tener entre 2 y 20 caracteres");
        return null;
    }
}

function obtenerPasswordLogin(){
    let password = document.getElementById("login-password");
    if(validarString(password.value, 8, 20)){
        return password;
    }else{
        alert("La contraseña debe tener entre 8 y 20 caracteres");
        return null;
    }
}

function registrarse(){
    let alias = obtenerAliasRegister();
    if(alias == null){
        return;
    }
    let correo = obtenerCorreoRegister();
    if(correo == null){
        return;
    }
    let password = obtenerPasswordRegister();
    if(password == null){
        return;
    }
    window.location.href = "./home.html";
}

function obtenerAliasRegister(){
    let alias = document.getElementById("register-alias");
    if(validarString(alias.value, 2, 20)){
        return alias;
    }else{
        alert("El alias debe tener entre 2 y 20 caracteres");
        return null;
    }
}

function obtenerCorreoRegister(){
    let correo = document.getElementById("register-correo");
    if(validarString(correo.value, 5, 50)){
        return correo;
    }else{
        alert("El correo debe tener entre 5 y 50 caracteres");
        return null;
    }
}

function obtenerPasswordRegister(){
    let password = document.getElementById("register-password");
    if(validarString(password.value, 8, 20)){
        return password;
    }else{
        alert("La contraseña debe tener entre 8 y 20 caracteres");
        return null;
    }
}

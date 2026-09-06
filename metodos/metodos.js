function obtenerAlias(){
    let alias = document.getElementById("alias");
    if(validarString(alias.value, 2, 20)){
        return alias;
    }else{
        alert("alias no válido");
        return null;
    }
}

function obtenerEmail(){
    let email = document.getElementById("email");
    if(validarString(email.value, 5, 50)){
        return email;
    }else{
        alert("email no válido");
        return null;
    }
}

function obtenerContraseña(){
    let contraseña = document.getElementById("contraseña");
    if(validarString(contraseña.value, 8, 20)){
        return contraseña;
    }else{
        alert("contraseña no válida");
        return null;
    }
}

function validarFloat(value, min, max){
    let trimmedValue = value.trim();
    if (trimmedValue === "" || isNaN(trimmedValue)) {
        return false;
    }
    let numero = parseFloat(trimmedValue);
    if (min !== undefined && numero < min){
        return false;
    } 
    if (max !== undefined && numero > max){
        return false;
    } 
    return true;
}

function validarString(text, min, max){
    if (typeof text !== "string") {
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

//idk if this would work but lets pray to god that it does
//we live in a cruel world that doesnt let us commit mistakes
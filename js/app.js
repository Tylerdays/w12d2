function login(){
    axio.request({
        url : "https://reqres.in/api/login",
        method : "POST",
        data:{
            email : document.getElementById(`usernameBox`).value,
            password : document.getElementById(`passwordBox`).value
        }
    }).then(loginSuccess).catch(loginFailed)
}

function getColors(){
    axio.request({
        url : "https://reqres.in/api/unknown ",
        method : "POST",
        data:{
            name : "",
            year : "",
            color : ""
        }
    }).then(colorSuccess).catch(colorFailed)
}

function colorSuccess(response){
    console.log(response);
}

function colorFailed(error){
    console.log(error);
}

function loginSuccess(response){
    console.log(response);
}

function loginFailed(error){
    console.log(error.response.data.error);
    alert(error.response.data.error);
}

document.getElementById(`loginButton`).addEventListener(`click`, login);
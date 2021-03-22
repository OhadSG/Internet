
function CallHTTPHandler(handlerFile, funcToRun, formData) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.withCredentials = true;

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
            if (funcToRun != null)
                funcToRun(xmlhttp.responseText);
    };

    if (formData == null) {
        xmlhttp.open("GET", handlerFile);
        xmlhttp.send();
    }
    else {
        xmlhttp.open("POST", handlerFile);
        xmlhttp.send(formData);
    }
}

/*
this function sends a form data to the server
when the server response returns, funcToRun is launched
*/
function SubmitForm(formElement, funcToRun) {
    var fd = new FormData(formElement);
    CallHTTPHandler(formElement.action, funcToRun, fd);
}

function Login(responseText) {
    var responseText = JSON.parse(responseText);
    switch (responseText["code"]) {
        case "Username":
            document.getElementById("usernameLogin").setAttribute("class", "FormError");
            document.getElementById("passwordLogin").setAttribute("class", "Form");
            break;
        case "Password":
            document.getElementById("passwordLogin").setAttribute("class", "FormError");
            document.getElementById("usernameLogin").setAttribute("class", "Form");
            break;
        default:
            document.getElementById("usernameLogin").setAttribute("class", "Form");
            document.getElementById("passwordLogin").setAttribute("class", "Form");

            window.location.reload(false);
            break;
    }
}

function Register(responseText) {
    var responseText = JSON.parse(responseText);
    switch (responseText["code"]) {
        case "Email":
            document.getElementById("emailReg").setAttribute("class", "FormError");
            document.getElementById("usernameReg").setAttribute("class", "Form");
            document.getElementById("passwordReg").setAttribute("class", "Form");
            document.getElementById("repasswordReg").setAttribute("class", "Form");
            break;
        case "Username":
            document.getElementById("usernameReg").setAttribute("class", "FormError");
            document.getElementById("emailReg").setAttribute("class", "Form");
            document.getElementById("passwordReg").setAttribute("class", "Form");
            document.getElementById("repasswordReg").setAttribute("class", "Form");
            break;
        case "Password":
            document.getElementById("passwordReg").setAttribute("class", "FormError");
            document.getElementById("repasswordReg").setAttribute("class", "FormError");
            document.getElementById("emailReg").setAttribute("class", "Form");
            document.getElementById("usernameReg").setAttribute("class", "Form");
            break;
        case "Success":
            document.getElementById("emailReg").setAttribute("class", "Form");
            document.getElementById("usernameReg").setAttribute("class", "Form");
            document.getElementById("passwordReg").setAttribute("class", "Form");
            document.getElementById("repasswordReg").setAttribute("class", "Form");

            window.location.reload(false);
            break;
    }
}

function Logout() {
    var href = window.location.href;
    var arr = href.split('/');
    window.location.href = href.replace(arr[arr.length - 1], "Home.aspx");
}

function OpenLogin() {
    document.getElementById("login").setAttribute("style", "display: block;");
}

function OpenRegister() {
    document.getElementById("register").setAttribute("style", "display: block;");
}

function OpenLogout() {
    document.getElementById("logout").setAttribute("style", "display: block;");
}

function CloseLogin() {
    document.getElementById("login").setAttribute("style", "display: none;");
}

function CloseRegister() {
    document.getElementById("register").setAttribute("style", "display: none;");
}

function CloseLogout() {
    document.getElementById("logout").setAttribute("style", "display: none;");
}

function CheckLoggedIn() {
    var c = document.cookie;
    if (c != null && c != "") {
        var an = "username=";
        var start = c.indexOf(an);
        if (start >= 0) {
            start += an.length;
            var username = c.substr(start);
            var end = username.indexOf(';');
            if (end > 0) username = username.substring(0, end);

            var user = document.getElementById("user");
            user.innerHTML = username;
            user.parentElement.parentElement.parentElement.setAttribute("onclick", "OpenLogout()");
        }
        else
        {
            CallHTTPHandler("Handlers/Logout.ashx", Logout);
        }
    }
}
CheckLoggedIn();
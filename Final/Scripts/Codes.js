function BuildTable(responseText) {
    if (responseText != "") {
        var codes = JSON.parse(responseText);
        var t = document.getElementById("CodesTable");

        var start = { Title: "New Code" };
        codes.splice(0, 0, start);

        for (var i = 0; i < codes.length; i += 6) {
            var row = t.insertRow();
            for (var j = 0; j < codes.length && j < 6; j++) {
                var cell = row.insertCell();
                var div = document.createElement("div");

                if (i == 0 && j == 0) {
                    div.setAttribute("class", "NewCode");
                    div.setAttribute("onclick", "OpenCreate();");
                }
                else {
                    div.setAttribute("class", "Code");
                    div.setAttribute("onclick", "window.location.href='/Pages/NewCode.aspx?id=" + codes[i + j].Id + "'");
                }

                cell.appendChild(div);
                div.innerHTML = codes[i + j].Title;
            }
        }
    }
    else {
        if (document.getElementById("user").innerHTML != "Login") window.location.reload(true);
        var t = document.getElementById("CodesTable");
        var row = t.insertRow();
        var cell = row.insertCell();
        var x = document.createElement("div");
        x.setAttribute("class", "NewCode");
        x.setAttribute("style", "font-size: 1.3vw;")
        x.setAttribute("onclick", "OpenLogin()");
        x.innerHTML = "Login to start working";
        cell.appendChild(x);
    }
}

function Create(responseText) {
    window.location.href = '/Pages/NewCode.aspx?id=' + responseText;
}

function OpenCreate() {
    document.getElementById("create").setAttribute("style", "display: block;");
}

function CloseCreate() {
    document.getElementById("create").setAttribute("style", "display: none;");
}

CallHTTPHandler("/Handlers/Codes.ashx", BuildTable);
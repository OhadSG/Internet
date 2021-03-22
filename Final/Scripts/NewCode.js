var queue = [];

function Insert(element) {
    var text = element.value.substring(element.selectionEnd);
    element.value = element.value.substring(0, element.selectionStart);

    var n = document.createElement("input");
    n.setAttribute("type", "text");
    n.setAttribute("id", Number(element.id) + 1);
    n.setAttribute("name", "D");
    n.setAttribute("lang", "en-us");
    n.setAttribute("class", "Line");
    n.setAttribute("onkeydown", "GetKey(event, this)");
    n.setAttribute("autocomplete", "off");
    n.value = text;

    element.parentNode.insertBefore(n, element.nextSibling);
    UpdateID(n.nextSibling, 1);

    n.focus();
    n.setSelectionRange(0, 0);
}

function Remove(element) {
    var s = element.selectionStart;
    var e = element.selectionEnd;
    if (e == 0 && element.name == "D") {
        element.previousSibling.focus();
        element.previousSibling.value += element.value;
        UpdateID(element.nextSibling, -1);
        element.parentNode.removeChild(element);
    }
    else if(e != 0)
    {
        if (e == s) {
            element.value = element.value.substring(0, s - 1) + element.value.substring(s);
        }
        //else {
        //    element.value = element.value.substring(0, s) + element.value.substring(e);
        //}
    }
}

function UpdateID(element, dir) {
    if (element instanceof HTMLInputElement) {
        element.id = Number(element.id) + dir;
        UpdateID(element.nextSibling, dir);
    }
}

function MoveUp(element) {
    var prev = element.previousSibling;
    var s = element.selectionStart;
    var e = element.selectionEnd;
    prev.focus();

    prev.setSelectionRange(s, e);  // doesnt work for some reason
}

function MoveDown(element) {
    var next = element.nextSibling;
    var s = element.selectionStart;
    var e = element.selectionEnd;
    next.focus();

    next.setSelectionRange(s, e); // doesnt work for some reason
}

function AddTab(element) {
    if (element instanceof HTMLInputElement) {
        var p1 = element.value.substring(0, element.selectionStart);
        var p2 = element.value.substring(element.selectionEnd);
        element.value = p1 + "    " + p2;
    }
}

function Delta(x, element) {
    return element.id + " " + element.selectionStart + " " + element.selectionEnd + " " + x;
}

function GetKey(e, element) {
    var k = e.key;
    switch (k) {
        case "Backspace": e.preventDefault(); Remove(element); break;
        case "Enter": Insert(element); break;
        case "ArrowUp": case "Up": MoveUp(element); break;
        case "ArrowDown": case "Down": MoveDown(element); break;
        case "Tab": e.preventDefault(); AddTab(element); break;
    }
    var d = Delta(k, element);
    console.log(d);
    var split = d.split();
    var act = split.length == 4 ? split[3] : " ";
    if (act.length == 1 || act == "Backspace" || act == "Delete" || act == "Tab" || act == "Enter") queue.push(d);
}

function GetPageId() {
    var url_string = window.location.href;
    var url = new URL(url_string);
    return url.searchParams.get("id");
}

function SendUpdate() {
    setInterval(function () {
        var fd = new FormData();
        var len = queue.length;

        fd.append(0, len);
        for (var i = 0; i < len; i++) {
            fd.append(i + 1, queue[i]);
        }
        queue = [];

        CallHTTPHandler('/Handlers/Update.ashx?' + GetPageId(), log, fd);
    }, 5000);
}

function log(responseText) {
    console.log(responseText);
}

function ReadDocument(responseText) {
    responseText = JSON.parse(responseText);
    var element = document.getElementById(0);
    for (var i = 0; i < responseText.length; i++) {
        console.log(responseText[i]);
        element.value = responseText[i];
        Insert(element);
        element = element.nextSibling;
    }
    while (element.value == "") {
        element = element.previousSibling;
        if (element.nextSibling.name == "D") {
            element.parentNode.removeChild(element.nextSibling);
        }
    }
}
CallHTTPHandler('/Handlers/NewCode.ashx?' + GetPageId(), ReadDocument);

SendUpdate();
// JavaScript source code
var yes = document.getElementById("yes");
var abstain = document.getElementById("abstain");
var no = document.getElementById("no");
var votelist = [yes, abstain, no];
var chartLen = [1, 1, 1];
var chartCount = [0, 0, 0];
var ChartImg = null;
var ChLen = 1;

function DrawFlags() {
    var table = document.getElementById("flags");
    for (var i = 0; i < 7; i++) {
        var row = table.insertRow();
        for (var j = 0; j < 8; j++) {
            row.innerHTML += "<td class='flag' align='center'><img class='flag' id='" + (8 * i + j + 1) + "' src='images/" + (8 * i + j + 1) + ".jpg' onclick='FlagClicked(parseInt(this.id))'/></td>";
        }
    }
}

function FlagClicked(id) {
    var pic = document.getElementById(id);
    var table = pic.parentElement.parentElement.parentElement;
    if (table.getAttribute("Checked") == null)
        table.setAttribute("Checked", 0);
    if (pic.getAttribute("class") == "flag" && table.getAttribute("Checked") == 0) {
        pic.setAttribute("class", "flag2");
        table.setAttribute("Checked", "1");
        FlagChosen(pic);
    }
    else if (pic.getAttribute("class") == "flag2") {
        pic.setAttribute("class", "flag");
        table.setAttribute("Checked", "0");
        FlagDechosen(pic);
    }
}

function FlagChosen(flag) {
    for (var i = 0; i < 3; i++) {
        var td = votelist[i].parentElement;
        td.setAttribute("class", "CR2");
        votelist[i].setAttribute("onclick", "Chart(this.id)")
    }
    ChartImg = flag;

}

function FlagDechosen() {
    for (var i = 0; i < 3; i++) {
        var td = votelist[i].parentElement;
        td.setAttribute("class", "CR");
        votelist[i].setAttribute("onclick", "")
    }
    ChartImg = null;
}

function Chart(chartid) {
    if (chartLen[FindIndex(chartid) - 1] >= ChLen) {
        for (var i = 0; i < 3; i++) {
            var table = votelist[i];
            var row = table.insertRow(1);
            var cell1 = row.insertCell();
            var cell2 = row.insertCell();
            var cell3 = row.insertCell();

            cell1.setAttribute("id", 0 + "ch" + (i + 1) + "r" + ChLen);
            cell2.setAttribute("id", 1 + "ch" + (i + 1) + "r" + ChLen);
            cell2.setAttribute("id", 2 + "ch" + (i + 1) + "r" + ChLen);

            var img1 = document.createElement("img");
            var img2 = document.createElement("img");
            var img3 = document.createElement("img");

            img1.setAttribute("class", "chartflag");
            img1.setAttribute("id", 0 + "imgch" + (i + 1) + "r" + ChLen);

            img2.setAttribute("class", "chartflag");
            img2.setAttribute("id", 1 + "imgch" + (i + 1) + "r" + ChLen);

            img3.setAttribute("class", "chartflag");
            img3.setAttribute("id", 2 + "imgch" + (i + 1) + "r" + ChLen);

            cell1.appendChild(img1);
            cell2.appendChild(img2);
            cell3.appendChild(img3);

        }
        ChLen++;
    } 
    var index = FindIndex(chartid);
    var img = document.getElementById((chartCount[index - 1] % 3) + "imgch" + index + "r" + chartLen[index - 1]);
    img.setAttribute("class", "chartflag2");
    img.setAttribute("src", ChartImg.src);

    var temp = ChartImg;
    FlagClicked(ChartImg.getAttribute("id")); 
    LockFlag(temp);

    chartCount[index - 1]++;
    if (chartCount[index - 1] % 3 == 0)
        chartLen[index - 1]++;
}

function LockFlag(flag) {
    flag.setAttribute("onclick", "");
    flag.setAttribute("class", "flaglock");
}

function FindIndex(chartid) {
    var index = 0;
    for (var i = 0; i < 3; i++) {
        if (votelist[i].id == chartid) {
            index = i + 1;
            break;
        }
    }
    return index;
}

DrawFlags();
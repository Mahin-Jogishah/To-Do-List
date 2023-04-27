var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        let m = document.getElementById('mes');
        m.style.display = "block";
        setTimeout(function () {
            m.style.display = "none";
        }, 3000);
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

function remove_all() {
    d = document.getElementById('myUL').style.display = "none";
    window.location.reload();
}

// function add() {
//     let val = document.getElementById('input').value;

//     if (val != "") {
//         let table = document.getElementById('myTable');
//         let l = (table.rows.length);
//         table.insertRow(l).outerHTML = "<tr><td id='value " + l + "'><p>" + val + "</p></td><td id='remove_btn " + l + "'><button onclick='remove(" + l + ")'>Remove</button></td></tr>";
//     }
//     else {
//         let m = document.getElementById('mes');
//         m.style.display = "block";
//         setTimeout(function () {
//             m.style.display = "none";
//         }, 2000);
//     }
// }

// function remove(len) {
//     document.getElementById("myTable").deleteRow(len -2);
// }

// function remove_all() {
//     d = document.getElementById('myTable').style.display = "none";
//     window.location.reload();

//     // if (d.style.display === "block") {
//     //     d.style.display = "none";
//     // }
//     // else {
//     //     d.style.display = "block";
//     // }
// }

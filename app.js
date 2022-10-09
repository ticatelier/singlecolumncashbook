var debit = [];
var credit = [];

function reload(){
    location.reload();
}

function addtodebit(){
    var date = document.getElementById("date").value;
    var particular = document.getElementById("particular").value;
    var folio = document.getElementById("folio").value;
    var amount = Number(document.getElementById("amount").value);
    
    for (var i = 0; i < debit.length+1; i++){
        if(debit[i] == null){
            debit[i] = [date, particular, folio, amount];
            console.log(debit[i]);

            document.getElementById("account").innerHTML += "<tr><td>"+debit[i][0]+"</td><td>"+debit[i][1]+"</td><td>"+debit[i][2]+"</td><td>"+debit[i][3]+"</td><td></td><td></td><td></td><td></td></tr>";

            // document.getElementById("date").value = "";
            document.getElementById("particular").value = "";
            document.getElementById("folio").value = "";
            document.getElementById("amount").value = "";

            break;
        }
    }
    console.log(debit);
}

function addtocredit(){
    var date = document.getElementById("cr-date").value;
    var particular = document.getElementById("cr-particular").value;
    var folio = document.getElementById("cr-folio").value;
    var amount = Number(document.getElementById("cr-amount").value);
    
    for (var i = 0; i < credit.length+1; i++){
        if(credit[i] == null){
            credit[i] = [date, particular, folio, amount];
            console.log(credit[i]);

            document.getElementById("account").innerHTML += "<tr><td></td><td></td><td></td><td></td><td>"+credit[i][0]+"</td><td>"+credit[i][1]+"</td><td>"+credit[i][2]+"</td><td>"+credit[i][3]+"</td></tr>";

            // document.getElementById("date").value = "";
            document.getElementById("cr-particular").value = "";
            document.getElementById("cr-folio").value = "";
            document.getElementById("cr-amount").value = "";
            break;
        }
    }
    console.log(credit);
}

function balance(){
    var sumofdebit = 0;
    var sumofcredit = 0;

    for (i=0; i<debit.length; i++){
        console.log(debit[i][3]);
        sumofdebit = sumofdebit + debit[i][3];
    }

    for (i=0; i<credit.length; i++){
        sumofcredit = sumofcredit + credit[i][3];
    }

    console.log(sumofdebit);
    console.log(sumofcredit);

    if(sumofdebit > sumofcredit) {
        cd = sumofdebit - sumofcredit;
        document.getElementById("account").innerHTML += "<tr><td></td><td></td><td></td><td></td><td></td><td>Bal c/d</td><td></td><td>"+cd+"</td></tr>";
        document.getElementById("account").innerHTML += "<tr><td></td><td>Total</td><td></td><td>"+sumofdebit+"</td><td></td><td>Total</td><td></td><td>"+sumofdebit+"</td></tr>";
    }

    if(sumofdebit < sumofcredit) {
        cd = sumofcredit - sumofdebit;
        document.getElementById("account").innerHTML += "<tr><td></td><td>Bal c/d</td><td></td><td>"+cd+"</td><td></td><td></td><td></td><td></td></tr>";
        document.getElementById("account").innerHTML += "<tr><td></td><td>Total</td><td></td><td>"+sumofcredit+"</td><td></td><td>Total</td><td></td><td>"+sumofcredit+"</td></tr>";
    }

    const bals = document.querySelectorAll(".submit");
    bals.forEach(bal=>bal.classList.add("removedisplay"));

    const reload = document.querySelector(".new");
    reload.classList.remove("removedisplay");
}


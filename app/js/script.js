function showName() {
    const inputField = document.getElementById("name");
    const outputArea = document.getElementById("view-cardholder-name");
    outputArea.textContent = inputField.value;
}

function showNumber() {
    const inputField = document.getElementById("cardNumber");
    const outputArea = document.getElementById("view-card-number");
    //outputArea.textContent = inputField.value.toString();

    let cardNumber = inputField.value; // Remove espaços em branco do valor
    let formattedNumber = "";

    for (let i = 0; i < cardNumber.length; i++) {
        if (i > 0 && i % 4 === 0) {
            formattedNumber += " "; // Adiciona espaço a cada 4 dígitos
        }
        formattedNumber += cardNumber[i];
    }

    outputArea.textContent = formattedNumber;
}

function showDate() {
    const inputFieldMonth = document.getElementById("month").value;
    const inputFieldYear = document.getElementById("year").value;
    const outputArea = document.getElementById("view-exp-date");

    const mmyy = inputFieldMonth + "/" + inputFieldYear;

    outputArea.textContent = mmyy;
}

function showCvc() {
    console.log();
    const inputField = document.getElementById("cvc");
    const outputArea = document.getElementById("view-cvc");
    outputArea.textContent = inputField.value;
}

class Card {
    constructor(name, cardNumber, month, year, cvc) {
        this.name = name;
        this.cardNumber = cardNumber;
        this.month = month;
        this.year = year;
        this.cvc = cvc;
    }
}

class Db {
    constructor() {
        let id = localStorage.getItem("id");
        console.log(id);

        if (id === null) {
            localStorage.setItem("id", 0);
        }
    }
    getNextId() {
        let NextId = localStorage.getItem("id");
        
        return parseInt(NextId) + 1;
       
    }
    write(card) {
        // console.log(3);

        let id = this.getNextId();

        localStorage.setItem(id, JSON.stringify(card));

        localStorage.setItem("id", id);
    }
}

let db = new Db();

function submitForm() {
    let name = document.getElementById("name").value;
    let cardNumber = document.getElementById("cardNumber").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;
    let cvc = document.getElementById("cvc").value;

    let card = new Card(name, cardNumber, month, year, cvc);

    console.log(1);

    db.write(card);

    // Exibir mensagem de sucesso
    //  var successMessage = document.getElementById("successMessage");
    //  successMessage.style.display = "block";
    //  successMessage.innerText = "Dados armazenados com sucesso!";

    // Limpar o formulário
     document.getElementById("myForm").reset();

    let contForm = document.getElementById("containerForm");
    //contForm.innerHTML = "";
    contForm.innerHTML = 
    `<form>
        <img src="./images/icon-complete.svg" id="icon-complete">
        <div id="thank-message">THANK YOU!</div>
        <div id ="submessage" >We've added your card details</div>
        <a href="index.html">
            <input id="btn_confirm" type="button" value="Continue" onclick='./index.html' />
        </a>
    </form>
    `


}
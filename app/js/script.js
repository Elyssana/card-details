function showName() {
    const inputField = document.getElementById('name');
    const outputArea = document.getElementById('view-cardholder-name');
    outputArea.textContent = inputField.value

}

function showNumber() {
    const inputField = document.getElementById('cardNumber');
    const outputArea = document.getElementById('view-card-number');
    //outputArea.textContent = inputField.value.toString();

    let cardNumber = inputField.value; // Remove espaços em branco do valor
    let formattedNumber = '';

    for (let i = 0; i < cardNumber.length; i++) {
        if (i > 0 && i % 4 === 0) {
            formattedNumber += ' '; // Adiciona espaço a cada 4 dígitos
        }
        formattedNumber += cardNumber[i];
    }

    outputArea.textContent = formattedNumber;

   
}

function showDate(){
    const inputFieldMonth = document.getElementById('month').value;
    const inputFieldYear = document.getElementById('year').value;
    const outputArea = document.getElementById('view-exp-date');

    const mmyy = inputFieldMonth + '/' + inputFieldYear;
       
    outputArea.textContent = mmyy;
}

function showCvc(){
    const inputField = document.getElementById('cvc');
    const outputArea = document.getElementById('view-cvc')
    outputArea.textContent = inputField.value
}


class Card{
    constructor(name, cardNumber, month, year, cvc){
        this._name = name;
        this._cardNumber = cardNumber;
        this._month = month;
        this._year = year;
        this._cvc = cvc;
    }
}

class Db{
    getNextId(){
        let NextId = localStorage.getItem('id')
        console.log(1);
    }
    write(card){
       //localStorage.setItem('card', JSON.stringify(card))
       this.getNextId()
    }
}

let db = new Db()


function submitForm(){
    let name = document.getElementById("name").value
    let cardNumber = document.getElementById("cardNumber").value
    let month = document.getElementById("month").value
    let year = document.getElementById("year").value
    let cvc = document.getElementById("cvc").value

    let card = new Card(name, cardNumber, month, year, cvc)

    db.write(card)

     // Exibir mensagem de sucesso
    //  var successMessage = document.getElementById("successMessage");
    //  successMessage.style.display = "block";
    //  successMessage.innerText = "Dados armazenados com sucesso!";

     // Limpar o formulário
    // document.getElementById("myForm").reset();




}
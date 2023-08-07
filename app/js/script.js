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
// alert()
document.getElementById('login-btn').addEventListener('click', function (event) {
    event.preventDefault()
    const accountNumber = document.getElementById('account-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    const convertedPinNumber = parseInt(pinNumber)
    if (accountNumber.length === 11) {
        if (convertedPinNumber === 1234) {
            // console.log('all ok ')
            window.location.href='main.html'
        }
        else {
            alert('enter a valid PIN')
        }
        console.log('account number thik ache')
    }
    else {
        alert('tomar account thik nay') 
    }
})
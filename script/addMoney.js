// alert('admoney')
// document.getElementById('cash-out').style.display='none'
document.getElementById('add-money-box').addEventListener('click', function () {
    document.getElementById('cash-out').style.display = 'none';
    document.getElementById('add-money').style.display = 'block';

})
document.getElementById('cash-out-box').addEventListener('click', function () {
    document.getElementById('cash-out').style.display = 'block';
    document.getElementById('add-money').style.display = 'none';

})

document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById('account-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    const amount = document.getElementById('amount-number').value;
    const convertedAmount = parseFloat(amount)
    const convertedPinNumber = parseInt(pinNumber);
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalane = parseFloat(mainBalance)

    if (accountNumber.length === 11) {
        if (!amount == '') {
            if (!pinNumber == '') {
                if (convertedPinNumber === 1234) {
                    const sum = convertedMainBalane + convertedAmount;
                    document.getElementById('main-balance').innerText=sum;
                    alert('money added');

                } else {
                    alert('Enter valid PIN Number')
                }
            }
            else {
                alert('Enter PIN Number')
            }
        }
        else {
            alert('Enter amount')
        }
        // if (convertedPinNumber === 1234) {
        //     alert('money added');

        // }else{
        //     alert('Enter valid PIN Number')
        // }
    }
    else {
        alert('account number invalid')
    }
})
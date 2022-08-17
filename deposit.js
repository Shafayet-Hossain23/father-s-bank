document.getElementById('btn-deposit').addEventListener('click', function () {

    const inputValue = getInputFieldById('user-deposit');
    if (isNaN(inputValue)) {
        alert('Enter valid Number');
        return;
    }
    const innerDepositValue = getInnerTextByField('total-deposit');
    const replacedDepositValue = inputValue + innerDepositValue;
    changeInnerText('total-deposit', replacedDepositValue);

    const innerBalanceValue = getInnerTextByField('total-balance');
    const replacedBalanceValue = innerBalanceValue + inputValue;
    changeInnerText('total-balance', replacedBalanceValue);
})
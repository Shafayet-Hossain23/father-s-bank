document.getElementById('btn-withdraw').addEventListener('click', function () {

    const withdrawInputValue = getInputFieldById('user-withdraw');
    if (isNaN(withdrawInputValue)) {
        alert('Enter valid Number');
        return;
    }
    const innerBalanceValue2 = getInnerTextByField('total-balance');
    if (withdrawInputValue > innerBalanceValue2) {
        alert("Insuficient Balance");
        return;
    }
    const innerWithdrawValue = getInnerTextByField('total-withdraw');
    const replacedWithdrawValue = withdrawInputValue + innerWithdrawValue;
    changeInnerText('total-withdraw', replacedWithdrawValue);

    // const innerBalanceValue2 = getInnerTextByField('total-balance');
    const replacedBalanceValue2 = innerBalanceValue2 - withdrawInputValue;
    changeInnerText('total-balance', replacedBalanceValue2);
})
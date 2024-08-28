document.getElementById('btn-deposite').addEventListener('click',function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositString = depositField.value;
    const newDeposit = parseFloat(newDepositString);

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositString= depositTotalElement.innerText;
    const previousDeposit = parseFloat(previousDepositString);

    const currentDeposit = previousDeposit+newDeposit;
    depositTotalElement.innerText = currentDeposit;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceString);
    
    const currentBalance = previousBalanceTotal+newDeposit;
    balanceTotalElement.innerHTML = currentBalance;
    
    depositField.value = '';
})
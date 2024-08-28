document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawString = withdrawField.value;
    const newWithdraw = parseFloat(newWithdrawString);

    withdrawField.value = ''

    if(isNaN(newWithdraw)){
        alert("Please enter a valid input");
        return;
    }

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawString = withdrawTotalElement.innerText;
    const previousWithdraw = parseFloat(previousWithdrawString);
    
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceString);
    if(newWithdraw>previousBalanceTotal){
        alert("Insufficient Balace");
        return;
    }
    const currentWithdraw = previousWithdraw+newWithdraw;
    withdrawTotalElement.innerText = currentWithdraw;

    const currentBalance = previousBalanceTotal-newWithdraw;
    balanceTotalElement.innerHTML = currentBalance;

   
})
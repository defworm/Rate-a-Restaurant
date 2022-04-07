let cashier = 0
let c_tot = 0
let c_num = 0



cashierScoreBtn1 = document.getElementById('cashier-1')
cashierScoreBtn1.addEventListener("click", function(){
c_tot = c_tot + 1
c_num = c_num + 1
cashier = c_tot / c_num
console.log(cashier)
})
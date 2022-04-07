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

cashierScoreBtn2 = document.getElementById('cashier-2')
cashierScoreBtn2.addEventListener("click", function(){
c_tot = c_tot + 2
c_num = c_num + 1
cashier = c_tot / c_num
console.log(cashier)
})

cashierScoreBtn3 = document.getElementById('cashier-3')
cashierScoreBtn3.addEventListener("click", function(){
c_tot = c_tot + 3
c_num = c_num + 1
cashier = c_tot / c_num
console.log(cashier)
})

cashierScoreBtn4 = document.getElementById('cashier-4')
cashierScoreBtn4.addEventListener("click", function(){
c_tot = c_tot + 4
c_num = c_num + 1
cashier = c_tot / c_num
console.log(cashier)
})
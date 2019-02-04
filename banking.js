var amount=[0.00];
var fee=[];
var fees=15;
var name="Collins";

for(var i=2;i>=0;i--){
var pass=prompt("Welcome to J-Banking  "+name+" Please enter your password");

if(pass==="collins24"){
alert("Your balance is Ksh"+amount[0]);
alert(name+" Please Select your Options");
var deposit,withdraw;
alert("Select 1[Deposit] or 2[Withdraw] or 3[to exit and cancel your Transaction]");
while(amount){
var ent=prompt("");
if(ent==1){
alert("enter amount to deposit");
deposit=parseFloat( prompt(""));
var total=amount[0]+deposit;
amount.pop(amount[0]);
var input=amount.push(total);
alert("Thank you fo banking with us "+name+" Your balance is KSH"+amount)
alert("Thank you for banking with us, Select 1[Deposit] or 2[Withdraw] or 3[exit]");
}
else if(ent==2){
alert("Enter amount to widthdraw");
withdraw=parseFloat( prompt());

if(withdraw+23>amount[0]){

alert("Insufficient balance Try again")
}else{
var output=amount[0]-(withdraw+fees);
amount.pop(amount[0]);

var output=amount.push(output);
fee.push(fees);
alert("Your balance is Ksh"+amount)
alert("Thank you for banking with us, Select 1[Deposit] or 2[Withdraw] or 3[exit]");
};
}
else if(ent==3){
alert("Thank you for banking with us");
break;
}

else{
alert("wrong choise Try again" +"Select 1[Deposit] or 2[Withdraw] or[ezit]")

}
};



break;


}
  else{

alert("Wrong password!!You have "+i+" Attempts left ");
if(i<2 && i>0 ){
alert("This is your final attempt");


 
}
else if(i<1){
  alert("Please visit your nearest branch for assistance");
};

};
};
var uni=0;
for(u in fee){
uni=uni+fee[u];




};


alert("Total transaction fee today is Ksh:"+uni);
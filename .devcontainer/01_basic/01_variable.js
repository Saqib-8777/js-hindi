const accountId = 123456
let accountEmail = "saqib@google.com"
var accountPassword = "123654"
accountCity ="Kolkata"
let accountState;

//accountId = 2// notallowed
accountEmail = "he@hc.com"
accountPassword = "2145585"
accountCity = "Delhi"


console.log(accountId);

/*
Prefer not to use var
because not issue in block scope and functional scope



*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
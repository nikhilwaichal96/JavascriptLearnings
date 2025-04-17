## Var

1. Variables declared with the var always have Global Scope.

2. Variables declared with the var keyword can NOT have block scope
   
3. Variables defined with var can be redeclared.


## let

1. Variables declared with let have Block Scope

2. Variables declared with let must be Declared before use

3. Variables declared with let cannot be Redeclared in the same scope 




## const







| Scope | Redeclare | Reassign | Hoisted | Binds this |
|:-----:|:---------:|:--------:|:-------:|:----------:|
|  var  |     No    |    Yes   |   Yes   |     Yes    |
|  let  |    Yes    |    No    |   Yes   |     No     |
| const |    Yes    |    No    |   No    |     No     |

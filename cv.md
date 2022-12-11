# Stas Zhekubovski
### *fronted/backend developer*

## Contact information: 
    Telegram: @maketfay
    email: staszhelubovski@gmail.com
    Phone: +375292994009
*I teach frontend and backend.*
## Skils:
* C#
* OOP
* git
## Code example:
*KATA from CODEWARS:*Your function takes as parameter the number of times the cube has been cut. You must return the number of smaller cubes created by the cuts that have at least one red face.

**Solution**:
```
var countSquares = function(cuts){
  if(cuts == 0) return 1
return (Math.pow(cuts+1, 3)-Math.pow(cuts-1, 3))
}
```
# JavaScript Arrays

## Array Methods

### .some()

It's common to loop through arrays using the  `.forEach()`  function however this function has an important limitation; that is, you cannot break out of the loop once it starts. For that reason, in the **getBlockFromColRow** method we use the array function  `.some()`  which operates the same as  `.forEach()`  except that you can break out of the loop by returning **true**.


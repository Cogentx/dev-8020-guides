# 80-20-Guides

## Office VBA Development

### To Catch Errors

Use 'Option Explicit' at the top of VBA code files so the compiler knows that all variables used must first be defined. This helps with finding errors at compile-time instead of run-time.

Often with run-time errors, you end up in a situation where part of the work is completed and part is not. Half-run code can be hard to debug and fix.

### Excel

#### Syntax Errors

Generally caught at compile-time. Problem in the syntax (how the code is written)

##### Gotchas

Syntax errors are not always accurately reported with popup at compile time.

Syntax errors only get caught if the 'keyword' used is accurate to begin with

```default
Range("A1) // will through a compile time error though the error may not be correct... it will highlight the correct line.
```

```default
Rang("A1") // will NOT be caught a compile time because the keyword 'Rang' is not a true keyword. This results in a runtime error.
```



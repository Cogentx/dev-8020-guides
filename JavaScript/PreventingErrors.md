# 80-20 Guide

## JavaScript

### Null - prevent error if object is NULL

**Optional Chaining by using ` ? ` after variable**
` basket?.length `

The ` ? ` says: if ` basket ` is null then calling ` length ` would cause an error.  Adding the NULL or UNDEFINED check with  ` basket? `  means that if  ` basket ` is null; length is not called.  If the object ` basket `  is available then length will be called.


# Authorization API

This repository contains an authentication API made my be during one of the unfinished projects.

### Config:

Set **process.env** variables:

> **PORT** (3000 by default)  
> **AUTH_SECRET** ("secret" by default)  
> **DB_URI** ("mongodb://localhost:27017/authapi" by default)

    
### How to use it:

1. **POST /auth/signup** -  to create en entry in database  
  Required payload:  
```
{
  "username": "Mario",
  "password": "test12345"
}
```

2. **POST /auth/login** -  to get *token*, *user id* and *username*  
  Required payload: 
```
{
  "username": "Mario",
  "password": "test12345"
}
```

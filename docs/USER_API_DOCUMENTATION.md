# User API Spec

## Register User API

Endpoint : POST/User/register

Request Body : 

```json
{
    "name" : "Fadli",
    "email" : "riansyahfadli12@gmial.com",
    "password" : "rahasiabanget",
    "avatar" : man1.png,
    "phone" : "0846829373",
    "adress" : "Tangerang"
}
```
Response Body Sucess : 

```json
{
    "data": {
        "name" : "Fadli",
        "email" : "riansyahfadli12@gmial.com",
        "avatar" : man1.png,
        "phone" : "0846829373",
        "adress" : "Tangerang"
    }
  
}
```
Response Body Error
```json
{
    "errors": "email and name already exists"
}
```

## Login User API

Endpoint : POST/user/login

Request Body :
```json
{
    "email" : "riansyahfadli12@gmail.com",
    "password" : "rahasiabanget"
}
```
Response Body Sucess
```json
{
    "messsage" : "login sucess",
    "token" : "token"
}
```
Response Body Error
```json
{
    "errors": "email  not found"
}
```
## Update User API

Endpoint : PUT/ user/:id

Request Body :
```json
{
    "email" : "asyp@gmail.com",
    "name" : "asyp",
    "phone" : "08483928237",
    "adress" : "jambi"
}
```
Response Body Sucess :
```json
{
    "data": {
        "name" : "asyp",
        "email" : "asyp@gmial.com",
        "avatar" : man1.png,
        "phone" : "08483928237",
        "adress" : "jambi"
    }
}
```

Response Body Error :
```json
{
    "errors": "Token not valid"
}
```
## Get User API

Endpoint : GET/ User

Response Body Sucess :
```json
{
    "data": {
        "name" : "asyp",
        "email" : "asyp@gmial.com",
        "avatar" : man1.png,
        "phone" : "08483928237",
        "adress" : "jambi"
    }
}
```

## Logout User API

Endpoint : DELETE/ User/logout
Response Body Sucess :
```json
{
    "data": {
        "name" : "asyp",
        "email" : "asyp@gmial.com",
        "avatar" : man1.png,
        "phone" : "08483928237",
        "adress" : "jambi"
    },
    "message" : "Logout sucess"
}

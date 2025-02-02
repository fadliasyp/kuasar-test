# Project API Spec

## Post Project API

Endpoint : POST/Project

Request Body : 

```json
{
    "name" : "somebody pleasure",
    "description": "ini deskripsi"
}
```
Response Body Sucess : 

```json
{
    "status" : "sucess",
    "data": {
       "id_project" : 2,
       "name" :  "somebody pleasure","description": "ini deskripsi"
    }
  
}
```
Response Body Error
```json
{
    "errors": "Token tidak valid"
}
```

## Update Project API

Endpoint : PUT/ Project/:id

```json
{
    "name" : "somebody pleasure",
    "description": "ini deskripsi"
}
```
Response Body Sucess :
```json
{
   "data": {
       "id_project" : 2,
       "name" :  "somebody pleasure","description": "ini deskripsi"
    },
    "message" : "Data berhasil diubah"
}
```

Response Body Error :
```json
{
    "errors": "Token not valid"
}
```
## Get Project API

Endpoint : GET/ Project

Response Body Sucess :
```json
{
   "status" : "sucess",
    "data": {
       "id_project" : 2,
       "name" :  "somebody pleasure","description": "ini deskripsi"
    }
}
```

## Delete Project API

Endpoint : DELETE/ Project/:id
Response Body Sucess :
```json
{
    "status" : "sucess",
    "data": {
       "id_project" : 2,
       "name" :  "somebody pleasure","description": "ini deskripsi"
    },
    "message" : "Logout sucess"
}

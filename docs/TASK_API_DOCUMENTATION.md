# Task API Spec

## Post Task API

Endpoint : POST/Task

Request Body : 

```json
{
    "title": "tugas kelompok",
    "description": "ini deskripsi tugas kelompok"
}
```
Response Body Sucess : 

```json
{
    "data": {
        "assignedTo": 3,
        "title": "tugas kelompok",
        "description": "ini deskripsi tugas kelompok",
        "projectId": 3,
        "createdAt": "2025-02-01T10:59:45.969Z",
        "updateAt": "2025-02-01T10:59:45.969Z",
        "user": {
            "id_user": 3,
            "name": "mika",
            "email": "mika@gmail.com",
            "password": "$2b$12$fNqmb2vBUSiR0XSyOkKXA.V9XMe.TIb3rXC5HzwyMmZBZi3Ddc6sy",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pa2FAZ21haWwuY29tIiwiaWF0IjoxNzM4NDA3NTU5LCJleHAiOjE3Mzg0MTExNTl9.c7cTvfiBuqmcE1GX_1hjEZ-blw2GwCnzajwDXauhu28",
            "avatar": "/uploads/1738380105987-woman1.png",
            "phone": "0812345676",
            "adress": "Jambi",
            "createdAt": "2025-02-01T03:21:46.907Z",
            "updatedAt": "2025-02-01T10:59:19.492Z"
        },
        "project": {
            "id_project": 3,
            "name": "somebody pleasure",
            "description": "lagu top indonesia",
            "createdAt": "2025-02-01T09:44:05.655Z",
            "update": "2025-02-01T09:44:05.655Z"
        }
    },
    "message": "Data berhasil ditambahkan"
  
}
```
Response Body Error
```json
{
    "errors": "Token invalid"
}
```
## Update Task API

Endpoint : PUT/ Task/:id

Request Body :
```json
{
    "title": "tugas kelompok",
    "description": "ini deskripsi tugas kelompok"
}
```
Response Body Sucess :
```json
{
    "data": {
        "assignedTo": 3,
        "title": "tugasnya diubah",
        "description": "description nya diubah",
        "projectId": 3,
        "createdAt": "2025-02-01T10:59:45.969Z",
        "updateAt": "2025-02-01T11:04:20.861Z",
        "user": {
            "id_user": 3,
            "name": "mika",
            "email": "mika@gmail.com",
            "password": "$2b$12$fNqmb2vBUSiR0XSyOkKXA.V9XMe.TIb3rXC5HzwyMmZBZi3Ddc6sy",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pa2FAZ21haWwuY29tIiwiaWF0IjoxNzM4NDA3NTU5LCJleHAiOjE3Mzg0MTExNTl9.c7cTvfiBuqmcE1GX_1hjEZ-blw2GwCnzajwDXauhu28",
            "avatar": "/uploads/1738380105987-woman1.png",
            "phone": "0812345676",
            "adress": "Jambi",
            "createdAt": "2025-02-01T03:21:46.907Z",
            "updatedAt": "2025-02-01T10:59:19.492Z"
        },
        "project": {
            "id_project": 3,
            "name": "somebody pleasure",
            "description": "lagu top indonesia",
            "createdAt": "2025-02-01T09:44:05.655Z",
            "update": "2025-02-01T09:44:05.655Z"
        }
    },
    "message": "Data berhasil diubah"
}
```

Response Body Error :
```json
{
    "errors": "Token not valid"
}
```
## Get Task API

Endpoint : GET/ Task

Response Body Sucess :
```json
{
    "assignedTo": 3,
        "title": "tugasnya diubah",
        "description": "description nya diubah",
        "projectId": 3,
        "createdAt": "2025-02-01T10:59:45.969Z",
        "updateAt": "2025-02-01T11:04:20.861Z",
        "user": {
            "id_user": 3,
            "name": "mika",
            "email": "mika@gmail.com",
            "password": "$2b$12$fNqmb2vBUSiR0XSyOkKXA.V9XMe.TIb3rXC5HzwyMmZBZi3Ddc6sy",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pa2FAZ21haWwuY29tIiwiaWF0IjoxNzM4NDA3NTU5LCJleHAiOjE3Mzg0MTExNTl9.c7cTvfiBuqmcE1GX_1hjEZ-blw2GwCnzajwDXauhu28",
            "avatar": "/uploads/1738380105987-woman1.png",
            "phone": "0812345676",
            "adress": "Jambi",
            "createdAt": "2025-02-01T03:21:46.907Z",
            "updatedAt": "2025-02-01T10:59:19.492Z"
        },
        "project": {
            "id_project": 3,
            "name": "somebody pleasure",
            "description": "lagu top indonesia",
            "createdAt": "2025-02-01T09:44:05.655Z",
            "update": "2025-02-01T09:44:05.655Z"
        }
}
```

## Delete Task API

Endpoint : DELETE/ Task
Response Body Sucess :
```json
{
    "data": {
        "assignedTo": 3,
        "title": "tugasnya diubah",
        "description": "description nya diubah",
        "projectId": 3,
        "createdAt": "2025-02-01T10:59:45.969Z",
        "updateAt": "2025-02-01T11:04:20.861Z",
        "user": {
            "id_user": 3,
            "name": "mika",
            "email": "mika@gmail.com",
            "password": "$2b$12$fNqmb2vBUSiR0XSyOkKXA.V9XMe.TIb3rXC5HzwyMmZBZi3Ddc6sy",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pa2FAZ21haWwuY29tIiwiaWF0IjoxNzM4NDA3NTU5LCJleHAiOjE3Mzg0MTExNTl9.c7cTvfiBuqmcE1GX_1hjEZ-blw2GwCnzajwDXauhu28",
            "avatar": "/uploads/1738380105987-woman1.png",
            "phone": "0812345676",
            "adress": "Jambi",
            "createdAt": "2025-02-01T03:21:46.907Z",
            "updatedAt": "2025-02-01T10:59:19.492Z"
        },
        "project": {
            "id_project": 3,
            "name": "somebody pleasure",
            "description": "lagu top indonesia",
            "createdAt": "2025-02-01T09:44:05.655Z",
            "update": "2025-02-01T09:44:05.655Z"
        }
    },
    "message": "Data berhasil dihapus"
}

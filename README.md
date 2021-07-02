# Simple-Movies-App_Version_1.0

## Framework and Package
- express js
- ejs
- nodemon
- html => Custom Bootsrap 5

## Task
Anda diminta untuk membuat aplikasi web sederhana yang dapat melakukan CRUD, untuk melakukan CRUD dalam studi kasus ini anda tidak memerlukan tombol apapun, anda hanya perlu mengubah route saja sesuai kebutuhan.
Dengan ketentuan route sebagai berikut:
```
/ => Menampilkan seluruh List Movies
/:id => Menampilkan List Movies berdasarkan ID
/add => Menambahkan Movies baru ke dalam List
/:id/edit => Mengubah data Movies berdasarkan ID
/:id/delete => Menghapus movies berdasarkan ID
```

# Getting Started
Hal yang perlu dilakukan untuk memulai Aplikasi Web :

- clone this repository
- cd Simple-Movies-App_Version_1.0
- npm install
- git checkout -b yourbranch
- npx nodemon app.js
- you can see web apps in http://localhost:3000/

# Feature in routes
- LIST FILM
    - http://localhost:3000/
- LIST FILM BY ID
    - http://localhost:3000/:id
    - notes : kamu bisa mengubah `id` dengan `id` FILM yang ada di List, contoh => `http://localhost:3000/1`
- ADD LIST FILM
    - http://localhost:3000/add
- EDIT LIST FILM BY ID
    - http://localhost:3000/:id/edit
    - notes : kamu bisa mengubah `id` dengan `id` FILM yang ada di List, contoh => `http://localhost:3000/1/edit`
- DELETE FILM BY ID
    - http://localhost:3000/:id/delete
    - notes : kamu bisa mengubah `id` dengan `id` FILM yang ada di List, contoh => `http://localhost:3000/1/delete`
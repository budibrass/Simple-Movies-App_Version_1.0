# Simple-Movies-App_Version_1.0

## Framework and Pakcage
- express js
- ejs
- nodemon

## Task
you are asked to make a simple web application that can do CRUD, to do CRUD in this study case you don't need any buttons, you just need to change the route.
With the following route conditions:
```
/ => display the all list
/:id => display list by id
/add => add a new movie to the list
/:id/edit => edit movies in the list by id
/:id/delete => delete movies from the list by id
```

# Getting Started
To get started you just need to

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
    - you can change `id` with id FILM in LIST FILM, example => `http://localhost:3000/1`
- ADD LIST FILM
    - http://localhost:3000/add
- EDIT LIST FILM BY ID
    - http://localhost:3000/:id/edit
    - notes : you can change `id` with id FILM in LIST FILM, example => `http://localhost:3000/1/edit`
- DELETE FILM BY ID
    - http://localhost:3000/:id/delete
    - notes : you can change `id` with id FILM in LIST FILM, example => `http://localhost:3000/1/delete`

you can view it on localhost:3000
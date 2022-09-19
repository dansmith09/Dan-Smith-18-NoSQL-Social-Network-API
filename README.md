# Dan-Smith-18-NoSQL-Social-Network-API


**Description**
---

This repository contains a full backend for a social media website/application.
The application allows users to post thoughts and react to thoughts of others among other things.
It has many different endpoints for the functionality of the website. These include:

Users:
- View all users - GET /api/users
- View a specific user - GET /api/users/userId
- Create a new user - POST /api/users/
- Update a users information - POST /api/users/userId
- Delete a user - DELETE /api/users/userId

Friends:
- Add a friend - POST api/users/UserId/friends/FriendId
- Delete a friend - DELETE api/users/UserId/friends/FriendId

Thoughts:
- View all thoughts - GET /api/thoughts
- View a specific thought - GET /api/thoughts/thoughtId
- Create a new thought - POST /api/thoughts/
- Update a thoughts information - POST /api/thoughts/thoughtId
- Delete a thought - DELETE /api/thoughts/thoughtId

Reactions:
- Add a reaction - POST api/users/ThoughtId/reactions/ReactionId
- Delete a reaction - DELETE api/users/ThoughtId/reactions/ReactionId


**Instructions**
---

To run the application first use the following code to install all the dependencies:
```
npm i
```

To start the server use:
```
npm start
```

**Video Demonstration**
---

[![IMAGE ALT TEXT](https://www.youtube.com/watch?v=IDu-Dc2LTvw/0.jpg)](https://www.youtube.com/watch?v=IDu-Dc2LTvw "Tech Blog - Full Stack Application Node Express Handlebars Sequelize Heroku JawsDB")


Click the image above or the link below to see the walkthrough video:

https://www.youtube.com/watch?v=IDu-Dc2LTvw

**Live Website**
---

Link:
https://immense-brook-45307.herokuapp.com/

**Technologies Used**
---

- Node JS
- Express JS
- noSQL
- mongoose

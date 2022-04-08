# W05D05 - Mid-term Project Kickoff

### Outcomes
* to test our skillz
* progress check

* experience working on a team
* exp with real industry moments
* use everything learned so far
* use skills in a team env
* learn from each other

### Pick a Project

### User Stories
* describe how a user will interact with our app (why)
* As a _____, I can ______, because _______

As a logged in user, I can favourite a blog post, because I want to be able to read it later

As a user, I can see a list of available maps, because I am interested in events in my area

As a user, I can favourite a listing on the site, because I want to purchase it AND the heart icon turns red

As a non-logged in user, I cannot edit the pins on a map, because they don't belong to me

planning/user-stories.md

### Identify the Nouns
* nouns === entity
* ERD
* diagrams.net, lowest fidelity possible

planning/erd.png

### Set up routes
* BREAD operations on each resource
* RESTful routes

B GET   /users
R GET   /users/:id
E POST  /users/:id
A POST  /users
D POST  /users/:id/delete

B GET         /users
R GET         /users/:id
E PUT/PATCH   /users/:id
A POST        /users
D DELETE      /users/:id

planning/api-routes.md

### MVP
* Minimum Viable Product
* @KV Minimum Viable Demo MVD
* if you're not going to demo it, DON'T BUILD IT

### User Login/Registration
* please don't do it

```js
app.get('/login/:id', (req, res) => {
  // set the cookie
  req.session.user_id = req.params.id;

  // plaintext cookies
  res.cookie('user_id', req.params.id);

  // send the user somewhere
  res.redirect('/');
});
```
localhost:3000/login/5

### Wireframes/Mockups
* diagrams.net, figma, moqups, balsamiq, pen and paper
* all members to have input

### Tech Choices
* Front End: HTML, CSS, JS, jQuery, bootstrap
* Back End: Postgres, Node, Express

### SPA vs Multi-page
* these are not mutually exclusive
* React SPA
* Rails Multi-page App

### Git
* please do not code on master/main
* merging in the cloud - pull requests
* merge conflicts

### Splitting up the work
* Vertical - every developer is working on a diff piece of the stack
* Horizontal - all devs working on the same layer
* Pair Programming

### Communication
* Plan













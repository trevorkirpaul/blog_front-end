# Blog

## following my experience as a new professional web developer

This is a long term project that was inspired by a "downtime" project for my job. It will be a blog detailing my life and experience and I embark on this exciting new journey. I've also always wanted a blog to keep track of my thoughts as well as improve my writing and communication of ideas.

**Backend:** RoR

**Frontend/view:** React

**Database:** Postgres

I also plan on using Redux. I know this is a simple blog but I'll be tracking much more than one model. Regardless of the need, though, I would use Redux just to keep the learning experience going. I'll also be using redux-saga.

The main purpose of this project is to continue my learning through execution as well as this being a "downtime" task for work. Initially, blog posts(any db info really) will not be public as to prevent any NDA issues.

## Setup

_work in progress_

In order to run this application, you'll need to create a `config.js` file in the `./src` directory. Inside this file will be the API addresses which get called in sagas like `./src/sagas/blog.js`.

The file should look like this in order for this app to correctly function. Some of this is a little specific to the backend I have set up but as long as you have these variables linking to the endpoints in your API then you should be fine.

```javascript
export const ROOT = "API_URL"; // example: 'http://localhost:3000'

export const BLOGS = "blog endpoint for GET, POST";

// function to create route for specific blog posts
// used for methods like DELETE, PATCH
// id === database id for blog
export const blog = id => `${ROOT}/blog/${id}`;
```

I've used redux-sagas so I never directly enter endpoints. I just have simple action creators which can take in arguements like normal.

## Notes

I'll continue to update exmaples and this README later on in the development process as this will be a highly documented long term project.

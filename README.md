# Lyric Finder App

This app is created when I was learning basic React Context API from [Traversi Media](https://www.youtube.com/watch?v=NDEt0KdDbhk). Then I rewrite it to use some new React capabilities like hooks and library that helps me to work on immutable state tree, [Immer](https://github.com/mweststrate/immer).

This lyric finder web app is using:

- React Hooks (useState, useEffect, useReducer, useContext);
- React Context API
- [Immer](https://github.com/mweststrate/immer)
  A library to simplify work on immutable state tree
- React Router v4
- [Musixmatch API](https://developer.musixmatch.com/)
- [Bootstrap](https://getbootstrap.com/) for UI

# Features

- Get list of popular tracks
- Get lyrics of a track
- Search for tracks

### Installation

Requires [Node.js](https://nodejs.org/) v+ or higher.

##### Get the API Key from Musixmatch

Go to [musixmatch.com](https://developer.musixmatch.com/) and create an account. After that, go to [your dashboard](https://developer.musixmatch.com/admin/applications) and copy your API Key Create a file in the root of the project and name it `.env` and create a variable called `REACT_APP_MM_KEY=YourAPIKey`

Install the dependencies and start the server.

```sh
$ npm install
$ npm start
```

You're good to go now!

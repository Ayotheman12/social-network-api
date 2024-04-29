# Social Network API

## Description

This project is an API for a social network where users can share "thoughts", post "reactions" to other thoughts, and add other users as friends. It is a proof-of-concept for a social media app demonstrating the basic features such an app needs on the backend.

The project is written in JavaScript for Node.js, and utilizes Express as its web server and Mongoose as its database/ODM. Datetimes are manipulated using the built-in JavaScript Date class. The server code in in `index.js`, the configuration for the MongoDB server is in `/config/connection.js`, the Mongoose models for the collections are in `/models`, the controllers are in `/controllers`, the modular Express routes are in `/routes`, and helper functions are in `/utils`.

While working on this project, I became more familiar with the process of using Mongoose in a web application. Generally, I also was reminded to not underestimate the amount of time different parts of projects like this require; in this case, I assumed that writing the code to seed the database would be quick, but I think I spent more time on that feature than on any one other part of the project.

## Installation

To install this project, copy/clone its code from GitHub, then navigate to the project's directory. From there, run `npm i` to install the necessary packages and `npm run seed` to seed the database.

## Usage

Once the project is installed, run `npm start` to start the server. While the server is running, use your favorite web browser or API testing tool to send requests to `http://localhost:PORT`, where `PORT` is the port number printed to the terminal when the server started.

The server's user routes are listed here:
- GET `/api/users`: get a list of all users
- GET `/api/users/:userId`: get the information of a single user
- POST `/api/users`: create a new user
- PUT `/api/users/:userId`: update a user
- DELETE `/api/users/:userId`: delete a user (all thoughts by the user will also be deleted)
- POST `/api/users/:userId/friends/:friendId`: add a user to a user's friend list
- DELETE `/api/users/:userId/friends/:friendId`: remove a user from a user's friend list

And the server's thought routes are listed here:
- GET `/api/thoughts`: get a list of all thoughts
- GET `/api/thoughts/:thoughtId`: get the information of a single thought
- POST `/api/thoughts`: create a new thought
- PUT `/api/thoughts/:thoughtId`: update a thought
- DELETE `/api/thoughts/:thoughtId`: delete a thought
- POST `/api/thoughts/:thoughtId/reactions`: add a reaction to a thought
- DELETE `/api/thoughts/:thoughtId/reactions/:reactionId`: remove a reaction from a thought



## Credits

This project was entirely coded by myself, except where otherwise noted. Files for other projects provided by edX Boot Camps, LLC were used as a guide for file layout and organization.

## License

This project is licensed under the GNU General Public License version 3. See [LICENSE](./LICENSE) for the full text of the license.

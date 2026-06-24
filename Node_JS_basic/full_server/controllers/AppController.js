#!/usr/bin/node

// full_server/controllers/AppController.js
export default class AppController {
  static getHomepage(req, res) {
    res.status(200).send('Hello ALX!');
  }
}

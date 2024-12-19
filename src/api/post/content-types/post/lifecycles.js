//const readingTime = require("reading-time");
import readingTime from 'reading-time';

module.exports = {

  async beforeCreate(event) {

    console.log("########## BEFORE CREATE ##########");

    if (event.params.data.content) {

      event.params.data.readingTime =

      readingTime(event.params.data.content)?.text || null;

    }

  },


  async beforeUpdate(event) {

    console.log("########## BEFORE UPDATE ##########");

    if (event.params.data.content) {

      event.params.data.readingTime =

      readingTime(event.params.data.content)?.text || null;

    }

  },

};

// The lifecycles.js file defines lifecycle hooks for the post content type in our Strapi project. These hooks enable us to perform specific actions automatically before certain events occur in a database, such as creating or updating a post.
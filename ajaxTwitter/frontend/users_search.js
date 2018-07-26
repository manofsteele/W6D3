const APIUtil = require('./api_util.js');

class UsersSearch {

  constructor(el) {
    console.log("made a new user search");
    this.$el = $(el);
    this.input = this.$el.data("input");
    this.$ul = $($el.ul);

  }

  handleInput() {
    let val = this.$el.text();
    APIUtil.searchUsers(val).then(() => {


    });
  }


}

module.exports = UsersSearch;

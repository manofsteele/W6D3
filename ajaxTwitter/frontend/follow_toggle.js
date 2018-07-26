const APIUtil = require('./api_util.js');

class FollowToggle{

  constructor(el){
    this.$el = $(el);
    this.userId = this.$el.data("user-id");
    this.followState = this.$el.data("initial-follow-state");
    // debugger;
    // console.log("Creating new FollowToggle");
    this.render();
    this.$el.on("click", this.handleClick.bind(this));
  }

  render() {
    if (this.followState === false) {
      console.log("toggle button follow");
      this.$el.text('Follow!');
      this.$el.prop("disabled",false);
    } else if (this.followState === true) {
      this.$el.text('Unfollow!');
      this.$el.prop("disabled",false);
    } else {
      this.$el.prop("disabled", true);
    }
  }

  handleFollow() {
    this.followState = "following";
    this.render();
    // debugger;
    APIUtil.followUser(this.userId).then(() => {
      this.followState = true;
      this.render();
    });
  }

  handleUnfollow() {
    this.followState = "unfollowing";
    this.render();
    // debugger;
    APIUtil.unfollowUser(this.userId).then(() => {
      this.followState = false;
      this.render();
    });
  }

  handleClick(event){
    event.preventDefault();

    // console.log("Click is being handled now.");
    // console.log(this.followState);
    if (this.followState === false) {
      this.handleFollow();
    } else {
      this.handleUnfollow();
    }
  }
}

module.exports = FollowToggle;

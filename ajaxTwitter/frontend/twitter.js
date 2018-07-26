const FollowToggle =require ("./follow_toggle.js");
const UsersSearch = require ("./users_search.js");
// document ready callback:
$( "document" ).ready(()=>{
  let $toggle_button = $('button.follow-toggle');
  $toggle_button.each((idx,el)=>{
    new FollowToggle(el);
  });
  let $users_search = $('nav.users-search');
  $users_search.each((idx,el)=>{
    new UsersSearch(el);
  });
});

const FollowToggle =require ("./follow_toggle.js");

// document ready callback:
$( "document" ).ready(()=>{
  let $toggle_button = $('button.follow-toggle');
  $toggle_button.each((idx,el)=>{
    new FollowToggle(el);
  });
});

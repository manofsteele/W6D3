const APIUtil = {
    followUser: id => {
      return $.ajax({
        url: `/users/${id}/follow`,
        dataType: 'json',
        method: 'POST'
      });

    },
    unfollowUser: id => (
      $.ajax({
        url: `/users/${id}/follow`,
        dataType: 'json',
        method: 'DELETE',
      })
    ),
    searchUsers: (queryVal, success) =>{
      let promise = $.ajax({
        url: `/users/search`,
        dataType: 'json',
        method: 'GET',
        data: {
          queryVal: queryVal
        }
      });
       return promise;
    }
};
module.exports = APIUtil;

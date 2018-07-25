const APIUtil = {
    followUser: id =>{
      let promise = $.ajax({
        url: `/users/${id}/follow`,
        dataType: 'json',
        method: 'POST'
      });
      return promise;
    },
    unfollowUser: id =>{
      let promise = $.ajax({
        url: `/users/${id}/follow`,
        dataType: 'json',
        method: 'DELETE',
      });
      return promise;
    }
};
module.exports = APIUtil;

var bridge = angular.module('bridge.services', [])

//Post Service
bridge.factory('postService', function($firebaseArray) {
	var fb = new Firebase("https://bridgeapps.firebaseio.com/posts");
	var posts = $firebaseArray(fb);
	var postService= {
		all: posts,
		get: function(postID) {
			return posts.$getRecord(postID);
		}
	};
	return postService;
});
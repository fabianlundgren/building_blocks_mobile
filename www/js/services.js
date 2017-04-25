angular.module('building-blocks.services', [])

.factory('News', function($resource, API_URL) {
  return $resource(API_URL + '/news', {}, {
    query: {
      method: 'GET',
      isArray: true
    }
  });
})

.factory('HelpRequest', function($resource, API_URL) {
  return $resource(API_URL + '/help_requests', {}, {
    save: {
      method: 'POST'
        }
  });
})

.factory('Facility', function($resource, API_URL) {
  return $resource(API_URL + '/facilities', {}, {
    query: {
      method: 'GET',
      isArray: true
    },
  });
})

.factory('AuthService', function($resource, API_URL) {
  return $resource(API_URL + '/auth', {}, {
    save: {
        method: 'POST',
        headers: {'Accept': 'application/json'}
    }
  });
});

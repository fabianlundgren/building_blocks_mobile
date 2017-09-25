angular.module('building-blocks.services', [])

  .factory('News', function($resource, API_URL) {
    return $resource(API_URL + '/news', {}, {
      query: {
        method: 'GET',
        isArray: true
      }
    });
  })

  .factory('Buildings', function($resource, API_URL) {
    return $resource(API_URL + '/buildings', {}, {
      query: {
        method: 'GET',
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


  .factory('Booking', function($resource, API_URL) {
    return $resource(API_URL + '/facilities/:facility_id/bookings', {facility_id: '@facility_id'}, {
      save: {
        method: 'POST'
      }
    });
  })

  .factory('Bookingdel', function($resource, API_URL) {
    return $resource(API_URL + '/facilities/:facility_id/bookings/:id', {facility_id: '@facility_id',id: '@id'}, {
      save: {
        method: 'DELETE'
      }
    });
  })

  .factory('Block', function($resource, API_URL) {
    return $resource(API_URL + '/facilities/:id/bookings', {id: '@id'}, {
      query: {
        method: 'GET',
        isArray: true
      },
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

  .factory('Book', function($resource, API_URL) {
    return $resource(API_URL + '/facilities/:id/timeslots', {id: '@id'}, {
      query: {
        method: 'GET',
        isArray: true
      },
    });
  })

  .factory('Facilities', function($resource, API_URL) {
    return $resource(API_URL + '/facilities/:id/', {id: '@id'}, {
      query: {
        method: 'GET'
      },
    });
  })

  angular.module("ngLocale", [], ["$provide", function($provide) {
  var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
  $provide.value("$locale", {"DATETIME_FORMATS":{"MONTH":
    ["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"],
    "SHORTMONTH":["Jan","Feb","Mars","April","Maj","Juni","Juli","Aug","Sep","Okt","Nov","Dec"],
    "DAY":["Söndag","Måndag","Tisdag","Onsdag","Torsdag","Fredag","Lördag"],
    "SHORTDAY":["Sön","Mån","Tis","Ons","Tors","Fre","Lör"],
    "AMPMS":["fm","em"],"medium":"d MMM y HH:mm:ss",
    "short":"yyyy-MM-dd HH:mm",
    "fullDate":"EEEE'en' 'den' d:'e' MMMM y",
    "longDate":"d MMMM y",
    "mediumDate":"d MMM y",
    "shortDate":"yyyy-MM-dd",
    "mediumTime":"HH:mm:ss",
    "shortTime":"HH:mm"},
    "NUMBER_FORMATS":{"DECIMAL_SEP":",","GROUP_SEP":"Â ",
    "PATTERNS":[{"minInt":1,"minFrac":0,"macFrac":0,
    "posPre":"","posSuf":"",
    "negPre":"-","negSuf":"",
    "gSize":3,"lgSize":3,"maxFrac":3},
    {"minInt":1,"minFrac":2,"macFrac":0,
    "posPre":"","posSuf":"Â \u00A4",
    "negPre":"-","negSuf":"Â \u00A4",
    "gSize":3,"lgSize":3,"maxFrac":2}],
    "CURRENCY_SYM":"kr"},"pluralCat":function (n) {  if (n == 1) {    return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;},"id":"sv"});
}])

  .factory('AuthService', function($resource, API_URL) {
    return $resource(API_URL + '/auth', {}, {
      save: {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        }
      }
    });
  });

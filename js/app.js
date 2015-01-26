'use strict';

/* App Module */

fiftyTwoApp.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});
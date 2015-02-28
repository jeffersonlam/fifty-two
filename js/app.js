'use strict';

/* App Module */

fiftyTwoApp.filter('reverse', function() {
  return function(items) {
  	if (!items || !items.length) return;
    return items.slice().reverse();
  };
});
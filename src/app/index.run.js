(function() {
  'use strict';

  angular
    .module('angularMarket')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

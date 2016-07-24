(function() {
    'use strict';

    angular
        .module('angularMarket')
        .directive('swiperSlider', function($timeout) {
            return {
                restrict: 'A',
                replace: 'true',
                link: function(scope, ele, attr) {
                    if (scope.$last === true) {
                        $timeout(function() {
                            scope.$emit('repeatfnish');
                        });
                    }

                }
            }
        })
        .controller('bannerCtrl', function($scope) {
            var mySwiper = new Swiper('.swiper-container', {
                direction: 'vertical',
                loop: true,

                // 如果需要分页器
                pagination: '.swiper-pagination',

                // 如果需要前进后退按钮
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',

                // 如果需要滚动条
                scrollbar: '.swiper-scrollbar',
            })
        });
})();

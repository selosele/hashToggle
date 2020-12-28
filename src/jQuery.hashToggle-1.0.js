/**
* HashToggle
* Version : 1.0
* Author : Sehyun oh
* Github : https://github.com/selosele/hashToggle
**/

if (typeof jQuery === "undefined") throw new Error("HashToggle requires jQuery.");

(function ($) {
    $.fn.hashToggle = function(options) {
        return this.each(function () {
            var option = $.extend({
                event: "click", // 이벤트 선택
                action: "toggle", // 액션 선택
                duration: 300, // 지연시간 선택
                animateStop: true, // stop() 함수 사용 여부
                toggleClass: null, // toggle할 클래스명
                addClass: null, // 추가할 클래스명
                removeClass: null, // 삭제할 클래스명
                afterEvent: null // 이벤트 발생 후 실행될 콜백함수
            }, options);
            

            $(this).on(option.event, function(event) {
                var matchEL = $(this.hash);

                event.preventDefault();

                if (option.toggleClass) {
                    matchEL.toggleClass(option.toggleClass);
                }

                if (option.addClass) {
                    matchEL.addClass(option.addClass);
                }

                if (option.removeClass) {
                    matchEL.removeClass(option.removeClass);
                }

                if (option.animateStop) {
                    matchEL.stop()[option.action](option.duration);
                } else {
                    matchEL[option.action](option.duration);
                }

                if (option.afterEvent) {
                    option.afterEvent.call($(this), event);
                }
            });
        });
    };
})(jQuery);
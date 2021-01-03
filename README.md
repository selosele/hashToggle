# hashToggle.js

a 태그의 href 속성값과 매칭되는 요소에 JS 작성을 간단하게 해결해주는 jQuery 플러그인.

## 의존성 정보

jQuery 3.5.1

## 사용법

1. src 폴더에 있는 ```jQuery.hashToggle-1.0.js``` 파일을 다운 받는다(min 파일 받아도 됨).
2. 파일을 불러온다.
3. 아래와 같이 플러그인을 호출해준다. 각 옵션에 대한 설명은 아래 **세팅** 부분 참고.

```javascript
$(function() {
    $("[href='#foo']").hashToggle({
        event: "mouseover mouseout",
        action: "fadeToggle",
        duration: 600,
        animateStop: false,
        toggleClass: "active",
        afterEvent: function(event) {
            $("body").toggleClass("on");
        }
    });
});
```

## 세팅

|옵션|유형|기본값|설명|
|------|---|---|---|
|event|문자열|click|이벤트 선택|
|action|문자열|toggle|액션 선택|
|duration|숫자|300|지연시간 선택|
|animateStop|불리언|true|stop() 함수 사용 여부|
|toggleClass|문자열|null|toggle할 클래스명|
|addClass|문자열|null|추가할 클래스명|
|removeClass|문자열|null|삭제할 클래스명|
|afterEvent|함수|null|이벤트 발생 후 실행될 콜백함수. 기본 매개변수 event를 받아올 일이 없어도 명시 필요.|

## 예제

```html
<a href="#foo">foo anchor</a>

<div id="foo">foo div</div>
```

```javascript
$(function() {
    $("[href='#foo']").hashToggle({
        event: "mouseover mouseout",
        action: "fadeToggle",
        duration: 600,
        animateStop: false,
        toggleClass: "active",
        afterEvent: function(event) {
            $("body").toggleClass("on");
        }
    });
});
```

### afterEvent 옵션 사용 시 다중 이벤트 처리법

```event.type```으로 분기 처리를 해주면 된다.

```javascript
$(function() {
    $("[href='#foo']").hashToggle({
        event: "mouseover mouseout",
        afterEvent: function(event) {
            if (event.type === "mouseover") {
                $("body").addClass("on");
            }

            if (event.type === "mouseout") {
                $("body").removeClass("on");
            }
        }
    });
});
```
//상수 const
const fullpageEl = document.getElementById('fullpage');
//전체 페이지
const menuBtn = document.querySelector('.menu_btn');
//메뉴버튼
const navigation = document.querySelector('.navigation');
//오른쪽 네비게이션 메뉴바(안보임)
const navCloseBtn = document.querySelector('.navigation_close_btn');
//오른쪽 메뉴바 X버튼
const blurOverlay = document.querySelector('.blur_overlay');
//화면 전체를 흐리게 덮는 오버레이
const IS_ACTIVE = 'is--active';
//문자열 is--active 선언;

function 오른쪽내비토글() {
    //네비게이션에 클래스 is--active가 있으면 제거 없으면 넣기(add,revome를 동시에)
    navigation.classList.toggle(IS_ACTIVE);
    blurOverlay.classList.toggle(IS_ACTIVE);
    fullpageEl.classList.toggle('no-scroll');//클릭 시에 내려가지 않도록
};

menuBtn.addEventListener('click', 오른쪽내비토글);
//메뉴 버튼을 누르면 클릭했을때 이벤트
navCloseBtn.addEventListener('click', 오른쪽내비토글);
//X 누르면 클릭했을때 이벤트
blurOverlay.addEventListener('click', 오른쪽내비토글);
//흐릿한 부분 눌렀을떄 같은 이벤트

// 여기에서 fullpage를 초기화 설정
new fullpage('#fullpage', {
    //options here
    autoScrolling: true,
    scrollHorizontally: true
});
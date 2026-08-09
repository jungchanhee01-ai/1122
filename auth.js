// auth.js 파일 내용
if (localStorage.getItem('isLoggedIn') !== 'true' && !window.location.href.includes('login.html')) {
    // 로그인이 안 되어 있는데 로그인 페이지가 아니라면, 필요시 처리를 할 수 있는 전역 감시 파일
}
window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('isLoggedIn') === 'true') {
        // 모든 페이지에서 로그인 상태를 공통으로 감지하여 처리
        const loginLinks = document.querySelectorAll('a[href*="login.html"]');
        loginLinks.forEach(el => {
            el.innerText = "로그아웃";
            el.href = "#";
            el.onclick = () => {
                localStorage.removeItem('isLoggedIn');
                localStorage.removeItem('adminName');
                alert('로그아웃되었습니다.');
                window.location.href = window.location.href.includes('/login/') ? '../index.html' : './index.html';
            };
        });
    }
});
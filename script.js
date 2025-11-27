// JavaScript를 사용해 유령의 움직임을 좀 더 동적으로 제어할 수 있습니다.
// 예를 들어, 여러 유령의 속도나 시작 지점을 무작위로 설정할 수 있습니다.

document.addEventListener('DOMContentLoaded', () => {
    const ghosts = document.querySelectorAll('.ghost');

    ghosts.forEach(ghost => {
        // 각 유령의 애니메이션 속도와 딜레이를 무작위로 설정
        const duration = Math.random() * 15 + 10; // 10초에서 25초 사이
        const delay = Math.random() * -duration; // 화면 밖에서 시작하도록 딜레이 설정
        const startPosition = Math.random() * 100; // 0%에서 100% 사이의 y축 시작 위치
        
        ghost.style.animationDuration = `${duration}s`;
        ghost.style.animationDelay = `${delay}s`;
        ghost.style.top = `${startPosition}vh`; // 뷰포트 높이에 따라 y축 위치 설정
    });
});

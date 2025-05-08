// 음주와 인간 수명 연구 프로젝트 메인 스크립트

document.addEventListener('DOMContentLoaded', function() {
  // 내비게이션 바 모바일 토글 기능
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach(function(el) {
      el.addEventListener('click', function() {
        const target = document.getElementById(el.dataset.target);
        el.classList.toggle('is-active');
        target.classList.toggle('is-active');
      });
    });
  }
  
  // 스크롤 애니메이션
  const sections = document.querySelectorAll('.section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeIn 1s forwards';
      }
    });
  }, { threshold: 0.1 });
  
  sections.forEach(section => {
    observer.observe(section);
  });
  
  // 현재 연도 업데이트
  const yearElement = document.querySelector('.current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
  
  // 네비게이션 활성화 상태
  const navLinks = document.querySelectorAll('.navbar-item');
  const sections_arr = Array.from(sections);
  
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections_arr.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.pageYOffset >= sectionTop - 60) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach((link) => {
      link.classList.remove('is-active');
      const href = link.getAttribute('href');
      if (href && href.includes(current)) {
        link.classList.add('is-active');
      }
    });
  });
});
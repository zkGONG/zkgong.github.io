// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 渐变淡出效果
window.addEventListener('load', function() {
    const photo = document.querySelector('.photo');
    if (photo) {
        photo.classList.add('show');
    }
});

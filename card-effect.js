const card = document.querySelector('.profile-card');

if (card) {
    const strength = 18;
    const transitionDuration = 150;

    const resetCard = () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
        card.style.boxShadow = '0 25px 60px rgba(15, 23, 42, 0.1)';
    };

    card.addEventListener('mousemove', (event) => {
        const { left, top, width, height } = card.getBoundingClientRect();
        const x = event.clientX - left;
        const y = event.clientY - top;
        const rotateY = ((x / width) - 0.5) * strength;
        const rotateX = ((y / height) - 0.5) * -strength;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        card.style.transition = `transform ${transitionDuration}ms ease`;
        card.style.boxShadow = `0 35px 70px rgba(15, 23, 42, 0.18)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transition = `transform ${transitionDuration}ms ease`;
        resetCard();
    });

    card.addEventListener('mouseenter', () => {
        card.style.transition = `transform ${transitionDuration}ms ease`;
    });
}

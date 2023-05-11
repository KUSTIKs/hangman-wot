import { getRandomFloat } from './random';

const explode = (element: HTMLElement) => {
  const { x, y, height, width } = element.getBoundingClientRect();

  const particlesCountX = Math.ceil(width / 50);
  const particlesCountY = Math.ceil(height / 50);
  const particlesCount = particlesCountX * particlesCountY;

  element.style.position = 'relative';

  for (var i = 0; i < particlesCount; i += 1) {
    const radius = getRandomFloat(5, 10);
    const distance = getRandomFloat(0, 100);
    const duration = getRandomFloat(500, 1000);
    const initX = width / 2 + getRandomFloat(-width / 2, width / 2) - radius;
    const initY = height / 2 + getRandomFloat(-height / 2, height / 2) - radius;
    const angle = Math.atan2(initY - y, initX - x);
    const distanceX = Math.cos(angle) * distance;
    const distanceY = Math.sin(angle) * distance;
    const distX = initX + distanceX;
    const distY = initY + distanceY;

    const particle = document.createElement('div');
    particle.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      height: ${radius * 2}px;
      width: ${radius * 2}px;
      border-radius: 50%;
      will-change: transform;
      pointer-events: none;
    `;

    element.appendChild(particle);

    const animation = particle.animate(
      [
        {
          backgroundColor: 'hsl(60,100%,100%)',
          transform: `translate(${initX}px,${initY}px) scale(1)`,
        },
        {
          backgroundColor: 'hsl(60,100%,80%)',
          transform: `translate(${initX + distanceX * 0.25}px,${
            initY + distanceY * 0.25
          }px) scale(4)`,
        },
        {
          backgroundColor: 'hsl(40,100%,60%)',
          transform: `translate(${initX + distanceX * 0.5}px,${
            initY + distanceY * 0.5
          }px) scale(7)`,
        },
        {
          backgroundColor: 'hsl(20,100%,40%)',
        },
        {
          backgroundColor: 'hsl(0,0%,20%)',
          transform: `translate(${distX}px,${distY}px) scale(0)`,
        },
      ],
      {
        duration,
        easing: 'ease-in-out',
      }
    );

    animation.onfinish = () => {
      particle.remove();
    };
  }
};

export { explode };

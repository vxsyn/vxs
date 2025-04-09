const pixelRain = document.getElementById('pixel-rain');
const pixelCount = 500; // Adjust for pixel density

for (let i = 0; i < pixelCount; i++) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.style.animationDelay = `${Math.random() * 3}s`; // Random delay
    pixelRain.appendChild(pixel);
}
document.addEventListener('mousemove', function(e) {
  const clouds = document.querySelectorAll('.cloud');
  clouds.forEach(cloud => {
    const speed = cloud.getAttribute('data-speed') || 0.1;
    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;
    cloud.style.transform = `translate(${x}px, ${y}px)`;
  });
});

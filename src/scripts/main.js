// main.js
document.addEventListener('DOMContentLoaded', () => {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        project.addEventListener('mouseenter', () => {
            project.classList.add('hover');
        });
        project.addEventListener('mouseleave', () => {
            project.classList.remove('hover');
        });
    });

    const videoElements = document.querySelectorAll('video');
    videoElements.forEach(video => {
        video.addEventListener('mouseover', () => {
            video.play();
        });
        video.addEventListener('mouseout', () => {
            video.pause();
        });
    });

    // Animación de fade-in para secciones
    const sections = document.querySelectorAll("section");
    sections.forEach((sec, i) => {
        sec.style.opacity = 0;
        sec.style.transform = "translateY(40px)";
        setTimeout(() => {
            sec.style.transition = "all 1s cubic-bezier(.77,0,.18,1)";
            sec.style.opacity = 1;
            sec.style.transform = "translateY(0)";
        }, 400 + i * 300);
    });

    // Efecto hover en imágenes de proyectos
    document.querySelectorAll('.project-gallery img').forEach(img => {
        img.addEventListener('mouseenter', () => {
            img.style.transform = "scale(1.08) rotate(-2deg)";
            img.style.boxShadow = "0 0 30px #00fff7";
            img.style.transition = "all 0.3s";
        });
        img.addEventListener('mouseleave', () => {
            img.style.transform = "scale(1) rotate(0)";
            img.style.boxShadow = "none";
        });
    });
});
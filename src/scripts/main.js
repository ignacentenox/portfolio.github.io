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

    document.querySelectorAll('.preview-video').forEach(video => {
        video.addEventListener('mouseenter', () => {
            video.play();
        });
        video.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0;
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
            img.style.boxShadow = "0 0 30px #ffa600";
            img.style.transition = "all 0.3s";
        });
        img.addEventListener('mouseleave', () => {
            img.style.transform = "scale(1) rotate(0)";
            img.style.boxShadow = "none";
        });
    });

    function openFullscreenMedia(src, type) {
        // Crea el overlay
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = 0;
        overlay.style.left = 0;
        overlay.style.width = '100vw';
        overlay.style.height = '100vh';
        overlay.style.background = 'rgba(0,0,0,0.95)';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';
        overlay.style.zIndex = 9999;
        overlay.style.cursor = 'zoom-out';

        // Crea el elemento (img o video)
        let media;
        if (type === 'img') {
            media = document.createElement('img');
            media.src = src;
            media.style.maxWidth = '90vw';
            media.style.maxHeight = '90vh';
            media.style.borderRadius = '16px';
            media.style.boxShadow = '0 0 40px #ffa600';
        } else if (type === 'video') {
            media = document.createElement('video');
            media.src = src;
            media.muted = true;           // <-- Mutea el video
            media.controls = false;       // <-- Sin controles
            media.autoplay = true;
            media.loop = true;            // Opcional: para que siga en loop
            media.style.maxWidth = '90vw';
            media.style.maxHeight = '90vh';
            media.style.borderRadius = '16px';
            media.style.boxShadow = '0 0 40px #ffa600';
        }
        overlay.appendChild(media);

        // Cierra al hacer click
        overlay.onclick = () => document.body.removeChild(overlay);

        document.body.appendChild(overlay);
    }

    // Para imágenes
    document.querySelectorAll('.project-gallery img').forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', () => openFullscreenMedia(img.src, 'img'));
    });

    // Para videos
    document.querySelectorAll('.video-gallery video').forEach(video => {
        video.style.cursor = 'zoom-in';
        video.addEventListener('click', () => openFullscreenMedia(video.querySelector('source').src, 'video'));
    });
});
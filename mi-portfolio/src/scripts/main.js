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
});
document.addEventListener('DOMContentLoaded', () => {
    const teddyBtn = document.getElementById('teddyBtn');
    const introScene = document.getElementById('introContainer');
    const surpriseScene = document.getElementById('splitScreen');
    
    let isTransitioning = false;

    // Generate falling petals
    const petalContainer = document.querySelector('.floating-petals');
    const emojis = ['🌸', '🌹', '✨', '💖', '🌼'];
    
    for (let i = 0; i < 20; i++) {
        const span = document.createElement('span');
        span.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        span.style.left = Math.random() * 100 + '%';
        span.style.animationDelay = Math.random() * 10 + 's';
        span.style.fontSize = (Math.random() * 1 + 1) + 'rem';
        petalContainer.appendChild(span);
    }

    teddyBtn.addEventListener('click', () => {
        if (isTransitioning) return;
        isTransitioning = true;

        // Click feedback
        teddyBtn.style.transform = 'scale(0.9)';
        
        setTimeout(() => {
            introScene.classList.add('hide');
            
            setTimeout(() => {
                introScene.style.display = 'none';
                surpriseScene.classList.add('show');
            }, 800);
            
        }, 200);
    });

    // Handle transition to last page
    const nextBtn = document.getElementById('toLastPage');
    const lastPage = document.getElementById('lastPage');
    const finalVideo = document.getElementById('finalVideo');

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            surpriseScene.style.opacity = '0';
            setTimeout(() => {
                surpriseScene.style.display = 'none';
                lastPage.classList.add('show');
                // Video playback removed from here as per user request
            }, 1500);
        });
    }

    // Envelope Toggle Logic (Updated for Dashboard)
    const envelopeWrapper = document.getElementById('envelopeWrapper');
    const letterPanel = document.getElementById('letterPanel');
    const videoPanel = document.querySelector('.video-panel');
    
    if (envelopeWrapper && letterPanel) {
        envelopeWrapper.addEventListener('click', () => {
            envelopeWrapper.classList.add('open');
            letterPanel.classList.add('open');
            
            // Add a class to videoPanel to handle the expansion
            if (videoPanel) videoPanel.classList.add('full-video');

            // Play the video
            if (finalVideo) {
                finalVideo.play().catch(e => console.log("Playback failed"));
            }

            // Optional: Completely hide envelope after animation
            setTimeout(() => {
                envelopeWrapper.style.display = 'none';
            }, 600);
        });
    }
});

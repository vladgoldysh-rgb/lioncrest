document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.querySelector('.canvas');
  const revealSection = document.querySelector('.wf-intro');
  const revealWords = document.querySelectorAll('.wf-reveal-text span');
  
  if (!canvas || !revealSection || revealWords.length === 0) return;

  // Listen to scroll events on the canvas
  canvas.addEventListener('scroll', () => {
    // Get the bounding rectangle of the intro section relative to the viewport
    const rect = revealSection.getBoundingClientRect();
    
    // We want the animation to start when the top of the section enters the bottom of the viewport
    // and finish when the top of the section reaches the middle of the viewport.
    const windowHeight = window.innerHeight;
    
    // Calculate how much of the section is visible
    // 0 = just entered from bottom, 1 = fully scrolled past the halfway point
    let progress = 0;
    
    const startY = windowHeight * 0.8; // Start animating when section is 80% down the screen
    const endY = windowHeight * 0.3;   // Finish animating when section is 30% down the screen
    
    if (rect.top > startY) {
      progress = 0;
    } else if (rect.top < endY) {
      progress = 1;
    } else {
      progress = (startY - rect.top) / (startY - endY);
    }
    
    // Apply opacity to words sequentially based on progress
    revealWords.forEach((word, index) => {
      // Calculate the specific threshold for this word
      const wordStart = (index / revealWords.length) * 0.8;
      const wordEnd = wordStart + 0.2;
      
      let wordOpacity = 0.3;
      if (progress > wordEnd) {
        wordOpacity = 1;
      } else if (progress > wordStart) {
        // Interpolate between 0.3 and 1
        const wordProgress = (progress - wordStart) / (wordEnd - wordStart);
        wordOpacity = 0.3 + (0.7 * wordProgress);
      }
      
      word.style.opacity = wordOpacity;
    });
  });
  
  // Trigger once on load in case it's already visible
  canvas.dispatchEvent(new Event('scroll'));

  // Carousel Logic
  const dots = document.querySelectorAll('.wf-dot');
  const slides = document.querySelectorAll('.wf-slide');
  
  if (dots.length > 0 && slides.length > 0) {
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        // Remove active class from all
        dots.forEach(d => d.classList.remove('active'));
        slides.forEach(s => s.classList.remove('active'));
        
        // Add active class to selected
        dot.classList.add('active');
        slides[index].classList.add('active');
      });
    });
  }

  // Case Study Tab Logic
  const tabContainers = document.querySelectorAll('.wf-case-tabs');
  
  tabContainers.forEach(container => {
    const tabs = container.querySelectorAll('.wf-case-tab');
    // Find the next sibling that contains the content blocks
    let contentContainer = container.nextElementSibling;
    while (contentContainer && !contentContainer.querySelector('.wf-case-content')) {
      contentContainer = contentContainer.nextElementSibling;
    }
    
    if (contentContainer) {
      const contents = contentContainer.querySelectorAll('.wf-case-content');
      
      tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
          // Remove active class from all
          tabs.forEach(t => t.classList.remove('active'));
          contents.forEach(c => c.classList.remove('active'));
          
          // Add active class to selected
          tab.classList.add('active');
          if (contents[index]) {
            contents[index].classList.add('active');
          }
        });
      });
    }
  });
});

// Add Desktop Gate & Entry Banner HTML
document.addEventListener('DOMContentLoaded', () => {
  // Insert Mobile Gate
  const gateHTML = `
    <div id="wf-mobile-gate">
      <h1>Best Viewed on Desktop</h1>
      <p>This wireframe is built for desktop only &mdash; it isn't optimized for mobile or tablet screens yet. Please open this link on a computer for the best experience.</p>
    </div>
  `;
  document.body.insertAdjacentHTML('afterbegin', gateHTML);

  // Insert Entry Banner
  const bannerHTML = `
    <div id="wf-entry-banner">
      <div class="banner-inner">
        <div>
          <span id="wf-entry-banner-title">A Quick Note Before You Look Around</span>
          <p id="wf-entry-banner-text">This is a structural proposal, not the finished site &mdash; built so we have something concrete to react to instead of talking in the abstract. Photos, quotes, and a few metrics are placeholders standing in for real content we'll gather together. Everything else &mdash; layout, flow, what goes where &mdash; is exactly what I'd build. If something should move, change, or get researched further, just flag it.</p>
        </div>
        <button id="wf-entry-banner-btn">Got it</button>
      </div>
    </div>
  `;
  
  // Insert before the layout-container so it stays at the very top
  const layoutContainer = document.querySelector('.layout-container');
  if (layoutContainer) {
    layoutContainer.insertAdjacentHTML('beforebegin', bannerHTML);
  } else {
    document.body.insertAdjacentHTML('afterbegin', bannerHTML);
  }

  // Handle Banner Logic
  const banner = document.getElementById('wf-entry-banner');
  const btn = document.getElementById('wf-entry-banner-btn');
  
  if (banner && btn) {
    if (!sessionStorage.getItem('lioncrestBannerDismissed')) {
      banner.style.display = 'block';
    }
    
    btn.addEventListener('click', () => {
      sessionStorage.setItem('lioncrestBannerDismissed', 'true');
      banner.style.display = 'none';
    });
  }
});

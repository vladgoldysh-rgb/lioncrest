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

// Add Desktop Gate & Entry Banner HTML (Modal Version)
document.addEventListener('DOMContentLoaded', () => {
  // 1. Inject Styles dynamically to avoid CSS caching issues
  const style = document.createElement('style');
  style.textContent = `
    #wf-mobile-gate {
      display: none;
      position: fixed;
      inset: 0;
      background: #fff;
      z-index: 9999999;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 48px;
    }
    #wf-mobile-gate h1 { font-size: 32px; margin-bottom: 16px; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
    #wf-mobile-gate p { font-size: 18px; color: #555; max-width: 400px; line-height: 1.5; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
    
    @media (max-width: 1023px) {
      .layout-container { display: none !important; }
      #wf-entry-modal { display: none !important; }
      #wf-mobile-gate { display: flex !important; }
    }

    #wf-entry-modal {
      display: none;
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.6);
      z-index: 9999998;
      align-items: center;
      justify-content: center;
      padding: 24px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    }
    #wf-entry-modal .modal-content {
      background: #fff;
      padding: 48px;
      max-width: 600px;
      width: 100%;
      border-radius: 4px;
      text-align: center;
      box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    }
    #wf-entry-modal-title {
      display: block;
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 16px;
      color: #111;
    }
    #wf-entry-modal-text {
      font-size: 16px;
      color: #555;
      line-height: 1.6;
      margin: 0 0 32px 0;
    }
    #wf-entry-modal-btn {
      background: #111;
      color: #fff;
      border: none;
      padding: 16px 32px;
      border-radius: 4px;
      cursor: pointer;
      font-weight: 600;
      font-size: 16px;
      width: 100%;
    }
  `;
  document.head.appendChild(style);

  // 2. Insert Mobile Gate
  const gateHTML = `
    <div id="wf-mobile-gate">
      <h1>Best Viewed on Desktop</h1>
      <p>This wireframe is built for desktop only &mdash; it isn't optimized for mobile or tablet screens yet. Please open this link on a computer for the best experience.</p>
    </div>
  `;
  document.body.insertAdjacentHTML('afterbegin', gateHTML);

  // 3. Insert Entry Modal
  const modalHTML = `
    <div id="wf-entry-modal">
      <div class="modal-content">
        <span id="wf-entry-modal-title">A Quick Note Before You Look Around</span>
        <p id="wf-entry-modal-text">This is a structural proposal, not the finished site &mdash; built so we have something concrete to react to instead of talking in the abstract. Photos, quotes, and a few metrics are placeholders standing in for real content we'll gather together. Everything else &mdash; layout, flow, what goes where &mdash; is exactly what I'd build. If something should move, change, or get researched further, just flag it.</p>
        <button id="wf-entry-modal-btn">Got it</button>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('afterbegin', modalHTML);

  // 4. Handle Modal Logic
  const modal = document.getElementById('wf-entry-modal');
  const btn = document.getElementById('wf-entry-modal-btn');
  
  if (modal && btn) {
    if (!sessionStorage.getItem('lioncrestBannerDismissed')) {
      modal.style.display = 'flex';
    }
    
    btn.addEventListener('click', () => {
      sessionStorage.setItem('lioncrestBannerDismissed', 'true');
      modal.style.display = 'none';
    });
  }
});


export const fixImagePaths = () => {
  // Fix image paths and add error handling for all tour page images
  const images = document.querySelectorAll('.tour-page img, .tour-page-image img');
  
  images.forEach((img: HTMLImageElement) => {
    // Fix potential protocol issues
    if (img.src.startsWith('//')) {
      img.src = 'https:' + img.src;
    }
    
    // Add error handling if not already present
    if (!img.onerror) {
      img.onerror = function() {
        console.error('Image failed to load:', this.src);
        
        // Replace with placeholder
        const placeholder = document.createElement('div');
        placeholder.className = 'bg-gray-200 flex items-center justify-center text-gray-500 text-sm';
        placeholder.style.width = this.offsetWidth + 'px';
        placeholder.style.height = this.offsetHeight + 'px';
        placeholder.innerHTML = 'Image not available';
        
        if (this.parentNode) {
          this.parentNode.replaceChild(placeholder, this);
        }
      };
    }
  });
};

// Auto-fix images when DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', fixImagePaths);
  
  // Also fix images when navigating between pages
  const observer = new MutationObserver(() => {
    fixImagePaths();
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}

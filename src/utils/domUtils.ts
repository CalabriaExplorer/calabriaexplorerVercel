
// Utility functions for safe DOM manipulation and event handling
export const waitForElement = (selector: string, timeout = 5000): Promise<Element> => {
  return new Promise((resolve, reject) => {
    const element = document.querySelector(selector);
    if (element) {
      resolve(element);
      return;
    }

    const observer = new MutationObserver((mutations, obs) => {
      const element = document.querySelector(selector);
      if (element) {
        obs.disconnect();
        resolve(element);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    setTimeout(() => {
      observer.disconnect();
      reject(new Error(`Element ${selector} not found within ${timeout}ms`));
    }, timeout);
  });
};

export const safeAddEventListener = (
  elementId: string, 
  event: string, 
  handler: EventListener,
  options?: AddEventListenerOptions
): boolean => {
  try {
    const element = document.getElementById(elementId);
    if (element) {
      element.addEventListener(event, handler, options);
      return true;
    } else {
      console.warn(`Element with ID "${elementId}" not found`);
      return false;
    }
  } catch (error) {
    console.error(`Error adding event listener to ${elementId}:`, error);
    return false;
  }
};

export const initializeSwiper = (selector: string, options: any) => {
  return new Promise((resolve, reject) => {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        initSwiper();
      });
    } else {
      initSwiper();
    }

    function initSwiper() {
      try {
        const swiperElement = document.querySelector(selector);
        if (swiperElement) {
          // Check if Swiper is available
          if (typeof window !== 'undefined' && (window as any).Swiper) {
            const swiper = new (window as any).Swiper(selector, options);
            resolve(swiper);
          } else {
            console.warn('Swiper library not loaded');
            reject(new Error('Swiper library not available'));
          }
        } else {
          console.warn(`Swiper element "${selector}" not found`);
          reject(new Error(`Swiper element not found: ${selector}`));
        }
      } catch (error) {
        console.error('Error initializing Swiper:', error);
        reject(error);
      }
    }
  });
};

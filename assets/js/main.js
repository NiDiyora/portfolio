/**
* Template Name: iPortfolio
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Updated: Jun 29 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Header toggle
   */
  const headerToggleBtn = document.querySelector('.header-toggle');

  function headerToggle() {
    document.querySelector('#header').classList.toggle('header-show');
    headerToggleBtn.classList.toggle('bi-list');
    headerToggleBtn.classList.toggle('bi-x');
  }
  headerToggleBtn.addEventListener('click', headerToggle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.header-show')) {
        headerToggle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Init typed.js
   */
  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Initiate Pure Counter
   */
  if (typeof PureCounter !== 'undefined') {
    new PureCounter();
  } else {
    console.warn('PureCounter library not loaded. Counter animations may not work.');
  }

  /**
   * Animate the skills items on reveal
   */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function(direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    // Skip portfolio isotope initialization if portfolio items are to be rendered dynamically
    if (isotopeItem.querySelector('.isotope-container') && 
        isotopeItem.querySelector('.isotope-container').innerHTML.trim() === '' &&
        typeof portfolioData !== 'undefined') {
      return; // Portfolio will be initialized after dynamic rendering
    }
    
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        if (initIsotope) {
          initIsotope.arrange({
            filter: this.getAttribute('data-filter')
          });
        }
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

  /**
   * Dynamic Portfolio Rendering
   */
  let portfolioIsotope = null; // Store Isotope instance globally

  function renderPortfolioItems(category = '*') {
    console.log('renderPortfolioItems called with category:', category);
    
    const portfolioContainer = document.querySelector('.isotope-container');
    if (!portfolioContainer) {
      console.error('Portfolio container (.isotope-container) not found in DOM!');
      return;
    }
    
    if (typeof getPortfolioItemsByCategory === 'undefined') {
      console.error('getPortfolioItemsByCategory function not found! Make sure portfolio-data.js loads before main.js');
      return;
    }
    
    console.log('Container found, getting items for category:', category);

    // Show loading state
    const loadingState = portfolioContainer.querySelector('.portfolio-loading');
    const emptyState = portfolioContainer.querySelector('.portfolio-empty');
    
    if (loadingState) loadingState.style.display = 'block';
    if (emptyState) emptyState.style.display = 'none';

    // Get portfolio items using getPortfolioItemsByCategory method
    let itemsToRender;
    try {
      itemsToRender = getPortfolioItemsByCategory(category);
      console.log(`getPortfolioItemsByCategory('${category}') returned ${itemsToRender.length} items`);
      
      if (!itemsToRender || itemsToRender.length === 0) {
        console.warn('No items found for category:', category);
      }
    } catch (error) {
      console.error('Error calling getPortfolioItemsByCategory:', error);
      return;
    }
    
    // Log for debugging
    console.log(`Rendering ${itemsToRender.length} portfolio items for category: ${category}`);

    // Clear existing rendered items (but keep loading/empty states)
    const existingItems = portfolioContainer.querySelectorAll('.portfolio-item');
    existingItems.forEach(item => item.remove());
    
    // Hide loading state
    if (loadingState) loadingState.style.display = 'none';

    // Render each portfolio item
    if (itemsToRender.length === 0) {
      if (emptyState) {
        emptyState.style.display = 'block';
        emptyState.innerHTML = `<p class="text-muted">No portfolio items found for category: ${category === '*' ? 'All' : category}</p>`;
      } else {
        portfolioContainer.innerHTML = '<div class="col-12 text-center"><p class="text-muted">No portfolio items found for this category.</p></div>';
      }
      return;
    }
    
    // Hide empty state if items exist
    if (emptyState) emptyState.style.display = 'none';

    itemsToRender.forEach(item => {
      const portfolioItem = document.createElement('div');
      portfolioItem.className = `col-lg-4 col-md-6 portfolio-item isotope-item ${item.filter}`;
      
      portfolioItem.innerHTML = `
        <div class="portfolio-content h-100">
          <img src="${item.image}" class="img-fluid" alt="${item.title}" loading="lazy">
          <div class="portfolio-info">
            <div class="portfolio-info-content">
              <span class="portfolio-category">${item.category.charAt(0).toUpperCase() + item.category.slice(1)}</span>
              <h4>${item.title}</h4>
              <p>${item.description}</p>
              <div class="portfolio-actions">
                <a href="${item.image}" title="${item.title}" data-gallery="portfolio-gallery-${item.category}" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html?id=${item.id}" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
              </div>
            </div>
          </div>
        </div>
      `;

      portfolioContainer.appendChild(portfolioItem);
    });
    
    console.log(`Successfully rendered ${itemsToRender.length} portfolio items`);

    // Reinitialize Isotope after rendering
    const isotopeLayout = document.querySelector('.isotope-layout');
    if (isotopeLayout && typeof Isotope !== 'undefined') {
      let layout = isotopeLayout.getAttribute('data-layout') ?? 'masonry';
      let filter = isotopeLayout.getAttribute('data-default-filter') ?? '*';
      let sort = isotopeLayout.getAttribute('data-sort') ?? 'original-order';

      function initializeIsotopeAndFilters() {
        // Destroy existing Isotope instance if it exists
        if (portfolioIsotope) {
          portfolioIsotope.destroy();
          portfolioIsotope = null;
        }

        // Create new Isotope instance
        portfolioIsotope = new Isotope(portfolioContainer, {
          itemSelector: '.isotope-item',
          layoutMode: layout,
          filter: filter,
          sortBy: sort
        });

        // Setup filter buttons
        isotopeLayout.querySelectorAll('.isotope-filters li').forEach(function(filterBtn) {
          // Remove any existing click listeners by using a new event handler
          filterBtn.onclick = null;
          
          filterBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all filters
            isotopeLayout.querySelectorAll('.isotope-filters li').forEach(li => {
              li.classList.remove('filter-active');
            });
            
            // Add active class to clicked filter
            this.classList.add('filter-active');
            
            // Get filter value (should be "*" for All, or ".filter-category" for specific categories)
            const filterValue = this.getAttribute('data-filter');
            
            // Extract category from filter value (remove ".filter-" prefix if present)
            const category = filterValue === '*' ? '*' : filterValue.replace('.filter-', '');
            
            // Re-render portfolio items using getPortfolioItemsByCategory method
            if (typeof getPortfolioItemsByCategory !== 'undefined') {
              renderPortfolioItems(category);
              
              // Reinitialize Isotope and filters after re-rendering
              setTimeout(function() {
                initializeIsotopeAndFilters();
              }, 100);
            } else {
              // Fallback to Isotope filtering if method not available
              if (portfolioIsotope) {
                portfolioIsotope.arrange({
                  filter: filterValue
                });
              }
            }
            
            // Reinitialize AOS animations
            if (typeof aosInit === 'function') {
              aosInit();
            }
          }, false);
        });
      }

      if (typeof imagesLoaded !== 'undefined') {
        imagesLoaded(portfolioContainer, function() {
          initializeIsotopeAndFilters();
        });
      } else {
        // Fallback if imagesLoaded is not available
        setTimeout(function() {
          initializeIsotopeAndFilters();
        }, 500);
      }
    }

    // Reinitialize GLightbox
    if (typeof GLightbox !== 'undefined') {
      const glightbox = GLightbox({
        selector: '.glightbox'
      });
    }

    // Reinitialize AOS
    if (typeof AOS !== 'undefined' && typeof aosInit === 'function') {
      aosInit();
    }
  }

  // Render portfolio when page loads (show all items by default)
  window.addEventListener('load', function() {
    console.log('Page loaded - checking for portfolio container...');
    const container = document.querySelector('.isotope-container');
    
    if (!container) {
      console.error('Portfolio container (.isotope-container) not found in HTML!');
      return;
    }
    
    console.log('Portfolio container found, checking data...');
    
    if (typeof portfolioData === 'undefined') {
      console.error('portfolioData is undefined! Check if portfolio-data.js loaded correctly.');
      return;
    }
    
    if (typeof getPortfolioItemsByCategory === 'undefined') {
      console.error('getPortfolioItemsByCategory function is undefined! Check if portfolio-data.js loaded correctly.');
      return;
    }
    
    console.log('Portfolio data available:', portfolioData.length, 'items');
    console.log('Calling renderPortfolioItems...');
    
    renderPortfolioItems('*'); // Use getPortfolioItemsByCategory('*') to show all items
  });
  
  // Also try on DOMContentLoaded as a fallback
  document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded - portfolio container check');
    const container = document.querySelector('.isotope-container');
    if (container && typeof portfolioData !== 'undefined' && typeof getPortfolioItemsByCategory !== 'undefined') {
      console.log('Portfolio ready on DOMContentLoaded');
      // Don't render here, wait for window.load to ensure all scripts are loaded
    }
  });

})();
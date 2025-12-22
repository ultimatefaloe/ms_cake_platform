// Mobile nav logic for dropdown overlay
// Add this script to your HTML after the hamburger button

function openMobileNav(activePage) {
  // Remove if already exists
  const old = document.querySelector('.mobile-nav-overlay');
  if (old) old.remove();

  // Nav links config
  const links = [
    { label: 'Home', href: 'index.html', key: 'home' },
    { label: 'Products', href: '#', key: 'products' },
    { label: 'Cart (0)', href: '#', key: 'cart' },
    { label: 'Profile', href: 'profile.html', key: 'profile' },
    { label: 'Sign In', href: 'login.html', key: 'signin' },
  ];

  // Create overlay
  const overlay = document.createElement('div');
  overlay.className = 'mobile-nav-overlay';
  overlay.innerHTML = `
    <nav class="mobile-nav">
      <div class="mobile-nav-header">
        <a class="mobile-nav-logo" href="index.html">
          <span class="logo-icon"><i class="bi bi-cake2"></i></span>
          Kiddie's Cake
        </a>
        <button class="mobile-nav-close" aria-label="Close menu">&times;</button>
      </div>
      <div class="mobile-nav-links">
        ${links.map(link => `
          <a href="${link.href}" class="mobile-nav-link${activePage === link.key ? ' active' : ''}">${link.label}</a>
        `).join('')}
      </div>
    </nav>
  `;
  document.body.appendChild(overlay);

  // Close logic
  overlay.querySelector('.mobile-nav-close').onclick = () => overlay.remove();
  overlay.onclick = e => { if (e.target === overlay) overlay.remove(); };
  // Optional: close on nav link click
  overlay.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.onclick = () => overlay.remove();
  });
}

// Attach to hamburger
window.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  if (hamburger) {
    hamburger.addEventListener('click', function() {
      // Detect page for active highlight
      let page = 'home';
      if (window.location.pathname.includes('profile')) page = 'profile';
      else if (window.location.pathname.includes('login')) page = 'signin';
      else if (window.location.pathname.includes('signup')) page = 'signup';
      openMobileNav(page);
    });
  }
});

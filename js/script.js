/**
 * TIFFIN CENTER - Master Vanilla JavaScript Engine
 * Handles:
 * - Menu items data repository
 * - Interactive Shopping Cart (localStorage, add, remove, increment, decrement, delivery calc)
 * - Dynamic Category Filtering & Live Search
 * - Gallery Lightbox modal with keyboard ESC & Next/Prev navigation
 * - FAQ Accordion
 * - Form validation (Order & Contact) with demo feedback
 * - Scroll-reveal animations & Sticky Navbar & Mobile Drawer
 * - Reusable UI Components
 */

// --- 1. Master Menu Data Repository ---
const MENU_DATA = [
  // South Indian Breakfast
  {
    id: "sib-1",
    name: "Classic Steamed Idli (2 Pcs)",
    category: "south-indian-breakfast",
    categoryLabel: "South Indian Breakfast",
    price: 30,
    desc: "Soft, fluffy steamed rice and lentil cakes served with traditional coconut chutney and piping hot sambar.",
    icon: "🥟",
    badge: "Popular",
    image: "assets/images/dish-idli-vada-combo.jpg",
    isBreakfast: true,
    isLunch: false,
    placeholderLabel: "IDLI WITH SAMBAR & CHUTNEY"
  },
  {
    id: "sib-2",
    name: "Golden Medu Vada (2 Pcs)",
    category: "idli-vada",
    categoryLabel: "Idli & Vada",
    price: 35,
    desc: "Crispy deep-fried lentil donuts infused with crushed black pepper, ginger, and curry leaves.",
    icon: "🍩",
    badge: "Crispy",
    image: "assets/images/dish-idli-vada-combo.jpg",
    isBreakfast: true,
    isLunch: false,
    placeholderLabel: "CRISPY MEDU VADA"
  },
  {
    id: "sib-3",
    name: "Idli + Vada Combo",
    category: "special-combos",
    categoryLabel: "Special Combos",
    price: 60,
    desc: "The ultimate breakfast pairing: two soft steamed idlis and one crispy vada with sambar and two chutneys.",
    icon: "🍽️",
    badge: "Best Seller",
    image: "assets/images/dish-idli-vada-combo.jpg",
    isBreakfast: true,
    isLunch: false,
    placeholderLabel: "IDLI AND VADA COMBO"
  },
  {
    id: "sib-4",
    name: "Ghee Pongal",
    category: "south-indian-breakfast",
    categoryLabel: "South Indian Breakfast",
    price: 50,
    desc: "Comforting aromatic rice and yellow moong dal cooked with pure ghee, roasted cashews, cumin, and ginger.",
    icon: "🥣",
    badge: "Traditional",
    image: "assets/images/dish-south-indian-meals.jpg",
    isBreakfast: true,
    isLunch: false,
    placeholderLabel: "HOT GHEE PONGAL"
  },
  {
    id: "sib-5",
    name: "Rava Upma",
    category: "puri-upma",
    categoryLabel: "Puri & Upma",
    price: 40,
    desc: "Lightly roasted semolina cooked with fresh vegetables, mustard seeds, green chillies, and fragrant herbs.",
    icon: "🍲",
    badge: "",
    image: "assets/images/dish-idli-vada-combo.jpg",
    isBreakfast: true,
    isLunch: false,
    placeholderLabel: "FRESH RAVA UPMA"
  },
  {
    id: "sib-6",
    name: "Fluffy Poori with Potato Curry (2 Pcs)",
    category: "puri-upma",
    categoryLabel: "Puri & Upma",
    price: 60,
    desc: "Puffed golden pooris served with spiced homestyle potato saagu / masala curry.",
    icon: "🫓",
    badge: "Classic",
    image: "assets/images/dish-masala-dosa.jpg",
    isBreakfast: true,
    isLunch: false,
    placeholderLabel: "POORI WITH POTATO CURRY"
  },

  // Dosa Varieties
  {
    id: "dos-1",
    name: "Golden Crispy Plain Dosa",
    category: "dosa-varieties",
    categoryLabel: "Dosa Varieties",
    price: 50,
    desc: "Thin, crispy golden crepe made from fermented rice and urad dal batter, served with chutneys & sambar.",
    icon: "🥞",
    badge: "",
    image: "assets/images/dish-masala-dosa.jpg",
    isBreakfast: true,
    isLunch: false,
    placeholderLabel: "CRISPY PLAIN DOSA"
  },
  {
    id: "dos-2",
    name: "Butter Masala Dosa",
    category: "dosa-varieties",
    categoryLabel: "Dosa Varieties",
    price: 70,
    desc: "Crisp dosa roasted with pure butter, stuffed with seasoned tempered mashed potatoes and herbs.",
    icon: "🧈",
    badge: "Best Seller",
    image: "assets/images/dish-masala-dosa.jpg",
    isBreakfast: true,
    isLunch: false,
    placeholderLabel: "BUTTER MASALA DOSA"
  },
  {
    id: "dos-3",
    name: "Mysore Masala Dosa",
    category: "dosa-varieties",
    categoryLabel: "Dosa Varieties",
    price: 80,
    desc: "Layered with fiery red garlic chili chutney, butter, and spiced aloo filling for that quintessential Mysore taste.",
    icon: "🌶️",
    badge: "Chef Special",
    image: "assets/images/dish-masala-dosa.jpg",
    isBreakfast: true,
    isLunch: false,
    placeholderLabel: "MYSORE MASALA DOSA"
  },
  {
    id: "dos-4",
    name: "Onion Tomato Uttapam",
    category: "dosa-varieties",
    categoryLabel: "Dosa Varieties",
    price: 60,
    desc: "Thick, savoury pancake topped with freshly chopped onions, juicy tomatoes, cilantro, and green chillies.",
    icon: "🍳",
    badge: "",
    image: "assets/images/dish-masala-dosa.jpg",
    isBreakfast: true,
    isLunch: false,
    placeholderLabel: "ONION TOMATO UTTAPAM"
  },
  {
    id: "dos-5",
    name: "Andhra Pesarattu Dosa",
    category: "dosa-varieties",
    categoryLabel: "Dosa Varieties",
    price: 70,
    desc: "Nutritious whole green gram crepe topped with finely chopped ginger, green chillies, and onions with ginger chutney.",
    icon: "🌿",
    badge: "Protein Rich",
    image: "assets/images/dish-masala-dosa.jpg",
    isBreakfast: true,
    isLunch: false,
    placeholderLabel: "ANDHRA PESARATTU DOSA"
  },

  // Meals & Thalis
  {
    id: "mel-1",
    name: "Traditional South Indian Meals",
    category: "rice-meals",
    categoryLabel: "Rice & Meals",
    price: 120,
    desc: "Wholesome platter of steamed ponni rice, aromatic sambar, rasam, kootu, poriyal, papad, curd, and sweet payasam.",
    icon: "🍱",
    badge: "All-Time Fav",
    image: "assets/images/dish-south-indian-meals.jpg",
    isBreakfast: false,
    isLunch: true,
    placeholderLabel: "SOUTH INDIAN MEALS THALI"
  },
  {
    id: "mel-2",
    name: "Homestyle North Indian Meals",
    category: "rice-meals",
    categoryLabel: "Rice & Meals",
    price: 130,
    desc: "Phulkas/Rotis served with dal tadka, paneer vegetable subzi, jeera rice, salad, pickle, and gulab jamun.",
    icon: "🍛",
    badge: "Hearty",
    image: "assets/images/dish-south-indian-meals.jpg",
    isBreakfast: false,
    isLunch: true,
    placeholderLabel: "NORTH INDIAN MEALS THALI"
  },
  {
    id: "mel-3",
    name: "Special Executive Veg Thali",
    category: "special-combos",
    categoryLabel: "Special Combos",
    price: 150,
    desc: "Deluxe feast featuring two rich seasonal curries, dal makhani, fragrant pulao, rotis, raita, papad, sweet, and drink.",
    icon: "👑",
    badge: "Deluxe Feast",
    image: "assets/images/dish-south-indian-meals.jpg",
    isBreakfast: false,
    isLunch: true,
    placeholderLabel: "SPECIAL VEG THALI"
  },
  {
    id: "mel-4",
    name: "Refreshing Tempered Curd Rice",
    category: "rice-meals",
    categoryLabel: "Rice & Meals",
    price: 60,
    desc: "Cool and comforting curd rice tempered with mustard, curry leaves, ginger, pomegranate, and crunchy urad dal.",
    icon: "🍚",
    badge: "Cooling",
    image: "assets/images/dish-south-indian-meals.jpg",
    isBreakfast: false,
    isLunch: true,
    placeholderLabel: "TEMPERED CURD RICE"
  },
  {
    id: "mel-5",
    name: "Zesty Tangy Lemon Rice",
    category: "rice-meals",
    categoryLabel: "Rice & Meals",
    price: 60,
    desc: "Fragrant rice tossed with freshly squeezed lemon juice, turmeric, roasted peanuts, mustard seeds, and curry leaves.",
    icon: "🍋",
    badge: "Tangy",
    image: "assets/images/dish-south-indian-meals.jpg",
    isBreakfast: false,
    isLunch: true,
    placeholderLabel: "ZESTY LEMON RICE"
  },
  {
    id: "mel-6",
    name: "Mini South Indian Meals Combo",
    category: "special-combos",
    categoryLabel: "Special Combos",
    price: 90,
    desc: "Quick lunch tray: Sambar rice, Curd rice, potato fry, appalam, and a mini cup of sweet payasam.",
    icon: "🍱",
    badge: "Quick Lunch",
    image: "assets/images/dish-south-indian-meals.jpg",
    isBreakfast: false,
    isLunch: true,
    placeholderLabel: "MINI MEALS COMBO"
  },

  // Evening Snacks
  {
    id: "snk-1",
    name: "Crispy Punjabi Samosa (2 Pcs)",
    category: "evening-snacks",
    categoryLabel: "Evening Snacks",
    price: 20,
    desc: "Flaky crust stuffed with spicy mashed potatoes, green peas, and whole spices, served with tamarind & mint chutney.",
    icon: "🥟",
    badge: "Popular",
    image: "assets/images/dish-evening-snacks.jpg",
    isBreakfast: false,
    isLunch: false,
    placeholderLabel: "CRISPY HOT SAMOSA"
  },
  {
    id: "snk-2",
    name: "Mirchi Bajji (4 Pcs)",
    category: "evening-snacks",
    categoryLabel: "Evening Snacks",
    price: 30,
    desc: "Stuffed plump banana chillies dipped in spiced gram flour batter and fried to golden crispness.",
    icon: "🌶️",
    badge: "Spicy",
    image: "assets/images/dish-evening-snacks.jpg",
    isBreakfast: false,
    isLunch: false,
    placeholderLabel: "GOLDEN MIRCHI BAJJI"
  },
  {
    id: "snk-3",
    name: "Crispy Punugulu",
    category: "evening-snacks",
    categoryLabel: "Evening Snacks",
    price: 35,
    desc: "Bite-sized crispy fritters made from fermented rice-dal batter served with spicy ginger-coconut chutney.",
    icon: "🧆",
    badge: "Street Style",
    image: "assets/images/dish-evening-snacks.jpg",
    isBreakfast: false,
    isLunch: false,
    placeholderLabel: "CRISPY PUNUGULU"
  },
  {
    id: "snk-4",
    name: "Crunchy Onion Pakoda",
    category: "evening-snacks",
    categoryLabel: "Evening Snacks",
    price: 40,
    desc: "Thinly sliced onions coated in spiced besan batter, fried with aromatic curry leaves and crushed coriander seeds.",
    icon: "🧅",
    badge: "Rainy Special",
    image: "assets/images/dish-evening-snacks.jpg",
    isBreakfast: false,
    isLunch: false,
    placeholderLabel: "CRUNCHY ONION PAKODA"
  },

  // Beverages & Juices
  {
    id: "bev-1",
    name: "South Indian Filter Coffee",
    category: "beverages-juices",
    categoryLabel: "Beverages & Juices",
    price: 20,
    desc: "Authentic decoction brew frothed with fresh boiled whole milk and served in a traditional dabarah and tumbler.",
    icon: "☕",
    badge: "Signature",
    image: "assets/images/dish-filter-coffee.jpg",
    isBreakfast: true,
    isLunch: true,
    placeholderLabel: "FILTER COFFEE IN DABARAH"
  },
  {
    id: "bev-2",
    name: "Masala Chai (Ginger & Cardamom)",
    category: "beverages-juices",
    categoryLabel: "Beverages & Juices",
    price: 15,
    desc: "Strong Assam tea slow-brewed with fresh ginger, crushed cardamom pods, and spices.",
    icon: "🫖",
    badge: "",
    image: "assets/images/dish-filter-coffee.jpg",
    isBreakfast: true,
    isLunch: true,
    placeholderLabel: "HOT MASALA CHAI"
  },
  {
    id: "bev-3",
    name: "Spiced Masala Buttermilk (Chaas)",
    category: "beverages-juices",
    categoryLabel: "Beverages & Juices",
    price: 25,
    desc: "Chilled churned yogurt drink seasoned with ginger, green chillies, roasted cumin, and fresh coriander leaves.",
    icon: "🥛",
    badge: "Refreshing",
    image: "assets/images/dish-filter-coffee.jpg",
    isBreakfast: true,
    isLunch: true,
    placeholderLabel: "SPICED BUTTERMILK CHAAS"
  },
  {
    id: "bev-4",
    name: "Fresh Sweet & Salt Lime Soda",
    category: "beverages-juices",
    categoryLabel: "Beverages & Juices",
    price: 35,
    desc: "Squeezed fresh limes blended with chilled soda, black salt, and pure cane syrup for a thirst-quenching boost.",
    icon: "🍹",
    badge: "Chilled",
    image: "assets/images/dish-filter-coffee.jpg",
    isBreakfast: true,
    isLunch: true,
    placeholderLabel: "FRESH LIME SODA JUICE"
  },

  // Special Combos
  {
    id: "com-1",
    name: "Crispy Dosa + Filter Coffee Combo",
    category: "special-combos",
    categoryLabel: "Special Combos",
    price: 85,
    desc: "Your choice of plain or masala dosa served with hot filter coffee in a brass dabarah.",
    icon: "☕🥞",
    badge: "Combo Deal",
    image: "assets/images/hero-banner.jpg",
    isBreakfast: true,
    isLunch: false,
    placeholderLabel: "DOSA AND COFFEE COMBO"
  },
  {
    id: "com-2",
    name: "Grand Breakfast Special Combo",
    category: "special-combos",
    categoryLabel: "Special Combos",
    price: 100,
    desc: "1 Mini Masala Dosa + 1 Steamed Idli + 1 Medu Vada + Sambar + 3 Chutneys + Hot Filter Coffee.",
    icon: "🌟",
    badge: "Super Saver",
    image: "assets/images/hero-banner.jpg",
    isBreakfast: true,
    isLunch: false,
    placeholderLabel: "GRAND BREAKFAST COMBO"
  }
];

// --- 2. Shopping Cart System (State Management) ---
const Cart = {
  items: [],
  deliveryCharge: 30, // illustrative demo charge

  init() {
    try {
      const stored = localStorage.getItem('tiffin_center_cart');
      if (stored) {
        this.items = JSON.parse(stored);
      }
    } catch (e) {
      this.items = [];
    }
    this.updateGlobalBadge();
  },

  save() {
    try {
      localStorage.setItem('tiffin_center_cart', JSON.stringify(this.items));
    } catch (e) {
      console.warn('LocalStorage save failed', e);
    }
    this.updateGlobalBadge();
  },

  addItem(itemId) {
    const menuItem = MENU_DATA.find(item => item.id === itemId);
    if (!menuItem) return;

    const existing = this.items.find(i => i.id === itemId);
    if (existing) {
      existing.quantity += 1;
    } else {
      this.items.push({
        id: menuItem.id,
        name: menuItem.name,
        price: menuItem.price,
        icon: menuItem.icon,
        quantity: 1
      });
    }
    this.save();
    showToast(`Added ${menuItem.name} to cart!`);
  },

  removeItem(itemId) {
    this.items = this.items.filter(i => i.id !== itemId);
    this.save();
  },

  changeQty(itemId, delta) {
    const item = this.items.find(i => i.id === itemId);
    if (!item) return;
    item.quantity += delta;
    if (item.quantity <= 0) {
      this.removeItem(itemId);
    } else {
      this.save();
    }
  },

  clear() {
    this.items = [];
    this.save();
  },

  getCount() {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  },

  getSubtotal() {
    return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  },

  getGrandTotal() {
    const sub = this.getSubtotal();
    return sub > 0 ? sub + this.deliveryCharge : 0;
  },

  updateGlobalBadge() {
    const badges = document.querySelectorAll('.cart-count-badge');
    const count = this.getCount();
    badges.forEach(b => {
      b.textContent = count;
      b.style.display = count > 0 ? 'inline-block' : 'none';
    });
  }
};

// --- 3. UI Toast Notification ---
function showToast(message) {
  let toast = document.getElementById('toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span>✓</span> <span>${message}</span>`;
  toast.classList.add('show');
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

// --- 4. Render Menu Card HTML Helper ---
function renderFoodCardHTML(item) {
  const imageHTML = item.image 
    ? `<img src="${item.image}" alt="${item.name}" class="food-card-img" style="border-radius: 0;">`
    : `
        <div class="image-placeholder ratio-4-3">
          <div class="placeholder-icon">${item.icon}</div>
          <span class="placeholder-badge">${item.placeholderLabel}</span>
          <span class="placeholder-subtext">Google Flow Ready</span>
        </div>
      `;

  return `
    <article class="food-card" data-category="${item.category}" data-id="${item.id}">
      <div class="food-card-img-wrapper ratio-4-3" style="overflow: hidden; background: #ecd7be;">
        <div class="veg-indicator" title="100% Pure Vegetarian"></div>
        ${item.badge ? `<span class="food-card-badge">${item.badge}</span>` : ''}
        ${imageHTML}
      </div>
      <div class="food-card-body">
        <span class="food-card-category">${item.categoryLabel}</span>
        <h4 class="food-card-title">${item.name}</h4>
        <p class="food-card-desc">${item.desc}</p>
        <div class="food-card-footer">
          <div class="food-price">
            ₹${item.price}
            <span>Demo Price</span>
          </div>
          <button class="btn btn-primary btn-sm add-to-cart-btn" data-id="${item.id}" aria-label="Add ${item.name} to order">
            + Add to Cart
          </button>
        </div>
      </div>
    </article>
  `;
}

// --- 5. Global Navigation & Sticky Header & Back-to-Top ---
function initGlobalFeatures() {
  const header = document.querySelector('.site-header');
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const backToTopBtn = document.querySelector('.back-to-top');

  // Sticky header class
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }

    if (window.scrollY > 400) {
      backToTopBtn?.classList.add('show');
    } else {
      backToTopBtn?.classList.remove('show');
    }
  });

  // Mobile menu toggle
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('is-active');
      navLinks.classList.toggle('is-open');
    });

    // Close when clicking nav link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('is-active');
        navLinks.classList.remove('is-open');
      });
    });
  }

  // Back to top click
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // FAQ Accordion Handler
  const faqHeaders = document.querySelectorAll('.faq-header');
  faqHeaders.forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.parentElement;
      const isActive = parent.classList.contains('active');
      
      // Close sibling FAQs in the same group
      const siblingItems = parent.parentElement.querySelectorAll('.faq-item');
      siblingItems.forEach(item => item.classList.remove('active'));

      if (!isActive) {
        parent.classList.add('active');
      }
    });
  });

  // Scroll Reveal Animations
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    reveals.forEach(el => observer.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('is-visible'));
  }

  // Cart delegation on body for any "Add to Cart" button clicked
  document.body.addEventListener('click', (e) => {
    const target = e.target.closest('.add-to-cart-btn');
    if (target) {
      const id = target.getAttribute('data-id');
      Cart.addItem(id);
      
      // If we are on order page, re-render cart sidebar
      if (typeof renderOrderPageCart === 'function') {
        renderOrderPageCart();
      }
    }
  });
}

// Document Ready Initialization
document.addEventListener('DOMContentLoaded', () => {
  Cart.init();
  initGlobalFeatures();
});

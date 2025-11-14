# Portfolio Management Guide

## How to Manage Portfolio Items in index.html

### Current Setup (Lines 200-204)

The portfolio container block is located at:
```html
<div class="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200" id="portfolio-container">
  <!-- Portfolio items are dynamically rendered here -->
</div>
```

### Understanding the Dynamic Rendering

1. **Data Source**: Portfolio items are defined in `assets/js/portfolio-data.js`
2. **Rendering**: JavaScript in `assets/js/main.js` automatically renders items
3. **Filtering**: Uses `getPortfolioItemsByCategory()` method for filtering
4. **Layout**: Items are arranged using Isotope layout library

---

## How to Manage Portfolio Items

### Option 1: Add/Edit Items in portfolio-data.js (Recommended)

1. Open `assets/js/portfolio-data.js`
2. Add a new item to the `portfolioData` array:

```javascript
{
  id: 13, // Unique ID (increment from last item)
  title: "Your Project Name",
  category: "app", // Options: "app", "product", "branding", "books"
  filter: "filter-app", // Must match category: "filter-" + category
  image: "assets/img/portfolio/your-image.jpg",
  description: "Short description shown on portfolio card",
  fullDescription: "Longer detailed description for portfolio details page",
  technologies: ["Technology 1", "Technology 2"],
  client: "Client Name",
  projectDate: "Month Year",
  projectUrl: "https://your-project-url.com",
  gallery: ["assets/img/portfolio/img1.jpg", "assets/img/portfolio/img2.jpg"]
}
```

3. Save the file - items will automatically appear on page refresh

### Option 2: Modify the HTML Container Structure

You can customize the container in `index.html`:

#### Change Grid Layout
```html
<!-- Current: 3 columns on large screens, 2 on medium -->
<div class="row gy-4 isotope-container" ...>

<!-- Change to 2 columns on large: -->
<div class="row gy-4 isotope-container" ...>
  <!-- Modify renderPortfolioItems() in main.js to use col-lg-6 -->
```

#### Add Custom Attributes
```html
<div class="row gy-4 isotope-container" 
     data-aos="fade-up" 
     data-aos-delay="200" 
     id="portfolio-container"
     data-auto-render="true">
</div>
```

### Option 3: Customize Rendering Function

Edit `assets/js/main.js` - `renderPortfolioItems()` function:

```javascript
// Change grid columns
portfolioItem.className = `col-lg-3 col-md-4 portfolio-item isotope-item ${item.filter}`;
// 3 columns: col-lg-4, 2 columns: col-lg-6, 4 columns: col-lg-3

// Customize HTML structure
portfolioItem.innerHTML = `
  <div class="portfolio-content h-100">
    <!-- Your custom HTML here -->
  </div>
`;
```

---

## Filter Management

### Add New Category

1. Add filter button in `index.html` (line 193-199):
```html
<li data-filter=".filter-yourcategory">Your Category</li>
```

2. Update `portfolio-data.js` with items having:
```javascript
category: "yourcategory",
filter: "filter-yourcategory"
```

3. The `getPortfolioItemsByCategory()` function will automatically handle it

### Remove Category

1. Remove filter button from HTML
2. Items with that category will still render but won't be filterable

---

## Loading States

The container now includes:

1. **Loading State**: Shown while items are being loaded
   ```html
   <div class="portfolio-loading">...</div>
   ```

2. **Empty State**: Shown when no items are found
   ```html
   <div class="portfolio-empty">...</div>
   ```

These are automatically managed by JavaScript.

---

## Manual Rendering

You can manually trigger rendering in browser console:

```javascript
// Render all items
renderPortfolioItems('*');

// Render only app items
renderPortfolioItems('app');

// Render only product items
renderPortfolioItems('product');
```

---

## Customization Options

### Change Container ID
```html
<div id="portfolio-container" ...>
```
Then update JavaScript:
```javascript
const portfolioContainer = document.querySelector('#portfolio-container');
```

### Add Custom CSS Classes
```html
<div class="row gy-4 isotope-container custom-portfolio-class" ...>
```

### Add Data Attributes
```html
<div class="row gy-4 isotope-container" 
     data-items-per-row="3"
     data-animation-speed="300">
```

---

## Best Practices

1. ✅ **Keep container empty** - JavaScript populates it
2. ✅ **Edit portfolio-data.js** to add/remove items
3. ✅ **Use categories consistently** (app, product, branding, books)
4. ✅ **Maintain unique IDs** for each portfolio item
5. ✅ **Use consistent image paths** (assets/img/portfolio/)
6. ✅ **Test filters** after adding new categories

---

## Troubleshooting

### Items Not Showing?
1. Check browser console for errors
2. Verify `portfolio-data.js` loads before `main.js`
3. Ensure image paths are correct
4. Check that `getPortfolioItemsByCategory()` function exists

### Filter Not Working?
1. Verify filter buttons have correct `data-filter` attributes
2. Check that items have matching `filter` property
3. Ensure Isotope library is loaded

### Layout Issues?
1. Check Bootstrap grid classes in renderPortfolioItems()
2. Verify Isotope is initialized correctly
3. Check CSS for `.portfolio-content` and `.portfolio-item`

---

## Quick Reference

| Action | File to Edit | Location |
|--------|--------------|----------|
| Add/Remove Items | `portfolio-data.js` | `portfolioData` array |
| Change Layout | `main.js` | `renderPortfolioItems()` function |
| Modify Container | `index.html` | Lines 200-204 |
| Add Categories | `index.html` | Lines 193-199 (filters) |
| Customize Styles | `main.css` | `.portfolio` section |

---

## Example: Adding a New Project

1. **Add to portfolio-data.js**:
```javascript
{
  id: 13,
  title: "New Mobile App",
  category: "app",
  filter: "filter-app",
  image: "assets/img/portfolio/app-4.jpg",
  description: "A new innovative mobile application",
  fullDescription: "Detailed description...",
  technologies: ["Flutter", "Firebase"],
  client: "New Client Inc.",
  projectDate: "January 2024",
  projectUrl: "https://example.com/new-app",
  gallery: ["assets/img/portfolio/app-4.jpg"]
}
```

2. **Save and refresh** - Item automatically appears!

---

**Remember**: The container block in `index.html` should remain mostly empty - JavaScript handles the rendering automatically!

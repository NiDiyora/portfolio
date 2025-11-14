/**
 * Portfolio Projects Data
 * Each project has unique name, image, description, and details
 */
const portfolioData = [
  {
    id: 1,
    title: "E-Commerce Mobile App",
    category: "app",
    filter: "filter-app",
    image: "assets/img/portfolio/app-1.jpg",
    description: "A full-featured e-commerce mobile application built with Flutter, featuring seamless shopping experience with real-time inventory updates.",
    fullDescription: "## Notes App Compose 📒 \n  The Notes App is a simple and intuitive application designed for creating, managing, and organizing your notes seamlessly. Whether you're a student, professional, or anyone who loves to jot down thoughts, this app provides an efficient way to keep track of your ideas, tasks, and important information 😄",
    technologies: ["Android", "Kotlin", "JetPack compose"],
    client: "RetailTech Solutions",
    projectDate: "March 2023",
    projectUrl: "https://example.com/ecommerce-app",
    gallery: ["assets/img/portfolio/app-1.jpg", "assets/img/portfolio/app-2.jpg", "assets/img/portfolio/app-3.jpg"]
  },
  {
    id: 2,
    title: "Fitness Tracker Product",
    category: "product",
    filter: "filter-product",
    image: "assets/img/portfolio/product-1.jpg",
    description: "An innovative fitness tracking product with advanced analytics and social features for health enthusiasts.",
    fullDescription: "A cutting-edge fitness tracking application that combines wearable device integration with advanced analytics. The product offers real-time health monitoring, workout recommendations, progress tracking, and social sharing features. Built with native Android development using Kotlin and Jetpack Compose for a modern UI experience.",
    technologies: ["Kotlin", "Jetpack Compose", "Room Database", "Bluetooth API"],
    client: "FitLife Inc.",
    projectDate: "June 2023",
    projectUrl: "https://example.com/fitness-tracker",
    gallery: ["assets/img/portfolio/product-1.jpg", "assets/img/portfolio/product-2.jpg", "assets/img/portfolio/product-3.jpg"]
  },
  {
    id: 3,
    title: "Brand Identity Design",
    category: "branding",
    filter: "filter-branding",
    image: "assets/img/portfolio/branding-1.jpg",
    description: "Complete brand identity design and mobile app UI/UX for a modern tech startup, creating a cohesive visual experience.",
    fullDescription: "Comprehensive brand identity design project including logo design, color palette, typography, and mobile app UI/UX. The design reflects the client's innovative approach while maintaining user-friendly interfaces. The mobile app was developed with Flutter to ensure consistent brand experience across platforms.",
    technologies: ["Flutter", "Figma", "Adobe XD", "Material Design"],
    client: "TechVenture Startup",
    projectDate: "January 2024",
    projectUrl: "https://example.com/brand-design",
    gallery: ["assets/img/portfolio/branding-1.jpg", "assets/img/portfolio/branding-2.jpg", "assets/img/portfolio/branding-3.jpg"]
  },
  {
    id: 4,
    title: "Digital Library Platform",
    category: "books",
    filter: "filter-books",
    image: "assets/img/portfolio/books-1.jpg",
    description: "A comprehensive digital library platform for accessing and managing digital books with offline reading capabilities.",
    fullDescription: "A feature-rich digital library platform built with Flutter that allows users to browse, purchase, and read digital books. The app includes offline reading capabilities, bookmarking, annotations, and personalized reading recommendations. Integrated with cloud storage for seamless content synchronization across devices.",
    technologies: ["Flutter", "Firebase", "SQLite", "PDF Reader"],
    client: "ReadMore Digital",
    projectDate: "September 2023",
    projectUrl: "https://example.com/digital-library",
    gallery: ["assets/img/portfolio/books-1.jpg", "assets/img/portfolio/books-2.jpg", "assets/img/portfolio/books-3.jpg"]
  },
  {
    id: 5,
    title: "Social Media App",
    category: "app",
    filter: "filter-app",
    image: "assets/img/portfolio/app-2.jpg",
    description: "A modern social media application with real-time messaging, stories, and content sharing features.",
    fullDescription: "A full-featured social media mobile application developed with Flutter, enabling users to connect, share content, and communicate in real-time. Features include stories, live streaming, direct messaging, content creation tools, and advanced privacy controls. Built with Firebase for real-time data synchronization and cloud storage.",
    technologies: ["Flutter", "Firebase", "WebRTC", "Cloud Storage"],
    client: "SocialConnect Ltd.",
    projectDate: "November 2023",
    projectUrl: "https://example.com/social-app",
    gallery: ["assets/img/portfolio/app-2.jpg", "assets/img/portfolio/app-1.jpg", "assets/img/portfolio/app-3.jpg"]
  },
  {
    id: 6,
    title: "Smart Home Control",
    category: "product",
    filter: "filter-product",
    image: "assets/img/portfolio/product-2.jpg",
    description: "IoT-enabled smart home control system with intuitive Android interface for managing home automation devices.",
    fullDescription: "An intelligent smart home control application developed with native Android using Kotlin. The app provides seamless control over IoT devices including lighting, temperature, security systems, and appliances. Features include voice commands, scheduling, energy monitoring, and remote access capabilities.",
    technologies: ["Kotlin", "Android SDK", "MQTT", "REST API"],
    client: "HomeAutomation Pro",
    projectDate: "April 2023",
    projectUrl: "https://example.com/smart-home",
    gallery: ["assets/img/portfolio/product-2.jpg", "assets/img/portfolio/product-1.jpg", "assets/img/portfolio/product-3.jpg"]
  },
  {
    id: 7,
    title: "Corporate Branding Suite",
    category: "branding",
    filter: "filter-branding",
    image: "assets/img/portfolio/branding-2.jpg",
    description: "Complete corporate branding suite with mobile app design, creating a professional and cohesive brand presence.",
    fullDescription: "A comprehensive corporate branding project that includes brand guidelines, logo variations, mobile app design, and marketing materials. The mobile application was developed with Flutter to ensure brand consistency across all digital touchpoints. The design emphasizes professionalism while maintaining modern aesthetics.",
    technologies: ["Flutter", "Design Systems", "Brand Guidelines"],
    client: "Corporate Solutions Inc.",
    projectDate: "February 2024",
    projectUrl: "https://example.com/corporate-branding",
    gallery: ["assets/img/portfolio/branding-2.jpg", "assets/img/portfolio/branding-1.jpg", "assets/img/portfolio/branding-3.jpg"]
  },
  {
    id: 8,
    title: "E-Learning Platform",
    category: "books",
    filter: "filter-books",
    image: "assets/img/portfolio/books-2.jpg",
    description: "An interactive e-learning platform with video courses, quizzes, and progress tracking for online education.",
    fullDescription: "A comprehensive e-learning mobile platform built with Flutter that offers video courses, interactive quizzes, progress tracking, and certification programs. The app includes features like offline course downloads, note-taking, discussion forums, and instructor messaging. Integrated with payment gateways for course purchases.",
    technologies: ["Flutter", "Video Streaming", "Firebase", "Payment Gateway"],
    client: "EduLearn Academy",
    projectDate: "August 2023",
    projectUrl: "https://example.com/elearning",
    gallery: ["assets/img/portfolio/books-2.jpg", "assets/img/portfolio/books-1.jpg", "assets/img/portfolio/books-3.jpg"]
  },
  {
    id: 9,
    title: "Food Delivery App",
    category: "app",
    filter: "filter-app",
    image: "assets/img/portfolio/app-3.jpg",
    description: "A comprehensive food delivery application with real-time tracking, multiple payment options, and restaurant management.",
    fullDescription: "A full-stack food delivery mobile application developed with Flutter, connecting customers with restaurants. Features include real-time order tracking, multiple payment methods, restaurant ratings, favorite restaurants, order history, and delivery notifications. The app uses Firebase for real-time updates and Google Maps for location services.",
    technologies: ["Flutter", "Firebase", "Google Maps API", "Payment Integration"],
    client: "FoodExpress Delivery",
    projectDate: "May 2023",
    projectUrl: "https://example.com/food-delivery",
    gallery: ["assets/img/portfolio/app-3.jpg", "assets/img/portfolio/app-1.jpg", "assets/img/portfolio/app-2.jpg"]
  },
  {
    id: 10,
    title: "Healthcare Management",
    category: "product",
    filter: "filter-product",
    image: "assets/img/portfolio/product-3.jpg",
    description: "A secure healthcare management system for patients and doctors with appointment scheduling and medical records.",
    fullDescription: "A HIPAA-compliant healthcare management application built with native Android using Kotlin. The platform enables patients to schedule appointments, access medical records, consult with doctors via video calls, receive medication reminders, and track health metrics. Features secure data encryption and compliance with healthcare regulations.",
    technologies: ["Kotlin", "Encryption", "Video Conferencing", "Secure Database"],
    client: "MedCare Solutions",
    projectDate: "July 2023",
    projectUrl: "https://example.com/healthcare-app",
    gallery: ["assets/img/portfolio/product-3.jpg", "assets/img/portfolio/product-1.jpg", "assets/img/portfolio/product-2.jpg"]
  },
  {
    id: 11,
    title: "Startup Brand Design",
    category: "branding",
    filter: "filter-branding",
    image: "assets/img/portfolio/branding-3.jpg",
    description: "Fresh brand identity and mobile app design for a tech startup, focusing on innovation and user engagement.",
    fullDescription: "A modern brand identity design project for an innovative tech startup, including logo design, brand colors, typography, and mobile application UI/UX design. The mobile app was developed with Flutter to ensure brand consistency. The design emphasizes innovation, user-friendliness, and visual appeal to attract and engage users.",
    technologies: ["Flutter", "UI/UX Design", "Brand Strategy"],
    client: "InnovateTech Startup",
    projectDate: "October 2023",
    projectUrl: "https://example.com/startup-brand",
    gallery: ["assets/img/portfolio/branding-3.jpg", "assets/img/portfolio/branding-1.jpg", "assets/img/portfolio/branding-2.jpg"]
  },
  {
    id: 12,
    title: "Audio Book Platform",
    category: "books",
    filter: "filter-books",
    image: "assets/img/portfolio/books-3.jpg",
    description: "An immersive audio book platform with high-quality narration, sleep timers, and personalized recommendations.",
    fullDescription: "A premium audio book mobile application built with Flutter, offering a vast library of audio books with high-quality narration. Features include sleep timers, playback speed control, chapter navigation, bookmarks, offline downloads, and personalized recommendations based on listening history. Integrated with subscription management for premium access.",
    technologies: ["Flutter", "Audio Streaming", "Offline Storage", "Subscription Management"],
    client: "AudioBooks Plus",
    projectDate: "December 2023",
    projectUrl: "https://example.com/audiobooks",
    gallery: ["assets/img/portfolio/books-3.jpg", "assets/img/portfolio/books-1.jpg", "assets/img/portfolio/books-2.jpg"]
  }
];

/**
 * Get portfolio item by ID
 */
function getPortfolioItemById(id) {
  return portfolioData.find(item => item.id === parseInt(id));
}

/**
 * Get portfolio items by category
 * @param {string} category - Category filter ('*' for all, 'app', 'product', 'branding', 'books', or '.filter-app', etc.)
 * @returns {Array} Array of portfolio items matching the category
 */
function getPortfolioItemsByCategory(category) {
  // Return all items if category is '*' or empty
  if (category === '*' || !category) {
    return portfolioData;
  }
  
  // Remove '.filter-' prefix if present (e.g., '.filter-app' becomes 'app')
  const cleanCategory = category.replace(/^\.?filter-/, '');
  
  // Filter items by matching category
  return portfolioData.filter(item => item.category === cleanCategory);
}

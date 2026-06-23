// Site content for சிமலா குள்ரிங்ஸ் (Simala Coolings)

export interface Product {
  id: string;
  name: string;
  nameTamil: string;
  category: string;
  price: number;
  image: string;
  popular?: boolean;
  bulk?: boolean;
}

export interface Zone {
  name: string;
  nameTamil: string;
  time: string;
  icon: string;
}

export const siteContent = {
  brand: {
    name: "சிமலா குள்ரிங்ஸ்",
    nameEnglish: "Simala Coolings",
    tagline: "தமிழ்நாடு முழுவதும் குளிர்பானம் டெலிவரி",
    taglineEnglish: "Beverage Delivery Across Tamil Nadu"
  },

  contact: {
    phone: "+91 98765 43210",
    whatsapp: "919876543210",
    email: "order@simalacoolings.com",
    address: "123 Main Street, Coimbatore, Tamil Nadu 641001"
  },

  hero: {
    badge: "🚀 TN முழுவதும் டெலிவரி",
    headline1: "குளிர்பானம் வேணுமா?",
    headline2: "உடனே ஆர்டர் பண்ணுங்க!",
    subtext: "பிராண்டட் பானங்கள், லோக்கல் சோடா, பாரம்பரிய பானங்கள் — எல்லாம் ஒரே இடத்துல. புதுசா ஐஸ் பேக்கிங் வசதியும் உண்டு!",
    ctaPrimary: "பொருட்களைப் பார்க்க",
    ctaSecondary: "WhatsApp ஆர்டர்",
    trustIndicators: [
      { icon: "⚡", text: "2 மணி நேரத்தில் டெலிவரி" },
      { icon: "❄️", text: "ஐஸ் பேக்கிங்" },
      { icon: "🎉", text: "பல்க் ஆர்டர் தள்ளுபடி" }
    ]
  },

  products: {
    sectionTitle: "எங்கள் பொருட்கள்",
    sectionSubtitle: "உங்களுக்கு பிடித்த குளிர்பானங்கள் எல்லாம் ஒரே இடத்தில்",
    categories: ["அனைத்தும்", "சோடா", "பழச்சாறு", "எனர்ஜி டிரிங்க்", "பாரம்பரிய"],
    items: [
      {
        id: "1",
        name: "Thums Up",
        nameTamil: "தம்ஸ் அப்",
        category: "சோடா",
        price: 40,
        image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=800&q=80",
        popular: true
      },
      {
        id: "2",
        name: "Bovonto",
        nameTamil: "போவோன்டோ",
        category: "சோடா",
        price: 35,
        image: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?auto=format&fit=crop&w=800&q=80",
        popular: true
      },
      {
        id: "3",
        name: "Sprite",
        nameTamil: "ஸ்பிரைட்",
        category: "சோடா",
        price: 40,
        image: "https://images.unsplash.com/photo-1625740947239-f46d0155875e?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "4",
        name: "Maaza",
        nameTamil: "மாசா",
        category: "பழச்சாறு",
        price: 45,
        image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=800&q=80",
        popular: true
      },
      {
        id: "5",
        name: "Frooti",
        nameTamil: "ஃப்ரூட்டி",
        category: "பழச்சாறு",
        price: 40,
        image: "https://images.unsplash.com/photo-1610889556528-9a770e32642f?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "6",
        name: "Red Bull",
        nameTamil: "ரெட் புல்",
        category: "எனர்ஜி டிரிங்க்",
        price: 125,
        image: "https://images.unsplash.com/photo-1622543925917-763c34f3868b?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "7",
        name: "Nannari Sarbath",
        nameTamil: "நன்னாரி சர்பத்",
        category: "பாரம்பரிய",
        price: 50,
        image: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=80",
        bulk: true
      },
      {
        id: "8",
        name: "Jigarthanda",
        nameTamil: "ஜிகர்தண்டா",
        category: "பாரம்பரிய",
        price: 80,
        image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
        popular: true
      },
      {
        id: "9",
        name: "Paneer Soda",
        nameTamil: "பனீர் சோடா",
        category: "சோடா",
        price: 30,
        image: "https://images.unsplash.com/photo-1437418747212-8d9709afab22?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },

  whyUs: {
    sectionTitle: "ஏன் எங்களை தேர்வு செய்ய வேண்டும்?",
    sectionSubtitle: "உங்கள் நம்பகமான குளிர்பான பார்ட்னர்",
    features: [
      {
        icon: "Zap",
        title: "வேகமான டெலிவரி",
        titleEnglish: "Fast Delivery",
        description: "2 மணி நேரத்திற்குள் உங்கள் வீட்டு வாசலில்",
        descriptionEnglish: "At your doorstep within 2 hours"
      },
      {
        icon: "Snowflake",
        title: "ஐஸ் பேக்கிங் வசதி",
        titleEnglish: "Ice Packing Facility",
        description: "குளிர்ச்சியை பராமரிக்க சிறப்பு ஐஸ் பேக்கிங்",
        descriptionEnglish: "Special ice packing to maintain freshness"
      },
      {
        icon: "Package",
        title: "பல்க் ஆர்டர்",
        titleEnglish: "Bulk Orders",
        description: "பார்ட்டி, நிகழ்ச்சிகளுக்கு சிறப்பு தள்ளுபடி",
        descriptionEnglish: "Special discounts for parties and events"
      },
      {
        icon: "ShieldCheck",
        title: "தரமான பொருட்கள்",
        titleEnglish: "Quality Products",
        description: "அசல் பிராண்டட் குளிர்பானங்கள் மட்டுமே",
        descriptionEnglish: "Only authentic branded beverages"
      },
      {
        icon: "Clock",
        title: "24/7 சேவை",
        titleEnglish: "24/7 Service",
        description: "எப்போதும் உங்கள் சேவையில்",
        descriptionEnglish: "Always at your service"
      },
      {
        icon: "Wallet",
        title: "சிறந்த விலை",
        titleEnglish: "Best Prices",
        description: "போட்டி விலையில் தரமான பானங்கள்",
        descriptionEnglish: "Quality beverages at competitive prices"
      }
    ]
  },

  howItWorks: {
    sectionTitle: "எப்படி ஆர்டர் செய்வது?",
    sectionSubtitle: "மூன்று எளிய படிகளில் உங்கள் பானங்களைப் பெறுங்கள்",
    steps: [
      {
        number: "01",
        title: "தேர்ந்தெடுங்கள்",
        titleEnglish: "Choose",
        description: "உங்கள் பிடித்த குளிர்பானங்களை தேர்ந்தெடுங்கள்",
        descriptionEnglish: "Select your favorite beverages",
        icon: "ShoppingCart"
      },
      {
        number: "02",
        title: "ஆர்டர் செய்யுங்கள்",
        titleEnglish: "Order",
        description: "WhatsApp அல்லது Phone வழியாக ஆர்டர் செய்யுங்கள்",
        descriptionEnglish: "Place order via WhatsApp or Phone",
        icon: "MessageCircle"
      },
      {
        number: "03",
        title: "பெற்றுக்கொள்ளுங்கள்",
        titleEnglish: "Receive",
        description: "2 மணி நேரத்தில் உங்கள் வீட்டில் பெற்றுக்கொள்ளுங்கள்",
        descriptionEnglish: "Receive at your home within 2 hours",
        icon: "Home"
      }
    ]
  },

  deliveryZones: {
    sectionTitle: "டெலிவரி பகுதிகள்",
    sectionSubtitle: "தமிழ்நாடு முழுவதும் நாங்கள் சேவை செய்கிறோம்",
    zones: [
      { name: "Coimbatore", nameTamil: "கோவை", time: "1-2 மணி", icon: "MapPin" },
      { name: "Chennai", nameTamil: "சென்னை", time: "2-3 மணி", icon: "MapPin" },
      { name: "Madurai", nameTamil: "மதுரை", time: "2-3 மணி", icon: "MapPin" },
      { name: "Trichy", nameTamil: "திருச்சி", time: "2-3 மணி", icon: "MapPin" },
      { name: "Salem", nameTamil: "சேலம்", time: "1-2 மணி", icon: "MapPin" },
      { name: "Erode", nameTamil: "ஈரோடு", time: "1-2 மணி", icon: "MapPin" }
    ],
    cta: "உங்கள் பகுதியை சரிபார்க்க WhatsApp செய்யுங்கள்"
  },

  footer: {
    about: "சிமலா குள்ரிங்ஸ் தமிழ்நாடு முழுவதும் தரமான குளிர்பானங்களை விரைவாக டெலிவரி செய்கிறோம். பல்க் ஆர்டர்கள், விசேஷங்கள், நிகழ்ச்சிகளுக்கு சிறப்பு தள்ளுபடி.",
    quickLinks: {
      title: "விரைவு இணைப்புகள்",
      links: [
        { text: "பொருட்கள்", href: "#products" },
        { text: "ஏன் எங்களை தேர்வு செய்ய வேண்டும்?", href: "#why-us" },
        { text: "டெலிவரி பகுதிகள்", href: "#delivery" },
        { text: "தொடர்பு", href: "#contact" }
      ]
    },
    contact: {
      title: "தொடர்பு",
      items: [
        { icon: "Phone", text: "+91 98765 43210" },
        { icon: "Mail", text: "order@simalacoolings.com" },
        { icon: "MapPin", text: "Coimbatore, Tamil Nadu" }
      ]
    },
    social: {
      title: "எங்களை பின்தொடரவும்",
      links: [
        { icon: "Facebook", url: "#", label: "Facebook" },
        { icon: "Instagram", url: "#", label: "Instagram" },
        { icon: "Twitter", url: "#", label: "Twitter" }
      ]
    },
    copyright: "© 2024 சிமலா குள்ரிங்ஸ். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை."
  }
};

export default siteContent;

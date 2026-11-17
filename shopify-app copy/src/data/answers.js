// Shopify questions and straight answers, grouped by topic. This powers /answers and every /answers/<question> page.
// The answers are general, practical guidance. They avoid prices, dates and results that change or that nobody can promise.

export const topicsData = [
  {
    "id": "about",
    "title": "Working with scaloMATRIX",
    "blurb": "Pricing, the free audit, results, ownership and refunds.",
    "items": "faq"
  },
  {
    "id": "basics",
    "title": "Shopify basics for Indian brands",
    "blurb": "What Shopify is, what it costs to start and how it compares.",
    "items": [
      [
        "What is Shopify and how does it work?",
        "Shopify is a platform for running an online store. It hosts your site, handles the product catalogue, cart, checkout and orders, and connects to payment and shipping partners. You design the storefront with a theme, add products, and sell without managing your own servers."
      ],
      [
        "Is Shopify good for Indian D2C brands?",
        "Yes, for most D2C brands. It is fast to launch, reliable under traffic, and has a large app and developer ecosystem. It supports Indian payment gateways, COD and local shipping partners, so you can run the usual D2C playbook without building the plumbing yourself."
      ],
      [
        "Shopify vs WooCommerce: which is better for an Indian store?",
        "Shopify is easier to run: hosting, security and checkout are handled for you. WooCommerce gives more control but you manage hosting, updates and speed yourself. Brands that want to focus on selling and ads usually pick Shopify; those with technical teams and unusual needs sometimes pick WooCommerce."
      ],
      [
        "Shopify vs Magento: which should I choose?",
        "Magento (now Adobe Commerce) suits very large catalogues and complex custom logic, but it needs a bigger budget and more maintenance. Shopify is quicker, lighter to run and enough for the vast majority of D2C brands. Start with Shopify unless you have a clear need Magento alone can meet."
      ],
      [
        "How much does a Shopify store cost in India?",
        "The cost has three parts: the Shopify plan, the design and development work, and the apps you add. Development ranges from a simple setup to a fully custom build, depending on scope. Check Shopify’s current plan pricing on its site, and ask any agency for a written scope and quote."
      ],
      [
        "Do I need a developer to build a Shopify store?",
        "Not for a simple store: you can pick a theme, add products and launch yourself. You need a developer or designer when you want a custom look, a conversion-focused homepage and product page, speed tuning, or features the theme does not offer."
      ],
      [
        "How long does it take to build a Shopify store?",
        "A theme-based store can go live in days if your products, images and copy are ready. A custom design or build usually takes several weeks, mostly because of approvals, content and revisions. A clear scope and fast feedback are the biggest factors in timelines."
      ],
      [
        "What are the different Shopify plans?",
        "Shopify offers several plans, from basic ones for new stores to advanced ones for higher volumes, with differences in reports, staff accounts and transaction fees. Plans and prices change, so check Shopify’s pricing page and choose the smallest plan that covers your current needs."
      ],
      [
        "Can I use my own domain name on Shopify?",
        "Yes. You can buy a domain through Shopify or connect one you already own by updating its DNS settings. Use your brand domain as the primary one so customers, ads and search engines all see the same address."
      ],
      [
        "Can I sell internationally from a Shopify store?",
        "Yes. Shopify supports multiple currencies, languages and market-specific settings. You still need to plan for international shipping rates, taxes and duties, payment methods that work abroad, and clear delivery and returns information for each market."
      ],
      [
        "Can I run a Shopify store in India without GST registration?",
        "To start testing or selling as a sole proprietor under the threshold, you might begin without GST, but major Indian payment gateways (like Razorpay, Cashfree, PayU) and shipping partners strictly require a GSTIN to activate merchant accounts. Getting a GST registration early is strongly recommended for any serious D2C business."
      ],
      [
        "What documents are required to start a Shopify store in India?",
        "You need an active Indian business bank account, a PAN card (individual or company), GST certificate, a registered business address proof (rent agreement or electricity bill), and KYC documents (Aadhaar/PAN) for payment gateway onboarding."
      ],
      [
        "Can I sell digital products or services on Shopify in India?",
        "Yes. Shopify supports digital downloads, courses, eBooks, and service bookings using digital delivery apps (such as Shopify Digital Downloads). You can disable shipping settings so customers don’t get asked for a physical delivery address."
      ],
      [
        "Can I connect a .in or .co.in domain to Shopify?",
        "Yes. You can purchase a .in or .co.in domain from any domain registrar (like GoDaddy or Namecheap) and connect it to Shopify by updating your A record to 23.227.38.65 and CNAME record to shops.myshopify.com."
      ],
      [
        "How does Shopify handle currency conversion for Indian customers?",
        "Shopify supports Indian Rupee (INR) natively for all domestic transactions. If you enable Shopify Markets, international visitors can see prices auto-converted into USD, EUR, or GBP, while payouts settle directly in your Indian bank account in INR."
      ],
      [
        "Is Shopify hosting secure and PCI-compliant in India?",
        "Yes. Shopify is certified Level 1 PCI DSS compliant by default. All customer data, credit card information, and checkout traffic are encrypted with 256-bit SSL certificates at no extra cost, ensuring banking-grade security."
      ],
      [
        "What is the transaction fee charged by Shopify in India?",
        "If you use third-party payment gateways (such as Razorpay, Cashfree, or PayU), Shopify charges an additional third-party transaction fee (typically between 0.5% to 2.0% depending on your Shopify plan tier: Basic, Shopify, or Advanced)."
      ],
      [
        "Can I run a multi-brand or multi-vendor store on Shopify?",
        "Standard Shopify is designed for single-merchant stores. To run an Amazon-style multi-vendor marketplace where multiple sellers upload their own products, you need multi-vendor marketplace apps or custom API infrastructure."
      ],
      [
        "Can I pause my Shopify store temporarily without losing data?",
        "Yes. Shopify offers a \"Pause and Build\" plan at a reduced monthly cost. It disables the public checkout so customers cannot buy, while keeping your product catalog, orders, and theme intact in the admin."
      ],
      [
        "Does Shopify support local Indian languages?",
        "Yes. You can translate your store into Hindi, Tamil, Telugu, Marathi, or Gujarati using Shopify’s native Translate & Adapt app or third-party multi-language apps, allowing customers to browse in their preferred language."
      ],
      [
        "Can I sell on Instagram and Facebook directly from Shopify?",
        "Yes. Through the Meta channel app, Shopify syncs your product catalog directly with Instagram Shop and Facebook Shop, allowing product tagging in posts, reels, and ads."
      ],
      [
        "What is Shopify POS and can I use it in an Indian retail store?",
        "Shopify POS (Point of Sale) connects your physical retail billing and inventory with your online Shopify store in real-time, preventing overselling and giving you a unified view of online and offline sales."
      ],
      [
        "Can I offer product customization like personalized names on Shopify?",
        "Yes. By adding custom line item properties to your theme’s product form or using product customizer apps, customers can type text, select custom engraving fonts, or upload files before adding to cart."
      ],
      [
        "Can I restrict sales to specific Indian states or pin codes?",
        "Yes. You can configure domestic shipping zones to exclude remote or high-loss states (like Jammu & Kashmir or specific North Eastern states) or use pin code validator apps at checkout."
      ],
      [
        "How does inventory management work across Shopify and marketplaces like Amazon or Flipkart?",
        "You can use multi-channel inventory sync tools (such as Increff, Unicommerce, or Browntape) that update inventory in real-time across Shopify, Amazon, and Flipkart whenever a sale occurs on any channel."
      ],
      [
        "Can I change my Shopify store name or .myshopify.com URL after creation?",
        "You can change your public customer-facing store name and custom domain at any time in Shopify settings. Your internal .myshopify.com administrative handle remains permanent, but customers will only ever see your branded domain."
      ],
      [
        "How does Shopify protect against fraudulent chargebacks in India?",
        "Shopify provides built-in machine-learning fraud analysis scoring orders as Low, Medium, or High risk based on IP matching, CVV checks, and past chargeback patterns, alerting you before you ship."
      ]
    ]
  },
  {
    "id": "design",
    "title": "Shopify store design and themes",
    "blurb": "Themes, homepages, product pages and mobile-first design.",
    "items": [
      [
        "Should I use a free or premium Shopify theme?",
        "A free theme is fine to start and is well supported. A premium theme adds layout options and features. Neither is built around your brand, so many growing stores later move to a custom design that fits their products and customers more closely."
      ],
      [
        "What is a custom Shopify theme?",
        "A custom theme is designed and coded for one brand instead of reusing a template. It lets the layout, sections and checkout flow match how your customers shop, and avoids loading features you never use, which also helps speed."
      ],
      [
        "What makes a good Shopify homepage?",
        "A good homepage tells a new visitor in a few seconds what you sell and why it is worth buying from you. It shows your best products or collections, proof such as reviews, and a clear next step, without clutter or heavy elements that slow the page."
      ],
      [
        "What should a Shopify product page include?",
        "Clear photos, the price, variants, a short and honest description, reviews, delivery and returns information, and a visible add-to-cart button. Answer the questions a buyer would ask, and make the page easy to use on a phone."
      ],
      [
        "How many collections should a Shopify store have?",
        "Enough to help people find things, but not so many that choosing is hard. Group products the way customers think about them: by use, type or occasion. Keep the main navigation to a few clear collections and use filters for the rest."
      ],
      [
        "What is mobile-first design for Shopify?",
        "It means designing the phone layout first, because most shoppers browse on mobile, and then adapting it for larger screens. Buttons are easy to tap, text is readable, images load fast and the checkout works with one hand."
      ],
      [
        "How should I structure Shopify navigation?",
        "Keep the menu short and use the words customers use. Put your main collections first, add a clear path to your best sellers, and make search easy to find. A simple structure helps both shoppers and search engines understand your store."
      ],
      [
        "What fonts and colours should a Shopify store use?",
        "Choose one or two readable fonts and a small palette based on your brand, with one strong colour for buttons. Make sure text has enough contrast to read comfortably. Consistency across pages builds trust more than any single design trick."
      ],
      [
        "What is a Shopify landing page and when do I need one?",
        "A landing page is a focused page built for one offer or campaign, often for ad traffic. You need one when sending paid traffic to a specific product or promotion, because a dedicated page can match the ad’s message better than the homepage."
      ],
      [
        "Can I change my Shopify theme without losing data?",
        "Yes. Your products, customers and orders are stored separately from the theme, so switching themes does not delete them. Theme-specific settings and custom code may not carry over, so test the new theme as a draft before publishing it."
      ],
      [
        "What is Dawn theme and should I use it?",
        "Dawn is Shopify’s official free reference theme built for Online Store 2.0. It is lightweight, fast, and uses minimal JavaScript. It is an excellent base for custom development and early-stage stores, though growing brands usually customize its layout and sections for higher conversion."
      ],
      [
        "Why should a Shopify store avoid heavy sliders and carousels?",
        "Homepage image sliders slow down page loading significantly and get very few clicks past the first slide. A single, high-impact hero image with a clear value proposition and CTA converts better and keeps mobile Core Web Vitals green."
      ],
      [
        "How do I design a sticky Add to Cart button on mobile for Shopify?",
        "A sticky Add to Cart bar stays pinned to the bottom of the screen as the shopper scrolls through product details, reviews, and images. It removes the friction of scrolling all the way back up to purchase, noticeably increasing mobile conversion rates."
      ],
      [
        "What is visual hierarchy and why does it matter on product pages?",
        "Visual hierarchy organizes page elements in order of customer decision-making: product title and social proof first, pricing and discount next, variant selectors, primary Add to Cart button, followed by shipping estimates, trust badges, and detailed descriptions."
      ],
      [
        "How should collection pages be designed to increase clicks?",
        "Collection pages should feature quick product filters (size, price, category), clean high-contrast product imagery, badges (Best Seller, New, Sale), clear ratings, and instant secondary image hover on desktop or swipe on mobile."
      ],
      [
        "How do I design an effective About Us page for a D2C brand?",
        "An effective About page shares the founder story, the problem your brand solves, sourcing and manufacturing standards, behind-the-scenes photos, and press mentions. It turns a generic store into an authentic brand that buyers trust with prepaid orders."
      ],
      [
        "What makes a high-converting announcement bar on Shopify?",
        "A great announcement bar highlights a clear compelling reason to buy right now—such as \"Flat ₹200 Off on 1st Order with code FIRST200\" or \"Free Shipping on Prepaid Orders\"—without rotating too fast or taking up excessive vertical screen space on mobile."
      ],
      [
        "How many product images should a D2C brand show per product?",
        "Show between 4 to 8 high-resolution images: front shot, back shot, close-up texture/fabric view, product in packaging, dimension/scale reference, and lifestyle photos of the item being worn or used by a real person."
      ],
      [
        "Should product descriptions be placed in tabs or accordions?",
        "On mobile devices, collapsible accordions (Details, Ingredients/Material, Sizing & Fit, Shipping & Returns) are ideal because they keep the product page compact and prevent shoppers from being overwhelmed by endless vertical scrolling."
      ],
      [
        "What is the best way to display customer reviews on a product page?",
        "Place star rating and review count directly under the product title above the fold, and place the full photo/video review widget below the buy section with filtering options (verified buyer, highest rating, with photos)."
      ],
      [
        "How do I design color and size swatch selectors that prevent wrong orders?",
        "Use visual color circles and clickable size buttons instead of confusing native dropdowns. Grey out or visually strike through out-of-stock variants so shoppers never select unavailable combinations by accident."
      ],
      [
        "What is the difference between custom theme development and theme customization?",
        "Theme customization involves adjusting existing settings, colors, and fonts inside a pre-built commercial theme. Custom theme development codes a bespoke Liquid architecture from scratch, perfectly matching your Figma designs with zero template bloat."
      ],
      [
        "Should Shopify stores use dark mode or light backgrounds for e-commerce?",
        "Light, clean backgrounds (soft off-white or cream) are standard for most e-commerce categories because they offer the highest contrast for product photos and typography. Dark themes suit select luxury, streetwear, or gaming niches."
      ],
      [
        "How do trust badges impact checkout conversion on Shopify?",
        "Placing payment badges (UPI, Visa, Mastercard, Cashfree/Razorpay verified), SSL encryption icons, and \"100% Genuine Quality\" guarantees right below the Add to Cart button reduces buyer anxiety at the point of decision."
      ],
      [
        "How do I design breadcrumb navigation for complex catalogues?",
        "Keep breadcrumbs small, unobtrusive, and formatted with clean dividers (e.g., Home / Footwear / Men / Sneakers). Make sure each parent category link is clickable and formatted with BreadcrumbList structured data for Google."
      ],
      [
        "How do micro-animations improve e-commerce store engagement?",
        "Subtle micro-animations (such as button hover transitions, smooth cart drawer slide-outs, and gentle quantity counter bumps) make the shopping experience feel tactile, premium, and responsive."
      ],
      [
        "What is the best way to design an empty state for search and cart?",
        "Never leave an empty cart or zero-search results page blank. Include a helpful message, a prominent \"Start Shopping\" button, and showcase 4 curated Best-Selling items to re-engage the visitor."
      ]
    ]
  },
  {
    "id": "development",
    "title": "Shopify development and Liquid",
    "blurb": "Liquid, sections, apps, headless and custom features.",
    "items": [
      [
        "What is Liquid in Shopify?",
        "Liquid is Shopify’s template language. It lets a theme pull in your products, collections and settings and display them on the page. Developers use Liquid, together with HTML, CSS and JavaScript, to customise how a store looks and behaves."
      ],
      [
        "What are Shopify sections and blocks?",
        "Sections are reusable parts of a page, such as a banner or product grid, that you can add, remove and reorder in the theme editor. Blocks are smaller pieces inside a section. They let you change the layout without touching code."
      ],
      [
        "What is Online Store 2.0?",
        "It is Shopify’s modern theme architecture. It brings sections to every page, makes themes easier to customise in the editor, and supports metafields in the design. Most current themes are built on it."
      ],
      [
        "What is a headless Shopify store?",
        "In a headless setup, the storefront is built separately and talks to Shopify through its APIs, while Shopify still manages products, checkout and orders. It gives design freedom but adds cost and complexity, so it suits a few brands rather than most."
      ],
      [
        "Can Shopify handle custom features?",
        "Often, yes. Many needs can be met with theme code, metafields, apps or Shopify Functions. A developer can tell you which route is simplest and whether the feature is worth building, based on how much it would actually help your customers."
      ],
      [
        "What is a Shopify metafield?",
        "A metafield stores extra information on products, collections or orders, such as ingredients, size guides or care notes. Used well, metafields let you show structured details on the page without hard-coding them into the theme."
      ],
      [
        "What are Shopify Functions?",
        "Functions let developers customise backend logic, such as discounts, shipping options and payment rules, in a way that runs inside Shopify itself. They are a more reliable alternative to some older script-based customisations."
      ],
      [
        "Can I customise the Shopify checkout?",
        "To a degree. Shopify keeps the checkout consistent and secure, but allows branding changes, extra fields and logic through supported tools. How much you can change depends on your plan and Shopify’s current options, so confirm with a developer first."
      ],
      [
        "How do Shopify apps work, and how many is too many?",
        "Apps add features such as reviews, subscriptions or upsells. Each one can add code and requests to your pages. Install only what you truly use, remove the rest, and prefer built-in features or light code when an app is not essential."
      ],
      [
        "What is a Shopify development store?",
        "A development store is a free test store used to build and preview a site before it goes live. Agencies use it to build safely, then move the work to your live store, so your customers never see unfinished pages."
      ],
      [
        "What is the difference between theme app extensions and script tags?",
        "Script tags injected third-party JavaScript directly into the theme, often causing store slowdowns and leftover code after uninstalling. Theme App Extensions (introduced in OS 2.0) load app code cleanly through theme blocks, making apps faster and completely removable without breaking theme files."
      ],
      [
        "How do Shopify Webhooks work and when should I use them?",
        "Webhooks send automatic real-time notifications from Shopify to external systems whenever an event occurs (like order creation, inventory update, or customer registration). They are essential for syncing orders with warehouse ERPs, CRM systems, and WhatsApp automations."
      ],
      [
        "Can I build custom calculators or configurators on Shopify?",
        "Yes. Using custom Liquid sections, JavaScript, and Shopify Cart API, developers can build product bundle builders, custom engraving previews, size recommendation calculators, or custom subscription selectors tailored to your catalog."
      ],
      [
        "What is Shopify CLI and how do developers use it?",
        "Shopify CLI is a command-line tool that allows developers to build, test, and preview custom themes and apps locally in real-time. It enables version control with Git, automated deployments, and bug-free theme updates without editing code in the live admin."
      ],
      [
        "What are Shopify Metaobjects and how do they differ from Metafields?",
        "While Metafields store single extra attributes on existing objects (like a product washing instruction), Metaobjects let you define entirely custom multi-field data models (like Author profiles, Brand Ambassadors, or Recipe ingredients) that can be linked across multiple pages."
      ],
      [
        "How do I safely test theme changes without affecting live customers?",
        "Duplicate your live theme to work in an unpromoted draft theme, or use a Shopify development store. Preview the draft theme on different phones, verify checkout and cart logic, and only publish the theme once all changes are signed off."
      ],
      [
        "What is the Shopify Storefront API?",
        "The Storefront API is a GraphQL endpoint that provides full access to your store’s products, collections, customer accounts, and checkout. It powers custom mobile apps, headless websites, and custom front-ends built with Next.js or Hydrogen."
      ],
      [
        "What is Shopify Hydrogen and Oxygen?",
        "Hydrogen is Shopify’s official React-based framework for building custom headless storefronts, and Oxygen is Shopify’s global hosting platform designed to run Hydrogen apps with sub-second global latency."
      ],
      [
        "How do I prevent out-of-stock overselling during flash sales?",
        "Enable Shopify’s native inventory tracking on all product variants and turn off \"Continue selling when out of stock\". For massive flash sales, Shopify Plus handles thousands of simultaneous transactions with automated queueing."
      ],
      [
        "What are line item properties in Shopify Liquid?",
        "Line item properties are custom key-value pairs captured during product configuration (like customized gift messages, ring size specifications, or monogram letters) that attach directly to the cart item and follow the order through fulfilment."
      ],
      [
        "How do I create dynamic collapsible accordions in Liquid without heavy plugins?",
        "You can code native HTML5 `<details>` and `<summary>` elements directly into your theme’s Liquid sections with pure CSS animations, avoiding heavy third-party accordion apps that inject unnecessary JavaScript."
      ],
      [
        "Can I build a multi-step gift bundle builder in Shopify without apps?",
        "Yes. Developers can build custom product bundle sections using Shopify AJAX Cart API, allowing users to select a box, pick 3 products, choose a card, and add all items to cart as a bundled package."
      ],
      [
        "What are customer tags and how can they be used in theme code?",
        "Customer tags categorize buyers in your Shopify admin (e.g. \"wholesale\", \"vip\", \"influencer\"). In theme Liquid code, developers can display exclusive pricing, hidden collections, or private wholesale ordering forms to tagged customers."
      ],
      [
        "How do I add custom schema validation to Shopify section settings?",
        "Inside the `{% schema %}` tag of any Liquid section, developers define input controls (text, image_picker, range, color, collection) with preset validation, allowing non-technical store managers to update content visually without breaking code."
      ],
      [
        "How do I migrate custom Liquid modifications when updating to a new theme version?",
        "Create clean modular snippets for all custom code and include them using `{% render \"custom-snippet\" %}` instead of altering core theme files directly. This makes copying custom features into new theme updates seamless and quick."
      ],
      [
        "What are Shopify AJAX API endpoints and how do themes use them?",
        "Shopify provides lightweight JSON endpoints (/cart.js, /cart/add.js, /cart/change.js) that allow themes to update cart quantities, calculate item subtotals, and fetch inventory without refreshing the browser."
      ],
      [
        "What is the Shopify Section Rendering API?",
        "The Section Rendering API allows JavaScript to request and update specific Liquid sections dynamically over AJAX, enabling instant live filtering and pagination without reloading the entire page."
      ],
      [
        "How do developers implement variant image swapping in custom Liquid themes?",
        "By associating each variant with a specific media ID and using JavaScript to listen for variant change events, custom themes automatically switch the active gallery slide to the corresponding selected color variant."
      ],
      [
        "How do you build a dynamic product recommendations module in Liquid?",
        "Use Shopify’s native product recommendations API (`/recommendations/products.json?product_id=...&limit=4`) which uses machine learning to serve intent-based cross-sells based on purchase patterns."
      ],
      [
        "What are theme settings presets and how do they benefit store managers?",
        "Presets define predefined configurations of section blocks and styling in `settings_data.json`, allowing non-technical store owners to switch between homepage seasonal layouts with a single click in the theme customizer."
      ],
      [
        "How do developers manage Git version control with Shopify CLI?",
        "Developers maintain theme source code in a GitHub repository connected directly to Shopify. Pull requests and commits automatically sync with preview themes, ensuring zero accidental code overwrites on live stores."
      ],
      [
        "How do I add custom font files locally to Shopify without external links?",
        "Upload WOFF2 font files directly into the theme’s Assets directory and declare them using `@font-face` inside `theme.css`. This prevents external network latency and guarantees 100% font rendering uptime."
      ],
      [
        "What is the benefit of using CSS variables for theme styling?",
        "CSS custom properties allow dynamic theme-wide color and typography updates from a single declaration, enabling instant theme-wide dark/light palette swaps with zero runtime performance cost."
      ]
    ]
  },
  {
    "id": "speed",
    "title": "Shopify speed and performance",
    "blurb": "Why stores get slow and how to fix it.",
    "items": [
      [
        "Why is my Shopify store slow?",
        "The usual causes are large images, too many apps, heavy videos and animations, and third-party scripts. Slow stores lose visitors before the page loads, so find what is adding weight and remove or replace it before anything else."
      ],
      [
        "How do I make my Shopify store load faster?",
        "Compress and correctly size images, remove unused apps, limit heavy videos, defer non-essential scripts and use a lightweight theme. Test on a real phone and a slow connection, because that is where speed problems hurt sales most."
      ],
      [
        "Does Shopify page speed affect sales?",
        "It tends to. Visitors leave slow pages, and slow pages can also hurt search visibility. Faster pages usually make it easier for people to browse and buy, though speed is one of several factors, alongside offer, price and trust."
      ],
      [
        "How should I optimise images on Shopify?",
        "Upload images at a sensible size instead of the original camera file, use modern formats where possible, and let Shopify serve responsive versions. Add clear alt text so images are useful to people using screen readers and to search engines."
      ],
      [
        "Do Shopify apps slow down my store?",
        "Some do, especially ones that load scripts on every page. Check what each app adds, uninstall the ones you do not need, and make sure removed apps leave no code behind in the theme. Fewer, better apps keep the store lighter."
      ],
      [
        "What are Core Web Vitals?",
        "They are Google’s measures of real-world page experience: how fast the main content appears, how quickly the page responds to taps, and how stable the layout is while loading. Good scores generally mean a smoother experience for visitors."
      ],
      [
        "Should I use videos on my Shopify homepage?",
        "Only if they earn their place. Autoplay videos are heavy and can slow the page, especially on phones. If you use one, keep it short and compressed, load it after the main content, and make sure the page still works well without it."
      ],
      [
        "What is lazy loading?",
        "Lazy loading delays images and other content until they are about to appear on screen, so the first view loads faster. It is a simple way to improve speed, but the images at the very top of the page should still load right away."
      ],
      [
        "How does Shopify hosting and CDN work?",
        "Shopify hosts your store and serves it through a global network, so pages and images reach visitors from servers closer to them. You do not manage servers yourself, which removes a common source of speed and uptime problems."
      ],
      [
        "How often should I test my store speed?",
        "Test after any big change, such as a new theme, a new app or a new homepage section, and check periodically otherwise. Use a few tools and real phones, and compare before and after so you can tell what caused a slowdown."
      ],
      [
        "What is a good mobile speed score on Google PageSpeed for Shopify?",
        "Aiming for 60-80 on mobile PageSpeed Insights is realistic and healthy for an app-loaded D2C Shopify store. Achieving 90+ often requires custom theme code, minimal third-party apps, lazy-loaded scripts, and modern WebP and AVIF images."
      ],
      [
        "How do tracking pixels like Meta and Google Tag Manager impact store speed?",
        "Every third-party marketing pixel (Meta, TikTok, Google, Snapchat) loads external scripts that compete with your store’s main thread. Moving pixel events to server-side tracking (via Conversions API) keeps the storefront browser lightweight and fast."
      ],
      [
        "Why does my Shopify store feel fast on desktop but slow on mobile?",
        "Mobile devices have slower processors and rely on mobile networks with higher latency. Uncompressed desktop images, heavy review widgets, and unoptimized JavaScript force the phone’s CPU to work harder, causing layout delays and input lag."
      ],
      [
        "What is Cumulative Layout Shift (CLS) in Shopify and how do I fix it?",
        "CLS measures unexpected layout movement while a page loads (e.g. text jumping when a banner or app widget suddenly renders). Fix it by reserving fixed aspect ratios for images, banner carousels, and font display swaps."
      ],
      [
        "How do I clean up orphaned app code after deleting Shopify apps?",
        "Many older apps leave residual JavaScript snippets and stylesheet links inside theme.liquid and asset folders. A Shopify developer can audit your theme files, remove obsolete liquid tags, and restore pristine theme load speed."
      ],
      [
        "Should I host Shopify videos on YouTube, Vimeo, or Shopify Files?",
        "For background loop videos, compress MP4 files to under 2MB and upload directly to Shopify Files for direct CDN delivery. For long product reviews or explainer videos, embed responsive YouTube or Vimeo players with lazy-loaded video facades."
      ],
      [
        "What is Largest Contentful Paint (LCP) and how do I optimize it on Shopify?",
        "LCP marks when the largest content element (usually the hero image or main product photo) finishes rendering. Optimize it by preloading the main image, removing autoplay carousels above the fold, and using Shopify’s responsive `image_tag`."
      ],
      [
        "What is Interaction to Next Paint (INP) in Core Web Vitals?",
        "INP measures your store’s responsiveness to customer taps, clicks, and key presses throughout the entire browsing session. Prevent high INP by minimizing long JavaScript execution tasks and deferring heavy tracking libraries."
      ],
      [
        "How does font loading affect Shopify speed?",
        "Loading 4-5 different custom web fonts blocks initial text rendering (FOIT). Use modern system fonts or load at most 2 weights of one primary brand font with `font-display: swap` so text is readable instantly while fonts download."
      ],
      [
        "Does minifying CSS and JavaScript in Shopify help speed?",
        "Yes. Modern Shopify themes automatically minify theme assets. Removing unused CSS libraries (like old Bootstrap or heavy icon sets) further cuts download bytes, speeding up mobile parsing times."
      ],
      [
        "What is DOM size and why does having too many HTML nodes slow Shopify?",
        "A deep DOM tree with thousands of nested divs slows down mobile rendering and animations. Keep your Liquid markup clean, avoid loading 50+ products on a single collection page without pagination, and eliminate redundant wrapper divs."
      ],
      [
        "How do live chat widgets impact Shopify loading speed?",
        "Live chat widgets (WhatsApp, Tidio, Zendesk) are notorious for downloading heavy third-party bundles upfront. Load chat widgets on user click or delay their initialization by 3-5 seconds so initial page paint is instantaneous."
      ],
      [
        "How do I benchmark my store against competitor Shopify speeds?",
        "Use Google PageSpeed Insights, GTmetrix, and WebPageTest with a mobile profile (4G connection, Chrome). Compare time to first byte (TTFB), LCP, and total blocking time (TBT) rather than relying on arbitrary speed scores."
      ],
      [
        "Can a CDN solve all my Shopify speed problems?",
        "Shopify already uses Cloudflare’s global edge CDN for all stores. However, a CDN only caches static files; it cannot fix bloated third-party apps, heavy uncompressed images, or inefficient liquid loops executed on the server."
      ],
      [
        "How does HTTP/3 benefit Shopify stores in India?",
        "Shopify natively supports HTTP/3 and QUIC protocol. It establishes faster connections over unstable mobile cellular networks in India, drastically reducing connection handshakes and packet loss on 4G and 5G connections."
      ],
      [
        "How does preconnecting to critical image CDN domains improve LCP?",
        "Adding `<link rel=\"preconnect\" href=\"https://cdn.shopify.com\">` in the theme head establishes early DNS resolution and TLS handshakes, speeding up hero product image delivery by 200-400ms."
      ],
      [
        "Why should Shopify stores replace GIF animations with WebP or MP4?",
        "Animated GIFs are extremely uncompressed and often exceed 10MB in size. Converting them to modern animated WebP or muted looping MP4 video cuts file size by up to 90% while improving image clarity."
      ]
    ]
  },
  {
    "id": "seo",
    "title": "Shopify SEO and Google ranking",
    "blurb": "Getting found on Google with a Shopify store.",
    "items": [
      [
        "Is Shopify good for SEO?",
        "Shopify gives you a solid base: clean URLs, a sitemap, fast hosting and editable titles and descriptions. Good SEO still depends on your content, site structure, page speed and links, so the platform helps but does not do the work for you."
      ],
      [
        "How do I do keyword research for a Shopify store?",
        "Start with what your customers would type to find your products, then check search volume and competition with a keyword tool. Match each important keyword to one page, such as a collection or product, and write for people first."
      ],
      [
        "How should I write Shopify product titles and descriptions?",
        "Put the main keyword naturally in the title, describe the product honestly in plain language, and cover size, material, use and delivery. Write original text instead of copying the supplier’s, and do not stuff keywords."
      ],
      [
        "What is a meta title and description in Shopify?",
        "They are the title and short summary shown for your page in search results. You can edit them for each page in Shopify. A clear, accurate title and a helpful summary can improve how often people click your result."
      ],
      [
        "How do I set up Shopify URLs and redirects?",
        "Keep URLs short and readable. When you change a page’s address or delete a product, add a redirect from the old URL to the new one so visitors and search engines do not hit a dead end. Shopify lets you manage redirects in the admin."
      ],
      [
        "Does Shopify create duplicate content?",
        "It can, because a product may be reachable through several collection paths. Shopify uses canonical tags to point search engines to the main version. It is still worth checking that your important pages have one clear address."
      ],
      [
        "What is schema markup on Shopify?",
        "Schema markup is structured data that helps search engines understand your content, such as products, prices and reviews. Many themes include some of it. A developer can add or fix it so your pages are eligible for richer search results."
      ],
      [
        "How do I submit my Shopify sitemap to Google?",
        "Shopify creates a sitemap for you at your domain followed by /sitemap.xml. Add your site in Google Search Console, verify it, and submit that sitemap address. This helps Google discover your pages and report any problems."
      ],
      [
        "Should I blog on my Shopify store?",
        "If you can write useful articles that answer real customer questions, yes. A blog brings search visitors who are not yet ready to buy and builds trust. Write for your customers, link to relevant products, and keep quality ahead of quantity."
      ],
      [
        "How long does Shopify SEO take to work?",
        "It varies with competition, your site and your content, but SEO is usually measured in months, not days. Fix the technical basics first, publish helpful pages steadily, and track impressions, clicks and sales to see what is working."
      ],
      [
        "How do I optimize Shopify collection pages for Google ranking?",
        "Include an informative 100-200 word introduction above or below the grid, use target keywords in the H1 tag and meta description, optimize product card alt texts, and maintain clean internal links to top-selling items."
      ],
      [
        "How do I fix Shopify’s default collections and products duplicate URL structure?",
        "Shopify automatically creates both /products/item and /collections/category/products/item. While Shopify uses canonical tags by default, custom theme code can be adjusted to link all product cards directly to the root /products/ URL for cleaner internal link equity."
      ],
      [
        "Can I change the /pages/ and /collections/ URL subdirectories in Shopify?",
        "No. Shopify has fixed URL subdirectories (/pages/, /collections/, /products/, /blogs/) by design. Google understands and indexes this architecture easily, so it has zero negative impact on your SEO rankings."
      ],
      [
        "What are the best SEO apps for Shopify?",
        "Popular tools include Plug in SEO, Booster SEO, and Crush.pics for image compression. However, clean theme code, semantic heading structures, and well-researched content often yield far better SEO results than relying solely on automated apps."
      ],
      [
        "How do I rank for local searches in India with my Shopify store?",
        "Add LocalBusiness structured schema, include your registered address, phone number, and city in the footer, create a verified Google Business Profile linked to your website, and target local keywords on your Contact and About pages."
      ],
      [
        "How do breadcrumb links help Shopify SEO?",
        "Breadcrumbs show the page path (e.g., Home > Men > Jackets > Bomber Jacket) and use BreadcrumbList schema. They help Google crawlers understand your store hierarchy and display neat navigational trails in Google search results."
      ],
      [
        "How do I show product star ratings in Google Search results?",
        "Add Product and AggregateRating JSON-LD schema to your product templates. When connected with genuine customer reviews from trusted apps (like Judge.me or Loox), Google displays yellow star ratings and review counts right in search snippets."
      ],
      [
        "What should I do with out-of-stock products for SEO?",
        "Never delete or 404 out-of-stock product pages. Keep the page live with an \"Out of Stock\" notification and a \"Notify Me When Available\" email/WhatsApp capture button, or provide links to similar alternative products."
      ],
      [
        "How do internal links improve Shopify SEO?",
        "Internal links pass page authority between pages and guide search crawlers to deep inventory. Link related products (\"Complete the Look\"), cross-link collections from blog guides, and maintain a comprehensive footer menu."
      ],
      [
        "What is the best keyword strategy for high-competition D2C niches?",
        "Target specific long-tail buyer intent queries (e.g. \"pure linen oversized shirts for men india\" instead of just \"shirts\"). These searchers have high purchase intent and lower keyword competition, leading to faster rankings and higher conversion."
      ],
      [
        "How do image alt tags help Shopify SEO?",
        "Alt text tells search engine crawlers what an image portrays and serves as anchor text for Google Image Search. Write natural descriptive phrases including primary keywords (e.g., \"Handmade brass diya for puja - front view\")."
      ],
      [
        "How do I optimize Shopify site speed for Core Web Vitals SEO ranking?",
        "Google prioritizes fast mobile experiences. Ensure your Mobile LCP is under 2.5s, CLS under 0.1, and INP under 200ms by optimizing fonts, compressing hero banners, and eliminating render-blocking apps."
      ],
      [
        "How do I prevent search engines from indexing private or policy pages?",
        "Add `<meta name=\"robots\" content=\"noindex, follow\">` to pages like thank-you pages, cart, customer account dashboards, or internal search result pages, preventing search engines from wasting crawl budget on non-landing pages."
      ],
      [
        "What is Google Merchant Center and how does it connect to Shopify?",
        "Google Merchant Center feeds your product catalog into Google Shopping and free product listings on Google Search. Connect it via Shopify’s Google & YouTube app to show your products with prices, ratings, and stock status in Google Shopping."
      ],
      [
        "How do I monitor keyword rankings and crawl errors for my Shopify store?",
        "Connect Google Search Console. Review the \"Performance\" tab to see which queries bring visitors and check \"Page Indexing\" to identify 404 errors, redirect loops, or pages excluded from Google’s index."
      ],
      [
        "How do I optimize Shopify blog posts to generate product sales?",
        "Embed contextual \"Shop the Story\" product cards directly inside helpful buying guides or problem-solving articles, allowing readers to add items to cart without leaving the blog reading flow."
      ],
      [
        "What is XML sitemap submission and how often does Google re-crawl it?",
        "Once submitted via Google Search Console, Google periodically polls your sitemap. Shopify automatically updates `/sitemap.xml` whenever products or collections are added or modified."
      ]
    ]
  },
  {
    "id": "cro",
    "title": "Conversion rate optimisation",
    "blurb": "Turning more of your visitors into buyers.",
    "items": [
      [
        "What is a good conversion rate for a Shopify store?",
        "There is no single number. Rates differ by industry, price, traffic source and device. Instead of chasing an average, measure your own rate over time, find where visitors drop off, and aim to improve it step by step."
      ],
      [
        "What is conversion rate optimisation (CRO)?",
        "CRO is the practice of getting more of your existing visitors to buy, instead of paying for more traffic. It looks at the pages, messages and steps that stop people from purchasing, and improves them using data and testing."
      ],
      [
        "How do I reduce cart abandonment on Shopify?",
        "Show total costs early, keep checkout short, offer the payment methods your customers use, add trust signals and make delivery and returns clear. Abandoned-cart reminders can win back some buyers, but fixing the reasons they leave matters most."
      ],
      [
        "How do heatmaps and session recordings help conversion?",
        "Heatmaps show where people click and scroll, and recordings show how real visitors move through your store. Together they reveal confusing layouts, ignored buttons and broken steps that numbers alone do not explain."
      ],
      [
        "Do A/B tests work for small Shopify stores?",
        "They can, but small stores may not have enough traffic for quick, reliable results. With lower traffic, focus on clear fixes backed by customer feedback and analytics, and use tests only for changes where you can wait long enough to trust the outcome."
      ],
      [
        "How do I increase average order value on Shopify?",
        "Use sensible bundles, cross-sells on the product and cart pages, a free-shipping threshold slightly above your usual basket, and clear value for higher-priced options. Recommend things that genuinely go together, not random add-ons."
      ],
      [
        "Why is my website traffic high but sales low?",
        "It usually points to a mismatch or friction: the wrong visitors, a weak offer, slow pages, unclear products, missing trust or a hard checkout. Look at where visitors leave and on which devices, then fix the biggest leak first."
      ],
      [
        "What trust signals should a Shopify store show?",
        "Real reviews, clear delivery and returns policies, secure payment badges, contact details, honest product photos and an About page that shows who is behind the store. Place them near the buy button and at checkout, where doubt is highest."
      ],
      [
        "How do product reviews affect conversion?",
        "Reviews reassure new buyers and answer questions about fit and quality. Show genuine reviews, including mixed ones, and make it easy for happy customers to leave them. Never fake or buy reviews; it damages trust and breaks platform rules."
      ],
      [
        "What is a CRO audit?",
        "A CRO audit reviews your store’s analytics, pages and checkout to find what is costing you sales, and lists fixes in order of priority. It is a good first step before redesigning, because it shows where changes will matter most."
      ],
      [
        "What is a good checkout drop-off rate for an Indian Shopify store?",
        "In Indian e-commerce, seeing 50-70% drop-off between Cart and Completed Purchase is common, largely driven by unexpected shipping fees or missing preferred payment methods (UPI/COD). Streamlining the checkout can recover 15-25% of these buyers."
      ],
      [
        "How does free shipping threshold affect Average Order Value (AOV)?",
        "Setting a free shipping bar (e.g., \"Add ₹350 more for Free Delivery!\") with a dynamic progress bar in the cart drawer encourages shoppers to add an additional accessory or variant to qualify, directly lifting your store’s AOV."
      ],
      [
        "Should I use a slide-out cart drawer or redirect to cart page?",
        "A slide-out cart drawer (Ajax drawer) keeps shoppers on the product page without reloading, provides instant visual confirmation, and offers an ideal space for in-cart one-click upsells and shipping progress bars."
      ],
      [
        "How do urgency timers and stock countdowns affect conversion?",
        "Authentic stock indicators (e.g., \"Only 3 left in stock\" tied to real inventory) create genuine urgency and drive immediate purchase. Fake countdown timers damage customer trust and should be strictly avoided."
      ],
      [
        "How do customer product videos and UGC boost sales?",
        "Short vertical video reviews (UGC) placed on product pages answer common concerns about fit, texture, and real-life appearance. They bridge the gap between online photos and physical touch, increasing conversion rates by 20%+."
      ],
      [
        "How do return and exchange guarantees influence first-time buyers?",
        "Prominently displaying a \"Hassle-Free 7-Day Exchange / Return\" badge near the buy button eliminates purchase hesitation, especially for apparel, footwear, and lifestyle products where sizing uncertainty is the #1 objection."
      ],
      [
        "How do fast delivery estimates increase product page conversion?",
        "Displaying expected delivery dates based on the customer’s pin code (e.g., \"Order within 2 hrs to get it by Thursday\") creates immediate clarity and removes delivery uncertainty for time-sensitive shoppers."
      ],
      [
        "What is a post-purchase upsell and why is it high-converting?",
        "A post-purchase upsell offers a complementary product immediately after payment is authorized but before the thank-you page. Because the buyer has already entered payment details, it converts with zero added checkout friction."
      ],
      [
        "How do product page variant selectors affect conversion on mobile?",
        "Use clear pills or visual swatches instead of dropdown menus. Ensure clicking a variant automatically updates the main product image and updates stock status instantly to eliminate buying confusion."
      ],
      [
        "What is the best placement for the primary Add to Cart button?",
        "Keep the Add to Cart button full-width on mobile, above the fold, and implement a sticky bottom Add to Cart bar as the user scrolls into long reviews or specifications."
      ],
      [
        "How should out-of-stock products be handled to retain buyers?",
        "Add an instant back-in-stock alert button (collecting email or WhatsApp) and recommend 3 similar items directly below. Never show a dead \"Sold Out\" state with no next step."
      ],
      [
        "How do exit-intent popups recover abandoning visitors?",
        "Exit-intent popups detect when a desktop cursor moves toward the close button or when a mobile user rapidly scrolls upward. Offering a direct one-time discount code (e.g. \"Wait! Take ₹150 off your first order\") captures 3-5% of otherwise lost shoppers."
      ],
      [
        "How does social login (Google/OTP) improve conversion rates?",
        "Requiring customers to create a password causes high drop-offs. One-tap Google sign-in or mobile OTP login enables customers to authenticate in 2 seconds, drastically speeding up the path to purchase."
      ],
      [
        "What is the best way to run Buy 1 Get 1 (BOGO) promotions on Shopify?",
        "Use automatic Shopify discounts or custom cart drawer logic so the free or discounted item is added automatically when qualifying items are in the cart, preventing customer frustration with failed promo codes."
      ],
      [
        "How do free gift with purchase (GWP) tiers motivate higher spend?",
        "Offering tiered gifts (e.g. \"Spend ₹1,499 for a Free Pouch, Spend ₹2,499 for a Full-Size Serum\") with a visual progress bar creates an exciting gamified shopping experience that reliably lifts average basket size."
      ],
      [
        "How should cart abandonment recovery be split between WhatsApp, SMS, and Email?",
        "WhatsApp delivers the highest open rates (80%+) for instant reminders within 30 minutes in India. SMS works well for secondary reminders after 4 hours, and Email delivers rich visual reminders with customer reviews at 24 hours."
      ],
      [
        "How do mini-cart upsell modules increase revenue?",
        "Placing 1-click add-on items (such as socks on a shoe store, gift wrapping, or product protection warranty) inside the slide-out cart drawer adds incremental revenue without interrupting the buyer’s initial checkout intent."
      ],
      [
        "Where is the most effective location for customer ratings and social proof?",
        "Directly below the product title above the fold, immediately beside the primary buy button, and prominently summarized at the top of the customer reviews section with verified buyer checkmarks."
      ],
      [
        "How do return and exchange assurances affect high-ticket luxury conversion?",
        "For luxury or designer items (above ₹5,000), highlighting dedicated customer concierge support, insured delivery, and guaranteed authenticity certificates eliminates hesitation and builds trust."
      ],
      [
        "How does displaying recent sales activity boost buyer confidence?",
        "Displaying truthful recent purchase notifications or review counters (e.g. \"Over 1,200 Indian customers ordered this month\") reassures first-time shoppers who discovered your brand through cold social ads."
      ],
      [
        "What is the optimal size and color contrast for primary CTA buttons?",
        "The primary Add to Cart button should span full-width on mobile with at least 48px touch height and use a high-contrast brand accent color (such as bold orange, deep emerald, or rich black) that stands out clearly against the page background."
      ],
      [
        "How does a progress bar for tiered discounts motivate shoppers?",
        "A dynamic progress bar (e.g. \"Buy 2 for 10% Off, Buy 3 for 15% Off!\") shows shoppers exactly how close they are to the next discount tier, encouraging multi-item additions."
      ],
      [
        "How do customer product FAQs on product pages increase conversion?",
        "Answering top 4-5 customer objections directly on the product page (e.g. \"Is it waterproof?\", \"Will it shrink after wash?\") eliminates buying hesitation and cuts pre-purchase support emails."
      ]
    ]
  },
  {
    "id": "payments",
    "title": "Payments, COD and checkout in India",
    "blurb": "Getting paid, shipping and reducing returns.",
    "items": [
      [
        "Which payment gateways work with Shopify in India?",
        "Shopify supports several third-party gateways that work in India, such as Razorpay, PayU, Cashfree and PhonePe, and others may be available. Availability and fees change, so check Shopify’s payment settings and each gateway’s current terms before choosing."
      ],
      [
        "Can I offer cash on delivery on Shopify?",
        "Yes. Shopify supports manual payment methods such as cash on delivery, and many Indian stores use COD apps for better control. COD helps conversion for some customers but raises return risk, so plan how you will confirm and screen orders."
      ],
      [
        "How do I reduce RTO on COD orders?",
        "Confirm orders by phone or WhatsApp, verify addresses, offer a small incentive to pay online, and limit COD on high-risk pin codes or very large orders. Track return-to-origin by pin code and product, and adjust where losses are highest."
      ],
      [
        "What is one-click checkout?",
        "It lets returning customers buy with fewer steps, using saved details. Shorter checkouts remove friction, which can help completion. Apps and checkout tools offer it for Shopify; check that your choice works with your payment methods."
      ],
      [
        "How do I add UPI to my Shopify store?",
        "UPI is usually offered through a payment gateway that supports it. Enable UPI in your gateway’s settings and in Shopify’s payment section, then place a test order from a phone to make sure the flow is smooth."
      ],
      [
        "What is a prepaid discount and does it work?",
        "It is a small discount for paying online instead of choosing COD. It can move customers to prepaid and lower return rates, but test it against your margins and watch whether it changes order volume."
      ],
      [
        "Can Shopify handle GST invoices?",
        "You can set tax rules in Shopify, and apps or custom code can produce GST-compliant invoices. Rules are specific to your business, so confirm the setup with your accountant before relying on it."
      ],
      [
        "How do I set up shipping rates on Shopify?",
        "In the shipping settings, create zones and rates: flat, weight-based, price-based, free above a threshold, or live rates through a carrier integration. Keep it simple and clear, and show delivery estimates early so there are no surprises at checkout."
      ],
      [
        "What does abandoned checkout recovery do?",
        "It sends reminders to people who started checkout but did not finish, usually by email, and sometimes by WhatsApp or SMS where permitted. It can win back some orders, but it works best when paired with fixes to the reasons people left."
      ],
      [
        "Which shipping partners integrate with Shopify in India?",
        "Several Indian shipping aggregators and couriers offer Shopify apps or integrations, including Shiprocket and others. Compare coverage in your delivery areas, return handling, COD remittance and support before picking one."
      ],
      [
        "How do I configure instant refund for customer returns on Shopify?",
        "Modern Indian payment gateways (like Razorpay and Cashfree) support instant refunds via IMPS and UPI rails. Setting up automated refund workflows through your gateway admin resolves customer anxiety and builds long-term brand loyalty."
      ],
      [
        "What is RTO fraud and how can Indian D2C stores protect themselves?",
        "RTO (Return to Origin) occurs when COD orders are cancelled at the doorstep or rejected by bogus recipients. Protect your store using OTP phone verification on COD, automated WhatsApp address confirmation, and flagging high-risk pin codes."
      ],
      [
        "What is the fee charged by Indian payment gateways on Shopify?",
        "Standard domestic payment gateway transaction fees in India typically range from 1.9% to 2% plus 18% GST for UPI, debit cards, net banking, and domestic credit cards, with slightly higher rates for international cards or EMI options."
      ],
      [
        "How does WhatsApp order confirmation work for Shopify stores?",
        "Using automated WhatsApp Business APIs (like AiSensy, Interakt, or Wati), your store can automatically send an instant order confirmation button to COD buyers right after checkout, filtering out unverified or prank orders before dispatch."
      ],
      [
        "Can I restrict COD on specific high-value products in Shopify?",
        "Yes. Using Shopify shipping rules or third-party COD management apps, you can easily disable Cash on Delivery for products above a certain price threshold, fragile items, or customized and personalized merchandise."
      ],
      [
        "How do I set up split payments or Pay Later on Shopify India?",
        "You can offer BNPL (Buy Now Pay Later) or cardless EMIs through integrations with providers like Simpl, LazyPay, or gateway-integrated EMI options, helping shoppers afford higher-ticket purchases with zero upfront strain."
      ],
      [
        "What is the difference between standard checkout and 1-click checkout in India?",
        "Standard Shopify checkout requires typing address, state, and pincode manually. 1-click checkout solutions (like GoKwik, Fastrr, or Shop Pay) prefill customer shipping and payment details across a network of millions of Indian shoppers."
      ],
      [
        "Can I charge a convenience fee for COD orders on Shopify?",
        "Yes. Many Indian brands charge a modest fee (₹49 to ₹99) on Cash on Delivery orders to encourage prepaid UPI payments and offset COD courier remittance charges."
      ],
      [
        "How do I verify customer phone numbers on Shopify orders?",
        "You can integrate SMS OTP or WhatsApp OTP verification during checkout or immediately after an order is placed, ensuring every COD order is linked to a valid reachable mobile number."
      ],
      [
        "What happens to payment gateway money settlement in India?",
        "Payment gateways typically settle collected funds into your verified business bank account on a T+1 or T+2 business day cycle, deducting their processing commission automatically."
      ],
      [
        "How do I accept international payments from US or European buyers on Shopify India?",
        "Activate international cards on Razorpay, Cashfree, or PayPal India. Ensure you have IEC (Import Export Code) registered and submit purpose codes for international inward remittances."
      ],
      [
        "How do UPI Deep-links work on mobile checkout in India?",
        "When a shopper selects UPI on a mobile phone, deep-links invoke installed payment apps (Google Pay, PhonePe, Paytm, CRED) directly with one tap, completing payment without manually typing UPI IDs."
      ],
      [
        "What is automated payment reconciliation for Shopify in India?",
        "Payment reconciliation tools automatically match bank credit settlements with individual Shopify order IDs, highlighting gateway deductions, refunds, and unpaid COD courier remittances."
      ]
    ]
  },
  {
    "id": "shipping",
    "title": "Shipping, logistics and RTO reduction",
    "blurb": "Courier aggregators, NDR management and warehouse fulfilment.",
    "items": [
      [
        "How does Shiprocket integrate with Shopify?",
        "Shiprocket syncs automatically with Shopify via an official app. Once connected, new orders appear in Shiprocket for one-click shipping label generation, courier assignment (Delhivery, Bluedart, etc.), and automated tracking update syncs back to Shopify."
      ],
      [
        "What is Non-Delivery Report (NDR) and how should stores handle it?",
        "NDR alerts you when a courier fails a delivery attempt (e.g. customer not available, incomplete address). Automated WhatsApp or IVR outreach allows customers to reschedule delivery or clarify address details before the parcel is returned."
      ],
      [
        "How do I set up free shipping threshold in Shopify?",
        "Go to Settings > Shipping and Delivery > Manage Rates. Create a rate rule: \"Standard Shipping: ₹0 when order price is ₹999 and above\", and set a flat fee (e.g. ₹99) for orders below that threshold."
      ],
      [
        "What are the best courier partners for D2C brands in India?",
        "Delhivery, Blue Dart, Xpressbees, Shadowfax, and DTDC are the most widely used courier networks in India. Most D2C brands use shipping aggregators (like Shiprocket, NimbusPost, or Pickrr) to auto-select the best courier per pin code."
      ],
      [
        "How do I handle returns and reverse pick-ups on Shopify?",
        "Use dedicated return management apps (like Return Prime or ClickPost) that provide a self-service customer return portal, automate reverse courier pickup scheduling, and track returned inventory at the warehouse."
      ],
      [
        "How does pin code serviceability check work on product pages?",
        "Pin code validator widgets allow shoppers to enter their 6-digit postal code on the product page to verify COD availability and see estimated delivery days before adding the item to cart."
      ],
      [
        "How can I reduce damaged in-transit goods for fragile items?",
        "Use custom branded corrugated boxes with bubble lining, security tamper-evident tape, and seal items in waterproof mailer bags. Mark fragile products with warning labels and choose express air couriers for delicate merchandise."
      ],
      [
        "What is weight discrepancy in shipping and how to prevent it?",
        "Weight discrepancy occurs when courier hub scales record higher parcel weight than declared in the app, resulting in extra freight charges. Accurately measure volumetric weight (Length x Width x Height / 5000) for every packaging box size."
      ],
      [
        "What is the average delivery timeline for D2C e-commerce in India?",
        "Metro-to-metro deliveries typically take 24 to 48 hours via express air mode. Tier 2 and Tier 3 deliveries usually take 3 to 5 business days via surface transport."
      ],
      [
        "Can I offer Same-Day or Next-Day delivery on Shopify in major Indian metros?",
        "Yes. By partnering with hyper-local or micro-fulfilment services (such as Blitz, Darkstore providers, or Shadowfax Now), brands can store fast-moving inventory in Delhi NCR, Mumbai, and Bangalore for same-day delivery."
      ],
      [
        "How does shipping insurance protect high-value D2C orders?",
        "Shipping aggregators offer transit insurance covering lost, stolen, or severely damaged consignments during transit. It is vital for jewellery, luxury watches, and high-ticket electronics."
      ],
      [
        "How do automated shipping status notifications improve customer experience?",
        "Sending automatic WhatsApp and SMS updates at key milestones (Shipped, Out for Delivery, Delivered) reduces customer anxiety and drastically cuts down \"Where is my order?\" (WISMO) support queries."
      ],
      [
        "What is split shipment and when should a store use it?",
        "Split shipment occurs when items from a single order are fulfilled from different warehouse locations. Shopify handles split fulfilment natively, generating distinct tracking numbers for each dispatched package."
      ],
      [
        "How does warehouse inventory syncing work with multiple fulfillment centers?",
        "Shopify supports multiple locations. You can configure inventory per city warehouse, and Shopify automatically routes incoming customer orders to the nearest warehouse with available stock."
      ],
      [
        "What is volumetric weight and how is it calculated?",
        "Courier companies bill on the higher of actual gross weight or volumetric weight. Volumetric weight equals (Length x Width x Height in cm) divided by 5000. Compact packaging prevents unnecessary shipping costs."
      ],
      [
        "How do weight slab optimizations reduce courier shipping costs?",
        "Couriers bill in 500g or 1kg increments. If a packaged product weighs 520g, you pay for a full 1kg slab. Trimming 25g off box packaging or mailer bags drops the parcel into the 500g slab, cutting freight costs by 30-40% per order."
      ],
      [
        "How do automated IVR calls reduce RTO on COD orders in India?",
        "Automated IVR systems call the customer within 15 minutes of order placement, asking them to press 1 to confirm or 2 to cancel. This filters out accidental orders, wrong numbers, and prank bookings automatically."
      ],
      [
        "What are pincode blacklist rules and how do they prevent delivery losses?",
        "Blacklist rules analyze historical courier delivery data and automatically disable COD on pin codes with RTO rates exceeding 40% (such as certain high-risk postal codes), allowing only prepaid orders in those regions."
      ],
      [
        "How do shipping rate markups offset packaging and handling expenses?",
        "Adding a nominal ₹30 to ₹50 packaging and handling fee to standard shipping or offering free shipping above a threshold helps cover protective box, bubble wrap, and warehouse labor costs."
      ],
      [
        "What is the difference between air cargo and surface courier modes in India?",
        "Air shipping provides rapid 24-48 hour metro delivery at slightly higher rates, ideal for lightweight, high-value, or perishable goods. Surface transport handles bulkier goods (over 2kg) cost-effectively within 4-7 days."
      ],
      [
        "How do courier performance scorecards help choose shipping partners?",
        "Aggregators rank couriers by first-attempt delivery success rate, pickup punctuality, and COD remittance speed per zone. Shipping apps automatically assign each parcel to the top-performing courier for that specific route."
      ],
      [
        "How do reverse logistics pickups work for damaged or wrong items?",
        "A reverse courier pickup is automatically scheduled at the customer’s address. Once the package is picked up and scanned by the courier, your store can automatically issue an exchange or store credit."
      ],
      [
        "How does volumetric packaging optimization prevent courier billing disputes?",
        "Using custom-fit cardboard boxes that match your product dimensions eliminates excess void space, keeping volumetric weight equal to actual weight and avoiding surprise courier rate adjustments."
      ],
      [
        "How do smart courier allocation algorithms work in shipping aggregators?",
        "Aggregators evaluate historical delivery percentage, average transit speed, and current zone congestion, automatically routing each parcel to the top courier for that specific pin code."
      ],
      [
        "What is door-step open box delivery and should D2C brands offer it?",
        "Open box delivery allows the customer to inspect the product in the presence of the courier delivery agent before accepting. It builds massive trust for premium electronics and luxury fashion, though couriers charge a premium."
      ]
    ]
  },
  {
    "id": "shopify-plus",
    "title": "Shopify Plus and enterprise scaling",
    "blurb": "High-volume infrastructure, custom checkout and B2B.",
    "items": [
      [
        "What is Shopify Plus and who is it for?",
        "Shopify Plus is the enterprise tier of Shopify, built for high-growth brands and enterprises generating millions in monthly revenue. It provides custom checkout extensibility, dedicated account management, and massive server concurrency."
      ],
      [
        "How much does Shopify Plus cost in India?",
        "Shopify Plus starts at approximately $2,000 USD per month or a small percentage of monthly sales volume for enterprise turnover, offering significantly lower transaction fees on high-volume revenues."
      ],
      [
        "What is Checkout Extensibility on Shopify Plus?",
        "Checkout Extensibility allows developers to build custom apps and UI blocks inside the native Shopify checkout (such as custom upsells, gift messages, loyalty point redemption, and custom delivery date pickers) with complete security."
      ],
      [
        "How does B2B on Shopify Plus work?",
        "Shopify Plus includes built-in B2B features: custom wholesale price lists per company, net payment terms (Net 30, Net 60), tiered quantity discounts, and customer-specific product catalogues under a single store admin."
      ],
      [
        "How many expansion stores do you get with Shopify Plus?",
        "Shopify Plus includes up to 9 expansion stores at no extra license fee, allowing brands to launch dedicated localized stores for international markets (e.g. US, UK, UAE) or separate brand sub-lines."
      ],
      [
        "What is Shopify Launchpad?",
        "Launchpad is an automated event tool on Shopify Plus that schedules flash sales, product drops, and theme design swaps in advance. It automatically updates pricing, publishes new products, and applies event discount codes at exact seconds."
      ],
      [
        "How does Shopify Plus handle million-visitor flash sales?",
        "Shopify Plus cloud infrastructure handles tens of thousands of checkouts per minute with zero server crashes or database slowdowns, backed by automated checkout bot protection and scalable cloud architecture."
      ],
      [
        "What are dedicated API call limits on Shopify Plus?",
        "Shopify Plus doubles API rate limits (up to 40 requests per second for standard REST/GraphQL), enabling high-speed real-time data syncs with custom ERPs, warehouse management systems, and CRMs."
      ],
      [
        "What is the Shopify Plus Partner program?",
        "Shopify Plus Partners are vetted, elite design and development agencies recognized by Shopify for technical excellence, enterprise delivery standards, and proven case study results with major D2C brands."
      ],
      [
        "When should an Indian D2C brand upgrade from Advanced to Shopify Plus?",
        "Upgrade when your monthly revenue crosses ₹50L to ₹1Cr, when third-party transaction fees on standard plans exceed the Plus subscription cost, or when you need deep custom checkout customization and B2B ordering."
      ],
      [
        "What are Shopify Scripts and how are they migrating to Shopify Functions?",
        "Shopify Scripts were legacy Ruby snippets used for custom cart discounts and payment gating. Shopify Functions provide a faster, modern WebAssembly-based architecture that scales effortlessly during high-traffic events."
      ],
      [
        "How does custom payment routing work on Shopify Plus?",
        "Using Shopify Functions on Plus, stores can dynamically hide, rename, or reorder payment gateways based on customer location, cart value, or risk score (e.g. hiding COD for low-trust buyers)."
      ],
      [
        "What is Multipass login on Shopify Plus?",
        "Multipass allows seamless single sign-on (SSO) between your external mobile app, membership forum, or community platform and your Shopify Plus storefront without requiring users to log in twice."
      ],
      [
        "What is the difference between headless commerce on standard Shopify vs Shopify Plus?",
        "While standard plans support Storefront API, Shopify Plus provides dedicated enterprise infrastructure, higher API concurrency limits, and custom checkout extensibility for headless React/Next.js storefronts."
      ],
      [
        "How does Shopify Flow automate back-office operations on Shopify Plus?",
        "Shopify Flow creates visual \"If-This-Then-That\" automated workflows—such as automatically tagging VIP customers who spend ₹20,000+, hiding sold-out items, or alerting warehouse managers of high-risk orders."
      ],
      [
        "What are organization-level user permissions on Shopify Plus?",
        "Shopify Plus organizations allow centralized management of user access, roles, and two-factor authentication across all regional and expansion stores from a single unified admin dashboard."
      ],
      [
        "How does Shopify Plus Protect prevent inventory hoarders and bot checkouts?",
        "Plus includes automated algorithmic bot detection that challenges suspicious high-frequency automated checkout scripts with invisible CAPTCHA during hyped sneaker drops and limited-edition product releases."
      ]
    ]
  },
  {
    "id": "apps",
    "title": "Essential Shopify apps and tech stack",
    "blurb": "Reviews, WhatsApp, invoices, search and inventory tools.",
    "items": [
      [
        "What are the must-have Shopify apps for an Indian D2C brand?",
        "Core apps include a customer reviews app (like Judge.me or Loox), an Indian shipping aggregator (Shiprocket), a GST invoicing app, a WhatsApp automation tool (AiSensy or Wati), and an address validation tool to curtail RTO."
      ],
      [
        "Which is the best product review app for Shopify?",
        "Judge.me and Loox are two of the most popular review apps. Judge.me is lightweight, cost-effective, and provides fast-loading review widgets with Google rich snippet schema, while Loox excels in photo and visual social proof."
      ],
      [
        "How do I automate GST invoices on Shopify in India?",
        "Apps like GST Invoice India, QuickFill, or specialized accounting plugins generate GST-compliant tax invoices with HSN codes, state-wise CGST, SGST, IGST breakdowns, and automatic invoice download links on the customer order status page."
      ],
      [
        "Can I connect Shopify with Tally, Zoho Books, or Busy accounting?",
        "Yes. Several integration apps and middleware connectors automatically sync Shopify sales orders, customer details, tax rates, and credit notes directly into Zoho Books, Tally Prime, or Busy accounting software in real time."
      ],
      [
        "What is the best customer support app for a Shopify store?",
        "Gorgias, Zendesk, and Tidio are top customer support platforms. Gorgias integrates deeply with Shopify, letting support agents edit orders, process refunds, and view customer purchase history directly from the chat window."
      ],
      [
        "How do product bundle apps help Shopify sales?",
        "Bundle apps allow you to create \"Frequently Bought Together\", tiered volume discounts (\"Buy 2 Get 10% Off\"), or mix-and-match bundles without requiring separate inventory listings for every combination."
      ],
      [
        "Should I use a wishlist app on my Shopify store?",
        "Wishlist apps help customers save items for later, especially on fashion and home decor stores. They provide valuable intent data showing which out-of-stock items have high demand and can trigger automated restock reminder emails."
      ],
      [
        "How do I backup my Shopify store data and theme files?",
        "You can use automated cloud backup apps (such as Rewind or Matrixify) to create scheduled daily backups of your products, customer records, theme files, and collections, ensuring instant restore capability if data is accidentally deleted."
      ],
      [
        "What are the best WhatsApp automation tools for Shopify in India?",
        "AiSensy, Wati, Interakt, and BiteSpeed are popular official WhatsApp Business API tools. They send automated abandoned cart reminders, order confirmations, shipping updates, and handle customer service directly inside WhatsApp."
      ],
      [
        "What is the best search and filter app for large product catalogues?",
        "Boost AI Search & Discovery, Searchanise, and Shopify Search & Discovery provide instant search suggestions, spell-check tolerance, and fast multi-attribute collection filters."
      ],
      [
        "How do loyalty and rewards apps increase repeat purchases?",
        "Apps like Smile.io, LoyaltyLion, and Appstle let customers earn points on purchases, birthdays, and referrals that redeem for checkout discounts, dramatically increasing customer lifetime value."
      ],
      [
        "What is the best subscription app for recurring deliveries?",
        "Appstle Subscriptions, Recharge, and Seal Subscriptions allow customers to subscribe for recurring weekly or monthly deliveries (ideal for coffee, supplements, beauty, and pet food) with automated recurring billing."
      ],
      [
        "How do size chart apps prevent returns on apparel stores?",
        "Apps like Kiwi Size Chart provide responsive interactive sizing guides, unit converters (inches to cm), and size recommendation calculators on product pages, lowering size-related return rates by up to 30%."
      ],
      [
        "How do social proof popups impact store conversion?",
        "Subtle social proof notifications (e.g. \"Someone from Mumbai purchased 12 mins ago\") can build confidence for new visitors, provided they reflect genuine purchase activity and do not obstruct mobile browsing buttons."
      ],
      [
        "What is the best app for bulk product import and export on Shopify?",
        "Matrixify (Excelify) is the gold standard for bulk managing large Shopify catalogs. It handles complex product imports, variant updates, redirect migrations, and metafield batch editing effortlessly via Excel or CSV."
      ]
    ]
  },
  {
    "id": "verticals",
    "title": "Industry playbooks: Fashion, Beauty, Jewellery & Food",
    "blurb": "Category-specific conversion and store design strategies.",
    "items": [
      [
        "How should a fashion and apparel Shopify store be designed?",
        "Focus on fast visual browsing: full-bleed model photography, quick size filters, visible fabric composition details, model measurements reference, and a frictionless 7-day exchange guarantee."
      ],
      [
        "What are the key conversion elements for a jewellery and luxury store?",
        "High-resolution zoom capabilities showing metal hallmark certifications, 360-degree video previews, ring size guides, authenticity guarantees, and secure tamper-proof insured delivery trust signals."
      ],
      [
        "How do beauty and skincare brands optimize their product pages?",
        "Include complete ingredient breakdowns, dermatologist testing credentials, before-and-after photo galleries, skin type selector filters (Oily, Dry, Sensitive), and usage routine instructions."
      ],
      [
        "What is essential for food, spices and grocery Shopify stores?",
        "Prominently display FSSAI license numbers, nutritional facts tables, expiry date shelf-life disclosures, shelf-storage recommendations, and multi-pack savings options to raise average order values."
      ],
      [
        "How should footwear and shoe stores handle size uncertainty?",
        "Provide comprehensive foot measurement guides in centimeters, UK/US size charts, width advice (Regular vs Wide fit), and clear \"Free Size Exchange\" reassurances right next to the buy button."
      ],
      [
        "What works best for home decor and furniture Shopify stores?",
        "Include room visualizers, exact dimensions (Height, Width, Depth) with scale comparisons, material care guides, and customer living room photos showing the piece in real lighting."
      ],
      [
        "How do fitness, health and supplement brands build trust on Shopify?",
        "Highlight third-party lab test certificates, purity disclosures, clear dosage guidelines, athlete endorsements, and verified buyer reviews verifying results."
      ],
      [
        "How should pet supply and pet food stores structure their website?",
        "Create clear shop-by-pet navigation (Dog, Cat, Bird), age/life-stage filters (Puppy, Adult, Senior), recurring subscription auto-ship discounts, and breed-specific nutrition guides."
      ],
      [
        "What makes a high-converting electronics and accessories Shopify store?",
        "Technical specification comparison tables, device compatibility checkers (e.g. \"Compatible with iPhone 15 & 16\"), warranty registration info, and unboxing video embeds."
      ],
      [
        "How do kids, toys and baby brands overcome safety concerns on Shopify?",
        "Display non-toxic material safety certifications, age-appropriateness labels (e.g. \"Ages 3+\"), BPA-free badges, and parenting community testimonials."
      ],
      [
        "How do artisanal, handcrafted and heritage brands tell their story?",
        "Highlight artisan cluster profiles, video glimpses of traditional handloom/craft techniques, GI tag credentials, and the cultural heritage behind each unique creation."
      ],
      [
        "What is the best packaging unboxing experience for luxury D2C brands?",
        "Use rigid premium boxes with branded tissue wrapping, wax seal accents, a signed thank-you note from the founders, and an exclusive discount voucher for their second purchase."
      ],
      [
        "What is essential for an online perfume, attar and fragrance store?",
        "Fragrance stores must describe top, middle, and base fragrance notes vividly, offer discovery sample sets (e.g. 5 x 2ml vials), and explain longevity (hours on skin) to help buyers choose scents without smelling them physically."
      ],
      [
        "How do Ayurvedic, herbal and AYUSH brands build credibility on Shopify?",
        "Display AYUSH ministry manufacturing licenses, certified organic sourcing credentials, doctor-formulated badges, and transparent herbal ingredient extraction methods."
      ],
      [
        "What makes a successful gourmet coffee and artisanal tea store?",
        "Specify bean origin (single-estate vs blend), roast levels (Light, Medium, Dark), harvest dates, and provide grind-size options (Whole bean, French press, AeroPress, South Indian filter)."
      ],
      [
        "How should high-end leather goods and accessory stores present their products?",
        "Highlight genuine full-grain leather sourcing, edge-stitching craftsmanship, patina aging photos, brass hardware quality, and provide complimentary name monogramming options."
      ],
      [
        "What features are critical for online eyewear and optical stores?",
        "Virtual try-on capabilities using smartphone cameras, detailed frame measurements (lens width, bridge, temple length), face shape guides, and prescription upload options."
      ],
      [
        "How do luxury watch and horology stores establish buyer trust?",
        "Provide macro movement close-ups, sapphire crystal scratch-test videos, water resistance depth certifications, and 2-year warranty registration certificates."
      ],
      [
        "What works best for online mattress, bedding and sleep brands?",
        "Offer a \"100-Night Risk-Free Home Trial\", describe orthopedic spine support layers, explain foam densities, and provide free doorstep delivery and old mattress removal options."
      ],
      [
        "How do automotive, bike and car accessory stores structure their catalog?",
        "Implement a \"Year, Make, Model\" vehicle selector so shoppers only see accessories, mats, and parts guaranteed to fit their exact car or motorcycle."
      ],
      [
        "How should gymwear and activewear brands showcase technical apparel?",
        "Highlight 4-way stretch, sweat-wicking fabrics, squat-proof opacity guarantees, phone pocket placements, and feature fitness athletes wearing sizes across the body spectrum."
      ],
      [
        "What is essential for sustainable, vegan and eco-friendly brands on Shopify?",
        "Explain plastic-free biodegradable packaging, cruelty-free certifications, carbon-neutral shipping offsets, and the environmental footprint saved per purchase."
      ],
      [
        "How do home furnishing and curtain stores handle custom size orders?",
        "Use custom dimension input calculators on the product page where customers enter exact window height and width in inches, automatically calculating required fabric yardage and pricing."
      ],
      [
        "What is essential for high-converting online tea and coffee sample packs?",
        "Offer trial discovery boxes containing 4-5 curated sample roasts or loose-leaf blends at an accessible price point, paired with a bounce-back voucher for full-sized bags."
      ]
    ]
  },
  {
    "id": "legal",
    "title": "GST, taxes, invoicing and compliance in India",
    "blurb": "E-invoicing, legal disclosures, Consumer Protection and TCS.",
    "items": [
      [
        "What are the mandatory legal disclosures for e-commerce websites in India?",
        "Under the Consumer Protection (E-Commerce) Rules 2020, Indian stores must display their legal company name, registered business address, customer care email and phone, grievance officer details, and country of origin."
      ],
      [
        "How is GST configured for different product categories in Shopify?",
        "In Shopify Settings > Taxes, set tax rates based on your product HSN codes: 0%, 5%, 12%, 18%, or 28%. Shopify calculates CGST and SGST for intrastate orders and IGST for interstate orders automatically."
      ],
      [
        "What is Tax Collected at Source (TCS) in Indian e-commerce?",
        "TCS is 1% tax collected under GST laws by marketplace operators. For your independent Shopify D2C store, you collect and remit GST directly to the government without marketplace TCS deductions."
      ],
      [
        "What is e-invoicing and does my Shopify store need to generate IRNs?",
        "Businesses with annual turnover exceeding government thresholds must generate electronic invoices with an IRN (Invoice Reference Number) and QR code through the government portal for B2B transactions."
      ],
      [
        "What information must appear on a GST-compliant tax invoice in India?",
        "Your GSTIN, invoice serial number, date, billing address, customer GSTIN (for B2B), shipping address, HSN code, product description, taxable value, CGST/SGST/IGST rates and amounts, and total payable amount."
      ],
      [
        "How should Country of Origin be displayed on Shopify product pages?",
        "Government regulations require displaying the Country of Origin on all imported and domestically manufactured goods listed online. Add this as a standard product metafield displayed in the specifications section."
      ],
      [
        "What are the legal requirements for publishing customer reviews in India?",
        "The Bureau of Indian Standards (BIS) e-commerce review standard (IS 19000:2022) prohibits posting fake, paid, or deceptive reviews. Brands must verify that reviews originate from genuine purchasing consumers."
      ],
      [
        "How should Maximum Retail Price (MRP) be displayed on Shopify India?",
        "Under the Legal Metrology (Packaged Commodities) Rules, you must declare the MRP (inclusive of all taxes) alongside any discounted selling price, so consumers see the true regulated benchmark price."
      ],
      [
        "What should be included in a Shopify store Privacy Policy in India?",
        "Disclose what personal data is collected (name, email, phone, address), how it is processed, third-party tools utilized (payment gateways, courier partners), cookie usage, and customer data deletion request procedures."
      ],
      [
        "Who is an E-commerce Grievance Officer and are they mandatory?",
        "Yes. The Consumer Protection Rules mandate designating a Grievance Officer on your website with their name, email, phone, and address, committed to acknowledging customer complaints within 48 hours."
      ],
      [
        "What are FSSAI compliance requirements for selling food products on Shopify?",
        "All food, beverage, and supplement stores in India must display their 14-digit FSSAI license number in the website footer and on every individual product label and description page."
      ],
      [
        "What are the Legal Metrology rules for e-commerce packaging in India?",
        "E-commerce product pages must clearly display net quantity, manufacturer name and address, consumer care details, manufacturing date, and Maximum Retail Price (MRP) inclusive of all taxes."
      ],
      [
        "What is mandatory for selling imported goods on an Indian Shopify store?",
        "You must declare the Importer Name and Address, Country of Origin, and IEC (Import Export Code) on product descriptions, adhering to Indian customs and consumer transparency guidelines."
      ],
      [
        "How does the Digital Personal Data Protection (DPDP) Act 2023 impact Shopify stores?",
        "Stores must obtain clear, informed consent before collecting personal customer data, clearly state the specific purpose of data usage, and provide customers with mechanisms to withdraw consent and request data deletion."
      ],
      [
        "What clauses are essential in an Indian e-commerce Terms of Service?",
        "Clauses covering order acceptance and cancellation rights, pricing and typographical error disclaimers, intellectual property ownership, limitation of liability, and jurisdiction for dispute resolution (e.g. courts of New Delhi)."
      ],
      [
        "How should warranty and guarantee terms be stated on an e-commerce website?",
        "State exact warranty duration, whether the warranty is provided by the manufacturer or the store, coverage specifics (parts vs labor), and step-by-step claims procedures."
      ],
      [
        "Can an Indian D2C brand refuse returns under Consumer Protection laws?",
        "Brands may maintain a \"No Return / Exchange Only\" policy provided it is prominently disclosed before purchase, except in cases where products arrive damaged, defective, or materially different from description."
      ],
      [
        "How should GST Input Tax Credit (ITC) be claimed on Shopify expenses?",
        "Ensure your agency invoices, courier bills, payment gateway fee invoices, and Shopify SaaS receipts include your verified GSTIN, allowing your accountant to offset GST against your output sales liability."
      ],
      [
        "What is Consumer Grievance redressal timeline under Indian law?",
        "Under the Consumer Protection Rules, e-commerce entities must acknowledge consumer grievances within 48 hours of receipt and redress the complaint within one month from the date of receipt."
      ],
      [
        "How should expiry dates and manufacturing batch numbers be displayed?",
        "Packaged consumables must clearly disclose the manufacturing date, expiry date or \"Best Before\" timeline, and batch identification code on product description pages."
      ]
    ]
  },
  {
    "id": "marketing",
    "title": "Marketing, ads tracking, GA4 and retention",
    "blurb": "Meta ads, Google Shopping, email flows and ROAS optimization.",
    "items": [
      [
        "How do I connect Meta Pixel and Conversions API to Shopify?",
        "In Shopify’s sales channels you can connect Meta and enable data sharing, which sets up the pixel and server-side events. Verify the events in Meta’s tools and compare them with your orders to make sure tracking is accurate."
      ],
      [
        "How do I set up Google Analytics 4 on Shopify?",
        "Connect your GA4 property through Shopify’s Google channel or add the tag in your settings, then check that page views, add-to-cart and purchase events appear. Accurate tracking is the base for every decision that follows."
      ],
      [
        "What email flows should a Shopify store have?",
        "Start with a welcome series, abandoned cart, abandoned checkout, post-purchase and win-back flows. They run automatically and use your existing customers and visitors, so they often become a dependable source of repeat sales."
      ],
      [
        "Is WhatsApp marketing useful for a Shopify store?",
        "It can be, especially for order updates, abandoned carts and replies to customer questions, because many shoppers use WhatsApp daily. Get permission before messaging, keep messages useful and follow WhatsApp’s business policies."
      ],
      [
        "How do I run discounts without hurting my brand?",
        "Use discounts with a clear purpose, such as a first order, a bundle or a seasonal sale, and avoid constant sitewide offers that train customers to wait. Watch margins and returns, not just order counts."
      ],
      [
        "What is customer lifetime value and how do I raise it?",
        "Lifetime value is the total a customer spends with you over time. Raise it with good products, a smooth first order, helpful follow-ups, loyalty or subscription offers, and by making the second purchase easy."
      ],
      [
        "How do I collect more product reviews?",
        "Ask after delivery, make leaving a review quick on a phone, and send a polite reminder. Offer help, not rewards for positive wording. Reply to reviews, including critical ones, to show you care."
      ],
      [
        "Should I sell on marketplaces as well as my own store?",
        "Marketplaces bring reach but take fees and own the customer relationship. A Shopify store gives you control over brand, data and repeat sales. Many brands use both, treating the store as the home base."
      ],
      [
        "What KPIs should a Shopify store track?",
        "Conversion rate, average order value, revenue by channel, cart and checkout drop-off, repeat purchase rate and return rate. Look at them weekly and by device so you can see what changed and why."
      ],
      [
        "How should a new Shopify store plan its launch?",
        "Finish products, policies and tracking first, test the full order process including payment and shipping, prepare a few focused campaigns, and launch to a small audience before scaling spend. Fix what real customers expose."
      ],
      [
        "How do I choose a Shopify agency?",
        "Look at real stores they have built, ask how they measure results, and make sure scope, timelines, revisions and refunds are in writing. Pick a partner who explains trade-offs plainly instead of promising guaranteed sales."
      ],
      [
        "What is blended ROAS vs channel ROAS in e-commerce marketing?",
        "Channel ROAS measures revenue directly attributed by an ad platform (like Meta or Google). Blended ROAS (Total Revenue / Total Marketing Spend) reflects true business health across all channels and direct organic traffic."
      ],
      [
        "How does Google Performance Max (PMax) work for Shopify?",
        "PMax campaigns leverage Google machine learning to serve your product ads across Google Search, Shopping, YouTube, Display, Discover, and Maps from a single centralized campaign feed."
      ],
      [
        "What is the ideal email Klaviyo setup for a Shopify store?",
        "Set up an automated Welcome sequence with brand story, Abandoned Cart reminder with customer testimonials, Browse Abandonment flow, Post-Purchase care guide, and a 60-day customer Winback offer."
      ],
      [
        "How do custom landing pages improve Meta ad performance?",
        "Dedicated landing pages remove sitewide navigation menus, match the exact creative hook of the ad, and present a focused single-product offer with social proof, lowering Cost Per Acquisition (CPA) by 25-40%."
      ],
      [
        "What is Meta Advantage+ Shopping Campaigns (ASC) and how does it work?",
        "ASC uses Meta machine learning to automate audience targeting, budget distribution, and creative delivery across Facebook and Instagram, delivering lower customer acquisition costs for Shopify stores with broad product appeal."
      ],
      [
        "How does Google Shopping Free Listings benefit Shopify stores?",
        "Through the Google & YouTube channel integration, your products automatically appear in unpaid Google Shopping tabs, image searches, and organic results, driving continuous free high-intent traffic."
      ],
      [
        "What is the best retargeting strategy for abandoned cart visitors?",
        "Target abandoned cart visitors within 24-48 hours on Instagram, Facebook, and Google Display with dynamic product ads showing the exact items they left behind, paired with social proof reviews and a limited-time incentive."
      ],
      [
        "How do influencer affiliate programs drive profitable sales on Shopify?",
        "Apps like UpPromote or GoAffpro allow influencers and creators to share custom referral links or discount codes, earning automated commissions on every verified tracked order they generate."
      ],
      [
        "What is server-side tracking and why is it essential after iOS 14.5 updates?",
        "Browser ad blockers and iOS privacy settings block standard tracking cookies. Server-side tracking (Conversions API) sends purchase events directly from Shopify servers to Meta and Google, restoring 95%+ tracking accuracy."
      ],
      [
        "How do seasonal sales like Diwali and Black Friday impact marketing strategy?",
        "Prepare inventory, landing pages, and creative assets 4 weeks in advance. Warm up ad pixel audiences with lead generation campaigns before launching aggressive discount offers during peak festive shopping weeks."
      ],
      [
        "What is customer cohort analysis and why does it matter for D2C brands?",
        "Cohort analysis groups customers by the month of their first purchase to track repeat purchase behavior over 3, 6, and 12 months, revealing your store’s true retention health and customer lifetime value."
      ],
      [
        "How can customer review videos be converted into high-performing Meta ads?",
        "Top-performing UGC (User Generated Content) video ads hook viewers in the first 3 seconds with a relatable problem, demonstrate unboxing or product application, and close with a clear call-to-action to visit the store."
      ],
      [
        "How does influencer seed gifting work for D2C brands on Shopify?",
        "Create dedicated 100% off private discount codes or generate zero-value draft orders to ship curated PR gift hampers to creators, tracking inbound referral sales with unique affiliate tracking links."
      ],
      [
        "What is a customer reactivation sequence and when should it trigger?",
        "Trigger an automated WhatsApp message 45-60 days after delivery offering a specialized refill bundle or complementary product based on what the customer purchased originally."
      ]
    ]
  },
  {
    "id": "migration",
    "title": "Migration and maintenance",
    "blurb": "Moving to Shopify and keeping a store healthy.",
    "items": [
      [
        "How do I migrate from WooCommerce to Shopify?",
        "Export your products, customers and orders, import them into Shopify, rebuild or adapt the design, set up redirects from old URLs, and test everything before switching the domain. A planned move protects your sales and search visibility."
      ],
      [
        "Will I lose SEO when I move to Shopify?",
        "You should not lose it if the move is planned: keep your important content, map every old URL to a new one with a redirect, and check titles, descriptions and internal links. Short-term fluctuations can happen, so monitor closely after launch."
      ],
      [
        "Can I migrate from Wix or WordPress to Shopify?",
        "Yes. Content and products can be moved to Shopify with import tools or by a developer. Design is usually rebuilt instead of copied, which is a good chance to improve the layout and speed."
      ],
      [
        "How do I move products and customers to Shopify?",
        "Use Shopify’s import for products and customers, or a migration app for large catalogues. Clean the data first: consistent names, variants, images and prices. Test a small batch before importing everything."
      ],
      [
        "What happens to my old URLs after migration?",
        "If you do nothing, they can break and visitors will land on error pages. Create 301 redirects from each old URL to its new equivalent so people and search engines are sent to the right place."
      ],
      [
        "Do I need ongoing Shopify maintenance?",
        "Shopify handles hosting and security, but a store still benefits from regular checks: speed, broken links, app updates, theme fixes and small improvements based on data. Many brands keep a developer on call or on a small retainer."
      ],
      [
        "How do I back up my Shopify store?",
        "Shopify stores your data, but it is wise to keep your own copy of products, customers and theme files. Export your data periodically and duplicate your theme before big changes so you can roll back if something breaks."
      ],
      [
        "Who should own my Shopify store account?",
        "You should. Create the store under your own email and add your agency or developer as a staff or collaborator account. That way you keep control of your store, customers and data if you change partners."
      ],
      [
        "How do I give a developer access to my Shopify store?",
        "Invite them as a staff account with only the permissions they need, or send a collaborator request from their agency account. Avoid sharing your own password, and remove access when the work is done."
      ],
      [
        "How do I keep my Shopify store secure?",
        "Use strong, unique passwords with two-step verification, limit staff permissions, keep apps few and trusted, and remove access you no longer need. Shopify secures the platform, but account habits are your responsibility."
      ],
      [
        "How do I migrate customer passwords from WooCommerce to Shopify?",
        "Because passwords are encrypted with one-way hashes for security, passwords cannot be directly exported. After migrating customer emails, send automated account activation emails so customers can set new passwords."
      ],
      [
        "Can order history be migrated from another platform to Shopify?",
        "Yes. Historical orders can be imported using Shopify’s Matrixify app or REST API, preserving past order dates, line items, transaction totals, and customer records for historical lifetime value analysis."
      ],
      [
        "How do I audit for broken links after a Shopify store launch?",
        "Run a full crawl using tools like Screaming Frog or Ahrefs. Identify 404 error URLs and configure 301 URL redirects in Shopify Admin > Online Store > Navigation > View URL Redirects."
      ],
      [
        "What is the best time to switch domains during a migration?",
        "Execute the DNS domain switch during your lowest traffic window (typically midnight to 4 AM on a Tuesday or Wednesday). Verify checkout with live test orders before resuming paid advertising spend."
      ],
      [
        "How do I migrate blog posts and SEO rankings to Shopify?",
        "Export blog articles including publication dates, author names, and featured images. Recreate articles in Shopify Blogs and set up strict 301 redirects from old blog URLs to new Shopify blog addresses."
      ]
    ]
  },
  {
    "id": "agency",
    "title": "Hiring a Shopify agency vs freelance",
    "blurb": "Agencies, timelines, guarantees, retainers and scope.",
    "items": [
      [
        "Why should I hire a specialized Shopify agency instead of a general web agency?",
        "Specialized Shopify agencies understand e-commerce conversion, Liquid architecture, Indian checkout flows, and platform app ecosystems inside out, rather than treating your store like a generic brochure website."
      ],
      [
        "How does Scalomatrix approach Shopify store redesign?",
        "Scalomatrix audits your live user recordings, GA4 analytics, and drop-off points before designing mobile-first wireframes. Every redesign focuses on raising conversion rates and average order values rather than just superficial aesthetics."
      ],
      [
        "What is the difference between a freelance Shopify developer and an agency?",
        "Freelancers typically provide execution on specific tasks or code snippets. An agency provides end-to-end strategy, custom UI/UX design, mobile optimization, quality testing on real devices, and structured delivery milestones with written scope."
      ],
      [
        "How long does a full custom Shopify store development project take?",
        "A comprehensive custom build typically takes 3 to 5 weeks from initial design wireframes to product setup, payment integration, and final sign-off, ensuring every page is tested on real phones before public launch."
      ],
      [
        "Who owns the theme code and design assets after the project?",
        "With Scalomatrix, you retain 100% full intellectual property ownership of all custom theme code, graphics, and design assets upon project delivery and final milestone sign-off."
      ],
      [
        "How do I prepare for a Shopify store audit with Scalomatrix?",
        "Simply provide your live store URL and your primary challenges (such as ad traffic drop-off or low mobile conversion). Our team reviews your speed, user experience, and checkout friction live in a 30-minute session."
      ],
      [
        "What is included in a custom Shopify theme build by Scalomatrix?",
        "Everything required to sell: bespoke Figma-to-Liquid coding, responsive mobile optimization, speed tuning under Core Web Vitals, collection filtering, cart drawer upsells, and payment and shipping gateway integration."
      ],
      [
        "Does Scalomatrix offer post-launch support and maintenance?",
        "Yes. We offer structured warranty periods after launch to resolve any bugs, along with monthly retainer support for brands scaling their ad spend and launching continuous CRO experiments."
      ],
      [
        "How does Scalomatrix ensure mobile speed remains fast after adding apps?",
        "We hand-code sections natively in Liquid and clean CSS, avoiding redundant apps wherever native code can deliver the feature. We defer non-essential scripts so initial paint stays blazing fast."
      ],
      [
        "What is the refund policy for Shopify projects with Scalomatrix?",
        "We operate on transparent milestone-based deliverables agreed in writing before kickoff. You review and sign off on designs and staging links at every stage with clear contract terms."
      ],
      [
        "Can Scalomatrix help migrate our store from WooCommerce or Magento to Shopify?",
        "Yes. We manage full end-to-end catalog, customer, and order data migration, preserve your historical SEO link juice with comprehensive 301 redirect mapping, and rebuild an upgraded modern storefront."
      ],
      [
        "How do we get started with Scalomatrix?",
        "Reach out through our website contact form or WhatsApp button to book your free 30-minute store audit. We review your current site and provide a transparent, fixed-scope proposal tailored to your goals."
      ],
      [
        "How does Scalomatrix pricing compare to other Shopify agencies in India?",
        "Scalomatrix offers transparent, fixed milestone-based pricing starting from ₹44,999 for redesigns and ₹64,999 for store creation, with zero hidden maintenance fees or unpredictable hourly billing."
      ],
      [
        "Does Scalomatrix sign Non-Disclosure Agreements (NDAs) before project kickoff?",
        "Yes. We strictly protect client confidentiality, proprietary product designs, supplier details, and brand marketing strategies with signed mutual Non-Disclosure Agreements."
      ],
      [
        "How does Scalomatrix guarantee mobile speed on custom theme builds?",
        "We hand-code sections with semantic HTML5, modern Tailwind CSS, and pure JavaScript, eliminating reliance on heavy pre-packaged theme frameworks and achieving top Core Web Vitals performance."
      ],
      [
        "What is the design revision process when working with Scalomatrix?",
        "We conduct structured feedback rounds at both Figma wireframe and live staging preview stages, ensuring every page layout, font, and button is refined to your exact satisfaction before public launch."
      ],
      [
        "Can Scalomatrix build custom product bundle and subscription flows?",
        "Yes. Our development team builds custom Liquid bundle builders, tiered discount bars, and integrates recurring subscription engines natively into your custom theme."
      ],
      [
        "What happens after a Shopify store is launched by Scalomatrix?",
        "We provide a dedicated post-launch warranty window covering bug fixes and technical adjustments, along with full training videos empowering your in-house team to manage products, banners, and orders easily."
      ],
      [
        "Does Scalomatrix assist with payment gateway and courier onboarding?",
        "Yes. We guide you through document preparation and technical API key integration for Razorpay, Cashfree, Shiprocket, and WhatsApp automation tools to ensure your store takes orders on day one."
      ],
      [
        "How do we schedule a free 30-minute Shopify store audit with Scalomatrix?",
        "Submit your live store link via our website audit form or contact us directly on WhatsApp. We inspect your mobile user flow, checkout drop-offs, and speed metrics live during a 1-on-1 strategy session."
      ],
      [
        "Can Scalomatrix help audit our current Shopify store before we decide to redesign?",
        "Yes. We offer a completely free, no-obligation 30-minute live screen-share audit inspecting your mobile speed, conversion bottlenecks, and checkout leaks with actionable takeaways."
      ],
      [
        "What is the best way to contact Scalomatrix for a project consultation?",
        "Use our website contact form or message us directly on WhatsApp via our site button. Our team responds within 2 business hours with straightforward advice and transparent pricing."
      ]
    ]
  },
  {
    "id": "retention",
    "title": "Customer retention, loyalty and repeat sales",
    "blurb": "Turn one-time buyers into lifetime loyal customers.",
    "items": [
      [
        "What is a good repeat customer rate for a Shopify D2C brand?",
        "A healthy repeat purchase rate for apparel, skincare, and consumables ranges between 20% to 35%. Stores with higher repeat rates spend significantly less on Meta ads because existing customers generate predictable baseline cash flow."
      ],
      [
        "How do loyalty points programs incentivize second and third orders?",
        "Points programs reward shoppers for actions beyond spending (like leaving a photo review, following on Instagram, or celebrating a birthday), creating an emotional sunk cost that brings them back to redeem discounts."
      ],
      [
        "What is the best timing for a post-purchase review request email?",
        "Send review requests after the customer has physically experienced the product: 5 to 7 days after delivery for fashion, and 14 to 21 days for skincare or supplements where results take time to observe."
      ],
      [
        "How do automated replenishment reminders work for consumables?",
        "For coffee, vitamins, or personal care products, calculate average usage duration (e.g. 30 days) and send an automated WhatsApp reminder on Day 25: \"Running low? Tap to reorder with 1 click.\""
      ],
      [
        "How do VIP customer tiers build brand advocacy?",
        "Creating exclusive tiers (Silver, Gold, Platinum) with perks like early access to festive sales, free express shipping, or dedicated WhatsApp support makes your top 5% of buyers feel valued and celebrated."
      ],
      [
        "What is the difference between a refund and a store credit for exchanges?",
        "Offering an extra 10% bonus when customers choose store credit instead of a bank refund (e.g. \"Get ₹1,100 store gift card or ₹1,000 bank refund\") retains revenue within your business ecosystem."
      ],
      [
        "How do personalized handwritten notes impact customer unboxing?",
        "Including a printed or handwritten founder note expressing genuine gratitude turns a commercial transaction into a human connection, inspiring unsolicited social media shares and unboxing stories."
      ],
      [
        "How do winback email campaigns reactivate churned customers?",
        "Identify customers who have not placed an order in 90 days and send a targeted winback email: \"We miss you! Here is ₹300 off your next order valid for 72 hours.\""
      ],
      [
        "Why should stores offer free surprise samples with high-ticket orders?",
        "Tucking a sample of an upcoming product line into outgoing parcels introduces existing buyers to new categories with zero customer acquisition ad cost."
      ],
      [
        "How does customer tier segmentation improve marketing profitability?",
        "Segment your customer base by recency, frequency, and monetary value (RFM). Target VIPs with exclusive previews and send re-engagement offers to one-time buyers without discounting across the board."
      ]
    ]
  },
  {
    "id": "international",
    "title": "Cross-border selling and global exports from India",
    "blurb": "Selling to NRI and global markets in the US, UK and UAE.",
    "items": [
      [
        "How does Shopify Markets help Indian brands sell internationally?",
        "Shopify Markets allows you to manage international domains, local currencies (USD, EUR, GBP, AED), market-specific pricing, and duty collection from a single centralized Shopify admin."
      ],
      [
        "What documents are required to export goods from India via Shopify?",
        "You need an Import Export Code (IEC) issued by the DGFT, an Authorized Dealer (AD) code registered with customs, GST LUT (Letter of Undertaking) for zero-rated exports, and KYC with international couriers."
      ],
      [
        "How do Indian stores handle international shipping rates?",
        "Set up flat-rate or weight-tiered international shipping using global couriers like DHL Express, FedEx, Aramex, or India Post EMS, displaying estimated delivery times (3 to 7 business days) clearly at checkout."
      ],
      [
        "What is Delivered Duty Paid (DDP) vs Delivered Duty Unpaid (DDU)?",
        "DDP means import taxes and customs duties are calculated and paid by the customer during checkout, ensuring zero surprise customs fees upon arrival. DDU requires the customer to pay customs fees to the courier at delivery."
      ],
      [
        "How do payment payouts work for cross-border orders on Shopify India?",
        "International card payments processed via Razorpay International, Stripe, or PayPal are settled into your Indian current bank account in INR with an automated Electronic Foreign Inward Remittance Statement (e-FIRS)."
      ],
      [
        "Can I set higher prices for international buyers on Shopify?",
        "Yes. Using Shopify Markets, you can set fixed international prices or percentage markups (e.g. +30% to account for higher international shipping, marketing, and cross-border payment gateway fees)."
      ],
      [
        "Which Indian categories have the highest global demand among NRIs?",
        "Ethnic Indian wear, ayurvedic beauty, organic spices, artisanal silver jewellery, puja accessories, and specialized wellness products have massive loyal demand across the US, UK, UAE, Canada, and Australia."
      ],
      [
        "How do I handle international returns cost-effectively?",
        "Given the high cost of international return freight, many brands adopt a \"Keep the item and receive an exchange or partial store credit\" policy, or partner with local returns consolidation hubs abroad."
      ],
      [
        "What is a Letter of Undertaking (LUT) under GST for exports?",
        "Filing an annual LUT on the GST portal allows Indian merchants to export goods without paying IGST upfront, preserving business working capital."
      ],
      [
        "How does localized currency display build trust with global shoppers?",
        "Showing prices in the shopper’s domestic currency (e.g. $49 USD instead of ₹4,000 INR) eliminates mental math, reduces purchase friction, and significantly increases international conversion rates."
      ]
    ]
  }
];

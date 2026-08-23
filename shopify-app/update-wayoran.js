const fs = require('fs');
let content = fs.readFileSync('src/components/CaseStudiesGrid.jsx', 'utf8');

// Replace Wayora Natural badge in CaseStudiesGrid.jsx
content = content.replace(
  `<svg width="20" height="24" viewBox="0 0 24 24" fill="none" stroke="#d97757" strokeWidth="2.5">
            <path d="M6 4h8a4 4 0 010 8H6V4z" />
            <path d="M6 12h9a4 4 0 010 8H6v-8z" />
          </svg>
          <span className="font-semibold text-lg tracking-tight">Wayora Natural</span>`,
  `<img src="/logo/WayoraN.png" alt="Wayora Natural" className="h-8 object-contain" />`
);
fs.writeFileSync('src/components/CaseStudiesGrid.jsx', content);

// Replace Wayora Natural logo in HappyClients.jsx
let happyContent = fs.readFileSync('src/components/HappyClients.jsx', 'utf8');
// The second Wayora in HappyClients is Wayora Natural
// We can use a regex to replace the specific Wayora image just for Wayora Natural.
happyContent = happyContent.replace(
  `logo: (
        <img src="/logo/Wayora.png" alt="Wayora" className="h-12 object-contain" />
      ),
      text: "Working with them was a game-changer. The new design directly improved our conversion rates.",
      author: "Ashrit",
      title: "Founder, Wayora Natural",
      avatarColor: "bg-green-200",
      avatar: "/logo/Wayora.png"`,
  `logo: (
        <img src="/logo/WayoraN.png" alt="Wayora Natural" className="h-12 object-contain" />
      ),
      text: "Working with them was a game-changer. The new design directly improved our conversion rates.",
      author: "Ashrit",
      title: "Founder, Wayora Natural",
      avatarColor: "bg-green-200",
      avatar: "/logo/Wayora.png"` // Keep avatar same or change to WayoraN? I'll keep it Wayora or WayoraN. Let's change avatar to WayoraN too.
);
happyContent = happyContent.replace(
  `avatar: "/logo/Wayora.png"`, // the first occurrence after the above replacement will be... wait, better replace it exactly.
  `avatar: "/logo/Wayora.png"`
); // Let's just write the exact string again.
fs.writeFileSync('src/components/HappyClients.jsx', happyContent);

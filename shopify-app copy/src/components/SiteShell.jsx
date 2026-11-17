import Navbar from './Navbar';
import Contact from './Contact';

// Page shell for the standalone SEO pages: the same navbar, ruled side margins, corner tab and
// landing-page footer that /answers uses. `tab` is the orange label in the top-left corner.
export default function SiteShell({ tab, children }) {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-ink font-sans overflow-x-clip">
      <Navbar />
      <main className="page-frame main-curve relative z-20 bg-cream pt-[66px]">
        <section className="relative">
          <span className="eyebrow">{tab}</span>
          <div className="container-x pt-12 md:pt-16 pb-16 md:pb-24">{children}</div>
        </section>
      </main>
      <Contact reveal={true} />
    </div>
  );
}

import Navigation from "./Navigation";
import Footer from "./Footer";

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageLayout({
  children,
  className = "",
}: PageLayoutProps) {
  return (
    <div className="max-w-2xl lg:max-w-xl mx-auto">
      <header className="pt-8 md:pt-16 pb-16 px-4 md:px-0">
        <Navigation />
      </header>

      <main className="px-4 md:px-0">
        <div className={className}>{children}</div>
      </main>

      <Footer />
    </div>
  );
}

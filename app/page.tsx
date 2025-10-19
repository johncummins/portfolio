import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Articles from "./components/Articles";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Projects />
      <Articles />
      <Footer />
    </main>
  );
}

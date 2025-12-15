import { HeroAnimation } from "./components/HeroAnimation";

export default function App() {
  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black overflow-hidden">
      {/* 
         App is strictly the Hero Animation Sequence.
         Navbar has been removed from App.tsx as requested to ensure it doesn't conflict 
         with the custom "النسخة" header in the animation.
      */}
      <HeroAnimation />
    </main>
  );
}

import Hero from "@/components/Hero";
import InfoCards from "@/components/InfoCards";

export default function Home() {
  return (
    <main className="mx-auto xl:w-10/12">
      <Hero />
      <InfoCards />
    </main>
  );
}

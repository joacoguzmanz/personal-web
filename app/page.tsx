import HeroSection from "@/components/HeroSection";
import InfoHomeSection from "@/components/InfoHomeSection";

const Home = async () => {
  return (
    <main className={'jg-container'}>
        <HeroSection />
        <InfoHomeSection />
    </main>
  )
}

export default Home;
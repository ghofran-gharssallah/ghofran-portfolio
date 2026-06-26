import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

const Hero = () => {
  return (
<section
  id="hero"
  className="
  relative
  overflow-hidden
  pt-24
  min-h-screen
  flex
  items-center
  justify-center
"
>
  <HeroVisual />

  <div className="relative z-20">
    <HeroContent />
  </div>
</section>
  );
};

export default Hero;
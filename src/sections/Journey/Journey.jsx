import JourneyCard from "./JourneyCard";
import { journey } from "../../data/journeyData";

const Journey = () => {
  return (
    <section
      id="journey"
      className="relative py-32"
    >
        <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-indigo-600/10 blur-[160px]" />

<div className="absolute right-0 bottom-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[160px]" />
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-20 text-center">

          <span className="text-indigo-400 font-semibold">
            MY JOURNEY
          </span>

          <h2 className="mt-4 text-5xl font-black">
            From Curiosity to Professional Development
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-zinc-400">
            My path in software development, from learning the
            fundamentals to building modern web applications
            and exploring Artificial Intelligence.
          </p>

        </div>

        <div className="relative mx-auto max-w-5xl">

  {/* Vertical Line */}

  <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-indigo-500 via-cyan-500 to-transparent md:block" />

  <div className="space-y-16">

         {journey.map((item, index) => (
  <div
    key={item.year}
    className={`relative flex items-center ${
      index % 2 === 0 ? "md:justify-start" : "md:justify-end"
    }`}
  >
    {/* Circle */}

    <div
      className="
      absolute
      left-1/2
      hidden
      h-5
      w-5
      -translate-x-1/2
      rounded-full
      border-4
      border-[#050816]
      bg-indigo-500
      shadow-[0_0_20px_rgba(99,102,241,.7)]
      md:block
      "
    />

    <div className="w-full md:w-[45%]">
      <JourneyCard
        item={item}
        index={index}
      />
    </div>
  </div>
))}

        </div>
   </div> 
      </div>
    </section>
  );
};

export default Journey;
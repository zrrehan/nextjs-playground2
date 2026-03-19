import BannerButton from "./BannerButton";
import BannerImg from "./BannerImg";

export default function Banner() {
  return (
    <section className="relative h-125 px-16 overflow-hidden  flex justify-center w-fit mx-auto">

      {/* Left — Text Content */}
      <div className="flex flex-col gap-6 max-w-lg z-10">
        <p className=" text-sm uppercase tracking-widest">
          Drive the Future
        </p>
        <h1 className=" text-5xl font-bold leading-tight">
          Find Your <br />
          Perfect Car.
        </h1>
        <p className=" text-base leading-relaxed">
          Browse thousands of cars. New, used, or certified — all in one place.
        </p>

        {/* Button */}
        <div className="mt-2">
          <BannerButton></BannerButton>
        </div>
      </div>

      {/* Right — Image */}
      <div className=" right-0 top-0 h-full w-[55%]">
        <BannerImg></BannerImg>
      </div>

    </section>
  );
}
import {Element, Link} from "react-scroll";
import Button from "../components/Button";

export default function Hero() {
  return (
    <section className="relative pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32 pt-60">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="uppercase caption small-2 text-p3">
              Video Editor
            </div>
            <h1 className="mb-6 uppercase h1 text-p4 max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              Amazingly Simple
            </h1>
            <p className="max-w-448 mb-14 body-1 max-md:mb-10">
              We designed XORA AI Video Editor to be an easy to use, quick to
              learn, and surprisingly powerful.
            </p>
            <Link to="features" offset={-100} spy smooth>
              <Button icon="/images/zap.svg">Try it now</Button>
            </Link>
          </div>
          <div className="absolute -top-32 hero-img_res w-[1230px] left-[calc(50%-340px)] pointer-events-none">
            <img
              src="images/hero.png"
              className="size-1230 max-lg:h-auto"
              alt="Hero Image"
            />
          </div>
        </div>
      </Element>
    </section>
  );
}

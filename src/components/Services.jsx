import { services } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from '../assets/svg/Arrow';
import { GradientLight } from "./design/Benefits";
import ClipPath from '../assets/svg/ClipPath';
import Button from './Button'; // Import the Button component

const Services = () => {
  return (
    <Section id="services" crosses>
      <div className="container relative z-2">
        <Heading 
          className="md:max-w-md lg:max-w-2xl text-center mx-auto" 
          title="What I do?" 
        />

        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {services.map((item) => (
            <div 
              className="block relative p-0.5 bg-no-repeat bg-cover w-full sm:w-[48%] lg:w-[30%] xl:w-[24%] min-h-[24rem] max-w-xs flex-grow"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`, 
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col h-full p-6">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto pointer-events-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <a
                    href={item.exploreMoreUrl}
                    className="ml-auto font-code text-xs font-bold uppercase tracking-wider"
                    white
                  >
                    Explore more
                  </a>
                  <Arrow />
                </div>
              </div>

              {item.light && <GradientLight />}      

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              />
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Services;

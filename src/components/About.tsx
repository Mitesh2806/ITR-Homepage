import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt="Pilot"
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Our AI-Powered ITR Platform
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                Experience seamless Income Tax Return filing and enquiries with our AI-driven platform.
                Leveraging precise calculations and advanced automation, we simplify the complexities
                of tax filing and deliver personalized, real-time insights. Whether you’re a first-time filer
                or managing complex returns, our solution guides you every step of the way.
              </p>
            </div>
            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Accurate Calculations",
    description:
      "Leverage our advanced algorithms for precise tax computations, ensuring you maximize your refund every time.",
  },
  {
    icon: <MapIcon />,
    title: "Guided Filing",
    description:
      "Follow our step-by-step process designed to simplify your Income Tax Return filing and eliminate confusion.",
  },
  {
    icon: <PlaneIcon />,
    title: "Fast Processing",
    description:
      "Experience swift and secure processing that minimizes wait times while keeping your data safe.",
  },
  {
    icon: <GiftIcon />,
    title: "Maximized Benefits",
    description:
      "Uncover all eligible deductions and credits with our intelligent system, optimizing your returns effortlessly.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        How Our{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          ITR Filing
        </span>{" "}
        Works
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Our AI-powered platform simplifies tax filing with precise calculations and a user-friendly process.
        Follow these steps to file your Income Tax Return effortlessly.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

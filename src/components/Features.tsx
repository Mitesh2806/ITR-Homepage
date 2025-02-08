import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/growth.png";
import image3 from "../assets/reflecting.png";
import image4 from "../assets/looking-ahead.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Automated Calculations",
    description:
      "Leverage our AI-powered engine for precise tax computations, ensuring you never miss out on eligible deductions.",
    image: image4,
  },
  {
    title: "User-Friendly Filing Interface",
    description:
      "Our intuitive, step-by-step process makes filing your ITR quick, simple, and stress-free.",
    image: image3,
  },
  {
    title: "Instant Tax Support",
    description:
      "Get real-time assistance and personalized advice to resolve your tax queries and maximize your refunds.",
    image: image,
  },
];

const featureList: string[] = [
  "AI Calculations",
  "Secure Data",
  "Expert Guidance",
  "Real-Time Updates",
  "Maximized Deductions",
  "Easy Filing",
  "Quick Refunds",
  "24/7 Support",
  "Personalized Reports",
];

export const Features = () => {
  return (
    <section id="features" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Powerful{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Features
        </span>{" "}
        for Effortless ITR Filing
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge variant="secondary" className="text-sm">
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
            <CardFooter>
              <img
                src={image}
                alt="Feature image"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

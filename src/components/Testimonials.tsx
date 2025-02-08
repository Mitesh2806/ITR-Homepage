import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "Rahul Sharma",
    userName: "@rahul_sharma",
    comment:
      "Filing my income tax return has never been easier. The AI-powered guidance made the process quick and error-free!",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Anjali Patel",
    userName: "@anjali_patel",
    comment:
      "I was amazed at how simple and stress-free tax filing became. The platform's smart suggestions saved me time and money.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Vikram Singh",
    userName: "@vikram_singh",
    comment:
      "The intuitive interface and AI assistance ensured I got the maximum refund possible. Highly recommended!",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Sonal Gupta",
    userName: "@sonal_gupta",
    comment:
      "Thanks to this service, my tax return was filed accurately without any hassle. It’s truly a game-changer for busy professionals.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Amitabh Verma",
    userName: "@amitabh_verma",
    comment:
      "The entire process was seamless—from document upload to final submission. The AI insights ensured every deduction was captured.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Priya Desai",
    userName: "@priya_desai",
    comment:
      "Simple, reliable, and efficient. This income tax filing website is now my go-to solution for all my tax needs.",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        Discover Why
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Thousands Trust Our Tax Filing Service{" "}
        </span>
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Our AI-powered platform makes income tax return filing effortless and secure.
        Read on to learn how we help Indian taxpayers save time and maximize refunds.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2 lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt={name}
                    src={image}
                  />
                  <AvatarFallback>{name.split(" ")[0].substring(0,2)}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};

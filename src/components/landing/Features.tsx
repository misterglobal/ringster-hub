import { Bot, Brain, Zap, Clock } from "lucide-react";

const features = [
  {
    name: "24/7 Operation",
    description: "AI agents that never sleep, ensuring continuous business operations.",
    icon: Clock,
  },
  {
    name: "Smart Automation",
    description: "Intelligent decision-making capabilities powered by advanced AI.",
    icon: Brain,
  },
  {
    name: "Instant Deployment",
    description: "Set up and deploy AI agents in minutes, not days.",
    icon: Zap,
  },
  {
    name: "Custom Behaviors",
    description: "Train agents to match your specific business needs and workflows.",
    icon: Bot,
  },
];

export const Features = () => {
  return (
    <div className="py-24 bg-white sm:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center animate-fade-up">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Powerful Features
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to automate your business
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col items-start animate-fade-up">
                <div className="rounded-lg bg-primary/10 p-2 ring-1 ring-primary/20">
                  <feature.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <dt className="mt-4 font-semibold text-gray-900">{feature.name}</dt>
                <dd className="mt-2 leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$9",
      period: "/month",
      description: "Perfect for individual investors starting their journey",
      features: [
        "Track up to 3 portfolios",
        "Basic risk analysis",
        "Real-time price tracking",
        "Mobile app access",
        "Email support"
      ],
      buttonText: "Start Free Trial",
      variant: "outline" as const,
      popular: false
    },
    {
      name: "Professional",
      price: "$29",
      period: "/month",
      description: "Advanced features for serious investors and advisors",
      features: [
        "Unlimited portfolios",
        "Advanced risk analysis (VaR, Sharpe)",
        "AI-powered insights",
        "Custom alerts & notifications",
        "API access",
        "Priority support",
        "Advanced charting"
      ],
      buttonText: "Get Professional",
      variant: "default" as const,
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      description: "Complete solution for investment firms and institutions",
      features: [
        "Everything in Professional",
        "White-label solution",
        "Multi-user accounts",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 phone support",
        "SLA guarantee",
        "Custom reporting"
      ],
      buttonText: "Contact Sales",
      variant: "outline" as const,
      popular: false
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Choose Your
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Investment Plan</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start with our free trial, then upgrade to unlock advanced AI features 
            and professional portfolio management tools.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 ${
                plan.popular 
                  ? 'ring-2 ring-primary/30 shadow-glow/30 scale-105' 
                  : 'hover:shadow-glow/20'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-primary text-primary-foreground px-4 py-1 text-sm font-medium">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold mb-2">{plan.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <CardDescription className="text-base">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.variant}
                  size="lg" 
                  className={`w-full ${
                    plan.variant === 'default' 
                      ? 'bg-gradient-primary hover:bg-gradient-primary/90 shadow-glow/20' 
                      : 'border-primary/30 hover:bg-primary/10'
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
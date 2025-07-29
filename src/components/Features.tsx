import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  TrendingUp, 
  Shield, 
  Bot, 
  Zap, 
  PieChart, 
  Bell,
  BarChart3,
  Brain,
  Globe
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Real-Time Tracking",
      description: "Monitor stocks, crypto, and forex with live price updates and portfolio performance metrics.",
      color: "text-primary"
    },
    {
      icon: Shield,
      title: "Risk Analysis",
      description: "Advanced VaR calculations, Sharpe ratio analysis, and portfolio stress testing.",
      color: "text-accent"
    },
    {
      icon: Bot,
      title: "AI Assistant",
      description: "GPT-4 powered chatbot answers portfolio questions and provides investment insights.",
      color: "text-warning"
    },
    {
      icon: PieChart,
      title: "Portfolio Analytics",
      description: "Comprehensive asset allocation analysis with interactive charts and performance metrics.",
      color: "text-primary"
    },
    {
      icon: Zap,
      title: "Smart Alerts",
      description: "Intelligent notifications for price movements, risk thresholds, and rebalancing opportunities.",
      color: "text-accent"
    },
    {
      icon: Brain,
      title: "ML Predictions",
      description: "Machine learning models predict market trends and optimize portfolio allocation.",
      color: "text-warning"
    },
    {
      icon: BarChart3,
      title: "Performance Reports",
      description: "Detailed analytics on returns, volatility, and benchmark comparisons.",
      color: "text-primary"
    },
    {
      icon: Globe,
      title: "Multi-Asset Support",
      description: "Trade and track stocks, cryptocurrencies, forex, and commodities in one platform.",
      color: "text-accent"
    },
    {
      icon: Bell,
      title: "Custom Alerts",
      description: "Set personalized alerts for price targets, portfolio rebalancing, and risk warnings.",
      color: "text-warning"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need for
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Smart Investing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional-grade portfolio management tools powered by artificial intelligence 
            and advanced financial analytics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow/20 group"
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-secondary/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
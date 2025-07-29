import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, Bot } from "lucide-react";
import heroImage from "@/assets/hero-dashboard.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background with animated glow */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20">
                <Bot className="w-4 h-4" />
                AI-Powered Portfolio Analytics
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Smart Portfolio
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Tracking</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Track stocks, crypto, and forex with AI-driven risk analysis. Get real-time insights, 
                portfolio optimization, and personalized investment recommendations.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-primary hover:bg-gradient-primary/90 text-primary-foreground shadow-glow group">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10">
                View Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">$2.4B+</div>
                <div className="text-sm text-muted-foreground">Assets Tracked</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">95%</div>
                <div className="text-sm text-muted-foreground">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-warning">10K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img 
                src={heroImage} 
                alt="Portfolio Dashboard" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>

            {/* Floating cards */}
            <div className="absolute -top-4 -left-4 bg-card p-4 rounded-xl shadow-card border border-border animate-float">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-profit" />
                <div>
                  <div className="text-sm font-medium">Portfolio Value</div>
                  <div className="text-lg font-bold text-profit">+12.5%</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-card p-4 rounded-xl shadow-card border border-border animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-sm font-medium">Risk Score</div>
                  <div className="text-lg font-bold text-primary">Low</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
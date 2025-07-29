import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  PieChart, 
  AlertCircle,
  Bot,
  Zap,
  RefreshCw
} from "lucide-react";

const Dashboard = () => {
  const portfolioData = {
    totalValue: 485750,
    dayChange: 12450,
    dayChangePercent: 2.63,
    assets: [
      { symbol: "AAPL", name: "Apple Inc.", value: 145230, change: 3.2, allocation: 30 },
      { symbol: "BTC", name: "Bitcoin", value: 98450, change: -1.8, allocation: 20 },
      { symbol: "TSLA", name: "Tesla Inc.", value: 87650, change: 5.4, allocation: 18 },
      { symbol: "EUR/USD", name: "Euro/Dollar", value: 65420, change: 0.8, allocation: 13 },
      { symbol: "NVDA", name: "NVIDIA Corp.", value: 88000, change: 7.1, allocation: 19 }
    ],
    riskMetrics: {
      var: 2.3,
      sharpe: 1.45,
      beta: 0.89,
      volatility: 18.2
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Your Portfolio
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Dashboard</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-time portfolio tracking with AI-powered insights and risk analysis
          </p>
        </div>

        {/* Portfolio Overview */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          <Card className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Portfolio Value</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">
                ${portfolioData.totalValue.toLocaleString()}
              </div>
              <div className="flex items-center gap-2 mt-2">
                <TrendingUp className="h-4 w-4 text-profit" />
                <span className="text-profit font-medium">
                  +${portfolioData.dayChange.toLocaleString()} (+{portfolioData.dayChangePercent}%)
                </span>
                <span className="text-muted-foreground text-sm">today</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Risk Score</CardTitle>
              <AlertCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-accent">Moderate</div>
              <div className="flex items-center gap-2 mt-2">
                <Badge variant="secondary" className="bg-accent/20 text-accent">
                  VaR: {portfolioData.riskMetrics.var}%
                </Badge>
                <Badge variant="secondary" className="bg-primary/20 text-primary">
                  Sharpe: {portfolioData.riskMetrics.sharpe}
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">AI Insights</CardTitle>
              <Bot className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-lg font-medium mb-2">Rebalance Recommended</div>
              <p className="text-sm text-muted-foreground">
                Consider reducing tech exposure by 5% to optimize risk-adjusted returns.
              </p>
              <Button size="sm" variant="outline" className="mt-3 border-primary/30">
                <Zap className="w-4 h-4 mr-2" />
                View Details
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Asset Allocation */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="w-5 h-5" />
                Asset Allocation
              </CardTitle>
              <CardDescription>
                Your portfolio breakdown by asset
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {portfolioData.assets.map((asset, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                        <span className="text-sm font-bold">{asset.symbol.slice(0, 2)}</span>
                      </div>
                      <div>
                        <div className="font-medium">{asset.symbol}</div>
                        <div className="text-sm text-muted-foreground">{asset.name}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">${asset.value.toLocaleString()}</div>
                      <div className={`text-sm flex items-center gap-1 ${
                        asset.change >= 0 ? 'text-profit' : 'text-loss'
                      }`}>
                        {asset.change >= 0 ? (
                          <TrendingUp className="w-3 h-3" />
                        ) : (
                          <TrendingDown className="w-3 h-3" />
                        )}
                        {asset.change >= 0 ? '+' : ''}{asset.change}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                Risk Metrics
              </CardTitle>
              <CardDescription>
                Advanced portfolio risk analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">Value at Risk (95%)</div>
                  <div className="text-2xl font-bold text-loss">
                    {portfolioData.riskMetrics.var}%
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">Sharpe Ratio</div>
                  <div className="text-2xl font-bold text-accent">
                    {portfolioData.riskMetrics.sharpe}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">Beta</div>
                  <div className="text-2xl font-bold text-primary">
                    {portfolioData.riskMetrics.beta}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">Volatility</div>
                  <div className="text-2xl font-bold text-warning">
                    {portfolioData.riskMetrics.volatility}%
                  </div>
                </div>
              </div>
              <Button className="w-full mt-6 bg-gradient-primary hover:bg-gradient-primary/90">
                <RefreshCw className="w-4 h-4 mr-2" />
                Update Analysis
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
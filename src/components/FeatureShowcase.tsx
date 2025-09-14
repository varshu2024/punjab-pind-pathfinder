import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Smartphone, 
  Wifi, 
  Users, 
  MapPin, 
  Clock, 
  BarChart3, 
  Shield, 
  Languages,
  Battery,
  RefreshCw
} from "lucide-react";
import heroImage from "@/assets/hero-bus.jpg";

const FeatureShowcase = () => {
  const keyFeatures = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Low-Bandwidth Optimized",
      description: "Works perfectly on 2G/3G networks. Progressive Web App loads fast with minimal data usage.",
      badge: "Essential"
    },
    {
      icon: <Languages className="w-6 h-6" />,
      title: "Multi-Language Support", 
      description: "Available in Punjabi, Hindi, and English with voice assistance for accessibility.",
      badge: "Inclusive"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Real-Time GPS Tracking",
      description: "Live bus locations with accurate ETAs. Covers 1,020+ stops across 25 Punjab cities.",
      badge: "Live"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Crowd Level Indicators",
      description: "See bus occupancy levels to avoid overcrowding and plan better journeys.",
      badge: "Smart"
    },
    {
      icon: <Battery className="w-6 h-6" />,
      title: "Offline Mode Support",
      description: "Cached schedules and SMS backup ensure service even without internet connection.",
      badge: "Reliable"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Government Integration",
      description: "Seamlessly integrates with existing PUNBUS and PRTC systems for unified tracking.",
      badge: "Official"
    }
  ];

  const stats = [
    { number: "2,700+", label: "Government Buses", subtext: "PUNBUS + PRTC Fleet" },
    { number: "1,020+", label: "Bus Stops", subtext: "Across Punjab Districts" },
    { number: "25+", label: "Cities Covered", subtext: "Small Cities & Tier-2 Towns" },
    { number: "60%", label: "Delay Reduction", subtext: "Expected Improvement" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-gradient-primary text-white border-0 text-sm px-4 py-2">
                  Smart India Hackathon 2025 Solution
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-hero bg-clip-text text-transparent leading-tight">
                  Real-Time Bus Tracking for Punjab
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Revolutionizing public transport in small cities with live GPS tracking, 
                  crowd indicators, and low-bandwidth optimization designed specifically 
                  for Punjab's tier-2 towns and rural areas.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-primary text-white shadow-primary hover:opacity-90 h-14 px-8" onClick={() => window.location.href = '/tracker'}>
                  Launch Prototype
                </Button>
                <Button variant="outline" size="lg" className="h-14 px-8 border-primary text-primary hover:bg-primary hover:text-white" onClick={() => document.getElementById('tech-section')?.scrollIntoView({behavior: 'smooth'})}>
                  View Demo
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-8 border-t">
                <div>
                  <div className="text-2xl font-bold text-primary">93%</div>
                  <div className="text-sm text-muted-foreground">Mobile Penetration in Punjab</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary">2G/3G</div>
                  <div className="text-sm text-muted-foreground">Network Optimized</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img 
                  src={heroImage} 
                  alt="Punjab Bus Tracker Hero - Modern bus with GPS tracking" 
                  className="rounded-2xl shadow-glow w-full h-auto"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-hero opacity-20 rounded-2xl blur-3xl scale-105"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Card className="bg-gradient-glass backdrop-blur-sm border-primary/20 shadow-primary">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary">The Challenge We're Solving</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-destructive">60%</div>
                  <div className="text-sm text-muted-foreground">
                    Commuters face delays due to lack of real-time info
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-warning">3 Apps</div>
                  <div className="text-sm text-muted-foreground">
                    Fragmented systems (PUNBUS, PRTC) with limited coverage
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-primary">25 Cities</div>
                  <div className="text-sm text-muted-foreground">
                    Small towns need unified tracking solution
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Government of Punjab's Department of Higher Education identified this as a priority: 
                  existing apps don't cover all routes, have outdated data, and poor usability in rural areas.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Solution Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Designed specifically for Punjab's small cities with focus on accessibility, 
              reliability, and low-bandwidth environments.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFeatures.map((feature, index) => (
              <Card key={index} className="shadow-card hover:shadow-primary transition-smooth group">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-smooth">
                      {feature.icon}
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Impact & Coverage</h2>
            <p className="text-muted-foreground">Real numbers from Punjab's transport infrastructure</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center shadow-card">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="font-medium mb-1">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.subtext}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Approach */}
      <section id="tech-section" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Technical Implementation</h2>
            <p className="text-muted-foreground">Low-cost, scalable solution built for Punjab's infrastructure</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <RefreshCw className="w-5 h-5 text-primary" />
                    GPS Integration Strategy
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-success mt-2"></div>
                    <div>
                      <div className="font-medium">Existing Fleet Integration</div>
                      <div className="text-sm text-muted-foreground">
                        Connect with PRTC/PUNBUS existing GPS systems
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-warning mt-2"></div>
                    <div>
                      <div className="font-medium">Low-Cost Retrofit</div>
                      <div className="text-sm text-muted-foreground">
                        $20 GPS trackers for older buses via 2G/3G
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2"></div>
                    <div>
                      <div className="font-medium">Driver App Backup</div>
                      <div className="text-sm text-muted-foreground">
                        Smartphone-based tracking for immediate deployment
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wifi className="w-5 h-5 text-primary" />
                    Network Optimization
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-success mt-2"></div>
                    <div>
                      <div className="font-medium">Progressive Web App</div>
                      <div className="text-sm text-muted-foreground">
                        Loads fast on 2G, works offline with cached data
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-warning mt-2"></div>
                    <div>
                      <div className="font-medium">SMS Fallback</div>
                      <div className="text-sm text-muted-foreground">
                        Text-based lookup when internet is unavailable
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2"></div>
                    <div>
                      <div className="font-medium">Vector Maps</div>
                      <div className="text-sm text-muted-foreground">
                        Lightweight route diagrams vs heavy satellite imagery
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl font-bold">Ready to Transform Punjab's Public Transport?</h2>
          <p className="text-xl text-white/90">
            Join us in making bus travel reliable, predictable, and accessible for everyone in Punjab's small cities.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="h-14 px-8 bg-white text-primary hover:bg-white/90"
              onClick={() => window.location.href = '/tracker'}
            >
              View Full Prototype
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="h-14 px-8 border-white text-white hover:bg-white hover:text-primary"
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            >
              Back to Top
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeatureShowcase;
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Bus, 
  Clock, 
  Navigation, 
  Search,
  Wifi,
  WifiOff,
  RefreshCw,
  Phone
} from "lucide-react";

interface BusData {
  id: string;
  route: string;
  destination: string;
  eta: string;
  status: "live" | "delayed" | "offline";
  currentStop: string;
  nextStop: string;
  crowdLevel: "low" | "medium" | "high";
}

const BusTracker = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOnline, setIsOnline] = useState(true);
  const [selectedRoute, setSelectedRoute] = useState<string | null>(null);
  const [buses, setBuses] = useState<BusData[]>([
    {
      id: "PB-01-123",
      route: "Ludhiana - Patiala",
      destination: "Patiala Bus Stand",
      eta: "8 min",
      status: "live",
      currentStop: "Civil Hospital",
      nextStop: "Railway Station",
      crowdLevel: "medium"
    },
    {
      id: "PB-02-456", 
      route: "Amritsar - Jalandhar",
      destination: "Jalandhar Cantonment",
      eta: "15 min",
      status: "live",
      currentStop: "Golden Temple",
      nextStop: "Hall Bazaar",
      crowdLevel: "high"
    },
    {
      id: "PB-03-789",
      route: "Bathinda - Mansa",
      destination: "Mansa Bus Stand", 
      eta: "Delayed",
      status: "delayed",
      currentStop: "Bathinda Junction",
      nextStop: "Budhlada",
      crowdLevel: "low"
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "live": return "bg-success text-success-foreground";
      case "delayed": return "bg-warning text-warning-foreground";
      case "offline": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getCrowdColor = (level: string) => {
    switch (level) {
      case "low": return "text-success";
      case "medium": return "text-warning";
      case "high": return "text-destructive";
      default: return "text-muted-foreground";
    }
  };

  const filteredBuses = buses.filter(bus =>
    bus.route.toLowerCase().includes(searchQuery.toLowerCase()) ||
    bus.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
    bus.currentStop.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Header */}
        <Card className="border-0 bg-gradient-hero text-white shadow-glow">
          <CardHeader className="text-center pb-6">
            <div className="flex items-center justify-between mb-4">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-white/80 hover:text-white hover:bg-white/20"
                onClick={() => window.location.href = '/'}
              >
                ← Back to Overview
              </Button>
              <div className="flex items-center gap-2">
                <Bus className="w-8 h-8" />
                <CardTitle className="text-2xl font-bold">Punjab Bus Tracker</CardTitle>
              </div>
              <div className="w-24"></div> {/* Spacer for centering */}
            </div>
            <p className="text-white/90 text-sm">
              Real-time tracking for small cities across Punjab
            </p>
            <div className="flex items-center justify-center gap-2 mt-4">
              {isOnline ? (
                <>
                  <Wifi className="w-4 h-4" />
                  <span className="text-xs">Connected</span>
                </>
              ) : (
                <>
                  <WifiOff className="w-4 h-4" />
                  <span className="text-xs">Offline Mode</span>
                </>
              )}
            </div>
          </CardHeader>
        </Card>

        {/* Search */}
        <Card className="shadow-card">
          <CardContent className="p-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search routes, stops, or destinations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 text-base h-12 border-0 bg-muted/50 focus:bg-white transition-smooth"
              />
            </div>
            <div className="flex gap-2 mt-4 flex-wrap">
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-white transition-smooth">
                Popular Routes
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-secondary hover:text-secondary-foreground transition-smooth">
                Nearby Stops
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Contact */}
        <Card className="bg-warning/10 border-warning/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-warning" />
              <div className="flex-1">
                <p className="text-sm font-medium">24/7 Helpline</p>
                <p className="text-xs text-muted-foreground">For emergencies or bus breakdowns</p>
              </div>
              <Button variant="outline" size="sm" className="border-warning text-warning hover:bg-warning hover:text-warning-foreground">
                Call Now
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Bus List */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Live Bus Updates</h2>
            <Button variant="ghost" size="sm" className="gap-2">
              <RefreshCw className="w-4 h-4" />
              Refresh
            </Button>
          </div>
          
          {filteredBuses.map((bus) => (
            <Card key={bus.id} className="shadow-card hover:shadow-primary transition-smooth cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Bus className="w-5 h-5 text-primary" />
                      <div>
                        <h3 className="font-semibold text-lg">{bus.route}</h3>
                        <p className="text-sm text-muted-foreground">{bus.id}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span className="text-sm">
                            <strong>Current:</strong> {bus.currentStop}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Navigation className="w-4 h-4 text-secondary" />
                          <span className="text-sm">
                            <strong>Next:</strong> {bus.nextStop}
                          </span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-success" />
                          <span className="text-sm">
                            <strong>ETA:</strong> {bus.eta}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm">
                            <strong>Crowd:</strong>
                            <span className={getCrowdColor(bus.crowdLevel)}>
                              {" " + bus.crowdLevel.charAt(0).toUpperCase() + bus.crowdLevel.slice(1)}
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="ml-4">
                    <Badge className={getStatusColor(bus.status)} variant="secondary">
                      {bus.status.charAt(0).toUpperCase() + bus.status.slice(1)}
                    </Badge>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    View on Map
                  </Button>
                  <Button size="sm" className="flex-1 bg-gradient-primary hover:opacity-90">
                    Set Alert
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4">
          <Card className="text-center shadow-card">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-success">{buses.filter(b => b.status === 'live').length}</div>
              <div className="text-xs text-muted-foreground">Live Buses</div>
            </CardContent>
          </Card>
          <Card className="text-center shadow-card">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-primary">1,020</div>
              <div className="text-xs text-muted-foreground">Total Stops</div>
            </CardContent>
          </Card>
          <Card className="text-center shadow-card">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-secondary">25</div>
              <div className="text-xs text-muted-foreground">Cities Covered</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BusTracker;

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Smartphone, Globe, Clock, Users, TrendingUp } from "lucide-react";
import Layout from "@/components/layout/Layout";

interface AnalyticsData {
  country?: string;
  city?: string;
  device?: string;
  os?: string;
  browser?: string;
  sessionDuration?: number;
  referrer?: string;
  timestamp?: string;
}

const Analytics = () => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({});
  const [sessionStart] = useState(Date.now());

  useEffect(() => {
    // Set noindex for this page
    const metaRobots = document.createElement('meta');
    metaRobots.name = 'robots';
    metaRobots.content = 'noindex, nofollow';
    document.head.appendChild(metaRobots);

    // Collect analytics data
    const collectData = async () => {
      const data: AnalyticsData = {
        timestamp: new Date().toISOString(),
        referrer: document.referrer || 'Direct',
        sessionDuration: 0
      };

      // Get user agent info
      const userAgent = navigator.userAgent;
      
      // Detect device
      if (/iPhone/i.test(userAgent)) {
        data.device = 'iPhone';
      } else if (/iPad/i.test(userAgent)) {
        data.device = 'iPad';
      } else if (/Android/i.test(userAgent)) {
        if (/Mobile/i.test(userAgent)) {
          if (/Xiaomi|MI|Redmi/i.test(userAgent)) {
            data.device = 'Xiaomi';
          } else if (/SM-/i.test(userAgent)) {
            data.device = 'Samsung';
          } else {
            data.device = 'Android Phone';
          }
        } else {
          data.device = 'Android Tablet';
        }
      } else if (/Windows/i.test(userAgent)) {
        data.device = 'Windows PC';
      } else if (/Mac/i.test(userAgent)) {
        data.device = 'Mac';
      } else {
        data.device = 'Unknown Device';
      }

      // Detect OS
      if (/Windows NT 10/i.test(userAgent)) {
        data.os = 'Windows 10/11';
      } else if (/Windows/i.test(userAgent)) {
        data.os = 'Windows';
      } else if (/iPhone OS (\d+)/i.test(userAgent)) {
        const match = userAgent.match(/iPhone OS (\d+)/i);
        data.os = `iOS ${match ? match[1] : 'Unknown'}`;
      } else if (/Android (\d+)/i.test(userAgent)) {
        const match = userAgent.match(/Android (\d+)/i);
        data.os = `Android ${match ? match[1] : 'Unknown'}`;
      } else if (/Mac OS X/i.test(userAgent)) {
        data.os = 'macOS';
      } else {
        data.os = 'Unknown OS';
      }

      // Detect browser
      if (/Chrome/i.test(userAgent) && !/Edge/i.test(userAgent)) {
        data.browser = 'Chrome';
      } else if (/Firefox/i.test(userAgent)) {
        data.browser = 'Firefox';
      } else if (/Safari/i.test(userAgent) && !/Chrome/i.test(userAgent)) {
        data.browser = 'Safari';
      } else if (/Edge/i.test(userAgent)) {
        data.browser = 'Edge';
      } else if (/SamsungBrowser/i.test(userAgent)) {
        data.browser = 'Samsung Internet';
      } else {
        data.browser = 'Unknown Browser';
      }

      // Try to get geographic location (simplified)
      try {
        const response = await fetch('https://ipapi.co/json/');
        const locationData = await response.json();
        data.country = locationData.country_name || 'Unknown';
        data.city = locationData.city || 'Unknown';
      } catch (error) {
        console.log('Could not fetch location data');
        data.country = 'Unknown';
        data.city = 'Unknown';
      }

      setAnalyticsData(data);
    };

    collectData();

    // Update session duration every second
    const interval = setInterval(() => {
      const duration = Math.floor((Date.now() - sessionStart) / 1000);
      setAnalyticsData(prev => ({ ...prev, sessionDuration: duration }));
    }, 1000);

    return () => {
      clearInterval(interval);
      // Remove meta tag on cleanup
      const robotsMeta = document.querySelector('meta[name="robots"]');
      if (robotsMeta) {
        robotsMeta.remove();
      }
    };
  }, [sessionStart]);

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Layout 
      colorScheme="default"
      title="Analytics - Calabria Explorer"
      description="Site analytics and visitor statistics"
    >
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-serif text-3xl font-bold mb-8 text-center">
              Site Analytics
            </h1>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Location */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-5 h-5" />
                    Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Country</p>
                  <p className="font-semibold">{analyticsData.country || 'Loading...'}</p>
                  <p className="text-sm text-gray-600 mt-2">City</p>
                  <p className="font-semibold">{analyticsData.city || 'Loading...'}</p>
                </CardContent>
              </Card>

              {/* Device */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Smartphone className="w-5 h-5" />
                    Device
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Device</p>
                  <p className="font-semibold">{analyticsData.device || 'Detecting...'}</p>
                  <p className="text-sm text-gray-600 mt-2">OS</p>
                  <p className="font-semibold">{analyticsData.os || 'Detecting...'}</p>
                </CardContent>
              </Card>

              {/* Browser */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Monitor className="w-5 h-5" />
                    Browser
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Browser</p>
                  <p className="font-semibold">{analyticsData.browser || 'Detecting...'}</p>
                </CardContent>
              </Card>

              {/* Session */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Session
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Duration</p>
                  <p className="font-semibold">
                    {formatDuration(analyticsData.sessionDuration || 0)}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">Started</p>
                  <p className="text-xs">
                    {new Date(sessionStart).toLocaleTimeString()}
                  </p>
                </CardContent>
              </Card>

              {/* Traffic Source */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Traffic Source
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Referrer</p>
                  <p className="font-semibold text-sm break-all">
                    {analyticsData.referrer || 'Loading...'}
                  </p>
                </CardContent>
              </Card>

              {/* Timestamp */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Visit Info
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Timestamp</p>
                  <p className="text-xs">
                    {analyticsData.timestamp ? 
                      new Date(analyticsData.timestamp).toLocaleString() : 
                      'Loading...'
                    }
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center text-sm text-gray-500">
              <p>This page is hidden from search engines and navigation.</p>
              <p>Analytics data is collected for site optimization purposes.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Analytics;

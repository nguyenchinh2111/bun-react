import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Hospital,
  UserCheck,
  Calendar,
  Users,
  Star,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Stethoscope,
  Heart,
  Brain,
  Eye,
  Bone,
  Award,
} from "lucide-react";
import { MobileMenu } from "./MobileMenu";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  // Sample data for doctors
  const featuredDoctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      avatar:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Neurologist",
      avatar:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Dr. Emily Davis",
      specialty: "Pediatrician",
      avatar:
        "https://images.unsplash.com/photo-1594824804732-ca8db4394c06?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      specialty: "Orthopedic",
      avatar:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face",
    },
  ];

  // Sample news data
  const healthNews = [
    {
      id: 1,
      title: "Revolutionary Heart Surgery Technique Shows 95% Success Rate",
      excerpt:
        "New minimally invasive procedure reduces recovery time and improves patient outcomes significantly.",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop",
      date: "June 28, 2025",
    },
    {
      id: 2,
      title: "AI-Powered Diagnosis Tool Helps Detect Cancer Earlier",
      excerpt:
        "Machine learning technology assists doctors in identifying cancerous cells with unprecedented accuracy.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=200&fit=crop",
      date: "June 25, 2025",
    },
  ];

  // Outstanding doctors data
  const outstandingDoctors = [
    { name: "Dr. Robert Anderson", specialty: "Chief Surgeon" },
    { name: "Dr. Lisa Thompson", specialty: "Head of Cardiology" },
    { name: "Dr. David Martinez", specialty: "Neurosurgery Director" },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed relative"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1920&h=1080&fit=crop')",
      }}
    >
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <UserCheck className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-800">
                HealthCare Plus
              </h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Button variant="default" onClick={() => onNavigate("home")}>
                Home
              </Button>
              <Button variant="ghost" onClick={() => onNavigate("hospital")}>
                Hospitals
              </Button>
              <Button variant="ghost" onClick={() => onNavigate("doctor")}>
                Doctors
              </Button>
            </nav>
            <MobileMenu currentPage="home" onNavigate={onNavigate} />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 text-center text-white">
        <h2 className="text-5xl font-bold mb-6 drop-shadow-lg">
          Your Health, Our Priority
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto drop-shadow-md">
          Connect with top-rated hospitals and doctors. Book appointments,
          manage your health records, and get the care you deserve.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="text-lg px-8 py-4"
            onClick={() => onNavigate("hospital")}
          >
            <Hospital className="mr-2 h-5 w-5" />
            Find Hospitals
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-4 text-[#212121]"
            onClick={() => onNavigate("doctor")}
          >
            <UserCheck className="mr-2 h-5 w-5" />
            Find Doctors
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="text-lg px-8 py-4"
            onClick={() => onNavigate("appointment")}
          >
            <Calendar className="mr-2 h-5 w-5" />
            Book Appointment
          </Button>
        </div>
      </section>

      {/* Featured Doctors Section */}
      <section className="bg-white/95 backdrop-blur-sm py-16">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Featured Doctors
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDoctors.map((doctor) => (
              <Card
                key={doctor.id}
                className="hover:shadow-lg transition-shadow text-center"
              >
                <CardHeader className="pb-4">
                  <div className="w-20 h-20 mx-auto mb-4">
                    <img
                      src={doctor.avatar}
                      alt={doctor.name}
                      className="w-full h-full rounded-full object-cover border-4 border-blue-200"
                    />
                  </div>
                  <CardTitle className="text-lg">{doctor.name}</CardTitle>
                  <p className="text-blue-600 font-medium">
                    {doctor.specialty}
                  </p>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onNavigate("appointment")}
                  >
                    Book Appointment
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Health News Section */}
      <section className="bg-gray-50/95 backdrop-blur-sm py-16">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Latest Health News
          </h3>
          <div className="space-y-8">
            {healthNews.map((news, index) => (
              <Card
                key={news.id}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div
                  className={`flex flex-col ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-6`}
                >
                  <div className="md:w-1/3">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6 flex flex-col justify-center">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">
                      {news.title}
                    </h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {news.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{news.date}</span>
                      <Button variant="outline" size="sm">
                        Read More
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white/95 backdrop-blur-sm py-16">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose HealthCare Plus?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Easy Booking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Book appointments with just a few clicks. Our streamlined
                  process makes healthcare accessible.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Expert Doctors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Connect with qualified and experienced healthcare
                  professionals across various specialties.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Star className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <CardTitle>Quality Care</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Get top-quality healthcare services from verified hospitals
                  and medical professionals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-gray-50/95 backdrop-blur-sm py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Partner Hospitals</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">
                2000+
              </div>
              <div className="text-gray-600">Qualified Doctors</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">
                50K+
              </div>
              <div className="text-gray-600">Happy Patients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">
                24/7
              </div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div>
              <h4 className="text-xl font-bold mb-6 flex items-center">
                <UserCheck className="mr-2 h-6 w-6 text-blue-400" />
                HealthCare Plus
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">
                      Address:{" "}
                      <span className="text-gray-300">
                        123 Medical Center Drive Health City, <br /> HC 12345
                        United States
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <div>
                    <p className="font-semibold">
                      Phone:{" "}
                      <span className="text-gray-300">+1 (555) 123-4567</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <div>
                    <p className="font-semibold">
                      Email:{" "}
                      <span className="text-gray-300">
                        info@healthcareplus.com
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Medical Categories & Outstanding Doctors */}
            <div>
              <h4 className="text-xl font-bold mb-6">Medical Services</h4>
              <div className="layout-col-second flex gap-20">
                <div className="mb-8">
                  <h5 className="font-semibold mb-4 text-blue-400">
                    Specialties:
                  </h5>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center space-x-2">
                      <Heart className="h-4 w-4 text-red-400" />
                      <span>Cardiology</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Brain className="h-4 w-4 text-purple-400" />
                      <span>Neurology</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Eye className="h-4 w-4 text-green-400" />
                      <span>Ophthalmology</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Bone className="h-4 w-4 text-orange-400" />
                      <span>Orthopedics</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Stethoscope className="h-4 w-4 text-blue-400" />
                      <span>General Medicine</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold mb-4 text-blue-400 flex items-center">
                    <Award className="h-4 w-4 mr-2" />
                    Outstanding Doctors:
                  </h5>
                  <ul className="space-y-2 text-gray-300">
                    {outstandingDoctors.map((doctor, index) => (
                      <li
                        key={index}
                        className="border-l-2 border-blue-400 pl-3"
                      >
                        <p className="font-medium">{doctor.name}</p>
                        <p className="text-sm text-gray-400">
                          {doctor.specialty}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-xl font-bold mb-6">Connect With Us</h4>
              <p className="text-gray-300 mb-6">
                Stay updated with the latest health news and tips. Follow us on
                social media for daily health insights and community support.
              </p>
              <div className="space-y-4">
                <a
                  href="#"
                  className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <Facebook className="h-6 w-6" />
                  <span>Facebook - HealthCare Plus</span>
                </a>
                {/* <a
                  href="#"
                  className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <Twitter className="h-6 w-6" />
                  <span>Twitter - @HealthCarePlus</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-3 text-gray-300 hover:text-pink-400 transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                  <span>Instagram - @healthcareplus</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-3 text-gray-300 hover:text-red-400 transition-colors"
                >
                  <Youtube className="h-6 w-6" />
                  <span>YouTube - HealthCare Plus Channel</span>
                </a> */}
              </div>
              <div className="mt-8 pt-6 border-t border-gray-700">
                <p className="text-sm text-gray-400">
                  Emergency Hotline:{" "}
                  <span className="text-red-400 font-bold">911</span>
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  24/7 Medical Support:{" "}
                  <span className="text-blue-400 font-bold">
                    +1 (555) 999-0000
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 HealthCare Plus. All rights reserved. |
              <a href="#" className="text-blue-400 hover:underline ml-1">
                Privacy Policy
              </a>{" "}
              |
              <a href="#" className="text-blue-400 hover:underline ml-1">
                Terms of Service
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

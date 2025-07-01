import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Hospital,
  MapPin,
  Phone,
  Star,
  Clock,
  Users,
  Search,
  Calendar,
} from "lucide-react";
import { MobileMenu } from "./MobileMenu";
import { useState } from "react";

interface HospitalPageProps {
  onNavigate: (page: string) => void;
}

interface HospitalData {
  id: number;
  name: string;
  location: string;
  rating: number;
  specialties: string[];
  beds: number;
  phone: string;
  image: string;
  emergency: boolean;
}

const hospitals: HospitalData[] = [
  {
    id: 1,
    name: "City General Hospital",
    location: "Downtown Medical District",
    rating: 4.8,
    specialties: ["Cardiology", "Neurology", "Emergency Care"],
    beds: 500,
    phone: "+1 (555) 123-4567",
    image: "/api/placeholder/300/200",
    emergency: true,
  },
  {
    id: 2,
    name: "St. Mary's Medical Center",
    location: "Westside Medical Plaza",
    rating: 4.6,
    specialties: ["Pediatrics", "Oncology", "Surgery"],
    beds: 350,
    phone: "+1 (555) 234-5678",
    image: "/api/placeholder/300/200",
    emergency: true,
  },
  {
    id: 3,
    name: "Metro Health Institute",
    location: "Eastside Health Complex",
    rating: 4.7,
    specialties: ["Orthopedics", "Radiology", "ICU"],
    beds: 400,
    phone: "+1 (555) 345-6789",
    image: "/api/placeholder/300/200",
    emergency: false,
  },
  {
    id: 4,
    name: "Regional Medical Center",
    location: "North District Hospital Zone",
    rating: 4.5,
    specialties: ["Maternity", "Geriatrics", "Rehabilitation"],
    beds: 280,
    phone: "+1 (555) 456-7890",
    image: "/api/placeholder/300/200",
    emergency: true,
  },
];

export function HospitalPage({ onNavigate }: HospitalPageProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");

  const filteredHospitals = hospitals.filter((hospital) => {
    const matchesSearch =
      hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hospital.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty =
      selectedSpecialty === "all" ||
      selectedSpecialty === "" ||
      hospital.specialties.some((specialty) =>
        specialty.toLowerCase().includes(selectedSpecialty.toLowerCase())
      );
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Hospital className="h-8 w-8 text-green-600" />
              <h1 className="text-2xl font-bold text-gray-800">
                HealthCare Plus
              </h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Button variant="ghost" onClick={() => onNavigate("home")}>
                Home
              </Button>
              <Button variant="default" onClick={() => onNavigate("hospital")}>
                Hospitals
              </Button>
              <Button variant="ghost" onClick={() => onNavigate("doctor")}>
                Doctors
              </Button>
            </nav>
            <MobileMenu currentPage="hospital" onNavigate={onNavigate} />
          </div>
        </div>
      </header>

      {/* Search Section */}
      <section className="container mx-auto px-6 py-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Find the Right Hospital
          </h2>
          <p className="text-lg text-gray-600">
            Search from our network of trusted healthcare facilities
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search hospitals or locations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select
                value={selectedSpecialty}
                onValueChange={setSelectedSpecialty}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select specialty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Specialties</SelectItem>
                  <SelectItem value="cardiology">Cardiology</SelectItem>
                  <SelectItem value="neurology">Neurology</SelectItem>
                  <SelectItem value="pediatrics">Pediatrics</SelectItem>
                  <SelectItem value="oncology">Oncology</SelectItem>
                  <SelectItem value="surgery">Surgery</SelectItem>
                  <SelectItem value="orthopedics">Orthopedics</SelectItem>
                </SelectContent>
              </Select>
              <Button className="w-full">
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Hospitals Grid */}
      <section className="container mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredHospitals.map((hospital) => (
            <Card
              key={hospital.id}
              className="hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="h-48 bg-gradient-to-r from-green-400 to-blue-500 relative">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute top-4 right-4">
                  {hospital.emergency && (
                    <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      24/7 Emergency
                    </span>
                  )}
                </div>
              </div>

              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-gray-800">
                      {hospital.name}
                    </CardTitle>
                    <div className="flex items-center text-gray-600 mt-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{hospital.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span className="font-semibold">{hospital.rating}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    <span>{hospital.beds} beds available</span>
                  </div>

                  <div className="flex items-center text-sm text-gray-600">
                    <Phone className="h-4 w-4 mr-2" />
                    <span>{hospital.phone}</span>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm text-gray-700 mb-2">
                      Specialties:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {hospital.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button className="flex-1" size="sm">
                      <Calendar className="mr-2 h-4 w-4" />
                      Book Appointment
                    </Button>
                    <Button variant="outline" size="sm">
                      <MapPin className="mr-2 h-4 w-4" />
                      Directions
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredHospitals.length === 0 && (
          <div className="text-center py-12">
            <Hospital className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No hospitals found
            </h3>
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </div>
        )}
      </section>
    </div>
  );
}

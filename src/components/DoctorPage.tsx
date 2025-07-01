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
  UserCheck,
  MapPin,
  Phone,
  Star,
  Clock,
  GraduationCap,
  Search,
  Calendar,
  Video,
} from "lucide-react";
import { MobileMenu } from "./MobileMenu";
import { useState } from "react";

interface DoctorPageProps {
  onNavigate: (page: string) => void;
}

interface DoctorData {
  id: number;
  name: string;
  specialty: string;
  hospital: string;
  location: string;
  rating: number;
  experience: number;
  education: string;
  phone: string;
  consultationFee: number;
  availableToday: boolean;
  image: string;
  languages: string[];
}

const doctors: DoctorData[] = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    hospital: "City General Hospital",
    location: "Downtown Medical District",
    rating: 4.9,
    experience: 15,
    education: "Harvard Medical School",
    phone: "+1 (555) 123-4567",
    consultationFee: 200,
    availableToday: true,
    image: "/api/placeholder/150/150",
    languages: ["English", "Spanish"],
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Neurologist",
    hospital: "St. Mary's Medical Center",
    location: "Westside Medical Plaza",
    rating: 4.8,
    experience: 12,
    education: "Johns Hopkins University",
    phone: "+1 (555) 234-5678",
    consultationFee: 250,
    availableToday: false,
    image: "/api/placeholder/150/150",
    languages: ["English", "Mandarin"],
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrician",
    hospital: "Metro Health Institute",
    location: "Eastside Health Complex",
    rating: 4.7,
    experience: 8,
    education: "Stanford Medical School",
    phone: "+1 (555) 345-6789",
    consultationFee: 150,
    availableToday: true,
    image: "/api/placeholder/150/150",
    languages: ["English", "Spanish", "Portuguese"],
  },
  {
    id: 4,
    name: "Dr. David Wilson",
    specialty: "Orthopedic Surgeon",
    hospital: "Regional Medical Center",
    location: "North District Hospital Zone",
    rating: 4.6,
    experience: 20,
    education: "Mayo Clinic College",
    phone: "+1 (555) 456-7890",
    consultationFee: 300,
    availableToday: true,
    image: "/api/placeholder/150/150",
    languages: ["English"],
  },
  {
    id: 5,
    name: "Dr. Priya Patel",
    specialty: "Dermatologist",
    hospital: "City General Hospital",
    location: "Downtown Medical District",
    rating: 4.8,
    experience: 10,
    education: "University of Pennsylvania",
    phone: "+1 (555) 567-8901",
    consultationFee: 180,
    availableToday: false,
    image: "/api/placeholder/150/150",
    languages: ["English", "Hindi", "Gujarati"],
  },
  {
    id: 6,
    name: "Dr. James Thompson",
    specialty: "Oncologist",
    hospital: "St. Mary's Medical Center",
    location: "Westside Medical Plaza",
    rating: 4.9,
    experience: 18,
    education: "Memorial Sloan Kettering",
    phone: "+1 (555) 678-9012",
    consultationFee: 350,
    availableToday: true,
    image: "/api/placeholder/150/150",
    languages: ["English", "French"],
  },
];

export function DoctorPage({ onNavigate }: DoctorPageProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [availableOnly, setAvailableOnly] = useState(false);

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.hospital.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty =
      selectedSpecialty === "all" ||
      selectedSpecialty === "" ||
      doctor.specialty.toLowerCase().includes(selectedSpecialty.toLowerCase());
    const matchesAvailability = !availableOnly || doctor.availableToday;
    return matchesSearch && matchesSpecialty && matchesAvailability;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <UserCheck className="h-8 w-8 text-purple-600" />
              <h1 className="text-2xl font-bold text-gray-800">
                HealthCare Plus
              </h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Button variant="ghost" onClick={() => onNavigate("home")}>
                Home
              </Button>
              <Button variant="ghost" onClick={() => onNavigate("hospital")}>
                Hospitals
              </Button>
              <Button variant="default" onClick={() => onNavigate("doctor")}>
                Doctors
              </Button>
            </nav>
            <MobileMenu currentPage="doctor" onNavigate={onNavigate} />
          </div>
        </div>
      </header>

      {/* Search Section */}
      <section className="container mx-auto px-6 py-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Find Expert Doctors
          </h2>
          <p className="text-lg text-gray-600">
            Connect with qualified healthcare professionals
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search doctors, specialties..."
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
                  <SelectItem value="cardiologist">Cardiologist</SelectItem>
                  <SelectItem value="neurologist">Neurologist</SelectItem>
                  <SelectItem value="pediatrician">Pediatrician</SelectItem>
                  <SelectItem value="orthopedic">Orthopedic Surgeon</SelectItem>
                  <SelectItem value="dermatologist">Dermatologist</SelectItem>
                  <SelectItem value="oncologist">Oncologist</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="available"
                  checked={availableOnly}
                  onChange={(e) => setAvailableOnly(e.target.checked)}
                  className="rounded"
                />
                <label htmlFor="available" className="text-sm text-gray-600">
                  Available today
                </label>
              </div>
              <Button className="w-full">
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Doctors Grid */}
      <section className="container mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map((doctor) => (
            <Card
              key={doctor.id}
              className="hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <UserCheck className="h-12 w-12 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-800">
                  {doctor.name}
                </CardTitle>
                <p className="text-purple-600 font-semibold">
                  {doctor.specialty}
                </p>
                <div className="flex items-center justify-center mt-2">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span className="font-semibold">{doctor.rating}</span>
                  <span className="text-gray-500 text-sm ml-1">
                    ({doctor.experience}+ years)
                  </span>
                </div>
              </CardHeader>

              <CardContent className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                  <div>
                    <div className="font-medium">{doctor.hospital}</div>
                    <div className="text-xs">{doctor.location}</div>
                  </div>
                </div>

                <div className="flex items-center text-sm text-gray-600">
                  <GraduationCap className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span>{doctor.education}</span>
                </div>

                <div className="flex items-center text-sm text-gray-600">
                  <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span>{doctor.phone}</span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-sm">
                    <span className="text-gray-600">Consultation:</span>
                    <span className="font-semibold text-green-600 ml-1">
                      ${doctor.consultationFee}
                    </span>
                  </div>
                  {doctor.availableToday ? (
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                      Available Today
                    </span>
                  ) : (
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                      Next Available
                    </span>
                  )}
                </div>

                <div>
                  <div className="text-xs text-gray-600 mb-1">Languages:</div>
                  <div className="flex flex-wrap gap-1">
                    {doctor.languages.map((language, index) => (
                      <span
                        key={index}
                        className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs"
                      >
                        {language}
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
                    <Video className="mr-2 h-4 w-4" />
                    Video Call
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="text-center py-12">
            <UserCheck className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No doctors found
            </h3>
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </div>
        )}
      </section>
    </div>
  );
}

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Hospital, UserCheck, Calendar } from "lucide-react";

interface MobileMenuProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function MobileMenu({ currentPage, onNavigate }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "hospital", label: "Hospitals", icon: Hospital },
    { id: "doctor", label: "Doctors", icon: UserCheck },
    { id: "appointment", label: "Book Appointment", icon: Calendar },
  ];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile menu button */}
      <div className="md:hidden">
        <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-64 bg-white shadow-xl">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold">Menu</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <nav className="p-4">
              <ul className="space-y-2">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.id}>
                      <Button
                        variant={currentPage === item.id ? "default" : "ghost"}
                        className="w-full justify-start"
                        onClick={() => handleNavigate(item.id)}
                      >
                        <Icon className="mr-3 h-5 w-5" />
                        {item.label}
                      </Button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

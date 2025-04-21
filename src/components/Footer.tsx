
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-football-dark text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Kanagam Brothers</h3>
            <p className="text-sm text-gray-400">7th Year Jarold Moorthy Memorial Tournament</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="flex items-center justify-center md:justify-end text-sm">
              Made with <Heart className="mx-1 text-football-accent" size={16} /> by Miracle Brothers Football Club
            </p>
            <p className="text-xs text-gray-400 mt-2">© 2025 Kanagam Brothers. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

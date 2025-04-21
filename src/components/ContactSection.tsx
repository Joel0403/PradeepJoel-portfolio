
import { MapPin, Phone } from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-16 bg-football-dark text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-football-primary/20 backdrop-blur-sm p-8 rounded-lg border border-football-primary/40">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact Information</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-start mb-6">
                <div className="bg-football-primary p-3 rounded-full mr-4">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Venue Address</h3>
                  <address className="not-italic">
                    <p className="mb-1">Miracle Brothers Football Club</p>
                    <p className="mb-1">Kanagam Housing Board</p>
                    <p>Ground Tharamani Chennai</p>
                  </address>
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex items-start">
                <div className="bg-football-primary p-3 rounded-full mr-4">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                  <ul className="space-y-2">
                    <li><strong>Pradeep Joel:</strong> +91 78712 57301</li>
                    <li><strong>Simon Paul:</strong> 93815 67590</li>
                    <li><strong>Jeffery:</strong> +91 96770 95153</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/20 text-center">
            <p className="text-lg">Fixtures will be posted on May 5th. Be on time! ⏳</p>
            <div className="mt-4">
              <button className="btn-football-accent">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


import { AlertTriangle, Clock, Package, Users } from "lucide-react";

export function ImportantGuidelines() {
  return (
    <section className="py-16 bg-football-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-football-dark football-heading">
          Important Rules & Guidelines
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="football-card p-6">
            <div className="flex items-center mb-4">
              <div className="bg-football-accent p-3 rounded-full mr-4">
                <Clock className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-football-dark">No Late Arrivals</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <AlertTriangle size={16} className="text-football-accent mt-1 mr-2 flex-shrink-0" />
                <span>Failure to be present at the scheduled match time = Automatic disqualification</span>
              </li>
              <li className="flex items-start">
                <AlertTriangle size={16} className="text-football-accent mt-1 mr-2 flex-shrink-0" />
                <span>Management is not responsible for late teams.</span>
              </li>
              <li className="flex items-start">
                <AlertTriangle size={16} className="text-football-accent mt-1 mr-2 flex-shrink-0" />
                <span>No refund of the entry fee and advance amount if a team is disqualified due to late arrival.</span>
              </li>
            </ul>
          </div>
          
          <div className="football-card p-6">
            <div className="flex items-center mb-4">
              <div className="bg-football-primary p-3 rounded-full mr-4">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-football-dark">No Re-Entry & No Spot Entry</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <AlertTriangle size={16} className="text-football-primary mt-1 mr-2 flex-shrink-0" />
                <span>Re-entry is strictly not allowed once a player has left the tournament.</span>
              </li>
              <li className="flex items-start">
                <AlertTriangle size={16} className="text-football-primary mt-1 mr-2 flex-shrink-0" />
                <span>No spot entries will be accepted under any circumstances.</span>
              </li>
            </ul>
          </div>
          
          <div className="football-card p-6 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-football-secondary p-3 rounded-full mr-4">
                <Package className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-football-dark">From Management</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <div>
                <h4 className="font-semibold mb-2 text-football-secondary">For All Players:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-football-secondary font-bold mr-2">•</span>
                    <span>Food for all players.</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-football-secondary font-bold mr-2">•</span>
                    <span>1 Box of Glucose per team.</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-football-accent">Take Care of Your Belongings:</h4>
                <p>Management is not responsible for any lost or stolen personal items. Keep them safe.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

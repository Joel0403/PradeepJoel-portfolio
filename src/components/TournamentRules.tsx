
import { Flag, Clock, Trophy, Check, X } from "lucide-react";

export function TournamentRules() {
  return (
    <section className="py-16 bg-gradient-field text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Tournament Rules <Flag className="inline-block ml-2" />
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Do's */}
          <div className="football-card bg-white/10 backdrop-blur-sm p-6 border-football-secondary">
            <div className="flex items-center mb-4">
              <div className="bg-football-secondary p-3 rounded-full mr-4">
                <Check className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold">Do's</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check size={16} className="text-football-secondary mt-1 mr-2 flex-shrink-0" />
                <span>All players must wear a jersey t-shirt and shorts.</span>
              </li>
              <li className="flex items-start">
                <Check size={16} className="text-football-secondary mt-1 mr-2 flex-shrink-0" />
                <span>Football boots are compulsory.</span>
              </li>
              <li className="flex items-start">
                <Check size={16} className="text-football-secondary mt-1 mr-2 flex-shrink-0" />
                <span>Rolling substitutions allowed only when the ball is out of play.</span>
              </li>
              <li className="flex items-start">
                <Check size={16} className="text-football-secondary mt-1 mr-2 flex-shrink-0" />
                <span>Fair Play: Respect referees, opponents & teammates.</span>
              </li>
            </ul>
          </div>
          
          {/* Don'ts */}
          <div className="football-card bg-white/10 backdrop-blur-sm p-6 border-football-accent">
            <div className="flex items-center mb-4">
              <div className="bg-football-accent p-3 rounded-full mr-4">
                <X className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold">Don'ts</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start">
                <X size={16} className="text-football-accent mt-1 mr-2 flex-shrink-0" />
                <span>No jewelry or accessories.</span>
              </li>
              <li className="flex items-start">
                <X size={16} className="text-football-accent mt-1 mr-2 flex-shrink-0" />
                <span>No abusive language — yellow card for violations.</span>
              </li>
              <li className="flex items-start">
                <X size={16} className="text-football-accent mt-1 mr-2 flex-shrink-0" />
                <span>No Late Arrivals — leads to disqualification.</span>
              </li>
              <li className="flex items-start">
                <X size={16} className="text-football-accent mt-1 mr-2 flex-shrink-0" />
                <span>No Re-Entry once a player has left the tournament.</span>
              </li>
            </ul>
          </div>
          
          {/* Match Duration */}
          <div className="football-card bg-white/10 backdrop-blur-sm p-6 border-football-primary">
            <div className="flex items-center mb-4">
              <div className="bg-football-primary p-3 rounded-full mr-4">
                <Clock className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold">Match Duration</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-football-primary font-medium mr-2">•</span>
                <span>7-minute halves with a 2-minute break.</span>
              </li>
              <li className="mt-4">
                <p className="font-medium text-football-secondary mb-2">If tied:</p>
                <ul className="space-y-2 pl-4">
                  <li className="flex items-start">
                    <span className="text-football-primary font-medium mr-2">•</span>
                    <span>Round 1: 3 penalties per team</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-football-primary font-medium mr-2">•</span>
                    <span>Round 2: If still tied, two new players take penalties</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-football-primary font-medium mr-2">•</span>
                    <span>Round 3: If still tied, one remaining player</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-football-primary font-medium mr-2">•</span>
                    <span>Round 4: Toss decides winner (until Quarter-finals)</span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-block bg-football-primary/20 backdrop-blur-sm p-6 rounded-lg border border-football-primary/30">
            <h3 className="flex items-center justify-center text-xl font-bold mb-4">
              <Trophy className="mr-2" /> Semi-finals & Finals
            </h3>
            <p>Additional extra time will be provided instead of a toss.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

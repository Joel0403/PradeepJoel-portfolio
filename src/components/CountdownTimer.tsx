
import { useEffect, useState } from "react";
import { Timer } from "lucide-react";

// Set the tournament date - May 5, 2025
const tournamentDate = new Date("2025-05-05T09:00:00").getTime();

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = tournamentDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-6 bg-football-dark text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-football-primary/20 backdrop-blur-sm rounded-lg p-6 text-center">
          <div className="flex items-center justify-center mb-4">
            <Timer className="text-football-accent mr-2" size={24} />
            <h3 className="text-xl font-bold">Tournament Countdown</h3>
          </div>
          
          <div className="grid grid-cols-4 gap-4 text-center">
            <div className="bg-white/10 rounded-lg p-3">
              <div className="text-3xl md:text-4xl font-bold text-football-accent">
                {timeLeft.days}
              </div>
              <div className="text-sm uppercase">Days</div>
            </div>
            
            <div className="bg-white/10 rounded-lg p-3">
              <div className="text-3xl md:text-4xl font-bold text-football-accent">
                {timeLeft.hours}
              </div>
              <div className="text-sm uppercase">Hours</div>
            </div>
            
            <div className="bg-white/10 rounded-lg p-3">
              <div className="text-3xl md:text-4xl font-bold text-football-accent">
                {timeLeft.minutes}
              </div>
              <div className="text-sm uppercase">Minutes</div>
            </div>
            
            <div className="bg-white/10 rounded-lg p-3">
              <div className="text-3xl md:text-4xl font-bold text-football-accent">
                {timeLeft.seconds}
              </div>
              <div className="text-sm uppercase">Seconds</div>
            </div>
          </div>
          
          <p className="mt-4 text-football-secondary font-medium">
            Fixtures will be posted on May 5th. Register now to secure your team's spot!
          </p>
        </div>
      </div>
    </div>
  );
}

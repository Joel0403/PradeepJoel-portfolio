
import { useState } from "react";
import { Send } from "lucide-react";

export function RegistrationForm() {
  const [formData, setFormData] = useState({
    teamName: "",
    contactName: "",
    phoneNumber: "",
    advanceAmount: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
    alert("Registration submitted successfully!");
    setFormData({
      teamName: "",
      contactName: "",
      phoneNumber: "",
      advanceAmount: "",
    });
  };

  return (
    <section className="py-16 bg-gradient-orange text-white" id="register">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Book Your Slot
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-2 font-medium">Team Name</label>
                <input
                  type="text"
                  name="teamName"
                  value={formData.teamName}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg bg-white/20 border border-white/30 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Enter your team name"
                />
              </div>
              
              <div>
                <label className="block mb-2 font-medium">Contact Name</label>
                <input
                  type="text"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg bg-white/20 border border-white/30 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Enter contact person name"
                />
              </div>
              
              <div>
                <label className="block mb-2 font-medium">Phone Number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg bg-white/20 border border-white/30 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div>
                <label className="block mb-2 font-medium">Advance Amount (Min ₹500)</label>
                <input
                  type="number"
                  name="advanceAmount"
                  value={formData.advanceAmount}
                  onChange={handleChange}
                  min="500"
                  required
                  className="w-full p-3 rounded-lg bg-white/20 border border-white/30 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Enter advance amount"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-white text-football-accent py-3 px-6 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
              >
                <Send className="mr-2" size={18} />
                Book Slot
              </button>
            </form>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-6">Pay via Google Pay</h3>
              <div className="bg-white p-4 rounded-lg mb-6 w-48 h-48 mx-auto">
                <img 
                  src="https://chart.googleapis.com/chart?cht=qr&chl=upi://pay?pa=example@okbank&pn=KanagamFootball&am=500&cu=INR&tn=Tournament+Registration&chs=200x200" 
                  alt="Google Pay QR Code" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-xl font-bold mb-4">Contact & Venue Address</h3>
              <address className="not-italic">
                <p className="mb-2"><strong>Miracle Brothers Football Club</strong></p>
                <p className="mb-2">Kanagam Housing Board</p>
                <p className="mb-4">Ground Tharamani Chennai</p>
                
                <div className="space-y-1">
                  <p><strong>Pradeep Joel:</strong> +91 78712 57301</p>
                  <p><strong>Simon Paul:</strong> 93815 67590</p>
                  <p><strong>Jeffery:</strong> +91 96770 95153</p>
                </div>
              </address>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

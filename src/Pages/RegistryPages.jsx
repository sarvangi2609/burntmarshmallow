


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";


const NAV_LINKS = [
  "Gift Registry",
  "Checklists",
  "Guides",
  "Brands",
  "Help Center",
];

const BRANDS = [
  "Graco",
  "evenflo",
  "SWEET JOJO DESIGNS",
  "KitchenAid",
  "dyson",
  "LENOX",
  "Serta",
  "Calphalon",
  "Noritake",
  "DeLonghi",
  "Vitamix",
];

const FAQS = [
  { q: "What is a gift registry?", a: "A gift registry is a service that allows you to create a list of items you’d love to receive for special occasions." },
  { q: "How does the gift registry work?", a: "Friends and family can view your registry online and shop for your desired gifts directly." },
  { q: "How do I access my gift registry?", a: "Use the 'Find a Registry' tool on this page. Just enter the name or email of the registrant." },
  { q: "What are the benefits of copying a registry at Bed Bath & Beyond or buybuy BABY?", a: "You can manage your legacy registry here, track gifts, and enjoy exclusive registry perks." },
  { q: "What are some popular registry items?", a: "Popular items include baby gear, kitchen appliances, bedding, décor, and more." },
  { q: "How many items should I put on my registry?", a: "It’s recommended to include a range of products at different price points for your guests to choose from." },
  { q: "How do I share my gift registry with family and friends?", a: "After creating a registry, you'll receive a unique link for easy sharing via email or social media." },
  { q: "What happens to old Bed Bath & Beyond & buybuy BABY registries?", a: "You can access your legacy registry details using the registry history lookup section above." },
  { q: "What is the Registry Completion Discount?", a: "It’s an exclusive discount available after your event to purchase remaining items from your registry." },
];


export function Hero() {
  return (

    <section className="mt-4 px-2 md:px-0">

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 items-center">

        <div className="md:col-span-1 d-flex flex-col gap-2 items-start justify-center text-left registry-hero">

          <div className="text-3xl md:text-4xl font-black text-blue-700 div-1">
            <h1>registries <br /> for life’s</h1><br /> <h2>biggest <br /> moments</h2>
          </div>

          <div className="div-2">

            <img src="https://bedbathandbeyond.myregistry.com/ExternalApps/BedBathandBeyond/Images/Hero-BuyBuyBaby.jpg" alt="" />

          </div>
          
        </div>
        
      </div>

      {/* registry area */}

      <div className="min-h-screen bg-gray-50 p-8">
      <div className="registry-box-container ">
        {/* find a registry */}

    <div className="registry-box">

        <h1>Find a Registry</h1>
        <input type="text" name="" id=""
        placeholder="Enter Registrant's Full Name" />

        <button>Search</button>

    </div>

        {/* Create a Registry */}
        <div className="registry-box">

        <h1>Create a Registry</h1>

     <select name="" id="">
        <option value="">Please select a registry type</option>
        <option value="">Wedding Registry</option>
        <option value="">Baby Registry</option>
        <option value="">Gift List</option>
        <option value="">Housewarming</option>
        <option value="">College</option>
        <option value="">Nonprofit / Organization</option>

     </select>

        <button>Create</button>

        
        </div>
        

        {/* Manage Registry */}

        <div className="registry-box">

        <h1>Manage Registry</h1>
       
        <Link to="/signup">
        <input type="text" name="" id=""
        placeholder="Already have an account?"
        style={{border:"none",textAlign:"center"}} />
        </Link>

        <button>Log In</button>

        
        </div>
       

      </div>
    </div>

    </section>
  );
}



export function FAQSection() {
  const [active, setActive] = useState(null);
  return (
    <section className="bg-white py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-lg font-semibold mb-4 text-center">Registry FAQs</h1>
        <div className="faqs">
          {FAQS.map((faq, i) => (
            <div key={i}>
              <button
                className="faq-box"
                onClick={() => setActive(active === i ? null : i)}
              >
                <span className="font-medium text-gray-800">{faq.q}</span>
                <span>{active === i ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}</span>
              </button>
              {active === i && (
                <div className="px-6 pb-4 text-gray-600 text-sm bg-gray-50 faq-ans">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


import React from 'react';
import { BsAward } from "react-icons/bs"; // Badge icon ke liye

const Team = () => {
  // Team ka data humne yahan rakh liya hai taake code repeat na ho
  const teamData = [
    {
      id: 1,
      name: "Dr. Mai Nguyen",
      role: "Lead Curriculum Designer",
      badgeText: "30+ Years in Education",
      
      img: "team-member-1.jpg" 
    },
    {
      id: 2,
      name: "Robert Harding",
      role: "Senior Language Instructor",
      badgeText: "PhD in Applied Linguistics",
      img: "team-member-2.jpg"
    },
    {
      id: 3,
      name: "Sarah Whitfield",
      role: "Content & Accessibility Lead",
      badgeText: "Certified A11y Specialist",
      img: "team-member-3.jpg"
    }
  ];

  return (
    <section className="container mt-5 pt-5 pb-5">
      
      {/* ================= Heading Section ================= */}
      <div className="text-center mb-5">
        <h2 className="team-section-title mb-3">
          Meet Our <span style={{ color: 'var(--color-green)' }}>Team</span>
        </h2>
        <p className="team-section-subtitle mx-auto">
          Our educators bring decades of real-world teaching experience and a passion for making Vietnamese accessible to every learner.
        </p>
      </div>

      {/* ================= Cards Section ================= */}
      <div className="row g-4">
        {teamData.map((member) => (
          // col-12: Mobile par 1 column, col-md-4: Laptop par 3 columns
          <div key={member.id} className="col-12 col-md-4">
            
            <div className="team-card card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
              
              {/* Image Box */}
              <div className="team-img-wrapper">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="card-img-top object-fit-cover" 
                  style={{ height: '260px' }} 
                />
              </div>
              
              {/* Content Box */}
              <div className="card-body p-4 bg-white">
                <h4 className="team-name mb-1">{member.name}</h4>
                <p className="team-role mb-4">{member.role}</p>
                
                {/* Badge */}
                <div className="team-badge d-inline-flex align-items-center gap-2">
                  <BsAward size={14} />
                  <span>{member.badgeText}</span>
                </div>
              </div>

            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default Team;
import React from 'react';

const OurImpact = () => {
  // Stats ka data array mein rakha hai taake code clean rahay
  const impactData = [
    { id: 1, number: "25+", label: "Years" },
    { id: 2, number: "5,000+", label: "Students" },
    { id: 3, number: "12", label: "Editions" },
    { id: 4, number: "98%", label: "Satisfaction" }
  ];

  return (
    <section className="container py-5 my-4">
      <div className="row align-items-center">
        
        {/* Left Side: Graph Paper Stats Box */}
        <div className="col-lg-6 mb-5 mb-lg-0">
          <div className="graph-paper-box">
            {/* Ander 2x2 ka grid banane ke liye */}
            <div className="row text-center g-4">
              {impactData.map((stat) => (
                <div key={stat.id} className="col-6 d-flex flex-column justify-content-center">
                  <h3 className="impact-number">{stat.number}</h3>
                  <p className="impact-label">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Text Content */}
        {/* ps-lg-5 (Padding Start) se laptop par inke darmiyan fasla aayega */}
        <div className="col-lg-6 ps-lg-5">
          <h2 className="impact-title mb-3">Our Impact</h2>
          
          <p className="impact-text">
            We measure success not just in sales, but in the thousands of students who've gone from zero Vietnamese knowledge to confident conversational ability.
          </p>
          
          <p className="impact-text">
            Our curriculums are regularly updated to reflect modern teaching methods while preserving the cultural richness of the Vietnamese language.
          </p>
        </div>

      </div>
    </section>
  );
};

export default OurImpact;
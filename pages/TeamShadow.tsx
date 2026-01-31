import React from "react";

interface TeamMember {
  name: string;
  designation: string;
  photo: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Mr. Amar Tarange",
    designation: "Co-Founder & CEO",
    photo: "/ceo.jpeg",
  },
  {
    name: "Late. Sagar Tarange",
    designation: "Managing Director",
    photo: "/found2.jpg",
  },
  {
    name: "Mr. Sachin Ahivale",
    designation: "General Manager",
    photo: "/sachin.jpeg",
  },
];

export const TeamShadow: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16">Meet the Founders</h2>

        {/* Top Row */}
        <div className="flex justify-center gap-24 mb-24">
          {[teamMembers[0], teamMembers[1]].map((member, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-80 h-80 md:w-96 md:h-96 bg-gray-100 shadow-xl rounded-lg overflow-hidden">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-6 text-3xl font-semibold">{member.name}</h3>
              <p className="text-gray-500 text-lg">{member.designation}</p>
            </div>
          ))}
        </div>

        {/* Center Photo */}
        <div className="flex justify-center -mt-12">
          <div className="flex flex-col items-center">
            <div className="w-96 h-96 md:w-[28rem] md:h-[28rem] bg-gray-100 shadow-2xl rounded-lg overflow-hidden">
              <img
                src={teamMembers[2].photo}
                alt={teamMembers[2].name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-6 text-3xl font-semibold">{teamMembers[2].name}</h3>
            <p className="text-gray-500 text-lg">{teamMembers[2].designation}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

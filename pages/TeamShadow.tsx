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
    name: "Late Mr. Sagar Tarange",
    designation: "Managing Director",
    photo: "/found2.jpg",
  },
  {
    name: "Team",
    designation: "Shadow Infratech Pvt. Ltd.",
    photo: "/teammain.jpg",
  },
  {
    name: "Mr. Sachin Ahivale",
    designation: "General Manager",
    photo: "/sachin.jpeg",
  },
];

export const TeamShadow: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Meet the Team
        </h2>

        {/* Ultra-tight vertical spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-6 md:gap-y-8">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-80 h-80 md:w-96 md:h-96 bg-gray-100 shadow-xl rounded-xl overflow-hidden">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="mt-4 text-2xl md:text-3xl font-semibold">
                {member.name}
              </h3>
              <p className="text-gray-500 text-lg">
                {member.designation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

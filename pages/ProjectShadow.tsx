// ProjectShadow.tsx
import React, { useState } from "react";

// Define the type for a project
interface Project {
  photo: string;
  name: string;
  location: string;
  description: string;
}

// ---------------- ONGOING PROJECTS ----------------
const ongoingProjects: Project[] = [
  {
    photo: "/vsg.jpg",
    name: "VSG Suraksha Enclave",
    location: "Kanhe-Phata, PMRDA",
    description:
      "VSG Suraksha Enclave, a thoughtfully planned NA plots project spread across 12.5 acres of serene, pollution-free landscape. Strategically located and RERA-approved with PMRDA sanction, this premium development offers a rare opportunity to own legally clear and future-ready land in a fast-developing zone.",
  },
  {
    photo: "/vest.jpeg",
    name: "Harvest Hills",
    location: "Rajgad (Velhe)",
    description:
      "Haarvest Hills, featuring 25-acre, 96-acre, and 8-acre land parcels—a jewel within Rajgad (Velhe), now available for discerning investors and homeowners. With expansive opportunities for custom farmhouse development and significant appreciation potential, this offering is your gateway to a lifestyle in harmony with nature.",
  },
];

// ---------------- COMPLETED PROJECTS ----------------
const completedProjects: Project[] = [
  {
    photo: "/vista.jpg",
    name: "Solvista",
    location: "Wagholi near JSPM University, PMRDA",
    description:
      "Solvista offers RERA-sanctioned NA bungalow plots in a gated community, surrounded by scenic mountain views and equipped with premium amenities across 2,00,000 sq. ft. of open space.",
  },
  {
    photo: "/trine.jpg",
    name: "Citrine City",
    location: "Hadapsar, PMC",
    description:
      "Citrine City stands as a testament to grandeur, occupying a sprawling 5.5 acres, making it one of the largest residential NA gated plots communities in the region.",
  },
  {
    photo: "/gulmohar_vikas.png",
    name: "Gulmohar Villas",
    location: "Wagholi, PMRDA",
    description:
      "Gulmohar Villa proudly aligns with PMRDA's vision in the development of a stellar Residential & Commercial NA gated plots community.",
  },
  {
    photo: "/durva.jpg",
    name: "Durva Park",
    location: "Moshi, PCMC",
    description:
      "Durva Park, a PCMC-approved NA project on the Pune-Nashik highway in Moshi, blends luxury with nature.",
  },
  {
    photo: "/sky.jpg",
    name: "Sky Villa",
    location: "Wagholi, PMRDA",
    description:
      "Sky Villas offers the perfect canvas to build your dream bungalow, a serene second home near Pune.",
  },
  {
    photo: "/gold.jpg",
    name: "Golden Paradise",
    location: "Pawarwasti, Lohegaon",
    description:
      "Golden Paradise is a premium residential project offering spacious plots and modern amenities.",
  },
  {
    photo: "/villa.jpg",
    name: "Gulmohar Homes",
    location: "Kharadi Annexe, PMRDA",
    description:
      "Gulmohar Homes, a completed PMRDA-approved project, offers NA bungalow plots across 2.5 acres.",
  },
  {
    photo: "/nest.jpg",
    name: "Silver Nest",
    location: "Malwadiwasti, Lohegaon",
    description:
      "Silver Nest is a premium residential project offering spacious plots and modern amenities.",
  },
  {
    photo: "/bung.jpg",
    name: "Independent Bungalow",
    location: "Defence Colony",
    description:
      "Independent Bungalow is an upscale residential development featuring spacious plots.",
  },
];

const ProjectShadow: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"ongoing" | "completed">("ongoing");

  const projectsToShow =
    activeTab === "ongoing" ? ongoingProjects : completedProjects;

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Tabs */}
        <div className="flex space-x-4 mb-12">
          <button
            onClick={() => setActiveTab("ongoing")}
            className={`px-6 py-2 font-semibold rounded ${
              activeTab === "ongoing"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 border"
            }`}
          >
            Ongoing Projects
          </button>

          <button
            onClick={() => setActiveTab("completed")}
            className={`px-6 py-2 font-semibold rounded ${
              activeTab === "completed"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 border"
            }`}
          >
            Completed Projects
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsToShow.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={project.photo}
                alt={project.name}
                className="w-full h-56 md:h-72 lg:h-80 object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-sm text-gray-500 mb-3">
                  {project.location}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ---------------- YOUTUBE VIDEOS (ONLY AFTER COMPLETED) ---------------- */}
        {activeTab === "completed" && (
          <div className="mt-24">
            <h3 className="text-3xl font-bold text-center mb-12">
              Project Walkthrough Videos
            </h3>

            <div className="flex flex-col md:flex-row justify-center gap-10">
              <div className="w-full md:w-[380px] aspect-video shadow-xl">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/0t_4NpIGwcM"
                  title="Project Walkthrough 1"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>

              <div className="w-full md:w-[380px] aspect-video shadow-xl">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/Q-uCHMyGlGQ"
                  title="Project Walkthrough 2"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>

              <div className="w-full md:w-[380px] aspect-video shadow-xl">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/cY5OxUzgkYs"
                  title="Project Walkthrough 3"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectShadow;

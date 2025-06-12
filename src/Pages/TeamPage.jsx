import React from "react";

const teamMembers = [
  {
    name: "Md Shahzad",
    role: "Founder & CEO",
    partner: "50% Partner",
    image: `${process.env.PUBLIC_URL}/assets/team/shahzad.jpg`,
  },
  {
    name: "Amit Kumar",
    role: "Lead Developer",
    partner: "50% Partner",
    image: `${process.env.PUBLIC_URL}/assets/team/amit.jpg`,
  },
  {
    name: "Pooja Verma",
    role: "Marketing Head",
    partner: "50% Partner",
    image: `${process.env.PUBLIC_URL}/assets/team/pooja.jpg`,
  },
  {
    name: "Rahul Singh",
    role: "Graphics Designer",
    partner: "50% Partner",
    image: `${process.env.PUBLIC_URL}/assets/team/rahul.jpg`,
  },
];

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-10">
        Meet Our Team
      </h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden text-center p-5 hover:shadow-lg transition"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800">{member.name}</h2>
            <p className="text-gray-600">{member.role}</p>
            <p className="mt-2 text-green-600 font-medium">{member.partner}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;

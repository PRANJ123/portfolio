import { ProjectCard } from "./ProjectCard";
import { Separator } from "./ui/separator";

const projects = [
  {
    name: "Kitab",
    icon: "/kitab.png",
    description:"Developed a full-stack bookstore using React, Node.js, Express.js, and MongoDB.Implemented features such as a user-friendly shopping cart, cash-on-delivery checkout, and a secure admin dashboard for managing inventory. Integrated Tailwind CSS for styling, Redux for state management, Mongoose for database operations.",
   
    liveLink:"https://kitab-5kprsd3y7-pranjal-bajpais-projects.vercel.app/",
    githubLink: "https://github.com/PRANJ123/kitab",
  },
  {
    name: "Blog-App",
    icon: "/images.jpeg",
    description:
      "A responsive blog website using React.js for the frontend and Appwrite for backend services including user authentication and data management. Demonstrated skills in React.js components, hooks and state management, along with implementing a scalable backend solution",
    liveLink: "http://blog-app-appwrite-five.vercel.app",
    githubLink: "https://github.com/PRANJ123/BlogApp-Appwrite-",
  },
  {
    name: "Rock-Paper-Scissor-Game",
    icon: "/RPSGame.jpeg",
    description:
      "Developed a interactive Rock Paper Scissor game using HTML,CSS, and JavaScript, showcasing frontend development skills and user engagement.",
    githubLink: "https://pranj123.github.io/game-rock-paper-scissor-/",
  },

  
  
];

const Projects = () => {
  return (
    <div className="space-y-6 px-10 pb-16 md:block">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">Projects</h2>
      </div>
      <Separator className="my-6" />
      <div className="grid sm:grid-cols-3 gap-10 justify-items-center">
        {projects.map((project) => (
          <ProjectCard key={project.name} projectInfo={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

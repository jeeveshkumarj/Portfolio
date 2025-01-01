import OldImage from './jkj.jpg';

export default function About() {
  return (
    <section
      id="about"
      className="px-10 w-full flex flex-col lg:flex-row py-20 align-center bg-emerald-200 max-w-5xl mx-auto"
    >
      <div className="flex-1">
        <img
          src={OldImage}
          alt="About"
          className="w-full h-full bg-cover"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center items-start gap-5 px-6">
        <h2 className="text-center text-red-500 text-5xl font-bold">
          About Me:
        </h2>
        <p className="text-left">
        I am a motivated MCA graduate with a strong foundation in programming, software development, and problem-solving. I hold an MCA from JNN College of Engineering, Shimogga, with a CGPA of 8.88, and a BSc in Physics, Mathematics, and Computer Science from DVS College, scoring 81.2%. Proficient in Java, SQL, and web technologies, I have experience in developing efficient solutions. My academic project focused on logo and package detection using machine learning to improve accuracy.
</p>
<p className="text-left">
I’ve completed certifications in Java and SQL, enhancing my knowledge in object-oriented programming, database management, and software development. With excellent communication skills and a collaborative approach, I am eager to contribute to impactful projects in the software development domain
</p>

      </div>
    </section>
  );
}

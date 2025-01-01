import newimage from './jkj.jpg'

export default function Main() {
  return (
    <section
      id="main"
      className="px-10 w-full flex gap-12 flex-col lg:flex-row justify-center items-center align-center mt-40 mb-16 lg:mt-10 max-w-5xl mx-auto lg:gap-0 h-[80vh]"
    >
      <div className="flex-1 flex flex-col justify-center items-center gap-5">
        <h4 className="text-center text-xl font-bold">
          Hi and welcome to
        </h4>
        <h2 className="text-red-500 text-5xl font-bold text-left">
          My Portfolio
        </h2>
        <p className="text-blue-600 font-bold ">
        I am Jeevesh Kumar J an aspiring software developer with expertise in Java, SQL, and web technologies, dedicated to solving complex problems and delivering innovative solutions.







        </p>
      </div>
      <div className="flex-1">
        <img
          src={newimage}
          alt="main"
          className="w-full h-full bg-cover rounded-full"
        />
      </div>
    </section>
  );
}

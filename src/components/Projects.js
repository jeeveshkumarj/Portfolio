import logo from './logo.png'
import student from './student.png'


export default function Projects() {
    return (
        <section
            id="projects"
            className="my-20 w-full flex flex-col gap-5 align-center max-w-5xl mx-auto"
        >
            <h2 className="text-5xl text-red-500 font-bold text-center">
                My Projects
            </h2>
            <div
                className="p-10 bg-red-200 flex flex-col justify-center items-center gap-5 lg:flex-row max-w-5xl mx-auto shadow transition"
            >
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <a href="#" className="w-full h-full">
                        <img
                            src={logo}
                            alt="Project 1"
                            className="w-full h-full bg-cover rounded"
                        />
                    </a>
                </div>
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <h2
                        className="font-bold text-3xl text-center"
                    >
                        <a className="hover:underline" href="#">
                        Detection of Logo and Package
                        </a>
                    </h2>
                    <p className="text-gray-600">
                    This academic project focuses on detecting and classifying logos and packages, such as identifying products like Britannia Bourbon. It utilizes ResNet-50 for package classification to ensure accurate product identification and the SIFT (Scale-Invariant Feature Transform) algorithm for precise logo detection. The system is designed to enhance product recognition by combining advanced machine learning and computer vision techniques.
                    </p>
                    
                </div>
            </div>

            <div
                className="p-10 bg-red-200 flex flex-col justify-center items-center gap-5 lg:flex-row max-w-5xl mx-auto shadow transition"
            >
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <a href="#" className="w-full h-full">
                        <img
                            src={student}
                            alt="Project 1"
                            className="w-full h-full bg-cover rounded"
                        />
                    </a>
                </div>
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <h2
                        className="font-bold text-3xl text-center"
                    >
                        <a className="hover:underline" href="#">
                        Student Management System
                        </a>
                    </h2>
                    <p className="text-gray-600">
                    This project is a web-based application designed to manage student data efficiently. It was developed using HTML for the front-end interface, Hibernate, JDBC for database connectivity, and Servlets for back-end logic. The system allows functionalities such as adding, updating, deleting, and viewing student records, providing a seamless and user-friendly experience for administrators.
                    </p>
                    
                </div>
            </div>
        </section>
    );
}

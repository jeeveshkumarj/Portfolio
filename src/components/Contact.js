export default function Contact() {
    return (
        <section id="contact" className="my-40 align-center max-w-5xl mx-auto p-3">
            <h2 className="text-5xl font-bold text-red-500 text-center">
                Contact Me
            </h2>
            <div className="flex gap-5 justify-center my-10">
                <a
                    rel="noreferrer"
                    target="_blank"
                    className="text-center hover:underline"
                    href="https://www.instagram.com/jeevesh_kumar_j/"
                >
                    Instagram:
                    <span className="font-bold"> @Jeevesh_Kumar_J</span>
                </a>
                <br/>
                <a
                    rel="noreferrer"
                    target="_blank"
                    className="text-center hover:underline"
                    href="https://www.linkedin.com/in/jeeveshkumarj/"
                >
                    LinkedIn:
                    <span className="font-bold"> @Jeevesh_Kumar_J</span>
                </a>
            </div>
        </section>
    );
}

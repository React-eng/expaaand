import ReactForm from "./ReactForm"
function About() {
    return (
        <div className="relative flex flex-col md:flex-row h-screen text-center sm:text-left  text-white bg-expaaand-pink  max-w-md mx-auto overflow-hidden md:max-w-2xl">
        <div className="">
        <h1 className="text-5xl">
            We are an Impact Factory
        </h1>
        <p className="mt-5 ">Here we engineer indellible interactions, alter perceptions,  and compound social capital.
        <br />
        <br />
        Join our talent network and collaborate with inspired artists, storytellers, designers, engineers, programmers, ecologists, economists, changemakers, media makers and you.
        </p>
        </div>
        
        <div >
        <ReactForm />
        </div>
        
        </div>
    )
}

export default About

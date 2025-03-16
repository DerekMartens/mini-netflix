const About = () => {
    return (
        <div className="min-h-screen bg-gray-800 rounded-lg text-white flex flex-col items-center p-4">
            <h1 className="text-4xl font-bold mt-4 mb-4">About</h1>
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-lg">
                <p className="text-lg leading-relaxed">
                    Welcome to my simple OMDB based mini-netflix movie app. This app is built using Next.js and Tailwind CSS.
                </p>
            </div>
        </div>
    )
};

export default About;

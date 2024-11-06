
const Hero = () => {
    return (
        <div className="hero bg-base-200 rounded-lg">
            <div className="hero-content w-5/6 flex-col lg:flex-row-reverse gap-12 py-12">
                <img
                    src="https://i.ibb.co.com/khHN7Pk/9780143454212.jpg"
                    className="max-w-sm rounded-lg shadow-2xl"/>
                <div className={"space-y-8"}>
                    <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>

                    <button className="btn bg-green-500 text-white">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
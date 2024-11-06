const Heading = ({heading, parragraph}) => {
    return (
        <div className={"text-center mt-12 mb-6"}>
            <h2 className={"text-3xl text-center font-semibold"}>{heading}</h2>
            <p className={"text-gray-500"}>{parragraph}</p>
        </div>
    );
};

export default Heading;
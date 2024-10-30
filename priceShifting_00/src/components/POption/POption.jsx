import PropTypes from "prop-types";
import { FaCircleArrowRight } from "react-icons/fa6";

const POption = ({option}) => {
    return (
        <div className={"flex flex-col space-y-4 bg-green-100 rounded-xl px-4 py-3"}>
            <p
                className={"text-4xl inline text-green-600 font-bold text-center"}>
                $ {option.price}
                <small className={"text-sm text-green-700"}>/{option.duration}</small>
            </p>

            <h2 className={"text-center font-semibold"}>{option.type}</h2>

            <div className={"flex-grow"}>
                {
                    option.features.map((item,index) => <div className={"flex items-center gap-2"} key={index}>
                        <FaCircleArrowRight className={"w-5 text-green-600"}></FaCircleArrowRight>
                        <p>{item}</p>
                    </div>)
                }

            </div>

            <button className={"p-2 bg-green-300 hover:bg-green-500 duration-700 rounded-xl"}>show details</button>

        </div>
    );
};

POption.propTypes = {
    option: PropTypes.object.isRequired,
}

export default POption;
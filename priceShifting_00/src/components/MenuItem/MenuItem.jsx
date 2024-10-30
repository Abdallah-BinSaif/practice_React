import PropTypes from "prop-types";
const MenuItem = ({route}) => {
    return (
        <div>
            <li className="px-4 mb-2 hover:underline hover:rounded mx-2"><a href={route.path}>{route.name}</a></li>
        </div>
    );
};

MenuItem.propTypes = {
    route: PropTypes.object.isRequired,
}

export default MenuItem;
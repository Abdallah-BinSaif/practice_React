import { NavLink} from "react-router-dom";

const Categories = ({categories}) => {

    return (
        <div role="tablist" className="tabs tabs-lifted">
            {
                categories.map( cate => (
                    <NavLink
                        key={cate.category}
                        to={`/category/${cate.category}`}
                        role={"tab"}
                        className={"tab"}
                    >{cate.category}</NavLink>
                ))
            }
        </div>
    );
};

export default Categories;
import React from 'react';

const Links = ({route}) => {
    return (
        <li
            className={"px-4 py-2"}
        >
            {route.name}
        </li>
    );
};

export default Links;
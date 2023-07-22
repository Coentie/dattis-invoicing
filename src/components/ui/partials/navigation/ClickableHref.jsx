import { Link } from 'react-router-dom';

export default ({url, name}) => {
    return (
        <Link to={url} className={"transition ease-in-out duration-300 hover:text-primary"}>
            {name}
        </Link>
    )
}

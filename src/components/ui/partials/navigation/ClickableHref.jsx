export default ({url, name}) => {
    return (
        <a href={url} className={"transition ease-in-out duration-300 hover:text-primary"}>
            {name}
        </a>
    )
}

export default ({level, title, classes = '' }) => {
    const Header = `h${level}`;

    return (
        <Header className={"text-2xl text-gray-800 font-bold " + classes}>
            {title}<span className={"text-primary"}>.</span>
        </Header>
    )
}

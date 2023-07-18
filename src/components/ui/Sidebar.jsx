import ClickableHref from './partials/navigation/ClickableHref.jsx';

const Sidebar = () => {
    return (
        <div className={"w-full relative flex flex-col bg-white shadow-xl my-2 p-8 flex-1 rounded-r-xl z-10"}>
            <div className={"font-bold text-xl text-primary mb-16"}>LOGO</div>

            <div className={"w-full flex flex-col space-y-4"}>
                <ClickableHref name={"Klanten"} url={"/customers"} />
                <ClickableHref name={"Facturen"} url={"/customers"} />
                <ClickableHref name={"Producten"} url={"/customers"} />
            </div>
        </div>
    )
}

export default Sidebar;

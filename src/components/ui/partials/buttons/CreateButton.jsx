export default ({type, children}) => {
    return(
        <button type={type ?? 'button'}
                className={"bg-white flex justify-center items-center rounded-full w-[50px] h-[50px] shadow hover:bg-gray-100"}
        >
            {children}
        </button>
    )
}

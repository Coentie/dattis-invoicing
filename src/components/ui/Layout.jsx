import Sidebar from './Sidebar.jsx';
import useAuth from '../../providers/useAuth.jsx';
import { AiOutlineUser } from 'react-icons/ai';
import { IoIosNotificationsOutline } from 'react-icons/io';
import CreateButton from './partials/buttons/CreateButton.jsx';

const Layout = (props) => {
    return (
        <div className={'w-full flex min-h-screen bg-gray-50 rounded-r-xl'}>
            <div className={'w-1/6 relative z-10 flex flex-col'}>
                <Sidebar/>
            </div>
            <div className={'flex-1 relative'}>
                <div className={'w-full mb-4 py-8 px-4 flex justify-end'}>
                    <div className={'flex space-x-2'}>
                        <CreateButton>
                            <IoIosNotificationsOutline/>
                        </CreateButton>
                        <CreateButton>
                            <AiOutlineUser/>
                        </CreateButton>
                    </div>
                </div>
                <div className={'w-full'}>
                    <div className={'w-4/5 mx-auto flex flex-col relative z-10'}>
                        {props.children}
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg"
                         className="fixed opacity-50 -ml-8 bottom-1/2 md:bottom-1/5 lg:top-1/5"
                         viewBox="0 0 1920 36.485">
                        <path
                            d="M1216.775,35.06c-137.162,0-245.635,9.059-350.648,17.823-104.1,8.693-211.8,17.681-347.05,17.681s-242.949-8.982-347.1-17.681C116.288,48.225,58.591,43.407-2.841,40.006L-5.3,40.9c60.885,3.375,118.4,8.173,173.912,12.831C273.351,62.487,382.006,71.545,519.26,71.545s245.635-9.059,350.647-17.816c104.1-8.693,211.755-17.688,347.05-17.688s242.949,8.982,347.1,17.688c104.739,8.757,213.394,17.816,350.647,17.816v-.962c-135.3,0-242.949-8.982-347.1-17.681C1462.41,44.119,1353.937,35.06,1216.775,35.06Z"
                            transform="translate(5.3 -35.06)" fill="#256148"/>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Layout;

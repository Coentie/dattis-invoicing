import { cva } from 'class-variance-authority';
import { AiOutlineCheck, AiOutlineWarning } from 'react-icons/ai';
import { BsLightbulb } from 'react-icons/bs';
import useToast from '../../../providers/toast/useToast.jsx';
import './ToastAnimation.css';

const toastStyles = cva('w-full toast-notification-up flex items-center space-x-2 rounded-lg shadow-lg px-8 py-4 cursor-pointer', {
    variants: {
        intent: {
            info: 'bg-blue-500 text-white',
            error: 'bg-red-500 text-white',
            success: 'bg-green-500 text-white',
            warning: 'bg-yellow-500 text-black',
            default: 'bg-gray-200 text-black',
        }
    }
});

const ToastList = () => {
    const {toasts, dequeue} = useToast();

    return (
        <div className={'min-w-64 flex flex-col space-y-2 fixed bottom-8 right-8'}>
            {toasts.map((toast, i) => <Toast
                onClickHandler={() => dequeue(i)}
                key={i}
                intent={toast.type}
                message={toast.message} />)}
        </div>
    );
};

const Toast = ({intent = 'default', message, onClickHandler}) => {
    const getIcon = (styles) => {
        switch (intent) {
            case 'success':
                return <AiOutlineCheck className={styles}/>;
            case 'warning':
            case 'error':
                return <AiOutlineWarning className={styles}/>;
            case 'info':
                return <BsLightbulb className={styles}/>;
        }
    };

    return (
        <div className={toastStyles({ intent })} onClick={onClickHandler}>
            {getIcon('mr-4 w-6 h-6')}
            <div className={'flex flex-col'}>
                <b className={"uppercase"}>{intent}!</b>
                {message && <p className={'text-sm'}>This is a subtitle text!</p>}
            </div>
        </div>
    );
};

export default ToastList;

import ReactDOM from 'react-dom';
import { cva } from 'class-variance-authority';
import { AiOutlineCheck, AiOutlineWarning } from 'react-icons/ai';
import { BsLightbulb } from 'react-icons/bs';

const modalIconStyles = cva('h-6 w-6', {
    variants: {
        intent: {
            info: 'text-blue-600',
            error: 'text-red-600',
            success: 'text-green-600',
            warning: 'text-yellow-600',
        }
    }
});

const modalIconBackgroundStyle = cva('mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10', {
    variants: {
        intent: {
            info: 'bg-blue-100',
            error: 'bg-red-100',
            success: 'bg-green-100',
            warning: 'bg-yellow-100',
        }
    }
});

const BaseModal = ({ actions, content, intent }) => {
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

    return ReactDOM.createPortal(
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity">&nbsp;</div>
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-8">
                    <div
                        className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl">
                        <div className="bg-white  p-8">
                            <div className="flex-1 sm:items-start">
                                { intent &&
                                    <div className={modalIconBackgroundStyle({ intent })}>
                                        {getIcon(modalIconStyles({ intent }))}
                                    </div>
                                }
                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    {content}
                                </div>
                            </div>
                        </div>
                        { actions &&
                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                {actions}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById('modals')
    );
};

export default BaseModal;

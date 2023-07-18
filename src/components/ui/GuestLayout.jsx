import HeaderTitle from './partials/HeaderTitle.jsx';
import DotPatterns from './svg/DotPatterns.jsx';
import Cloud from './svg/Cloud.jsx';
import Logo from './svg/Logo.jsx';
import Waves from './svg/Waves.jsx';
import { useState } from 'react';
import { axios, axiosPrivate } from '../../util/axios/index.js';
import useAuth from '../../hooks/useAuth.jsx';
import { useNavigate } from 'react-router-dom';

export default () => {
    const navigator = useNavigate();
    const { auth, setAuth } = useAuth();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const onLoginClickHandler = async () => {
        const res = await axios.post('auth/login', {
            email, password
        }, { credentials: 'include' });

        if (res.status !== 200) {
            console.log('Notify login not successfull');
            return;
        }

        const data = await axiosPrivate.get('auth/user');

        if (data.status !== 200) {
            console.log('Notify login not successfull');
            return;
        }

        setAuth(data.data);
        await navigator('/dashboard');
    };

    const onEmailInput = e => setEmail(e.target.value);
    const onPasswordInput = e => setPassword(e.target.value);

    return (
        <div className={'w-full grid grid-cols-2 min-h-screen bg-gradient-to-br from-primary to-primary-700'}>
            <div className={'relative flex justify-center items-center w-full min-h-screen'}>
                <Cloud fill={'#fff'} className={'absolute top-0 left-4 opacity-30'}/>
                <Cloud fill={'#fff'} className={'absolute top-24 right-4 opacity-10'}/>

                <Logo className={'w-1/2 fill-current'}/>

                <Waves className={'absolute bottom-0 opacity-20'}/>
            </div>
            <div className={'w-full bg-white flex flex-col justify-center p-8 my-2 shadow-xl rounded-l-xl'}>
                <div className={'w-4/5 mx-auto flex flex-col justify-center'}>
                    <div className={'w-full relative flex flex-col items-center spacing-wide mb-12'}>
                        <HeaderTitle level={1} classes={'text-6xl'} title={'Welkom terug'}/>
                        <p className={'text-gray-600'}>Welkom terug, voor je credentials in om verder te gaan.</p>
                        <DotPatterns classes={'w-32 -top-12 left-12 rotate-45 opacity-20 absolute'}/>
                    </div>


                    <div className={'w-full flex flex-col mb-4'}>
                        <label htmlFor={'email'} className={'text-xl mb-1 text-gray-600'}>E-mail</label>
                        <input
                            className={'w-full border border-gray-200 rounded-xl py-3 px-2 active:ring-none focus:ring-none'}
                            type="text"
                            required
                            name="email"
                            id="email"
                            onInput={onEmailInput}
                            placeholder="Uw email..."
                        />
                    </div>

                    <div className={'w-full flex flex-col'}>
                        <label htmlFor={'password'} className={'text-xl mb-1 text-gray-600'}>Wachtwoord</label>
                        <input
                            className={'w-full border border-gray-200 rounded-xl p-3 active:ring-none focus:ring-none'}
                            type="password"
                            required
                            name="password"
                            id="password"
                            onInput={onPasswordInput}
                            placeholder="Jou wachtwoord..."
                        />
                    </div>

                    <p className={'mt-2 text-primary mb-6'}>Wachtwoord vergeten?</p>

                    <button type="button" onClick={onLoginClickHandler}
                            className={'mono uppercase bg-primary hover:bg-primary-700 rounded-xl py-4 transition duration-300 ease-in-out'}>
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}

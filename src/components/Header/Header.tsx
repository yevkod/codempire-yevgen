import React from 'react';
import s from './Header.module.css';
import logo from '../assets/logo.png'

interface IHeader {
    setSearchedCountry: any,
}


export const Header:React.FC<IHeader> = ({setSearchedCountry}) => {


    return (
        <div className={s.container}>
            <div className={s.block}>
                <div className={s.block__logo}>
                    <img className={s.logo} src={logo}/>
                </div>
                <div className={s.block__text}>
                    <div className={s.text__logo}>STATISTIC</div>
                </div>
            </div>
            <div className={s.block__input}>
                <input
                    className={s.input}
                    placeholder="Search..."
                    type="text"
                    onChange={e => setSearchedCountry(e.target.value)}
                />
            </div>
        </div>
    );
};



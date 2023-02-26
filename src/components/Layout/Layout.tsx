import React from 'react';
import {Cards} from "../Cards/Cards";
import s from './Layout.module.css'

interface ILayout {
    countries: any,
    searchedCountry: any
}

export const Layout: React.FC<ILayout> = ({countries, searchedCountry}) => {


    return (
        <div className={s.container}>
            <Cards countries={countries ? countries : []} searchedCountry={searchedCountry}/>
        </div>
    );
};


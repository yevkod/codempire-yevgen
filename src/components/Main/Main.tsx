import React, {useEffect, useState} from 'react';
import s from './Main.module.css';
import {Layout} from "../Layout/Layout";
import {Header} from '../Header/Header';


export const Main: React.FC = () => {

    const [countries, setCountries] = useState<any>('')
    const [searchedCountry, setSearchedCountry] = useState<any>('')

    const Api = async () => {
        const response = await fetch("https://api.covid19api.com/summary");
        const fetchData = await response.json()

        setCountries(fetchData.Countries)
    }

    useEffect(() => {
        Api()
    }, [])

    return (
        <div className={s.container}>
            <Header setSearchedCountry={setSearchedCountry}/>
            <div className={s.block}>
                <div className={s.wrapper__number}>
                    <div className={s.number}>№</div>
                </div>
                <div className={s.wrapper__country}>
                    <div className={s.country}>Country</div>
                </div>
                <div className={s.wrapper__total}>
                    <div className={s.total}>Total Confirmed</div>
                </div>
            </div>
            <Layout countries={countries} searchedCountry={searchedCountry}/>
        </div>
    );
};



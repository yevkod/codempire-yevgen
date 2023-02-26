import React, {useState} from 'react';
import s from './Cards.module.css';
import heart from '../assets/heart.png';
import death from '../assets/death.png';
import ambulance from '../assets/ambulance.png'

interface ICards {
    countries: any[],
    searchedCountry: string
}


export const Cards: React.FC<ICards> = ({countries, searchedCountry}) => {
    const [modal, setModal] = useState<boolean>(false)
    const [selectedCountry, setSelectedCountry] = useState<any>()


    return (
        <div>
            <div>
                {countries?.filter((item: any) => {
                    if (!countries) return true;
                    if (item.Country.toLowerCase().includes(searchedCountry.toLowerCase())) {
                        return true;
                    }
                    return false;
                })
                    .map((item: any, index) => (
                        <div className={s.modal__boolean} onClick={() => {
                            setModal(true)
                            setSelectedCountry(item)
                        }} key={item.id + item.Country}>
                            <div className={s.block__data}>
                                <div className={s.wrapper__block__number}>
                                    <div className={s.block__number}>
                                        <div className={s.number}>{index + 1}</div>
                                    </div>
                                </div>
                                <div className={s.wrapper__block__country}>
                                    <div className={s.block__country}>
                                        <div className={s.country}>{item.Country}</div>
                                    </div>
                                </div>
                                <div className={s.wrapper__block__totalDeaths}>
                                    <div className={s.block__totalDeaths}>
                                        <div className={s.totalDeaths}>{item.TotalDeaths}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
                {modal ? <div className={s.modal__main}>
                    <div>
                        <div className={s.modal__country__block}>
                            <div className={s.modal__country}>{selectedCountry?.Country}
                            </div>
                            <div className={s.modal__totalConfirmed}>
                                <div className={s.heart}>
                                    <img src={heart}/>
                                </div>
                                <div className={s.totalConfirmed__text}>
                                    TotalConfirmed
                                </div>
                                <div className={s.totalConfirmed__count}>{selectedCountry?.TotalConfirmed}</div>
                            </div>
                        </div>
                        <div className={s.modal__totalDeaths}>
                            <div className={s.death}>
                                <img src={death}/>
                            </div>
                            <div className={s.totalDeaths__text}>
                                TotalDeaths
                            </div>
                            <div className={s.totalDeaths__count}>{selectedCountry?.TotalDeaths}</div>
                        </div>
                        <div className={s.modal__totalRecovered}>
                            <div className={s.ambulance}>
                                <img src={ambulance}/>
                            </div>
                            <div className={s.totalRecovered__text}>
                                TotalRecovered
                            </div>
                            <div className={s.totalRecovered__count}>{selectedCountry?.TotalRecovered}</div>
                        </div>
                        <div className={s.block__button}>
                            <button className={s.modal__button} onClick={() => setModal(false)}>OK</button>
                        </div>
                    </div>
                </div> : null}
            </div>
        </div>
    );
};



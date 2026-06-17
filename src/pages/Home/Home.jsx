import React from 'react'
import "./Home.scss"
import issyk from "../../assets/issyk-kol.png"
import altyn from "../../assets/altyn-arashan.png"
import karakol from "../../assets/karakol.png"
import kelsuu from "../../assets/kelsuu.png"
import gora from "../../assets/gora.png"
function Home() {
    return (
        <>
            <section className="hero">
                <div className="hero__content">
                    <h1>туры по кыргызстану</h1>
                    <p>туры еженедельно</p>
                    <p>индивидуальные путешествия</p>
                    <div className="hero__btns">
                        <div className="hero__btns-top">
                            <button>добавить тур</button>
                        </div>
                        <div className="hero__btns-bottom">
                            <button>Вход</button>
                            <button>регистрация</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="tours">
                <div className="tours__list">
                    <div className="tours__card">
                        <img src={issyk} alt="issyk" />
                        <h3>Тур вокруг Иссык-куля</h3>
                        <h4>Иссык-куль</h4>
                        <p className="tours__info">
                            <span className="gray">Все озеро</span> | <span className="green">5 дней</span>
                        </p>
                        <p className="tours__price">1 чел | 20,00 KGS</p>
                        <button className='tours__btn'>подробнее...</button>

                    </div>
                    <div className="tours__card">
                        <img src={altyn} alt="altyn" />
                        <h3>Долина Алтын-арашан</h3>
                        <h4>Иссык-кульлская Область</h4>
                        <p className="tours__info">
                            <span className="gray">вся долина</span> | <span className="green">2 дням</span>
                        </p>
                        <p className="tours__price">1 чел | 15,00 KGS</p>
                        <button className='tours__btn'>подробнее...</button>
                    </div>
                    <div className="tours__card">
                        <img src={karakol} alt="karakol" />
                        <h3>Каракольское ущелье</h3>
                        <h4>Иссык-кульлская Область</h4>
                        <p className="tours__info">
                            <span className="gray">все ущелье</span> | <span className="green">| 1 день</span>
                        </p>
                        <p className="tours__price">1 чел | 12,00 KGS</p>
                        <button className='tours__btn'>подробнее...</button>
                    </div>
                    <div className="tours__card">
                        <img src={kelsuu} alt="kelsuu" />
                        <h3> Озеро Кель-Суу</h3>
                        <h4> Нарынская Область</h4>
                        <p className="tours__info">
                            <span className="gray">Все озеро</span> | <span className="green">| 1 день</span>
                        </p>
                        <p className="tours__price">1 чел | 30,00 KGS</p>
                        <button className='tours__btn'>подробнее...</button>
                    </div>
                </div>
            </section>
            <section className="about">
                <div className="about__container">
                    <div className="about__image">
                        <img src={gora} alt="gora" />
                    </div>
                    <div className="about__content">
                        <h2>Путешествуйте без границ</h2>
                        <p>
                            Кыргызстан — это дикие ущелья, высокогорные озёра и термальные источники.
                            Мы организуем маршруты с готовой логистикой, пропусками и индивидуальными турами.
                        </p>
                        <button className="about__btn">
                            больше туров
                        </button>
                    </div>
                </div>
            </section>
            <div className="bobo">
                <button className="btn__otzyv">
                    оставить отзыв
                </button>
            </div>

        </>
    )
}

export default Home
import React from 'react'
import "./Home.scss"

function Home() {
    return (
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
    )
}

export default Home
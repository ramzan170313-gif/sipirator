import "./About.scss"
import onas from "../../assets/onas.png"

function About() {
    return (
        <>
            <section className="about-hero">
                <img src={onas} alt="onas" />
                <h1>о нас</h1>
                <p>мы организируем <br />
                    путешествия по <br />
                    кыргызстану, которые <br />
                    дарят незабывемые эмоции.
                </p>
            </section>

            <section className="who__we__are">
                <h2>Кто мы?</h2>
                <p>

                    Мы занимаемся туристическими поездками по <br />
                    Кыргызстану. Наши маршруты подходят как для <br />
                    новичков, так и для опытных путешественнико. <br />
                    Мы помогаем гостям увидеть самые красивые места <br />
                    страны и познакомиться с местной культурой.</p>

            </section>

            <section className="why-choose">
                <div className="why-choose__reasons">
                    <h3>Почему выбирают нас?</h3>
                    <ul>
                        <li> 🏔️ Уникальные маршруты </li>
                        <li>🚌 Комфортный транспорт</li>
                        <li>🧑‍🏫 Опытные гиды</li>
                        <li> 💰 Доступные цены</li>
                        <li>🛡️ Безопасность в путешествиях</li>
                    </ul>
                </div>
                <div className="why-choose__stats">
                    <h2>Статистика</h2>
                    <ul>
                        <li> 500+ туристов</li>
                        <li>  50+ маршрутов</li>
                        <li>  10 лет опыта</li>
                        <li>  98% довольных клиентов</li>
                    </ul>
                </div>
            </section>

            <section className="reviews">
                
            </section>
        </>
    )
}

export default About
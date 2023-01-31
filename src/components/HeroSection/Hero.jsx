import "./Hero.scss"

export default function Hero(){
    return(
    <main id="heroMain">
        <header>Hi, my name is</header>
        <section>
            <span className="name">Kevin Guchu</span>
            <p className="subtitle">I build things on the web, for the web.</p>
        </section>
        <section className="subhero">
            <p>
            I am a junior software developer specializing in 
            bringing designs to life, using code.
            </p>
            <p>
                Currently I am focused on building accessible websites.
                I am also learning backend development using Node and Express.
            </p>
            <p>
                I am looking for opportunities for junior roles or mentorship 
                opportunities.
            </p>
        </section>
        <button>Check out my CV</button>
    </main>
    )
}
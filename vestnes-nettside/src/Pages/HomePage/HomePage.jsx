import './HomePage.css'
import Tesla from '../../assets/Tesla-model-y-bg.avif'
// import redTesla from '/red-tesla.jpg'
import Bergen from '/inside-car-thumb.jpg'
import Åsane from '../../../public/inside-car.jpg'
import Stord from '/front-of-car.jpg'
import Form from '../../Components/form'
import fullCar from '/full-car.jpg'
// import Eivind from '../../../public/Eivind-bil.jpg'

export default function HomePage() {
    return (
        <>
            <div className='scroll-watcher'></div>

            <header class="primary-header">
                <img className='hero-img' src={fullCar} alt="" />
                <div className='hero-text-container'>
                    <h1 className='header-title'>Trenger du leie av bil <br /> til førerprøven?</h1>
                    <p className='header-subtext'>Bla nedover på nettsiden for mer informasjon!</p>
                </div>
            </header>

            <section className='content'>

                <div className='paragraph-container'>
                    <h1 className='paragraph-title'>Strøket i Bergen?</h1>
                    <p>Har du strøket i Bergen og synes å kjøre i Bergen er for vanskelig. Da vil en oppkjøring på Voss eller Stord bli annerledes for deg og mye lettere. Normalt er ventetiden for å kjøre mye lengre i Bergen enn i distriktet. Kontakt oss for bestilling av ny oppkjøring så vi kan planlegge sammen. Dette er et tilbud for deg som kjører automat</p>

                    <div className='velg-oppkjøring-karusell'>
                        <div className='oppkjørings-steder'>
                            <div>Bergen</div>
                            <div>Førde</div>
                            <div>Stord</div>
                            <div>Sogndal</div>
                            <div>Voss</div>
                            <div>Odda</div>
                            <div>Haugesund</div>
                        </div>
                        <div aria-hidden className='oppkjørings-steder'>
                            <div>Bergen</div>
                            <div>Førde</div>
                            <div>Stord</div>
                            <div>Sogndal</div>
                            <div>Voss</div>
                            <div>Odda</div>
                            <div>Haugesund</div>
                        </div>
                    </div>
                </div>

                {/* <img className='fade-in' src={Tesla} alt="" />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.               </p> */}



                <div className='scrolling-images-section'>
                    <div className='scrolling-title-container'>
                        <h1 className='scrolling-title'>Vi gjør førerprøven <br /> billig og smidig</h1>
                    </div>
                    <div className='scrolling-image-container'>
                        <img className='scrolling-image fade-in' src={Bergen} alt="" />
                        <img className='scrolling-image fade-in' src={Åsane} alt="" />
                        <img className='scrolling-image fade-in' src={Stord} alt="" />
                    </div>
                </div>

                <div className='info-cards-wrapper'>
                    <div className='info-card first-card'>
                        <h2 className='info-card-title'>Pris?</h2>
                        <p className='info-card-description'>Pris for å Leie bil til førerprøven er kr. 3000,- Vi holder til i Bergen så det blir tillegg i pris ved oppkjøring utenfor Bergen, ta kontakt for mer informasjon! </p>
                    </div>
                    <div className='info-card second-card'>
                        <h2 className='info-card-title'>Oppkjøring i Bergen</h2>
                        <p className='info-card-description'>velger du oppkjøring i Bergen bør du for å bli komfortabel med bilen/instrumenter ha en times tilvenningstur med bilen i forkant</p>
                    </div>
                    <div className='info-card third-card'>
                        <h2 className='info-card-title'>Oppkjøring utenfor Bergen</h2>
                        <p className='info-card-description'>velger du Voss til oppkjøringsted kjører du til Voss fra Bergen og er trygg på bil og instrumenter når vi ankommer Voss trafikkstasjon</p>
                    </div>
                </div>


                <div className='form-wrapper'>
                    <h2>Gleder oss til å høre fra deg, ta kontakt om du er klar til førerprøven!</h2>
                    <Form />
                </div>

            </section>

            <footer>
                <ul className='footer-list'>
                    <li className='footer-list-element'>Eivind Vestnes</li>
                    <li className='footer-list-element'>tlf: 95 88 88 25</li>
                    <li className='footer-list-element'>mail: eivind@vestnesbilutleie</li>
                </ul>
            </footer>
        </>

    )
}


import './HomePage2.css'
import Tesla from '../../assets/Tesla-model-y-bg.avif'
import redTesla from '/red-tesla.jpg'
import Bergen from '/Bergen.jpg'
import Åsane from '../../../public/Åsane.jpg'
import Stord from '/Stord.jpg'
// import Eivind from '../../../public/Eivind-bil.jpg'

export default function HomePage() {
    return (
        <>
            <div className='scroll-watcher'></div>

            <header class="primary-header">
                <img className='hero-img' src={redTesla} alt="" />
                <div className='hero-text-container'>
                    <h1 className='header-title'>Trenger du leie av bil <br /> til førerprøven?</h1>
                    <p className='header-subtext'>Vestnes har løsningen</p>
                </div>
            </header>

            <section className='content'>

                <div className='paragraph-container'>
                    <h1 className='paragraph-title'>Eivind Vestnes</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.               </p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.               </p>
                </div>

                <img className='fade-in' src={Tesla} alt="" />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.               </p>



                <div className='scrolling-images-section'>
                    <div className='scrolling-title-container'>
                        <h1 className='scrolling-title'>Velg hvor du ønsker å ta oppkjøring</h1>
                    </div>
                    <div className='scrolling-image-container'>
                        <img className='scrolling-image fade-in' src={Bergen} alt="" />
                        <img className='scrolling-image fade-in' src={Åsane} alt="" />
                        <img className='scrolling-image fade-in' src={Stord} alt="" />
                    </div>
                </div>

                <div className='paragraph-container'>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.               </p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.               </p>
                </div>

                <div className='info-cards-wrapper'>
                    <div className='info-card first-card'>
                        <h2 className='info-card-title'>Levering av bil</h2>
                        <p className='info-card-description'>Leie av bil inkluderer levering til oppkjøring i Drammen og Billingstad uten ekstra kostnad. Dersom du ønsker oppkjøring andre steder - for eksempel Asker omegn, Hønefoss, Kongsberg eller Tønsberg - ordner vi dette mot et tillegg i prisen.</p>
                    </div>
                    <div className='info-card second-card'>
                        <h2 className='info-card-title'>M/oppvarmingstime</h2>
                        <p className='info-card-description'>Møt opp på vår trafikkskole 45 minutter før oppkjøringen. Du får tid til å kjøre bilen, bli vant til den, og fjerne unødvendige nerver før prøven.</p>
                    </div>
                    <div className='info-card third-card'>
                        <h2 className='info-card-title'>U/oppvarmingstime</h2>
                        <p className='info-card-description'>Ønsker du å møte direkte på trafikkstasjonen? En av våre ansatte møter deg der ca. 10 minutter før førerprøven, slik at du kan justere sete og speil før du starter.</p>
                    </div>
                </div>

                <div className='form-container'>
                    <form action="">
                        <label htmlFor="fname">Navn:</label>
                        <input type="text" id="fname" name="fname"></input>
                        <label htmlFor="phone">Tlf:</label>
                        <input type="number" id="phone" name="lname"></input>
                        <label htmlFor="email">email:</label>
                        <input type="email" id="email" name="email"/>
                        <label htmlFor="melding">melding:</label>
                        <textarea id="message" name="message"></textarea>
                        <input type="submit" value="Submit"></input>
                    </form>
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


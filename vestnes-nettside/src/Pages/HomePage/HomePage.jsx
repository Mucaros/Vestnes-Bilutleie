import './HomePage2.css'
import Tesla from '../../assets/Tesla-model-y-bg.avif'

import Bergen from '../../../public/Bergen.jpg'
import Åsane from '../../../public/Åsane.jpg'
import Stord from '../../../public/Stord.jpg'
// import Eivind from '../../../public/Eivind-bil.jpg'

export default function HomePage() {
    return (
        <>
            <div className='scroll-watcher'></div>

            <header class="primary-header">
                <img className='hero-img' src={Tesla} alt="" />
                <div className='hero-text-container'>
                    <h1 className='header-title'>Leie av bil <br /> til førerprøven</h1>
                    <p className='header-subtext'>Skal du opp til førerprøven og trenger bil?</p>
                </div>
            </header>

            <section className='content'>

                <div className='paragraph-container'>
                    <h1 className='paragraph-title'>Eivind Vestnes</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.               </p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.               </p>
                </div>
                <img src={Tesla} alt="" />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.               </p>



                <div className='scrolling-images-section'>
                    <div className='scrolling-title-container'>
                        <h1 className='scrolling-title'>Velg hvor du ønsker å ta oppkjøring</h1>
                    </div>
                    <div className='scrolling-image-container'>
                        <img className='scrolling-image' src={Bergen} alt="" />
                        <img className='scrolling-image' src={Åsane} alt="" />
                        <img className='scrolling-image' src={Stord} alt="" />
                    </div>
                </div>

                <div className='info-cards-wrapper'>
                    <div className='info-card'>
                        <h2 className='info-card-title'>M/oppvarmingstime</h2>
                        <p className='info-card-description'>Møt opp på vår trafikkskole 45 minutter før oppkjøringen. Du får tid til å kjøre bilen, bli vant til den, og fjerne unødvendige nerver før prøven.</p>
                    </div>
                    <div className='info-card yellow'>
                        <h2 className='info-card-title'>U/oppvarmingstime</h2>
                        <p className='info-card-description'>Ønsker du å møte direkte på trafikkstasjonen? En av våre ansatte møter deg der ca. 10 minutter før førerprøven, slik at du kan justere sete og speil før du starter.</p>
                    </div>
                </div>

                <img src={Tesla} alt="" />
                <div className='paragraph-container'>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.               </p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.               </p>
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


import './HomePage2.css'
import Tesla from '../../assets/Tesla-model-y-bg.avif'

/*import Button from '../../Components/Button.jsx'
import ParagraphImg from '../../Components/Paragraph+img.jsx'
import Bergen from '../../../public/Bergen.jpg'
import Åsane from '../../../public/Åsane.jpg'
import Stord from '../../../public/Stord.jpg'
import Eivind from '../../../public/Eivind-bil.jpg'*/

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

                <img src={Tesla} alt="" />

                <div className='paragraph-container'>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.               </p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.               </p>
                </div>
            </section>

            
        </>

    )
}


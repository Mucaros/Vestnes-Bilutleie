import './HomePage.css'
import Button from '../../Components/Button.jsx'
import ParagraphImg from '../../Components/Paragraph+img.jsx'
import Tesla from '../../assets/Tesla-model-y-bg.avif'
import Bergen from '../../../public/Bergen.jpg'
import Åsane from '../../../public/Åsane.jpg'
import Stord from '../../../public/Stord.jpg'

export default function HomePage(){
    return(
        <>
        <div className='background-container'>
            <div className='header-main-text-container'>
                <img className='parallax-effect-img' src={Tesla} alt="does not work"/>
                <h1 className='img-header-title'>Trenger du <br/> bil til oppkjøring?</h1>
                <p className='header-support-text'>vi kan hjelpe med "det og det"</p>
                <Button placeholder='Ta Kontakt'/>
            </div>
            <ul className='places-list'>
                <li>Åsane</li>
                <li>Bergen</li>
                <li>Voss</li>
                <li>Stavanger</li>
                <li>Stord</li>
            </ul>
        </div>
        <div className='paragraph-container'>
            <ParagraphImg 
            header='Big header' 
            text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' 
            img={Tesla}/>
        </div>
       <div className='image-location-container'>
            <div className='left-side-text'>
                <h1 className='text-should-stay-fixed'>Du kan ta lappen på alle disse stedene</h1>
            </div>
            <div className='right-side-images'>
                <img className='moving-img' src={Bergen} alt="" />
                <img className='moving-img' src={Åsane} alt="" />
                <img className='moving-img' src={Stord} alt="" />
            </div>
       </div>

       <div className='TEST'>
            
       </div>
        </>
    )
}
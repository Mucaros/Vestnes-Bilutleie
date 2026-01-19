import './HomePage.css'
import Button from '../../Components/Button.jsx'
import ParagraphImg from '../../Components/Paragraph+img.jsx'

export default function HomePage(){
    return(
        <>
        <div className='background-container'>
            <div className='header-main-text-container'>
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
            img='./../assets/Tesla-model-y-bg.avif'/>
        </div>
       
        </>
    )
}
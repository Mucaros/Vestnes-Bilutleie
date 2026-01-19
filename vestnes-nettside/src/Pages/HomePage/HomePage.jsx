import './HomePage.css'
import Button from '../../Components/Button.jsx'

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
       
        </>
    )
}
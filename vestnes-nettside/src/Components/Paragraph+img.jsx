import './Paragraph+img.css'

export default function ParagraphImg( {header, text, img} ){
    return(
        <div className='container'>
            <div className='text-container'>
                <h1 className='paragraph-header'>{header}</h1>
                <p className='paragraph-text'>{text}</p>  
            </div>
            <img className='paragraph-image' src={img} alt='' />
        </div>
    )
}
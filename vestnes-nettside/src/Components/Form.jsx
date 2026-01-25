import './Form.css'

export default function Form() {
    return (
        <div className='form-container'>
            <form action="">
                <label htmlFor="fname">Navn:</label>
                <input type="text" id="fname" name="fname"></input>
                <label htmlFor="phone">Tlf:</label>
                <input type="number" id="phone" name="phone"></input>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
                <label htmlFor="message">Melding:</label>
                <textarea id="message" name="message"></textarea>
                <button className='submit-button' type="submit" value="submit">Send</button>
            </form>
        </div>
    )
}
import './Form.css'

export default function Form() {
    return (
        <div className='form-container'>
            <form action="https://api.web3forms.com/submit" method='post'>
                <input type="hidden" name="access_key" value="8cde912f-d6e9-4824-8b8a-664d9ad3ad00"></input>
                <label htmlFor="fname">Navn:</label>
                <input type="text" id="fname" name="fname" required></input>
                <label htmlFor="phone">Tlf:</label>
                <input type="number" id="phone" name="phone" required></input>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required/>
                <label htmlFor="message">Melding:</label>
                <textarea id="message" name="message" required></textarea>
                <button className='submit-button' type="submit" value="submit" required>Send</button>
            </form>
        </div>
    )
}
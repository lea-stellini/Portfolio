import './Contact.css'
import Divider from '../../components/Divider/Divider';
import Button from '../../components/Button/Button';

const Contact = () => {

  return (
    <div id="contact">
        <Divider />
        <div className='contact__container' >
            <h2>Contact</h2>
            <p>N'hésitez pas à me contacter via ce formualire, ou par <a href="mailto:lea.stellini@gmail.com" className='email'>email</a> !</p>
            <form
                action="https://formsubmit.co/lea.stellini@gmail.com"
                method="POST"
                className='form'
                >
                
                <div className='form__input'>
                    <label>Email</label>
                    <input type="email" placeholder="Email" name="email" required  className='form__email'/>
                </div>
                <div className='form__input'>
                    <label>Message</label>
                    <textarea placeholder="Votre message" name="message" required className='form__message' />
                </div>
                <div className='form__btn'>
                    <Button title="Envoyer" />
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact
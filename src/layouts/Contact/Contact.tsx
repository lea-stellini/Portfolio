import './Contact.css'
import Divider from '../../components/Divider/Divider';
import Button from '../../components/Button/Button';

const Contact = () => {

  return (
    <div id="contact">
        <Divider />
        <div className='contact__container' >
            <h2>Contact</h2>
            <p>Lorem ipsum dolor sit amet,usmod tempor incididunt</p>
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
                <Button title="Envoyer" />
            </form>
        </div>
    </div>
  )
}

export default Contact
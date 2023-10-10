import './Button.css'

type Props = {
   title: string;
   onClick?: (e : React.MouseEvent) => void;
}

function Button({title, onClick} : Props) {
     return(
      <div className='btn__container'>
         <button className="btn" onClick={onClick}>{title}</button>
      </div>
        
     )
}

export default Button
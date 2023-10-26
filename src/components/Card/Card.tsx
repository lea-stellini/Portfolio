import './Card.css';

type Props = {
    title: string;
    year: string;
    where?: string;
    skills: string[];
    inverted?: boolean;
 }

function Card({title, year, where, skills, inverted} : Props) {
    return(
        <div className={`${inverted ? "card__container__inverted" : "card__container"}`}>
            <div className="card" >
                <h3>{title}</h3>
                <p>{where}</p>
                <p>{year}</p>
                <ul className='card__list'>
                    {
                        skills?.map((skill, index) => {
                            return(
                                <li key={"skill"+index}><p>{skill}</p></li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Card
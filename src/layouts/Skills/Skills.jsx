import Divider from '../../components/Divider/Divider';
import Button from '../../components/Button/Button';
import './Skills.css';

function Skills(){
    
    return(
        <>
            <Divider />
            <div className='skills__container'>
                <h2>Compétences</h2>
                <div className='skills'>
                    <div className='skill'>
                        <h3>Front-End</h3>
                        <div className='skill__grid'>
                            <img src="../../../images/skills/html5.svg"/>
                            <img src="../../../images/skills/react.svg"/>
                            <img src="../../../images/skills/vuejs.svg"/>
                            <img src="../../../images/skills/js.svg"/>
                            <img src="../../../images/skills/css3-alt.svg"/>
                            <img src="../../../images/skills/sass.svg"/>
                            <img src="../../../images/skills/bootstrap.svg"/>
                        </div>
                    </div>
                    <div className='skill'>
                        <h3>Back-End</h3>
                        <div className='skill__grid'>
                            <img src="../../../images/skills/node.svg"/>
                            <img src="../../../images/skills/Expressjs.png"/>
                            <img src="../../../images/skills/MongoDB.png"/>
                        </div>
                    </div>
                    <div className='skill'>
                        <h3>Outils</h3>
                        <div className='skill__grid'>
                            <img src="../../../images/skills/figma.svg"/>
                            <img src="../../../images/skills/git.svg"/>
                            <img src="../../../images/skills/gitlab.svg"/>
                            <img src="../../../images/skills/chromeDevTool.png"/>
                        </div>
                    </div>
                </div>
                <div className='btn__cv'>
                    <Button title="CV"/>
                </div>
            </div>
        </>
    )

}

export default Skills
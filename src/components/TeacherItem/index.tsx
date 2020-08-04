import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'
function TeacherItem() {
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars0.githubusercontent.com/u/23136287?s=460&u=e3fb561af6ea5bb1f5ac2ef9c6691ab0f484544f&v=4" alt="Ronald Lopes"/>
                        <div>
                            <strong>Ronald Lopes</strong>
                            <span>Quimica</span>
                        </div>
                    </header>
                    <p>
                        Entusiasta das melhores tecnologias de química avançada.
                        <br/><br/>
                        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
                    </p>
                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$80,00</strong>
                        </p>
                        <button type='button'>
                            <img src={whatsappIcon} alt="whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    )
}


export default TeacherItem
import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem(){
   return(
      <article className="teacher-item">
                    <header>
                        <img src="https://avatars2.githubusercontent.com/u/66737641?s=460&u=2219c22fdb06328d7fa7d47de4360aad59eda22b&v=4" alt="Avatar" />
                        <div>
                            <strong>Rodrigo Rangel</strong>
                            <span>Javascript</span>
                        </div>
                    </header>
                    <p>
                        texto texto texto texto texto texto texto texto texto texto texto texto texto texto <br /><br />
                        texto texto texto texto texto texto texto texto texto texto texto texto texto texto 
                    </p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 20,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Entrar em contato"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
   )
}

export default TeacherItem
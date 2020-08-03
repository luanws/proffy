import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
          alt="Professor 1"
        />
        <div>
          <strong>Nome do professor</strong>
          <span>Matéria</span>
        </div>
      </header>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      <br />
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      It has survived not only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
      Aldus PageMaker including versions of Lorem Ipsum.
    </p>
      <footer>
        <p>
          Preço/hora
      <strong>R$80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp" />
        Entrar em contato
      </button>
      </footer>
    </article>
  )
}

export default TeacherItem
import "./ItemCardapio.css";
import PropTypes from 'prop-types';

function ItemReceita({title , description , price}) {
  return (
    <article className="cardapio-item">
      <h3>{title}</h3>
      <p> {description}</p>
      <span> {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)}</span>
      <button>
        <img
          src="\botao.webp"
          alt="Whatsapp"
          width="15px"
          style={{ marginRight: "5px" }}
        />
        Pedir no Whatsapp
      </button>
    </article>
  );
}

ItemReceita.PropTypes = {

title: PropTypes.string,
description: PropTypes.string,
price: PropTypes.number,


}

export default ItemReceita;

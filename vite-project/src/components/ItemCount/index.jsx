import {useState} from 'react';

function ItemCount () {
    const [numero, setNumero]=useState(0);

    const sumar = () => {
        setNumero(numero + 1);
      };

    const restar = () => {
        setNumero(numero - 1);
      };

    return (
        <div>
            <button onClick={restar}>-</button><p>{numero}</p><button onClick={sumar}>+</button>
        </div>
    )
}

export default ItemCount
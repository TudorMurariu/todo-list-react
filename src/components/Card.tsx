import { Item } from "../Item";

interface CardProps {
    item: Item;
    func: (id: number) => void;
}

function Card( {item: { title, text, id }, func} : CardProps) {
    return(
        <div className="card" key={id}>
            <h2 className='title'>
                <b>Title</b>: {title}
            </h2>
            <p className='text'>
                <b>Text:</b> {text}
            </p>
            <p className='text'>
                <b>Id:</b> {id} {/* shoild never show the id like i do here */}
            </p>

            <button onClick={() => func(id)}>REMOVE</button>
        </div>
    );
}

export default Card;
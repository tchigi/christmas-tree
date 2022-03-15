import './Shape.scss'
import {ShapeItem} from "./ShapeItem";
export const Shape = ({ filterByShape }) => {
    const shapes = [
        {value: 'bell', id: 0, text: 'Колокол'},
        {value: 'ball', id: 1, text: 'Шар'},
        {value: 'cone', id: 2, text: 'Шишка'},
        {value: 'star', id: 3, text: 'Звезда'},
        {value: 'snow', id: 4, text: 'Снежинка'},
        {value: 'figure', id: 5, text: 'Фигурки'},
    ]

    return (
        <div className="shape-container">
            <div className="shape-text settings__page__text">Форма</div>
            <div className="shape-item-container">
                {shapes.map((item) => (<ShapeItem filterByShape={filterByShape} value={item.value} key={item.id} text={item.text} />))}
            </div>
        </div>
    )
}

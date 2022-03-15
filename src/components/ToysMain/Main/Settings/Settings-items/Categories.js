import './Categories.scss'
export const Categories = () => {
    return (
        <div className={"categories-container"}>
            <div className={"categories-text settings__page__text"}>Категории</div>
            <div className={"categories-item-container"}>
                <div className={"categories-item"}>
                    <input className={"categories-checkbox"} type={"checkbox"} name="" id=""/>
                    <div className={"categories-item-text second__settings__page__text"}>Все</div>
                </div>
            </div>
        </div>
    )
}

import './Size.scss'
export const Size = ({ filterBySize }) => {
    const [getFilterBySize,setFilterBySize] = filterBySize
  return (
      <div className="size-container">
        <div className="size-text settings__page__text">Размер</div>
        <div className="size-item-container">
          <div className="size__item">
            <input type="checkbox" name="" value="big" id="" checked={getFilterBySize.includes('big')} onChange={(e) => {
                setFilterBySize((prevState) => {
                    if (prevState.includes(e.target.value)) {
                        return prevState.filter((item) => {
                            return item !== e.target.value
                        })
                    } else {
                        return [...prevState, e.target.value]
                    }
                })
            }} className="settings__checkbox"/>
            <div className="size__item__text second__settings__page__text">Большой</div>
          </div>
          <div className="size__item">
            <input type="checkbox" name="" value="medium" id="" className="settings__checkbox" checked={getFilterBySize.includes('medium')} onChange={(e) => {
                setFilterBySize((prevState) => {
                    if (prevState.includes(e.target.value)) {
                        return prevState.filter((item) => {
                            return item !== e.target.value
                        })
                    } else {
                        return [...prevState, e.target.value]
                    }
                })
            }}/>
            <div className="size__item__text second__settings__page__text">Средний</div>
          </div>
          <div className="size__item">
            <input type="checkbox" name="" value="small" id="" className="settings__checkbox" checked={getFilterBySize.includes('small')} onChange={(e) => {
                setFilterBySize((prevState) => {
                    if (prevState.includes(e.target.value)) {
                        return prevState.filter((item) => {
                            return item !== e.target.value
                        })
                    } else {
                        return [...prevState, e.target.value]
                    }
                })
            }}/>
            <div className="size__item__text second__settings__page__text">Маленький</div>
          </div>
        </div>
      </div>
  )
}

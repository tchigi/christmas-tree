import './Color.scss'
export const Color = ({ filterByColor }) => {

    const [getFilterByColor,setFilterByColor] = filterByColor
  const colors = [
      {name: 'white', id: 0},
      {name: 'yellow', id: 1},
      {name: 'red', id: 2},
      {name: 'blue', id: 3},
      {name: 'green', id: 4},
  ]
  return (
      <div className="color-container">
          <div className="color-text settings__page__text">Цвет</div>
          <div className="color-item-container">
              {colors.map((item) => (
                  <label className={`color__label color__label__${item.name}`}>
                      <input value={item.name} type={'checkbox'} className={`color-item-${item.name} color__item`}
                             checked={getFilterByColor.includes(item.name)} onChange={(e) => {
                                 setFilterByColor((prevState) => {
                                     if (prevState.includes(e.target.value)) {
                                         return prevState.filter((item) => {
                                             return item !== e.target.value
                                         })
                                     } else {
                                         return [...prevState, e.target.value]
                                     }
                                 })
                             }}
                      />
                      <span className={'color__span'}></span>
                  </label>))}
          </div>
      </div>
  )
}

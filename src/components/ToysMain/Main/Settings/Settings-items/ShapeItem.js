export const ShapeItem = ({ value, text, filterByShape }) => {
    const [getFilterByShape,setFilterByShape] = filterByShape



    return (
      <div  className={`shape-item-${value} shape__item`}>
          <label className={'shape__label'}>
              <input type="checkbox" value={value} id={value} className={`shape-checkbox-${value} shape__checkbox__item`}
                        checked={getFilterByShape.includes(`${value}`)} onChange={(e) => {
              setFilterByShape((prevState) => {
                  if (prevState.includes(e.target.value)) {
                      return prevState.filter((item) => {
                          return item !== e.target.value
                      })
                  } else {
                      return [...prevState, e.target.value]
                  }
              })}}/>
              <span className={'shape__span'}></span>
          </label>
      </div>
  )
}

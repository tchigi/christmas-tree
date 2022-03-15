import './ResetBtn.scss'
export const ResetBtn = ({ sortBy,search,filterBySize,filterByShape,filterByColor,sortByRangeAmount,filterByFavorite,sortByRangeYear }) => {
    const defaultFilters = () => {
        sortBy[1]('1')
        search[1]('')
        filterBySize[1]([])
        filterByShape[1]([])
        filterByColor[1]([])
        sortByRangeAmount[1]({min: 1,max: 12})
        filterByFavorite[1]([])
        sortByRangeYear[1]({min: 1940,max: 2020})
    }

  return (
      <div className="settings-button-container">
          <button className="settings__button settings__buttons__item__text"
                  onClick={defaultFilters}>Сбросить фильтры</button>
      </div>
  )
}

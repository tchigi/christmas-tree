import './Favorite.scss'
export const Favorite = ( { filterByFavorite } ) => {
    const [getFilterByFavorite,setFilterByFavorite] = filterByFavorite

  return (
      <div className="favorite-container">
        <input type="checkbox" className="settings__checkbox" value={'Да'}
               checked={getFilterByFavorite.includes('Да')} onChange={(e) => {
                   setFilterByFavorite((prevState) => {
                       if (prevState.includes(e.target.value)) {
                           return prevState.filter((item) => {
                               return item !== e.target.value
                           })
                       } else {
                           return [...prevState, e.target.value]
                       }
                   })
               }}/>
        <div className="favorite-text second__settings__page__text">Только любимые</div>
      </div>
  )
}

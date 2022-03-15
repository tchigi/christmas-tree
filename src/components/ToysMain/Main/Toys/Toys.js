import './Toys.scss'
import {ToysItem} from "./ToysItem";
export const Toys = ({ data, favoriteToys }) => {

  return (
      <div className="toys-container">
          <div className="toys-title">
              <span>Игрушки</span>
              <div className={'favorite-text favorite-count-container'}><span>Избранные: </span><span>{favoriteToys[0].length}</span></div>
          </div>
          <div className="toys-item-container">
              {
              data.length < 1 ? <div className={'settings__page__text'}>Извините, совпадений не обнаружено</div>: data.map((item) =>
                  (<ToysItem data={item} favoriteToys={favoriteToys}/>))
              }
          </div>
      </div>
  )
}

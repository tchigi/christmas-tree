import './ToysItem.scss'
import toysImport from '../../../../assets/toys/ToysImport'
export const ToysItem = ({ data, favoriteToys }) => {
  const toysInfo = [
      {value: "Количество:", name: 'toys-amount', id: 0, text: data.count},
      {value: "Год покупки:", name: 'toys-year', id: 1, text: data.year},
      {value: "Форма игрушки:", name: 'toys-shape', id: 2, text: data.shape},
      {value: "Цвет игрушки:", name: 'toys-color', id: 3, text: data.color},
      {value: "Размер игрушки:", name: 'toys-size', id: 4, text: data.size},
      {value: "Любимая:", name: 'toys-favorite', id: 5, text: data.favorite ? 'Да' : 'Нет'},
  ]
    const ToysInfoComponent = () => {
        return (
            toysInfo.map((item)=>(
                <div className="toys__info__text">
                    {item.value}
                    <p className={item.name}>{item.text}</p>
                </div>
            ))
        )
    }

  return (
      <div className="toys-item" style={favoriteToys[0].includes(data.num) ? {backgroundColor: 'red'} : {}}
           onClick={(event) => {
               if (favoriteToys[0].length < 20) {
                   if (favoriteToys[0].includes(data.num)) {
                       favoriteToys[1]((prev) => (prev.filter((i) => (data.num !== i))))
                   } else {
                       favoriteToys[1]((prev) => ([...prev,data.num]))
                   }
               } else {
                   alert("Извините, все слоты заполнены")
               }
           }}>
          <div className="toys-item-title">{data.name}</div>
          <img className="toys-item-img" src={toysImport[Number(data.num)]} alt=""/>
          <div className="toys-info-container">
              <ToysInfoComponent/>
          </div>
      </div>
  )
}


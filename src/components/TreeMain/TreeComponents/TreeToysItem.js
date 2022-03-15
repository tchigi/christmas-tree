import toysImport from "../../../assets/toys/ToysImport";
import {target} from "nouislider";
export let currentToy

export const TreeToysItem = ({ data, favoriteToys, elementPageXy, isArea, mainContainer, index }) => {
    const [getIsArea,setIsArea] = isArea
    const [getElementPageXy,setElementPageXy] = elementPageXy

    const TreeToysItemCount = () => {
      return (
          <div className={'tree-toys-item-count'} id={`${data.num}-count`}>{data.count}</div>
      )
    }

    function dragStartHandler(e) {
        currentToy = e.currentTarget
        isArea[1] = false
        isArea[0] = false
    }

    function dragEndHandler(e) {
        if (isArea[0] && currentToy) {
            const imageMap = document.getElementById('image-map');
            imageMap.after(currentToy);
            currentToy.style.left =
                elementPageXy[0][0] - mainContainer.current.getBoundingClientRect().left - 24 + 'px';
            currentToy.style.top =
                elementPageXy[0][1] - mainContainer.current.getBoundingClientRect().top -window.scrollY + 10 +'px'
        } else {
            const selectToyContainer = document.getElementById(`${currentToy.id.split('-', 1).join('')}`);
            console.log(currentToy.id.split('-', 1).join(''))
            selectToyContainer.append(currentToy);
            currentToy.style.left =
                'calc(50% - 24px)';
            currentToy.style.top =
                'calc(50% - 24px)'
        }
    }


    const TreeToysImage = (index) => {
      return (
          <img id={`${data.num}-${index.index}`}
              src={toysImport[Number(data.num)]}
               value={data.count}
               alt="" className={'tree-toys-item-img'}
               draggable={true}
               onDragStart={(e) => {dragStartHandler(e)}}
               onDragEnd={(e) => {dragEndHandler(e)}}
               />
      )
    }

    return (
        <div className={'tree-toys-item'} id={data.num}>
            {[...Array(Number(data.count))].map((elem, index)=> (
                <TreeToysImage index={index}/>
                )
            )}
            <TreeToysItemCount/>
        </div>
    )
}

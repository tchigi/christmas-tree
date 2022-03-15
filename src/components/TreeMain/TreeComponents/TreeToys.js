import './TreeToys.scss'
import treesImport from "../../../assets/tree/TreesImport";
import {TreeToysItem} from "./TreeToysItem";
import data from "../../../data";
export const TreeToys = ({ favoriteToys, data, elementPageXy, isArea, mainContainer }) => {
    return (
        <div className={'tree-toys-wrapper'}>
            <div className={'tree-toys-favorite-wrapper'}>
                <div className={'tree-toys-title tree__title__text'}>Игрушки</div>
                <div className={'tree-toys-items-wrapper'}>
                    {favoriteToys[0].length > 0 ?
                        data.map((item) => {
                            if (favoriteToys[0].includes(item.num)) {
                                return <TreeToysItem mainContainer={mainContainer} isArea={isArea} elementPageXy={elementPageXy} data={item} favoriteToys={favoriteToys}/>
                            }}) : data.map((item) => {
                                if (Number(item.num) < 21) {
                                    return <TreeToysItem mainContainer={mainContainer} data={item} favoriteToys={favoriteToys} isArea={isArea} elementPageXy={elementPageXy}/>
                            }}
                            )}
                </div>
            </div>
            <div className={'tree-toys-dressed'}>
                <div className={'dressed-tree-title tree__title__text'}>Вы нарядили</div>
                <div className={'dressed-tree-items-wrapper'}>
                    <button className={'tree-select-item'}>
                        <div className={'tree-select-item-img'} style={{backgroundImage: `url(${treesImport[1]})`}}></div>
                    </button>
                    <button className={'tree-select-item'}>
                        <div className={'tree-select-item-img'} style={{backgroundImage: `url(${treesImport[2]})`}}></div>
                    </button>
                    <button className={'tree-select-item'}>
                        <div className={'tree-select-item-img'} style={{backgroundImage: `url(${treesImport[3]})`}}></div>
                    </button>
                    <button className={'tree-select-item'}>
                        <div className={'tree-select-item-img'} style={{backgroundImage: `url(${treesImport[4]})`}}></div>
                    </button>
                    <button className={'tree-select-item'}>
                        <div className={'tree-select-item-img'} style={{backgroundImage: `url(${treesImport[5]})`}}></div>
                    </button>
                    <button className={'tree-select-item'}>
                        <div className={'tree-select-item-img'} style={{backgroundImage: `url(${treesImport[6]})`}}></div>
                    </button>
                </div>
            </div>
        </div>

    )
}

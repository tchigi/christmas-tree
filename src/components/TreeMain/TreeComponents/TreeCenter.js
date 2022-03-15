import './TreeCenter.scss'
import treesImport from '../../../assets/tree/TreesImport'
import bgImport from '../../../assets/bg/BgImport'
import {Garland} from "./Garland";
import {target} from "nouislider";
import {currentToy} from "./TreeToysItem";

export const TreeCenter = ({ currentTree, currentBg,currentGarland,isArea, elementPageXy, mainContainer }) => {
    const [getCurrentTree,setCurrentTree] = currentTree
    const [getCurrentBg,setCurrentBg] = currentBg
    const [getIsArea,setIsArea] = isArea
    const [getElementPageXy,setElementPageXy] = elementPageXy
    function dragEndHandler(e){ }

    function dragOverHandler(e){
        e.preventDefault();
    }

    function dropHandler(e) {
        e.preventDefault();
        isArea[1] = true
        isArea[0] = true
        elementPageXy[1] = [e.pageX, e.pageY]
        elementPageXy[0] = [e.pageX, e.pageY]
        // const imageMap = document.getElementById('image-map');
        // imageMap.after(currentToy)
    }

    return (
        <div className={'tree-center-wrapper'} style={{backgroundImage: `url(${bgImport[getCurrentBg]})`}}>
            <div className={'snowflake'}></div>
                    <map name="image-map" className={'image-map'} ref={mainContainer}>
                        <area
                         id={'image-map'}
                          onDragLeave={(e) => {dragEndHandler(e)}}
                          onDragEnd={(e) => {dragEndHandler(e)}}
                          onDragOver={(e) => {dragOverHandler(e)}}
                          onDrop={(e) => {dropHandler(e)}}
                          className={'image-map-container'}
                          alt=""
                          coords="251,20,202,89,167,134,121,214,94,351,37,433,27,550,53,592,96,630,137,669,200,680,268,681,313,679,366,673,410,655,443,617,457,557,436,456,405,358,380,272,381,237,347,160"
                          shape="poly"/>
                    </map>
            <div className={'tree-center-item'}  style={{backgroundImage: `url(${treesImport[getCurrentTree]})`}}>
                <img src={`${treesImport[1]}`} alt="" useMap={'#image-map'} className={'tree-blur'}/>
            </div>
            <Garland currentGarland={currentGarland}/>
        </div>
    )
}

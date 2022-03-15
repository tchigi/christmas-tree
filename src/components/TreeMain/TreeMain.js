import "./TreeMain.scss"
import {TreeSettings} from "./TreeComponents/TreeSettings";
import {TreeCenter} from "./TreeComponents/TreeCenter";
import {TreeToys} from "./TreeComponents/TreeToys";
import data from "../../data";
import {useRef, useState} from "react";
import {currentToy} from "./TreeComponents/TreeToysItem";
export const TreeMain = ({ currentPage, favoriteToys }) => {
    const currentTree = useState('1')
    const currentBg = useState('1')
    const currentGarland = useState('')
    const [getCurrentPage,setCurrentPage] = currentPage
    const isArea = useState(false)
    const elementPageXy = useState([])
    const mainContainer = useRef(null)

    function dragEndHandler(e) {
        const selectToyContainer = document.getElementById(`${currentToy.id.split('-', 1)}`);
        const selectToyCount = document.getElementById(`${currentToy.id.split('-', 1)}-count`);
        selectToyCount.textContent = String(selectToyContainer.childNodes.length - 1);
    }

    return (
        <main className={'tree-main'} onDragEnd={(e) => dragEndHandler(e)}>
            <TreeSettings currentTree={currentTree} currentBg={currentBg} currentGarland={currentGarland}/>
            <TreeCenter mainContainer={mainContainer} currentTree={currentTree} currentBg={currentBg} currentGarland={currentGarland} isArea={isArea} elementPageXy={elementPageXy}/>
            <TreeToys mainContainer={mainContainer} favoriteToys={favoriteToys} data={data} isArea={isArea} elementPageXy={elementPageXy}/>
        </main>
    )
}

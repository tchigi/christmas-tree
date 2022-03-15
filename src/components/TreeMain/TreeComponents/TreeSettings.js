import './TreeSettings.scss'
import treesImport from '../../../assets/tree/TreesImport'
import bgImport from '../../../assets/bg/BgImport'
import Music from '../../../assets/audio/audio.mp3'
import * as url from "url";
export const TreeSettings = ({ currentTree,currentBg,currentGarland }) => {
    const [getCurrentTree,setCurrentTree] = currentTree
    const [getCurrentBg,setCurrentBg] = currentBg
    const [getCurrentGarland,setCurrentGarland] = currentGarland
    const audio = new Audio(Music)
    let isFalling = false
    let interval

    function addTreeButtons() {
        const array = [1,2,3,4,5,6]
        return (
            array.map((i) => (
                <button className={'tree-select-item'} value={`${i}`}
                        onClick={(e) => {
                            setCurrentTree(e.target.value)
                        }}>
                    <div className={'tree-select-item-img'} style={{backgroundImage: `url(${treesImport[i]})`}}></div>
                </button>
            ))
        )
    }

    function addBgButtons() {
        const array = [1,2,3,4,5,6,7,8,9,10]
        return (
            array.map((i) => (
                <button className={'tree__bg__item'} value={`${i}`} style={ {backgroundImage: `url(${bgImport[i]})`}} onClick={(e)=> {
                    setCurrentBg(e.target.value)
                }}></button>
            ))
        )
    }

    function addGarlandButtons() {
        const array = ['multicolor','red','blue','green','yellow']
        return (
            array.map((i) => (
                <button className={`tree__garland__item garland-${i}`} value={i} onClick={(e) => {
                    setCurrentGarland(e.target.value)
                }}></button>
            ))
        )
    }

    function createSnowFlake() {
        const snow_flake = document.createElement('i');
        snow_flake.classList.add('fas');
        snow_flake.classList.add('fa-snowflake');
        snow_flake.style.left = Math.random() * 700 + 'px';
        snow_flake.style.animationDuration = Math.random() * 3 + 5 + 's';
        snow_flake.style.opacity = Math.random();
        snow_flake.style.fontSize = Math.random() * 10 + 10 + 'px';

        document.body.querySelector('.snowflake').appendChild(snow_flake);

        setTimeout(() => {
            snow_flake.remove();
        }, 5000)
    }

    return (
        <div className={'tree-settings-wrapper'}>
            <div className={'tree-utilities-wrapper'}>
                <div className={"volume"} onClick={() => {
                   if (audio.currentTime > 0) {
                       audio.pause()
                       audio.currentTime = 0
                   } else audio.play()
                }}></div>
                <div className={"snow"} onClick={() => {
                    if (isFalling) {
                        clearInterval(interval)
                        isFalling = false
                    } else {
                        isFalling = true
                        interval = setInterval(createSnowFlake, 50)
                    }
                }}></div>
            </div>
            <div className={'tree-select-wrapper'}>
                <div className={'tree-select-title tree__title__text'}>Выберите  Ёлку</div>
                <div className={'tree-select-items-wrapper'}>
                    {addTreeButtons()}
                </div>
            </div>
            <div className={'tree-bg-select-wrapper'}>
                <div className={'tree-bg-title tree__title__text'}>Выберите фон</div>
                <div className={'tree-bg-items-wrapper'}>
                    {addBgButtons()}
                </div>
            </div>
            <div className={'tree-bg-garland-wrapper'}>
                <div className={'tree-garland-title tree__title__text'}>Гирлянда</div>
                <div className={'tree-garland-items-wrapper'}>
                    {addGarlandButtons()}
                    <label className="switch">
                        <input type="checkbox" checked={currentGarland[0] !== ''} onChange={(e) => {
                            if (e.target.checked) {
                                currentGarland[1]('multicolor')
                            } else {
                                currentGarland[1]('')
                            }
                        }}/>
                            <span className="toggle-slider round"></span>
                    </label>
                </div>
            </div>
            <div className={'tree-buttons-wrapper'}>
                <button className={'settings__button settings__buttons__item__text tree__buttons'} onClick={(e) => {
                    currentGarland[1]('')
                    currentTree[1]('1')
                    currentBg[1]('1')
                }}>Сбросить настройки</button>
            </div>
        </div>
    )
}

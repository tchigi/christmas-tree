import './Utilities.scss'
import Music from '../../../../../assets/audio/audio.mp3'
import {useEffect, useRef} from "react";
export const Utilities = ({ search }) => {
    const audio = new Audio(Music)
    const inputRef = useRef(null)
    const [getSearch, setSearch] = search
    useEffect(() => {
        window.addEventListener('load',() => {
           inputRef.current.focus()
        })
    },[])
    return (
        <div className={'utilities-container'}>
            <div className={"volume"} onClick={() => {
                if (audio.currentTime > 0) {
                    audio.pause()
                    audio.currentTime = 0
                } else audio.play()
            }}></div>
            <div className={"snow"}></div>
            <div className={"search-container"}>
                <input type={"text"} className={"search-input"} autoComplete={'off'} placeholder={"Поиск"}
                       value={getSearch} ref={inputRef} onChange={(e)=>{
                           setSearch(e.target.value)
                       }}/>
                <div className={"search-img"}></div>
            </div>
        </div>
    )
}

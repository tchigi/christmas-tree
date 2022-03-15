import './Garland.scss'

export const Garland = ({ currentGarland }) => {
    const [getCurrentGarland,setCurrentGarland] = currentGarland

    return (
        <div className={'garland-wrapper'}>
            <ul className="lightrope lightrope1">
                <li className={`lights ${getCurrentGarland}-lights`}></li>
                <li className={`lights ${getCurrentGarland}-lights`}></li>
                <li className={`lights ${getCurrentGarland}-lights`}></li>
            </ul>
            <ul className="lightrope lightrope2">
                <li className={`lights ${getCurrentGarland}-lights`}></li>
                <li className={`lights ${getCurrentGarland}-lights`}></li>
                <li className={`lights ${getCurrentGarland}-lights`}></li>
                <li className={`lights ${getCurrentGarland}-lights`}></li>
                <li className={`lights ${getCurrentGarland}-lights`}></li>
            </ul>
            <ul className="lightrope lightrope3">
                <li className={`lights ${getCurrentGarland}-lights`}></li>
                <li className={`lights ${getCurrentGarland}-lights`}></li>
                <li className={`lights ${getCurrentGarland}-lights`}></li>
                <li className={`lights ${getCurrentGarland}-lights`}></li>
                <li className={`lights ${getCurrentGarland}-lights`}></li>
                <li className={`lights ${getCurrentGarland}-lights`}></li>
            </ul>
            <ul className="lightrope lightrope4">
                <li className={`lights ${getCurrentGarland}-lights`}></li>
                <li className={`lights ${getCurrentGarland}-lights`}></li>
                <li className={`lights ${getCurrentGarland}-lights`}></li>
                <li className={`lights ${getCurrentGarland}-lights`}></li>
                <li className={`lights ${getCurrentGarland}-lights`}></li>
                <li className={`lights ${getCurrentGarland}-lights`}></li>
                <li className={`lights ${getCurrentGarland}-lights`}></li>
                <li className={`lights ${getCurrentGarland}-lights`}></li>
                <li className={`lights ${getCurrentGarland}-lights`}></li>
                <li className={`lights ${getCurrentGarland}-lights`}></li>
            </ul>
            <ul className="lightrope lightrope5">
                <li className={`lights ${getCurrentGarland}-lights`}></li>
                <li className={`lights ${getCurrentGarland}-lights`}></li>
                <li className={`lights ${getCurrentGarland}-lights`}></li>
                <li className={`lights ${getCurrentGarland}-lights`}></li>
                <li className={`lights ${getCurrentGarland}-lights`}></li>
                <li className={`lights ${getCurrentGarland}-lights`}></li>
                <li className={`lights ${getCurrentGarland}-lights`}></li>
                <li className={`lights ${getCurrentGarland}-lights`}></li>
                <li className={`lights ${getCurrentGarland}-lights`}></li>
                <li className={`lights ${getCurrentGarland}-lights`}></li>
                <li className={`lights ${getCurrentGarland}-lights`}></li>
            </ul>
        </div>
    )
}

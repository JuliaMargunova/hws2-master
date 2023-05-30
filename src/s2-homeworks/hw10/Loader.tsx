import s from './Loader.module.css'
import preloading from './/images/ellipse.svg'

//export const Loader = () => <div className={s.loader}></div>
//export const Loader = () => <div className={s.preloadingBlock_el}><img src={preloading}/> </div>
export const Loader = () => {
    return (
        <span className={s.loader}></span>
    );
};
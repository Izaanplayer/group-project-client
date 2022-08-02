import style from './Home.module.css';
import waves5 from '../../media/wave5.svg';

export default function Home() {
    return (
        <div className={style.containerHome}>
            <div className={style.containerContent}>
                <div className={style.containerContentText}>
                    <div className={style.ContentText}>
                        <h2>Title of program</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A magni tempora nisi sequi aliquid culpa.</p>
                    </div>
                </div>
                <div className={style.containerContentImage}>
                    <div className={style.ContentImage}>
                        <h2>Image program</h2>
                    </div>
                </div>
            </div>
            <div className={style.containerWave}>
                <img src={waves5} alt="" />
            </div>
        </div>
    )
}
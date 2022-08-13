import { Link } from "react-router-dom";
import { ShowArgs } from "../../redux/reducer/showSlice";

interface ShowsProps {
    shows: ShowArgs[]
}

export const CardShows: React.FC<ShowsProps> = ({ shows }) => {

    return (
        <div className="flex flex-row flex-wrap">
            {shows.length > 0 ? shows.map((ele, i) => {
                return (
                    <div key={i} className="w-1/3 capitalize text-center text-mikeWhite bg-mikeBlack rounded-2xl mx-7 mt-7">
                        <Link to={`/shows/detail/${ele.id}`}>
                            <img className=' rounded-2xl' src={ele.imagesEvent[0]} alt="" />
                            <div className="max-w-sm rounded overflow-hidden shadow-lg container">
                                <h2>{ele.nickName}</h2>

                                <p >{ele.description}</p>

                            </div>
                        </Link>
                    </div>
                )
            }) : <h1>No se encontraron resultados</h1>}

        </div>
    )
}
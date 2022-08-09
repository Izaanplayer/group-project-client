import { Link } from "react-router-dom";
import { ArtistArgs } from "../../redux/reducer/artistSlice";

interface ArtistsProps {
    artists: ArtistArgs[]
}

export const CardArtists: React.FC<ArtistsProps> = ({ artists }) => {
    return (
        <div className="flex flex-row flex-wrap">
            {artists && artists.map((ele, i) => {
                return (
                    <div key={i} className="w-1/3 capitalize text-center text-mikeWhite bg-mikeBlack rounded-2xl mx-7 mt-7">
                        <Link to={`/artistDetail/${ele.id}`}>
                            <img className=' rounded-2xl' src={ele.imagesEvent[0]} alt="" />
                            <div className="max-w-sm rounded overflow-hidden shadow-lg container">
                                <h2>{ele.nickName}</h2>
                                <p>{ele.name} {ele.lastName}</p>
                                <p >{ele.description}</p>

                                <p className="flex items-center mb-4 mx-14">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    {ele.city}  {ele.country}</p>

                            </div>
                        </Link>
                    </div>
                )
            })}

        </div>
    )
}
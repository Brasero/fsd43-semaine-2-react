import {useSelector} from "react-redux";
import {selectHorses} from "../../Store/Selectors/horseSelectors.js";

const HorseList = () => {

    const horses = useSelector(selectHorses)

    return (
        <>
            {
                horses.length > 0 ? (
                    <ul>
                        {
                            horses.map((horse, index) => {
                                return (
                                    <li key={`${horse.name}-${index}`}>
                                        {horse.name}
                                    </li>
                                )
                            })
                        }
                    </ul>
                ) : (
                    <span>Aucune monture</span>
                )
            }
        </>
    )
}

export default HorseList;
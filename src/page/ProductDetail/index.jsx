import {useParams, useLocation, useNavigate, useSearchParams} from "react-router-dom";
import './productDetail.scss'

const ProductDetail = () => {

    const {name} = useParams()
    const params = useSearchParams()
    console.log(params)
    const {state} = useLocation()
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }


    return (
        <div className={'detail_container'}>
            <header className={'detail_container_header'}>
                <button role={'button'} onClick={goBack}>Retour</button>
                <h1>{name.toUpperCase()}</h1>
            </header>
            <div className={'detail_container_content'}>
                <div className={'detail_info'}>
                    <span className={'label'}>
                        Marque :
                    </span>
                    <span className={'data'}>
                        {state.marque}
                    </span>
                </div>
            </div>
            <div className={'detail_info'}>
                    <span className={'label'}>
                        categorie :
                    </span>
                <span className={'data'}>
                    {state.category}
                    </span>
            </div>
            <div className={'detail_info'}>
                    <span className={'label'}>
                        Prix :
                    </span>
                <span className={'data'}>
                    {state.price}
                    </span>
            </div>
            <div className={'detail_info'}>
                    <span className={'label'}>

                    </span>
                <span className={'data'}>

                    </span>
            </div>
        </div>

    )
}

export default ProductDetail
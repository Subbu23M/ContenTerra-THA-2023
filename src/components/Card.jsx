import axios from "axios"
import { useEffect, useState } from "react"
import swal from "sweetalert"
import { DisplayData } from "./DisplayData"

export const Card = () => {
    const [redditData, setData] = useState([])
    const baseUrl = 'https://www.reddit.com/r/reactjs.json'

    const getData = () => {
        axios
            .get(baseUrl)
            // success
            .then((response) => {
                const result = response.data
                setData(result)
            })
            // failure
            .catch((error) => {
                swal(error.message)
            })
    }
    useEffect(() => getData(), [])
    const {
        data
    } = redditData

    return (
        <>
            {
                data && <section> 
                <div className="container">
                    <div className="row">
                        <DisplayData passData = {data.children}/>
                    </div>
                </div>  
            </section>
            }        
        </>
    )
}
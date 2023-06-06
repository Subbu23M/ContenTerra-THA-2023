import { EachCard } from "./EachCard"

export const DisplayData = ({passData}) => {
    return (
        <>
            {
                passData.map((ele,i) => {
                    const{data} = ele
                    return (
                        <div className="col-lg-3 col-sm-6" key={i}>
                            <div className="card my-2 p-2">
                                <EachCard
                                    passToCard={data}
                                />
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}
import {decode} from 'html-entities'

export const EachCard = ({passToCard}) => {
    const{title,selftext_html,url,score} = passToCard

    return (
        <>
            {
                title && <h5 className="card-text text-success"> {title} </h5>
            }
            
            {
                selftext_html && <p className='lead' dangerouslySetInnerHTML= {{ __html: decode(selftext_html)}}/>
            }
            {
                url && <a href={url} target='_blank' className="btn btn-primary">URL</a>
            }
            {
                score && <h6 className="text-danger my-2"> SCORE : {score} </h6>
            }
        </>
    )
}
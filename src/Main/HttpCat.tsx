import React, { ReactElement } from "react";

interface HttpCatProps {
    statusCode?: number,
}

export const HttpCat = (props: HttpCatProps): ReactElement => {
    const baseURL = "https://httpcats.com/"
    const statusCode = props.statusCode
    const url = `${baseURL}${statusCode}`
    const title = "TBD"
    const jsonInfoUrl = `${url}$.json`
    const imageJpegUrl = `${url}.jpeg`

    return (
        <div>
            <img src={imageJpegUrl} height={150} width={200}/>
        </div>
    );
}
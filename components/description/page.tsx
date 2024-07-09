import React from "react";

export default function Description(props : any){

    const [readMore, setReadMore] = React.useState(true);

    return(
        <p>
                {readMore
                  ? `${props.item.description.substring(0, 5)}...`
                  : props.item.description}
                <button
                  className="text-cyan-500"
                  onClick={() => setReadMore(!readMore)}
                >
                  {readMore ? "show more" : "show less"}
                </button>
              </p>
    )

}


import * as React from "react";
import { Link } from "react-router-dom";
export default function Shopadmindashboard() {
  return (
    <div>
          <div>
                <Link to={"/shopadminleft"}>

                </Link>
          </div>
          <div>
                <Link to={"/shopadminright"}>
                                  
                </Link>

          </div>
    </div>
  )
}

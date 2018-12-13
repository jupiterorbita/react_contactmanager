// functional component
// rfc -> tab
// import React from 'react'

// export default function NotFound() {
//   return (
//     <div>

//     </div>
//   )
// }

import React from "react";

const NotFound = () => {
  return (
    <div>
      <h1 className="display-4">
        <span className="text-danger">404</span> Page Not Found
      </h1>
      <p className="lead">
        Sorry that pages does not exist
        <span role="img" aria-label="Sad">
          ☹️
        </span>
      </p>
      <img src={require("./404.gif")} width="200px" alt="page not found" />
    </div>
  );
};

export default NotFound;

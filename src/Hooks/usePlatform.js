//This is the main hook of the platform
import React from "react";

function usePlatform () {
    const [slug, setSlug] = React.useState('');

    //setSlug(userSlug)

    return {
      slug, 
      setSlug  
    }
}
export {usePlatform}
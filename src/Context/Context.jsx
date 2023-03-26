import {createContext, useState } from "react";

const Context = createContext()
function Provider({children}) {
    const [order, setOrder] = useState('')
    return (
        <Context.Provider value={{order, setOrder}}>{children}</Context.Provider>
    )
}

export {Provider, Context}

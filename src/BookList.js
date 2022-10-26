import React from "react";

import {Book} from "./Book"

function Lista () {
    return <div className="Lista">
        <Book title="Alicia en el pais de las maravillas"></Book>
        <Book title="Sapienes de animales a dioses"></Book>
        <Book title="Don quijote de la mancha"></Book>
    </div>
}

export {Lista}
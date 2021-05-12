import { useState, useEffect } from "react";

function CategoryColor(d) {
    console.log(d.category)
    const [color, setColor] = useState("");
    useEffect(() => {
        if (d.category === "Vegetables") {
            setColor("vege-color")
        } if (d.category === "Chemistry") {
            setColor("chem-color")
        } if (d.category === "Drinks") {
            setColor("drink-color")
        } if (d.category === "Fruits") {
            setColor("fruits-color")
        } if (d.category === "Cheese") {
            setColor("cheese-color")
        } if (d.category === "Meat") {
            setColor("meat-color")
        }
        console.log(color)
    }, [])
}

export default CategoryColor;


// export default function CategoryColor(id, category, sumData) {
//     const index = id;
//     console.log(index)
//     const [color, setColor] = useState("");

//     let g = sumData[id]
//     g[category] = color



//         useEffect(() => {
//             if (g.category === "Vegetables") {
//                 setColor("vege-color")
//             } if (g.category === "Chemistry") {
//                 setColor("chem-color")
//             } else if (g.category === "Drinks") {
//                 setColor("drink-color")
//             } return color
//         })
// }
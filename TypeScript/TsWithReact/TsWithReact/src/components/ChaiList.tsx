import type {Chai} from "../types/types"
import {Card} from "./Card"

interface ChaiListProps {
    items: Chai[]
}
function ChaiList({items}: ChaiListProps){
    return (
        <div>
            {items.map((chai)=>(
                <Card key={chai.id} name={chai.name} price={chai.price} isSpecial={chai.price >30 ? true: false } /> 
            ))}
        </div>
    )
}

export default ChaiList;
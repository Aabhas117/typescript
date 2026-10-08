function getChai(kind: string | number){
    if(typeof kind === 'string'){
        return `Making ${kind} chai...`;
    }
    return `Chai order: ${kind}`;
}

function serveChai(msg ?: string ){
    if(msg){
        return `Serving ${msg}`;
    }
    return `Server default Masala chai`;
}

function orderChai(size: 'small' | 'medium'| 'large' | number ){
    if(size === "small"){
        return `Small cutting chai`;
    }
    if(size === 'medium' || size === "large" ){
        return ` Make Extra Chai`;
    }
    return `Chai order #${size}`;
}






class kulhadChai{
    serve(){
        return `Serving kulhad Chai`;
    }
}


class CuttingChai{
    serve(){
        return `Serving cutting Chai`;
    }
}


function serve(chai: kulhadChai | CuttingChai){
    if(chai instanceof kulhadChai){
        return chai.serve();
    }
}


type ChaiOrder = {
    type: string
    sugar: number
}


function isChaiOrder(obj:any):obj is ChaiOrder{
    return (
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}

function serveOrder(item: ChaiOrder | string){
    if(isChaiOrder(item)){
        return `Serving ${item.type} chai with ${item.sugar} sugar`
    }
    return `Serving custom chai: ${item}`
}

type MasalaChai = {type: "Masala"; spiceLevel: number};
type GingerChai = {type: "G-Masala"; amount: number};
type NormalChai = {type: "N-Masala"; aroma: number};

type Chai = MasalaChai | GingerChai | NormalChai

function MakeChai(order: Chai){
    switch(order.type){
        case "Masala":
            return `Masala Chai`
            break;
            case "G-Masala":
            return `Ginger Chai`
            break;
            case "N-Masala":
            return `Normal Chai`
    }
}

function brew(order: MasalaChai | GingerChai){
    if("spiceLevel" in order){
        //
    }
}

function isStringArray(arr: unknown): arr is string[]{
    
}
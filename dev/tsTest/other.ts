
const returnTest = param => param;
const implicitReturnTest = <T>(param: T) => param;


let anyType = returnTest(1);
let numberType = implicitReturnTest(1);


//interface
const LOADER_START = 'LOADER_START';
type LoaderStartType = (typeof LOADER_START);      //value of constant === type     

interface ActionType <T = string> {
    type:T
}

interface InitAppType extends ActionType<LoaderStartType>{
    payload:object;
}

const initApp: InitAppType = {
    type: "LOADER_START",
    payload:{}
}


const initAppAction : () => InitAppType = () => {
    return initApp
}




/**
 * check obj is HTMLElement
 * @param obj
 */
export const checkHTMLElement = (obj: any) => {
    const d = document.createElement('div');
    try{
        d.appendChild(obj.cloneNode(true));
        return obj.nodeType === 1;
    }catch(e){
        return obj === window || obj === document;
    }
}

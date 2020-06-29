
export const handleclick = ():void => {
    const button:HTMLElement = document.getElementById("button")!
    button.onclick = (e:Event) => {
        console.log(e.target)
    } 
}
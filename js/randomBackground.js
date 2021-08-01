/**
 * Source https://dev.to/isarisariver/how-to-determine-font-color-based-on-a-random-background-color-8ek
 */


const randomColor = () => {
    let color = Math.floor(Math.random()*16777215).toString(16)

    /* sometimes the returned value does not have 
        * the 6 digits needed, so we do it again until
        * it does 
        */

    while (color.length<6) {
        color = Math.floor(Math.random()*16777215).toString(16)
    }

    let red = parseInt(color.substring(0,2),16)
    let green = parseInt(color.substring(2,4),16)
    let blue = parseInt(color.substring(4,6),16)
    let brightness = red*0.299 + green*0.587 + blue*0.114

    /* if (red*0.299 + green*0.587 + blue*0.114) > 180 
        * use #000000 else use #ffffff 
        */

    if (brightness > 180) {
        return { backgroundColor: '#' + color }
    }
    else return {
        backgroundColor: '#' + color,
        color: '#ffffff'
    }
}

const onLoad = () => {
    let style = randomColor();
    for (let key in style) {
        document.body.style[key] = style[key]
    }
}

window.onload = onLoad;

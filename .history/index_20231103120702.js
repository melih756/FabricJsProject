// console.log('merhaba index.js')

// const canvas= new fabric.Canvas('canvas',{
//     width:500,
//     height:500,
//     backgroundColor:'red'
// })

// canvas.renderAll();


// fabric.Image.fromURL('https://c02.purpledshub.com/uploads/sites/48/2023/02/why-sky-blue-2db86ae.jpg',(img)=>{
//     canvas.backgroundImage=img;
//     canvas.renderAll();
// })

const initCanvas = (id) =>{
    return new fabric.Canvas(id,{
        width:500,
        height:500,
        selection:false
    });
}

const setBackground = (url,canvas) =>{
    fabric.Image.fromURL(url,(img)=>{
        canvas.backgroundImage=img
        canvas.renderAll()
    })
}

const setPanEvents=(canvas)=>{
    canvas.on('mouse:move',(event)=>{
        // console.log(e);
        if(mousePressed && currentMode==modes.pan){
            canvas.SetCursor('grab')
            canvas.renderAll()
            const mEvent=event.e;
            const delta=new fabric.Point(mEvent.movementX,mEvent.movementY)
            canvas.relativePan(delta)
        }
        
    })
    
    
    canvas.on('mouse:down',(event)=>{
        mousePressed=true;
        if(currentMode==modes.pan){
            canvas.SetCursor('grab')
            canvas.renderAll()
        }
    })
    
    canvas.on('mouse:up',(event)=>{
        mousePressed = false;
        canvas.SetCursor('default')
        canvas.renderAll()
    })
}

const canvas = initCanvas('canvas');
let mousePressed = false;

let currentMode;
const modes={
    pan:'pan',
    drawing:'drawing'
}

const togglePan =()=>{
    if(currentMode===modes.pan){
        currentMode=''
    }else{
        currentMode=modes.pan
    }
}

setBackground('https://c02.purpledshub.com/uploads/sites/48/2023/02/why-sky-blue-2db86ae.jpg',canvas);

setPanEvents(canvas);
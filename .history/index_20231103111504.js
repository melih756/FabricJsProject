console.log('merhaba index.js')

const canvas= new fabric.Canvas('canvas',{
    width:500,
    height:500,
    backgroundColor:'red'
})

canvas.renderAll();


fabric.Image.fromURL('https://c02.purpledshub.com/uploads/sites/48/2023/02/why-sky-blue-2db86ae.jpg',(img)=>{
    canvas.backgroundImage=img;
    canvas.renderAll();
})

const initCanvas = (id) =>{
    return new fabric.Canvas('canvas',{
        width:500,
        height:500
    }) 
}
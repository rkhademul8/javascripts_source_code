
const imageArray=[
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
]


let imgIndex=0;

const imgElement=document.getElementById('slider')

setInterval(()=>{
if(imgIndex>=imageArray.length){
    imgIndex=0;
}
    const imgurl=imageArray[imgIndex];
    imgElement.setAttribute('src',imgurl);
    imgIndex++;

},1000);

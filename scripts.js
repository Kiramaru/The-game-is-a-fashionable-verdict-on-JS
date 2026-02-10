const URLbd = "https://6589b049324d417152595b9b.mockapi.io/api/v1/Evaluations";
let app = new Vue({
    el: '#InputRaiting',
    data: {
      raite: [],
      loading: true,
      errored: false,
      length1: null,
      count: 0,
      avg: 0,
    },
    mounted() {
        fetch(URLbd)
        .then((res) => res.json())
        .then((Evaluations) => {
          this.raite = Evaluations;
          Evaluations.forEach((Evaluations) => {
            this.count++;
            this.avg += Number(Evaluations.Raiting);
          });
          this.avg = (Number(this.avg)/Number(this.count)).toFixed(2);
          console.log(this.avg);
        });
      },
    methods: {
      AllEstimate: function(){
        axios
            .get(URLbd)
            .then(response =>(this.raite = response))
            .catch(error => this.errored = true)
            .finally(() => this.loading = false);
      },
      addEstimate: function (){
        let val = document.querySelector('input[name="contact"]:checked').value;
        axios.post(URLbd, {Raiting: val});
      },     
    }
});
var play = document.getElementById("playplace1");
var size = document.getElementById("Size");
var SelectObj;
var SelectObj2 = document.body;
flag = 0;
var number;
var hat = ['https://cdn.glitch.global/56cbe3d4-148e-4afe-8b32-acc2e8f31abc/%D1%88%D0%BB%D1%8F%D0%BF%D0%B01.png?v=1703516567727', 'https://cdn.glitch.global/56cbe3d4-148e-4afe-8b32-acc2e8f31abc/%D1%88%D0%BB%D1%8F%D0%BF%D0%B02.png?v=1703516568368'];
var earrings = ['https://cdn.glitch.global/56cbe3d4-148e-4afe-8b32-acc2e8f31abc/%D1%81%D0%B5%D1%80%D1%8C%D0%B3%D0%B81.png?v=1703516571685', 'https://cdn.glitch.global/56cbe3d4-148e-4afe-8b32-acc2e8f31abc/%D1%81%D0%B5%D1%80%D1%8C%D0%B3%D0%B82.png?v=1703516572348'];
var glasses = ['https://cdn.glitch.global/56cbe3d4-148e-4afe-8b32-acc2e8f31abc/%D0%BE%D1%87%D0%BA%D0%B81.png?v=1703516570334', 'https://cdn.glitch.global/56cbe3d4-148e-4afe-8b32-acc2e8f31abc/%D0%BE%D1%87%D0%BA%D0%B82.png?v=1703516571030']
var scarf = ['https://cdn.glitch.global/56cbe3d4-148e-4afe-8b32-acc2e8f31abc/%D1%88%D0%B0%D1%80%D1%84%D0%B8%D0%BA1.png?v=1703516565709', 'https://cdn.glitch.global/56cbe3d4-148e-4afe-8b32-acc2e8f31abc/%D1%88%D0%B0%D1%80%D1%84%D0%B8%D0%BA2.png?v=1703516566333'];
function Nado(){
    let photo = document.getElementById("PhotoFace");
    if(photo.files[0]!=null){
        if(document.getElementsByClassName("classface").length>0){
            play.removeChild(document.getElementById("imageface"));
        }
        document.getElementById('Rating').style.display = 'none';
        document.getElementById('playplace').style.display = 'flex';
        AddFace(photo.files[0]);
    }
};
function Proverka(pos1, direction1){
    pos1 = Number(pos1.replace('px', ''));
    let element = document.getElementById('imageface');
    if(direction1 == "top"){
        let yPosition = element.offsetTop;
        if(!(yPosition<SelectObj.offsetTop && (SelectObj.offsetTop+SelectObj.height)<(yPosition+element.height))){
            nado = massObjInFoto.indexOf([SelectObj.id, SelectObj]);
            massObjInFoto.splice(nado, 1);
            document.body.removeChild(SelectObj);
            SelectImage('imageface');
        }
    }
    else if(direction1 == "left"){
        let xPosition = element.offsetLeft;
        if(!(xPosition<SelectObj.offsetLeft && (SelectObj.offsetLeft+SelectObj.width)<(xPosition+element.width))){
            nado = massObjInFoto.indexOf([SelectObj.id, SelectObj]);
            massObjInFoto.splice(nado, 1);
            document.body.removeChild(SelectObj);
            SelectImage('imageface');
        }
    }
}
function shipped(){
    document.getElementById('Nado222').style.display = 'inline';
}
function AddFace(face){
    var imageface = document.createElement("img");
    imageface.src = window.URL.createObjectURL(face);
    imageface.setAttribute('style', 'width:495px;');
    imageface.setAttribute('id', 'imageface');
    imageface.setAttribute('class', 'classface');
    imageface.setAttribute('onclick', "SelectImage('imageface')");
    play.appendChild(imageface);
    play.setAttribute('style', 'padding-top: 2%; padding-bottom: 2%;')
    size.setAttribute('style', 'display:flex;');
    document.getElementById("acs1").style.display = 'flex';
    document.getElementById("acs2").style.display = 'flex';
};
function Plus(){
    console.log(flag);
    if(SelectObj != null){
        let width = SelectObj.offsetWidth;
        let height = SelectObj.offsetHeight;
        if(flag == 0){
            width+=10;
            if(SelectObj.id!='imageface'){
                console.log('transform');
                console.log(SelectObj.style.transform);
                let transform = SelectObj.style.transform;
                SelectObj.setAttribute('style', 'width:'+ width + "px; outline: 3px dashed #13a415; position:absolute; top:"+SelectObj.style.top+"; left:"+SelectObj.style.left+'; transform:'+ transform+ ';');
            }
            else{
                SelectObj.setAttribute('style', 'width:'+ width + "px; outline: 3px dashed #13a415;");
            }
        }
        if(flag == 1 && SelectObj.id == 'imageface'){
            width+=10;
            SelectObj.setAttribute('style', 'width:'+ width + "px; height:"+height+"px; outline: 3px dashed #13a415;");
        }
        else if(flag == 2 && SelectObj.id == 'imageface'){
            height+=10;
            SelectObj.setAttribute('style', 'width:'+ width + "px; height:"+height+"px; outline: 3px dashed #13a415;");
        }
    }
};
function Minus(){
    console.log(flag);
    if(SelectObj != null){
        let width = SelectObj.offsetWidth;
        let height = SelectObj.offsetHeight;
        if(flag == 0){
            width-=10;
            if(SelectObj.id!='imageface'){
                let transform = SelectObj.style.transform;
                SelectObj.setAttribute('style', 'width:'+ width + "px; outline: 3px dashed #13a415; position:absolute; top:"+SelectObj.style.top+"; left:"+SelectObj.style.left+'; transform:'+ transform+ ';');
            }
            else{
                SelectObj.setAttribute('style', 'width:'+ width + "px; outline: 3px dashed #13a415;");
            }
        }
        if(flag == 1 && SelectObj.id == 'imageface'){
            width-=10;
            SelectObj.setAttribute('style', 'width:'+ width + "px; height:"+height+"px; outline: 3px dashed #13a415;");
        }
        else if(flag == 2 && SelectObj.id == 'imageface'){
            height-=10;
            SelectObj.setAttribute('style', 'width:'+ width + "px; height:"+height+"px; outline: 3px dashed #13a415;");
        }
    }
};
function changeaccessories(idname, count){
    let ChangeObj = document.getElementById(idname);
    let line = ChangeObj.getAttribute('src');
    if(count == 1){
        for (index = 0; index < glasses.length; ++index) {
            if(glasses[index]!=line){
                ChangeObj.setAttribute('src', glasses[index]);
                break;
            }
        }
    }
    else if(count == 2){
        for (index = 0; index < earrings.length; ++index) {
            if(earrings[index]!=line){
                ChangeObj.setAttribute('src', earrings[index]);
                break;
            }
        }
    }
    else if(count == 3){
        for (index = 0; index < scarf.length; ++index) {
            if(scarf[index]!=line){
                ChangeObj.setAttribute('src', scarf[index]);
                break;
            }
        }
    }
    else if (count == 4){
        for (index = 0; index < hat.length; ++index) {
            if(hat[index]!=line){
                ChangeObj.setAttribute('src', hat[index]);
                break;
            }
        }
    }
};
var massObjInFoto = [];
function SelectImage(idobj){
    let width;
    let height;
    let rotation;
    console.log(idobj);
    if(SelectObj!=null){
        width = SelectObj.offsetWidth;
        height = SelectObj.height;
        left = SelectObj.style.left;
        transform = SelectObj.style.transform;
        if(SelectObj.id!='imageface'){
            SelectObj.setAttribute('style','position: absolute;  width:'+width+'px; z-index = 1000; height:'+height+'px; top:'+SelectObj.style.top+'; left:'+left+'; transform:'+transform+";");
        }
        else{
            SelectObj.setAttribute('style', 'width:'+width+'px; height:'+height+'px;');
        }
    }
    SelectObj = document.getElementById(idobj);
    
    width = SelectObj.offsetWidth;
    height = SelectObj.height;
    left = SelectObj.style.left;
    transform = SelectObj.style.transform;
    console.log(transform);
    if(SelectObj.id!='imageface'){
        SelectObj.setAttribute('style', 'position: absolute; outline:3px dashed #13a415; z-index = 1000; width:'+width+'px; height:'+height+'px; top:'+SelectObj.style.top+'; left:'+left+'; transform:'+transform+";");
        SelectObj2 = SelectObj;
    }
    else{
        SelectObj.setAttribute('style', 'outline:3px dashed #13a415; width:'+width+'px; height:'+height+'px;');
    }

};
function AddElement(elems){
    let image =  document.createElement("img");
    image.src = elems.src;
    image.id = elems.id+"inphoto";
    image.setAttribute('style', elems.getAttribute('style'));
    image.style.position = 'absolute';
    image.style.zIndex = 1000;
    document.body.append(image);
    return image;
};
function MassInPhotoAdd(imgphoto2){
    console.log('Вызов');
    let element = document.getElementById('imageface');
    let xPosition = element.offsetLeft;
    let yPosition = element.offsetTop;
    console.log("x "+ xPosition+"x2 "+(xPosition+element.width) +" y "+ yPosition+'y2 '+ (yPosition+element.height));
    console.log(imgphoto2.offsetLeft+ " "+imgphoto2.offsetTop);
    if((xPosition<imgphoto2.offsetLeft && (imgphoto2.offsetLeft+imgphoto2.width)<(xPosition+element.width))&&(
        yPosition<imgphoto2.offsetTop && (imgphoto2.offsetTop+imgphoto2.height)<(yPosition+element.height))){
            if(massObjInFoto.length!=0){
                console.log(massObjInFoto.length);
                for (index = 0; index < massObjInFoto.length; index++) {
                    console.log('Вызов 3');
                    if(massObjInFoto[index][0] == imgphoto2.id){
                        document.body.removeChild(massObjInFoto[index][1]);
                        massObjInFoto.splice(index, 1);
                    }
                }
            }
            idnado = imgphoto2.id;
            imgphoto2.setAttribute('onclick', 'SelectImage("'+idnado+'" )');
            console.log(idnado);
            massObjInFoto.push([imgphoto2.id, imgphoto2]);
    }
    else{
        document.body.removeChild(imgphoto2);
    }
};
document.getElementById('glasses').onmousedown = function(event) {
    let img = AddElement(document.getElementById('glasses'));
    moveAt(event.pageX, event.pageY);
    function moveAt(pageX, pageY) {
        img.style.left = pageX - img.offsetWidth / 2 + 'px';
        img.style.top = pageY - img.offsetHeight / 2 + 'px';
    }
    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }
    document.addEventListener('mousemove', onMouseMove);
    img.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        img.onmouseup = null;
        MassInPhotoAdd(img);
    }
};
document.getElementById('glasses').ondragstart = function() {
    return false;
};
document.getElementById('earrings').onmousedown = function(event) { 
    let img = AddElement(document.getElementById('earrings'));
    moveAt(event.pageX, event.pageY);
    function moveAt(pageX, pageY) {
        img.style.left = pageX - img.offsetWidth / 2 + 'px';
        img.style.top = pageY - img.offsetHeight / 2 + 'px';
    }
    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }
    document.addEventListener('mousemove', onMouseMove);
    img.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        img.onmouseup = null;
        MassInPhotoAdd(img);
    }
};
document.getElementById('earrings').ondragstart = function() {
    return false;
};
document.getElementById('scarf').onmousedown = function(event) { 
    let img = AddElement(document.getElementById('scarf'));
    moveAt(event.pageX, event.pageY);
    function moveAt(pageX, pageY) {
        img.style.left = pageX - img.offsetWidth / 2 + 'px';
        img.style.top = pageY - img.offsetHeight / 2 + 'px';
    }
    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }
    document.addEventListener('mousemove', onMouseMove);
    img.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        img.onmouseup = null;
        MassInPhotoAdd(img);
    }
};
document.getElementById('scarf').ondragstart = function() {
    return false;
};
document.getElementById('hat').onmousedown = function(event) {
    let img = AddElement(document.getElementById('hat'));
    moveAt(event.pageX, event.pageY);
    function moveAt(pageX, pageY) {
        img.style.left = pageX - img.offsetWidth / 2 + 'px';
        img.style.top = pageY - img.offsetHeight / 2 + 'px';
    }
    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }
    document.addEventListener('mousemove', onMouseMove);
    img.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        img.onmouseup = null;
        MassInPhotoAdd(img);
    }
};

document.getElementById('hat').ondragstart = function() {
    return false;
};
SelectObj2.onclick= function(event) {
    moveAt(event.pageX, event.pageY);
    function moveAt(pageX, pageY) {
        SelectObj2.style.left = pageX - SelectObj2.offsetWidth / 2 + 'px';
        SelectObj2.style.top = pageY - SelectObj2.offsetHeight / 2 + 'px';
    }
    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }
    document.addEventListener('mousemove', onMouseMove);
    SelectObj2.ondblclick = function() {
        document.removeEventListener('mousemove', onMouseMove);
        SelectObj2.ondblclick = null;
        let element = document.getElementById('imageface');
        let xPosition = element.offsetLeft;
        let yPosition = element.offsetTop;
        console.log("x "+ xPosition+"x2 "+(xPosition+element.width) +" y "+ yPosition+'y2 '+ (yPosition+element.height));
        console.log(SelectObj2.offsetLeft+ " "+SelectObj2.offsetTop);
        if((xPosition<SelectObj2.offsetLeft && (SelectObj2.offsetLeft+SelectObj2.width)<(xPosition+element.width))&&(
            yPosition<SelectObj2.offsetTop && (SelectObj2.offsetTop+SelectObj2.height)<(yPosition+element.height))){

        }
        else{
            if(SelectObj2!=document.body){
                nado = massObjInFoto.indexOf([SelectObj2.id, SelectObj2]);
                massObjInFoto.splice(nado, 1);
                document.body.removeChild(SelectObj2);
            }
        }
        SelectObj2 = document.body;
    }
};

SelectObj2.ondragstart = function() {
    return false;
};
function ChangeFlag(count){
    flag = count;
}
document.addEventListener('keydown', function(event) {
    if (event.code == 'ArrowLeft'){
        if(SelectObj!= null && SelectObj.id!='imageface'){
            var left = SelectObj.style.left;
            left =Number(left.replace('px', ''));
            SelectObj.style.left =left-5 +'px';
            Proverka(SelectObj.style.left, "left");
        }
    }
    if (event.code == 'ArrowUp'){
        if(SelectObj!= null && SelectObj.id!='imageface'){
            var top = SelectObj.style.top;
            top = Number(top.replace('px', ''));
            SelectObj.style.top = top - 5 + 'px';
            Proverka(SelectObj.style.top, "top");
        }
    }
    if (event.code == 'ArrowRight'){
        if(SelectObj!= null && SelectObj.id!='imageface'){
            var left = SelectObj.style.left;
            left =Number(left.replace('px', ''));
            SelectObj.style.left =left+5 +'px';
            Proverka(SelectObj.style.left, "left");
        }
    }
    if (event.code == 'ArrowDown'){
        if(SelectObj!= null && SelectObj.id!='imageface'){
            var top = SelectObj.style.top;
            top = Number(top.replace('px', ''));
            SelectObj.style.top = top + 5 + 'px';
            Proverka(SelectObj.style.top, "top");
        }
    }
    if (event.code == 'KeyL'){
        if(SelectObj!= null && SelectObj.id!='imageface'){
            if(SelectObj!= null && SelectObj.id!='imageface'){
                let rotate1 = SelectObj.style.transform;
                if(rotate1 == ''){
                    console.log(1);
                    rotate1 = -5;
                }
                else{
                    console.log(0);
                    rotate1 = rotate1.replace('rotate(', '');
                    rotate1 = Number(rotate1.replace('deg)', ''));
                    rotate1-=5;
                }
                console.log(rotate1);
                SelectObj.style.transform = "rotate(" + rotate1 + "deg)";
            }
        }
    }
    if (event.code == 'KeyR'){
        if(SelectObj!= null && SelectObj.id!='imageface'){
            let rotate1 = SelectObj.style.transform;
            if(rotate1 == ''){
                console.log(1);
                rotate1 = 5;
            }
            else{
                console.log(0);
                rotate1 = rotate1.replace('rotate(', '');
                rotate1 = Number(rotate1.replace('deg)', ''));
                rotate1+=5;
            }
            console.log(rotate1);
            SelectObj.style.transform = "rotate(" + rotate1 + "deg)";
        }
    }
});

function FinalWindow(){
    document.getElementById('Size').style.display = 'none';
    document.getElementById('playplace').style.display = 'none';
    document.getElementById('Rating').style.display = 'block';
    document.getElementById('Nado222').style.display = 'none';
    console.log(massObjInFoto.length);
    if(massObjInFoto.length!=0){
      for (index = massObjInFoto.length; index!=0 ; index--) {
          console.log('Прогон');
          document.body.removeChild(massObjInFoto[index-1][1]);
          massObjInFoto.splice(index, 1);
      }
    }
}

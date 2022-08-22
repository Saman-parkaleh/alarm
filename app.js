const saat=document.querySelectorAll('select');
//console.log(saat)
const times=document.querySelector('.time');
const but=document.querySelector('button');
let alarmtime;
let setalarm=('noset')
const cont=document.querySelector('.cont')
const rington= new Audio('./1.mp3')
for (let i = 23; i >= 0; i--) {
//i= i < 10 ? '0'+i:i;
     if(i<10)i ='0'+i
    else i=i
    
   let optin=`<option value= '${i}'> ${i}</option`
  
        saat[0].firstElementChild.insertAdjacentHTML('afterend',optin)
}
for (let i = 59; i >= 0; i--) {
    i= i < 10 ? '0' +i : i ;
    // if(i<10)i ='0'+i
    // else i=i
       let optin=`<option value= '${i}'> ${i}</option`
       
            saat[1].firstElementChild.insertAdjacentHTML('afterend',optin)
    }

    setInterval(() => {
        var time= new Date()
         var h=time.getHours();
        var m=time.getMinutes();
        var s=time.getSeconds();

if(h < 10) h='0'+h
        else h=h;

        if(m<10) m='0'+m
        else m=m;

        if(s < 10) s='0'+s
        else s=s;
       


    times.innerHTML=`${h}:${m}:${s}`
    //console.log(`${h}:${m}`)
    //console.log(alarmtime)
    if(alarmtime==`${h}:${m}`){
        rington.play();
        rington.loop=true;
      //alert('alarmtime')  
      //console.log('hhh')
    }

    },1000);

    but.addEventListener('click',()=>{
       alarmtime= `${saat[0].value}:${saat[1].value}`
       if(alarmtime.includes('Hors')||alarmtime.includes('minets')){
        return  alert('زمان هشدار را به درستی انتخاب کنید ')
       }
      
       setalarms(setalarm);

    })
function setalarms(){
if( setalarm=='noset'){
 cont.classList.add('dis');
       but.innerText='remov alarm'
setalarm=('set')
}
else{
    alarmtime='';
    cont.classList.remove('dis');
       but.innerText='set alarm'
setalarm=('noset')
rington.pause()

}

}

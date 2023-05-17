let hr=document.querySelector(".hour")
let min=document.querySelector(".min")
let sec=document.querySelector(".sec")
let sound= new Audio("tick.mp3")
let meme1= new Audio("meme1.mp3")
let meme2= new Audio("meme2.mp3")
let ash1= new Audio("ashneer1.mp3")
let ash2= new Audio("ashneer2.mp3")

let updateclock=()=>{

    let newdate= new Date();
    // console.log(newdate);
    // setTimeout(()=>{
        
        const myhour=newdate.getHours();
        const mymin=newdate.getMinutes();
        const mysec=newdate.getSeconds();
        // console.log(`${myhour}:${mymin}:${mysec}`)
        
       
        /* 12hr=>360 deg
            1hr=>360/12
            myhour=>myhour*360/12
        */
            let hrdeg=(myhour*360)/12;
            let mindeg=(mymin*360)/60;
            let secdeg=(mysec*360)/60;

            hr.style.transform=`rotate(${hrdeg}deg)`
            min.style.transform=`rotate(${mindeg}deg)`
            sec.style.transform=`rotate(${secdeg}deg)`

            sound.play();

            if(secdeg===0){
                meme1.play();
            }
            if(secdeg===12){
                ash2.play();
            }
            if(secdeg===42){
                ash1.play();
            }
            if(secdeg===90){
                meme2.play();
            }
            if(secdeg===180){
                meme1.play();
            }
            if(secdeg===210){
                ash1.play();
            }
            if(secdeg===252){
                meme1.play();
            }
            if(secdeg===270){
                meme2.play();
            }
       
        }
        
     
    


// updateclock();

// also can do with setINterval

setInterval(updateclock,1000);
















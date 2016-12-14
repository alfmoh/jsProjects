const secondHand = document.querySelector('.second-hand');
      const minsHand = document.querySelector('.min-hand');
      const hourHand = document.querySelector('.hour-hand');
      
    function setDate(){
        const now = new Date();
        const seconds = now.getSeconds();
        const secondsDegs = ((seconds/60) *360)+90;
        secondHand.style.transform = `rotate(${secondsDegs}deg)`;
        
        const mins = now.getMinutes();
        const minDegrees = ((mins/60)*360)+90;
        minsHand.style.transform = `rotate(${minDegrees}deg)`;
        
        const hrs = now.getHours();
        const hrsDegs = ((hrs/60) *360)+90;
        hourHand.style.transform = `rotate(${hrsDegs}deg)`;
        
        console.log(hrs,mins,seconds);
    }

      setInterval(setDate,1000);
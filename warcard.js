let warCardGame = {
    'cards':['2C','2D','2H','2S','3C','3D','3H','3S','4C','4D','4H','4S','5C','5D','5H','5S','6C','6D','6H','6S','7C','7D','7H','7S','8C','8D','8H','8S','9C','9D','9H','9S','10C','10D','10H','10S','JC','JD','JH','JS','QC','QD','QH','QS','KC','KD','KH','KS','AC','AD','AH','AS'],
    'Mycardvalue':{'2C':2,'2D':2,'2H':2,'2S':2,'3C':3,'3D':3,'3H':3,'3S':3,'4C':4,'4D':4,'4H':4,'4S':4,'5C':5,'5D':5,'5H':5,'5S':5,'6C':6,'6D':6,'6H':6,'6S':6,'7C':7,'7D':7,'7H':7,'7S':7,'8C':8,'8D':8,'8H':8,'8S':8,'9C':9,'9D':9,'9H':9,'9S':9,'10C':10,'10D':10,'10H':10,'10S':10,'JC':11,'JD':11,'JH':11,'JS':11,'QC':12,'QD':12,'QH':12,'QS':12,'KC':13,'KD':13,'KH':13,'KS':13,'AC':14,'AD':14,'AH':14,'AS':14},
    'Computercardvalue':{'2C':2,'2D':2,'2H':2,'2S':2,'3C':3,'3D':3,'3H':3,'3S':3,'4C':4,'4D':4,'4H':4,'4S':4,'5C':5,'5D':5,'5H':5,'5S':5,'6C':6,'6D':6,'6H':6,'6S':6,'7C':7,'7D':7,'7H':7,'7S':7,'8C':8,'8D':8,'8H':8,'8S':8,'9C':9,'9D':9,'9H':9,'9S':9,'10C':10,'10D':10,'10H':10,'10S':10,'JC':11,'JD':11,'JH':11,'JS':11,'QC':12,'QD':12,'QH':12,'QS':12,'KC':13,'KD':13,'KH':13,'KS':13,'AC':14,'AD':14,'AH':14,'AS':14},
}

    let myValueCard;
    let computerValueCard;
    let cardForMe;
    let cardForComputer;
    let myResult=0;
    let computerResult=0;
    const winSound = new Audio('cash.mp3');
    const swishSound = new Audio('swish.m4a');
    const warSound = new Audio('brutality.mp3');
    let aaa;
    let bbb;

    

  function dealCard(){
    let cardForMe = pickRandomCard();
    document.getElementById('showcard').src = cardForMe+'.jpg';
     myValueCard = warCardGame['Mycardvalue'][cardForMe];
     swishSound.play();
     aaa=document.getElementById('showcard');
     aaa.style.display='block'
     document.getElementById('btn1').disabled = true;
     }

    function computerCard(){
    let cardForComputer = pickRandomCardForComputer();
    document.getElementById('showcardComputer').src = cardForComputer+'.jpg';
     computerValueCard = warCardGame['Computercardvalue'][cardForComputer];
     bbb=document.getElementById('showcardComputer');
     swishSound.play();
     bbb.style.display='block'
         
     }

   function pickRandomCard(){
    let randomIndex = Math.floor(Math.random() * 53);
    return warCardGame['cards'][randomIndex];
    }

    function pickRandomCardForComputer(){
        let randomIndex = Math.floor(Math.random() * 53);
        return warCardGame['cards'][randomIndex];
        }

     function showScore (){
        if(computerValueCard<myValueCard){
            myResult+=2;                      
             document.getElementById('myResult').textContent=myResult;
             winSound.play();
         }else if(computerValueCard>myValueCard){
            computerResult+=2;                    
             document.getElementById('comResult').textContent=computerResult;
         }else if (computerValueCard=myValueCard){
           warSound.play();    

     } 
    }
     
     
     function hide1(){
         if(aaa.style.display='block'){
            aaa.style.display = 'none';
         }
     }

     function hide2(){
        if(bbb.style.display='block'){
           bbb.style.display = 'none';
           document.getElementById('btn1').disabled = false;
        }
    }
     
    


    
        

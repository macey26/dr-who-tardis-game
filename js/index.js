

 
let askFirstDoctor = () => {
    const questionOne = confirm("Did your favorite Doctor grasp his coat collars often?");
    if (questionOne === true){
      const questionTwo =  confirm("Did he say \'hmm... whats that my boy?\'");
       if ( questionTwo === true){
         confirm ("This is the first Doctor, played by William Hartnell. Is this your favorite Doctor?");
       	}else{
          askEleventhDoctor(); 
       } 
    }else{
      askEleventhDoctor(); 
    }	

};
    

let askSecondDoctor = () => {
    const questionThree = confirm("Did your favorite Doctor, play the recorder?");
    if ( questionThree === true){
      const questionFour =  confirm("Did he say \"Butter fingers!\" in times of crisis");
       if ( questionFour === true){
         confirm ("This is the second Doctor, played by Patrick Troughton. Is this your favorite Doctor");
       	}else{
       	  askFourthDoctor();
       } 
    }else{
       askFourthDoctor();

    }	  
};
     
     
let askThirdDoctor = () => {
    const questionFive = confirm("Was your favorite Doctor made to stay on earth for the majority of his incarnation?");
    if ( questionFive === true){
      const questionSix=  confirm(" Did he often say \'Reverse the polarity\'");
       if ( questionSix === true){
         confirm ("This is the third Doctor, played by Jon Pertwee. Is this your favorite Doctor?");
       	}else{
       	  alert("Ive run out of Questions");
       } 
    }else{
       alert("Ive run out of Questions");
    }	 
}; 


let askFourthDoctor = () => {
    const questionSeven = confirm("Did your favorite Doctor wear a long scarf?");
    if ( questionSeven === true){
      const questionEight =  confirm("Did he  say \"Would you like a jelly baby?\"");
       if ( questionEight === true){
         confirm ("This is the Fourth Doctor, played by Tom Baker. Is this your favorite Doctor?");
       	}else{
       	  askTwelfthDoctor();
       } 
    }else{
      askTwelfthDoctor();
    }	 

}; 


let askFifthDoctor = () => {
    const questionNine = confirm("Did your favorite Doctor wear celery on his colar?");
    if ( questionNine === true){
      const questionTen =  confirm("Was he known to say \"Must dash\"");
       if ( questionTen === true){
         confirm ("This is the fifth Doctor, played by Peter Davison. Is this your favorite Doctor?");
       	}else{
       	  askNinthDoctor();
       } 
    }else{
      askNinthDoctor();
    }	 

}; 


let askSixthDoctor = () => {
    const questionEleven = confirm("Did your favorite Doctor wear a coat of many colors?");
    if ( questionEleven === true){
      const questionTwelve =  confirm("Was he known to say \"Mmm I wonder…Aha!\"");
       if ( questionTwelve === true){
         confirm ("This is the sixth Doctor, played by Colin Baker. Is this your favorite Doctor?");
       	}else{
       	  askThirdDoctor();
       } 
    }else{
      askThirdDoctor();
    }	 

}; 

let askSeventhDoctor = () => {
    const questionOne = confirm("Did your favorite Doctor, have an umbrella, with a question mark for a handle?");
    if ( questionOne === true){
      const questionTwo =  confirm("Was he known to say \"If we fight like animals, we die like animals\"");
       if ( questionTwo === true){
         confirm ("This is the seventh Doctor, played by Sylverster McCoy. Is this your favorite Doctor?");
       	}else{
       	  askEighthDoctor();
       } 
    }else{
      askEighthDoctor();
    }	 

}; 


let askEighthDoctor = () => {
    const questionOne = confirm("Did your favorite Doctor wear an outfit like Wild Bill Hickok?");
    if ( questionOne === true){
      const questionTwo =  confirm("Was he known to say \"Who am I?\"");
       if ( questionTwo === true){
         confirm ("This is the Eighth Doctor, played by Paul McGann. Is this your favorite Doctor?");
       	}else{
       	  askTenthDoctor();
       } 
    }else{
      askTenthDoctor();
    }	 

}; 


let askNinthDoctor = () => {
    const questionOne = confirm("Did your favorite Doctor, wear a leather jacket?");
    if ( questionOne === true){
      const questionTwo =  confirm("Was he known to say \"Fantastic\"");
       if ( questionTwo === true){
         confirm ("This is the Ninth Doctor, played by Christopher Eccleston. Is this your favorite Doctor?");
       	}else{
       	  askEighthDoctor();
       } 
    }else{
      askEighthDoctor();
    }	 

}; 

let askTenthDoctor = () => {
    const questionOne = confirm("Did your favorite Doctor wear pinstripes, with spikey hair?");
    if ( questionOne === true){
      const questionTwo =  confirm("Was he known to say \"Allons-y!\"");
       if ( questionTwo === true){
         confirm ("This is the Tenth Doctor, played by David Tennant. Is this your favorite Doctor?");
       	}else{
       	  askSixthDoctor();
       } 
    }else{
      askSixthDoctor();    }	 

}; 

let askEleventhDoctor = () => {
    const questionOne = confirm("Did your favorite Doctor eat fish fingers and custard?");
    if ( questionOne === true){
      const questionTwo =  confirm("Was he known to say \"Bow ties are cool?\"");
       if ( questionTwo === true){
         confirm ("This is the Twelfth Doctor, played by Peter Capaldi. Is this your favorite Doctor?");
       	}else{
       	  askSecondDoctor();
       } 
    }else{
      askSecondDoctor();
    }	 

}; 

let askTwelfthDoctor = () => {
    const questionOne = confirm("Did your favorite Doctor play the electric Guitar?");
    if ( questionOne === true){
      const questionTwo =  confirm("Did he say \"I've got new kidneys!!!\"");
       if ( questionTwo === true){
         confirm ("This is the Eleventh Doctor, played by Matt Smith. Is this your favorite Doctor?");
       	}else{
       	  askFifthDoctor();
       } 
    }else{
      askFifthDoctor();
    }	 

}; 


askFirstDoctor();
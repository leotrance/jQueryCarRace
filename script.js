
$('#go').click(function(){
    
    
    //build a function to check if the car has wone the race
    
    function checkIfComplete(){
        if(isComplete== false){
            isComplete=true;
        }else{
            place='second';
        }
    }
   
    //get the width of the cars
    
    var carWidth= $('#car1').width();
    
    //get  the width of the race track
    
    var raceTrackWidth=$(window).width()- carWidth;
    
    //generate random # between 1 and 5000 
    
    
    var raceTime1 = Math.floor((Math.random()*5000) +1);
    var raceTime2 = Math.floor((Math.random()*5000) +1);
    
    //set a flag variable to FALSE by default
    
    var isComplete=false;
    
    
    //set a flag variable to FIRST by default
    
    var place='first';
    
    //animate car1 
    
    $('#car1').animate({
        
            //move the car width of the race track
        left:raceTrackWidth
        
    },raceTime1, function(){
        //animation is complete 
        //run a function 
        
        checkIfComplete();
        
        
        //give some text feedback
        
        $('#raceInfo1 span').text('Finished in ' +place+ 'place and clocked in at '+ raceTime1+' miliseconts!');
    });
    
    
     //animate car2 
    
    $('#car2').animate({
        
            //move the car width of the race track
        left:raceTrackWidth
        
    },raceTime2, function(){
        //animation is complete 
        //run a function 
        
        checkIfComplete();
        
        
        //give some text feedback
        
        $('#raceInfo2 span').text('Finished in ' +place+ 'place and clocked in at '+ raceTime2+' miliseconts!');
    });
    
});


//reset

$('#reset').click(function(){
   $('.car').css('left','0');
    $('.raceInfo span').text('');
    
    
});






//copyright Leo Kelmendi 


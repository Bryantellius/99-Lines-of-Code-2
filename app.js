let friends = ["Wil", "Sim", "Mola", "Fela", "Denna"];

let btn = document.querySelector('button');
// Button activates singing function
btn.addEventListener('click', function(){
    for(i=0; i<friends.length; i++){
        // Creates div for each friend
        let newDiv = document.createElement('div');
        newDiv.className = 'friend my-2 bg-light border border-dark rounded px-2';
        document.body.appendChild(newDiv);
        let hName = document.createElement('h3');
        hName.textContent = friends[i];
        newDiv.appendChild(hName);
        // For loop for lyrics
        for(x=99; x>0; x--){
            let lyrics = document.createElement('p');

            let songStart = x + " lines of code in the file, " + x + " lines of code, " 
            + friends[i] + " strikes one out, clears it all out, " + (x-1) + " lines of code in the file.";

            let songMid = x + " lines of code in the file, " + x + " lines of code, " 
            + friends[i] + " strikes one out, clears it all out, " + (x-1) + " line of code in the file.";
                
            let songEnd = x + " line of code in the file, " + x + " line of code, " 
                    + friends[i] + " strikes one out, clears it all out, no more lines of code in the file.";
                
            // Determines which lines of code to attach to lyrics
            if(x>2){
                lyrics.textContent = songStart;
                
            }else if(x===2){
                lyrics.textContent = songMid;
            }else{
                lyrics.textContent = songEnd;
            }
            // Attaches p.lyric to div.friend
            newDiv.appendChild(lyrics);
        };
    };

    let theEnd = document.createElement('div');
    theEnd.className = 'alert bg-success text-white text-right';
    theEnd.textContent = 'The End, unless we sing again..';
    document.body.appendChild(theEnd);
});
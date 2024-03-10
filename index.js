function roll(){
    let number = document.getElementById("text").value;
    let imag = document.getElementById("Diceimage");
    let results = document.getElementById("diceNumber");

    const value = [];
    let images= [];

    let num = Number(number);

    for(i = 0; i < num; i++){
        let random = Math.floor(Math.random()* 6)+1;
        value.push(random);
        images.push(`<img src="${random}.jpg">`);
         
    }
    results.textContent =`dice: ${value.join(', ')}`;
    imag.innerHTML= images.join('');
}

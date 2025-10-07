const toggleBtn = document.getElementById('mode-toggle');


toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    toggleBtn.textContent = document.body.classList.contains('light-mode') ? 'Dark Mode' : 'Light Mode';
});

vrati = (broj)=>{
    if(broj===1)
    {
        window.location.href="../index.html"
    }
    else{
        window.location.href="lekcija" + (broj-1)+".html";
    }
}

dalje=(broj)=>
{
    window.location.href="lekcija" + (broj+1) +".html";
}
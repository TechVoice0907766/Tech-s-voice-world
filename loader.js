window.addEventListener('load',function()
{
    setTimeout(function()
    {
        const loader=document.getElementById('loader');
        loader.style.opacity='0'
        setTimeout(()=>{
            loader.style.display='none';
        },500);
    },2000);
})

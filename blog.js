document.getElementById("contactForm").addEventListener("submit", function(e)
{
    e.preventDefault(); // Prevent from refreshing page
    //get input value
    let name=document.getElementById("name").value.trim();
    let email=document.getElementById("email").value.trim();
    let subject=document.getElementById("subject").value.trim();
    let message=document.getElementById("message").value.trim();
    let response=document.getElementById("response");


    //basic validation
    if(!name || !email || !subject || !message) {
        response.style.color="red";
        response.textContent="please fill in all field.";
        return;
    }
    //stimulate success message
    response.style.color="green";
    response.textContent="Message sent successfully!";

    //clear form
    document.getElementById("contactForm").reset()
});
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



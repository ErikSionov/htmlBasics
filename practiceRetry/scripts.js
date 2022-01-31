let pressed;

function endDrag()
{
    console.log("drag ended");
}

function onDragStart()
{
    console.log("drag started");
}

function showMenu()
{
    if (!pressed)
    {
        pressed = true;
        document.getElementById("divMenu").style.display = "none";
    } else
    {
        document.getElementById("divMenu").style.display = "block";
        pressed = false;
    }
}
function imageLoad()
{
    var allImg = document.images;
    for(i=0;i<allImg.length-1;i++)
    {
        allImg[i].src=`./gallery/${i+1}.jpg`
        allImg[i].style.width = "300px"
        allImg[i].style.height = "300px"
    }
    console.log(allImg)
}
function bigImage(imagePath)
{
    document.getElementById("bigwindow").style.display="block"
    console.log(imagePath)
    document.getElementById("bigImage").style.backgroundImage=`url(${imagePath})`
}
function bigImageClose()
{
    document.getElementById("bigwindow").style.display="none"
}

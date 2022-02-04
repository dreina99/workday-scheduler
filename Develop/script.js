var currentDate = moment().format("MMMM Do YYYY");
$("#currentDay").text(currentDate);

var hour = moment().hour();
console.log(hour);

$(".saveBtn").click(function(e) {
    var divID = $(this).parents("div").attr("id");
    //console.log(divID);
    var textAreaContent = $(this).siblings(".content").val();
    //console.log(textAreaContent);
    localStorage.setItem(divID, textAreaContent);
});

var loadArray = document.querySelectorAll(".content");
for(let i = 0; i < loadArray.length; i++)
{
    loadArray[i].innerHTML = localStorage.getItem(i + 9);
}

var timeBlock = document.querySelectorAll(".row");
for(let i = 0; i < timeBlock.length; i++)
{
    if(hour < i + 9)
    {
        timeBlock[i].classList.add("future");
    }
    else if(hour > i + 9)
    {
        timeBlock[i].classList.add("past");
    }
    else
    {
        timeBlock[i].classList.add("present");
    }
}
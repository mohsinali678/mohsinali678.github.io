// Lesson 1: Detecting a click
// $(".square").click(() => {
//     alert("Square was clicked.")
// });


// Lesson 2: Changing website content


// $("#circle").click(() => {
    
//     // $("p").html("This text has changed.")
//     // alert($("p").html());

//     $("iframe").attr("src", "http://mohsinali678.github.io/projects.html");

// });


// Lesson 3: Changing website styles

// $("div").click(function () {
//     // $("#circle").css("background-color", "red");
//     // alert($("body").css("width"));

//     // you will need to use function (e) {} instead of (e) => {}
//     // From MDN: "An arrow function expression has a shorter syntax than a function expression
//     //  and does not have its own this, arguments, super, or new.target."

//     // $(this).css("display", "none");

//     if($(this).attr("id") === "circle"){
//         alert("You clicked on a circle");
//     }else{
//         alert("You clicked on a square");
//     }
// });


// Lesson 4: Fading Content

// $("div").click(function (){
//     $(this).fadeOut("slow", function(){
//         alert("Fadeout has finished.")
//     });
// })

// function fadeOut() {
//     $("#text").fadeOut("slow");
// }

// $("#fadeOut").click(function (){
//     $("#text").fadeOut();
// })

// $("#fadeIn").click(function(){
//     $("#hiddenText").fadeIn("slow")
// })

// Method 1
// $("#toggle").click(function (){
//     if($("#text").css("display") === "none"){
//         $("#text").fadeIn();
//     }else{
//         $("#text").fadeOut();
//     }
    
// })

// Method 2
// let showingText = true;

// $("#toggle").click(() => {
//     if(showingText){
//         $("#text").fadeOut(()=>{showingText=false;})
//     }else{
//         $("#text").fadeIn(()=>{showingText=true;})
//     }
// })


// Lesson 5: Animating Content

// $("#circle")
// .click(function (){
//     $(this)
//     .animate({
//         width:"400px",
//         height:"400px",
//         marginLeft:"100px",
//         marginTop:"100px"
//     }, 2000,    
//     function(){
//         $(this).css("background-color", "red");
//     })

// })


// Lesson 6: AJAX

// $.get("info.txt", function(data){
//     alert(data);
// })

$.ajax("infoo.txt").done((data)=>{
    alert(data);
}).fail(()=>{
    alert("Could not get data.")
});

$.ajax("info.txt").done(function(data){
    $("#text").innerHTML = data;
}).fail(function(){
    alert("Could not get data.");
})

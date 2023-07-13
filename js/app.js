$(document).ready(function(){

    // start left sidebar 
    $(".sidebarlinks").click(function(){
        $(".sidebarlinks").removeClass("currents");
        $(this).addClass("currents");
    });
    // end left sidebar 

});




// Start JS Area 


// Start notify & userlogout 

    // start dropdown 
    function dropbtn(e){
        // console.log(e.target);

        e.target.parentElement.nextElementSibling.classList.toggle('show');
    }
    // end dropdown 

// End notify & userlogout 



// start gauge area 

var gaugeurs = new JustGage({
    id: "gaugeusers", // the id of the html element
    width:200,
    height:200,
    value: 50,
    min: 0,
    max: 70,
    gaugeWidthScale: 0.6
});

var gaugecus = new JustGage({
    id: "gaugecustomers", // the id of the html element
    width:200,
    height:200,
    value: 24,
    min: 0,
    max: 100,
    gaugeWidthScale: 0.6
});

var gaugeemps = new JustGage({
    id: "gaugeemployees", // the id of the html element
    width:200,
    height:200,
    value: 80,
    min: 0,
    max: 100,
    gaugeWidthScale: 0.6
});

var gaugeinvs = new JustGage({
    id: "gaugeinversters", // the id of the html element
    width:200,
    height:200,
    value: 40,
    min: 0,
    max: 60,
    gaugeWidthScale: 0.6
});

// update the value randomly
setInterval(() => {
gaugeurs.refresh(Math.random() * 70);
gaugecus.refresh(Math.random() * 100);
gaugeemps.refresh(Math.random() * 100);
gaugeinvs.refresh(Math.random() * 60);
}, 5000)




// end gauge area 



// start expense area 
const ctx = document.getElementById('mypiechart');
ctx.height = 250;
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [12, 19, 3],
        borderWidth: 1
      }]
    },
    options: {
      responsive:false
    }
  });
// end expense area 





// End Js Area 
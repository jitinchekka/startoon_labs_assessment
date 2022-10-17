// Get input values from the form
var curr, max;
var percent;
// Event listener for the form on change
// Calculate the percentage
// Update the progress bar
var xValues = ["Vertical Progress Bar"];
var yValues = [percent];
var barColors = ["#6e93f2"];
var myChart = new Chart("barChart", {
	// Axes display false
// 	type: "horizontalBar",
// 	data: {
// 		labels: xValues,
// 		datasets: [{
// 			backgroundColor: barColors,
// 			data: yValues
// 		}]
// 	},
// 	options: {
// 		legend: { display: false },
// 		title: {
// 			display: true,
// 			text: "Vertical Progress Bar"
// 		},
// 		scales: {
// 			xAxes: [{
// 				display: false
// 			}],
// 			yAxes: [{
// 				display: false
// 			}]
// 		}
// 	}
// });
  type: "bar",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
        maxBarThickness: 2,
      },
    ],
	},
	// Background color
	backgroundColor:["#000000"],	
	options: {
	// Maintain aspect ratio false
	maintainAspectRatio: false,
    legend: { display: false },
    title: {
      display: true,
    //   text: "Vertical Progress Bar",
    },
	  scales: {
      drawTicks: false,
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 100,
            stepSize: 1,
            beginAtZero: true,
          },
          gridLines: {
            display: false,
            drawBorder: false,
          },
          //   Hide the y-axis
          display: false,
        },
      ],
      xAxes: [
        {
          // Bar width
          barPercentage: 10,
          // drawticks
			display: false,
        },
      ],
    },
  },
});
// Update the chart with the new data
document.getElementById("myForm").addEventListener("input", function () {
  console.log("input event");
  curr = document.getElementById("curr").value;
  max = document.getElementById("max").value;
  // convert to numbers
  curr = Number(curr);
  max = Number(max);
  // Prevent default
  if (curr > max) {
    // Remove invalid pseudo class from curr
    document.getElementById("curr").setCustomValidity("error");
    console.log("error");
  } else {
    document.getElementById("curr").setCustomValidity("");
  }
  percent = (curr / max) * 100;
  myChart.data.datasets[0].data[0] = percent;
  myChart.update();
  console.log(percent);
  // Update the progress bar
});

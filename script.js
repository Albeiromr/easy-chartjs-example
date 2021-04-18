var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado"],
    datasets: [
      {
        label: "Revenue",
        data: [12, 19, 3, 5, 2, 3],
        borderColor: ["#348F6C"],
        borderWidth: 4,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 20,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 7,
        pointStyle: "cros",
        backgroundColor: "#46C292",
        hoverRadius: 10,
        hoverBorderWidth: 3
      },
      line: {
        tension: 0,
        backgroundColor: "rgb(70, 194, 146, 0.5)",
        fill: true
      }
    },
  },
});

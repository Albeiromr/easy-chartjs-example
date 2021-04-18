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
        borderWidth: 3,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
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
    },
  },
});

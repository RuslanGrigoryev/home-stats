app.controller('ChartController', function($scope, dataFactory) {

	var data = dataFactory.getAllData();


	data.then(function(data) {

		var ctx = document.getElementById("home_stats_pie_chart").getContext("2d");

		var chart_data = {

		    labels: createArrayForCharts("month", data),

		    datasets: [

		        {
		            label: "ElectroEnergy",
		            fillColor: "rgba(220,220,220,0.5)",
		            strokeColor: "rgba(220,220,220,0.8)",
		            highlightFill: "rgba(220,220,220,0.75)",
		            highlightStroke: "rgba(220,220,220,1)",
		            data: createArrayForCharts("energy", data)
		        },

		        {
		            label: "Water",
		            fillColor: "rgba(52, 152, 219, 0.5)",
		            strokeColor: "rgba(52, 152, 219, 0.8)",
		            highlightFill: "rgba(52, 152, 219, 0.75)",
		            highlightStroke: "rgba(52, 152, 219, 1)",
		            data: createArrayForCharts("water", data)
		        },

		        {
		            label: "Gaz",
		            fillColor: "rgba(255,51,51,0.5)",
		            strokeColor: "rgba(255,51,51,0.8)",
		            highlightFill: "rgba(255,51,51,0.75)",
		            highlightStroke: "rgba(255,51,51,1)",
		            data: createArrayForCharts("gaz", data)
		        }

		    ]
		};

		var myBarChart = new Chart(ctx).Bar(chart_data);

	}, function(msg, code){});

	// @description: function, which will return new array with necessary fields
	// @param: string, object field (month or energy or water etc.)

	function createArrayForCharts(field, data) {

		var arr = data,
			newArr = [];

		for ( var key in arr.data ) {

			switch (field) {

				case "month":

				newArr.push(arr.data[key].month);

				break;

				case "energy":

				newArr.push(arr.data[key].energy);

				break;

				case "water":

				newArr.push(arr.data[key].water);

				break;

				case "gaz":

				newArr.push(arr.data[key].gaz);

				break;
			}

		}

		return newArr;

	}

});
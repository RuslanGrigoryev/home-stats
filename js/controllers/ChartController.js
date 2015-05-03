app.controller('ChartController', function($scope, dataFactory) {

	var data = dataFactory.getAllIndicators();

	data.then(function(data) {

		var ctx = document.getElementById("home_stats_pie_chart").getContext("2d");

		var chart_data = {

		    labels: createArrayForCharts("month", data),

		    datasets: [

		        {
		            label: "Электроэнергия (кВт)",
		            fillColor: "rgba(220,220,220,0.5)",
		            strokeColor: "rgba(220,220,220,0.8)",
		            highlightFill: "rgba(220,220,220,0.75)",
		            highlightStroke: "rgba(220,220,220,1)",
		            data: createArrayForCharts("energy", data)
		        },

		        {
		            label: "Вода (куб)",
		            fillColor: "rgba(52, 152, 219, 0.5)",
		            strokeColor: "rgba(52, 152, 219, 0.8)",
		            highlightFill: "rgba(52, 152, 219, 0.75)",
		            highlightStroke: "rgba(52, 152, 219, 1)",
		            data: createArrayForCharts("water", data)
		        },

		        {
		            label: "Газ(куб)",
		            fillColor: "rgba(255,51,51,0.5)",
		            strokeColor: "rgba(255,51,51,0.8)",
		            highlightFill: "rgba(255,51,51,0.75)",
		            highlightStroke: "rgba(255,51,51,1)",
		            data: createArrayForCharts("gaz", data)
		        }

		    ]
		};
		
		var myBarChart = new Chart(ctx).Bar(chart_data, {

			barValueSpacing : 35,

			barDatasetSpacing : 10,

			multiTooltipTemplate: "<%= datasetLabel %>: <%= value %>"

		});

	}, function(msg, code){});

	// @description: function, which will return new array with necessary fields
	// @param: string, object field (month or energy or water etc.)

	function createArrayForCharts(field, data) {

		var arr = data,
			newArr = [];

		for ( var key in arr ) {

			switch (field) {

				case "month":

				newArr.push(arr[key].month);

				break;

				case "energy":

				newArr.push(arr[key].energy);

				break;

				case "water":

				newArr.push(arr[key].water);

				break;

				case "gaz":

				newArr.push(arr[key].gaz);

				break;
			}

		}

		return newArr;

	}

});
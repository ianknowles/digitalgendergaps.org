// Datamaps expect data in format:
// { "USA": { "fillColor": "#42a844", numberOfWhatever: 75},
//   "FRA": { "fillColor": "#8dc386", numberOfWhatever: 43 } }
var dataset = [{}, {}];
var csvdata = {};
var csvdatalist = [];
var map;
var csv_url = "";
var datestring = ""
var base_url = "https://s3.eu-west-3.amazonaws.com/www.digitalgendergaps.org/";
var colour_min_value = "#FF0000"
var colour_max_value = "#00FF00"
var minValue;
var maxValue;
var sortAscending = false;
var mapName = 'map';

map = createdatamap(mapName + '-chart-area');
var l = {
    //legendTitle: "Where Have We Been",
    defaultFillName: "Whats left",
    //labels: {
    //    Visited: "Fred",
    //    spouse: "Wilma",
    //    together: "Together",
    //    separately: "Separately",
    //},
};
var legendopts = {element: "map-legend"}
//map.legend(l, legendopts);
//add the plugin to Datamaps
map.addPlugin("mylegend", addLegend);

d3.select(window).on('resize', function() {
	map.resize();
});

d3.json(base_url + "data/models.json", function(model_index) {
	let picker = d3.select('#' + mapName + '-report-picker')
	picker.selectAll('option').remove()
	picker
		.selectAll('option')
		.data(Object.keys(model_index))
		.enter()
		.append('option')
		.text(function(x){return x;})
		.attr('value', function(x){return model_index[x];});
	picker.select('option').attr('value', model_index['latest'])
	picker.select('option').text('Latest')
	//var formData = new FormData(document.querySelector('form'))
	var formDict = JSON.parse(document.getElementById('chart-setup').innerHTML);
	//for(var pair of formData.entries()) {
	//	formDict[pair[0]] = pair[1]
	//}
	if (('report' in formDict) && (formDict['report'] in model_index))
	{
		picker.property('value', model_index[formDict['report']])
		csv_url = base_url + model_index[formDict['report']];
	} else {
		picker.property('value', model_index['latest'])
		csv_url = base_url + model_index['latest'];
	}

	fetch_csv();

	picker.on('change', change_report)
})

function change_report() {
	csv_url = base_url + this.value;

	dataset = [{}, {}];
	csvdata = {};
	csvdatalist = [];
	map.updateChoropleth({}, {reset: true})

	fetch_csv();
}

function fetch_csv() {
    d3.queue()
        .defer(d3.csv, csv_url, function (d) {
            csvdata[d.ISO3Code] = d;
            csvdatalist.push(d);
        })
        .await(ready);
}

var tabulate = function (dict) {
function rowsort(d) {
	thead2.selectAll('th').attr('class',  function (d) { return 'header ' + class_dict[d] }).text(function (d) { return header_dict[d] });

	if (sortAscending) {
		if ((d === 'Country') || (d === 'ISO3Code')) {
			rows.sort(function(a, b) {return d3.ascending(a[d], b[d]);  });
		}
		else
		{
			rows.sort(function(a, b) {
				var ax = Number.parseFloat(a[d]);
				if (Number.isNaN(ax)) {
					ax = 0;
				}
				var bx = Number.parseFloat(b[d]);
                if (Number.isNaN(bx)) {
                	bx = 0;
                }
				return d3.ascending(ax, bx);
			});
		}
		sortAscending = false;
		this.className = 'ascending ' + class_dict[d];
		//this.textContent = header_dict[d] + ' \u21E7';
	} else {
		if ((d === 'Country') || (d === 'ISO3Code')) {
			rows.sort(function(a, b) {return d3.descending(a[d], b[d]);  });
		}
		else
		{
			rows.sort(function(a, b) {
				var ax = Number.parseFloat(a[d]);
				if (Number.isNaN(ax)) {
					ax = 0;
				}
				var bx = Number.parseFloat(b[d]);
                if (Number.isNaN(bx)) {
                	bx = 0;
                }
				return d3.descending(ax, bx);
			});
		}
		sortAscending = true;
		this.className = 'descending ' + class_dict[d];
		//this.textContent = header_dict[d] + ' \u21E9';
	}
}

	columns = []
	for (var key in dict[0]) {
		columns.push(key)
	}
	data = dict
	var table = d3.select('#' + mapName + '-modeltable');
	table.select('thead').remove();
	table.select('tbody').remove();
	var thead = table.append('thead')
	var tbody = table.append('tbody')

	var header_dict2 = {
		'': '',
		'Country': 'Country',
		'ISO3Code': 'alpha-3',
		'Ground Truth Internet GG': 'ITU Internet GG',
		'Internet online model prediction': 'Internet GG (Online Model Prediction)',
		'Internet Online-Offline model prediction': 'Internet GG (Online-Offline Prediction)',
		'Internet Offline model prediction': 'Internet GG (Offline Model Prediction)',
		'Mobile_GG': 'Mobile GG',
		'Mobile Online model prediction': 'Mobile GG (Online Model Prediction)',
		'Mobile Online-Offline model prediction': 'Mobile GG (Online-Offline Prediction)',
		'Mobile Offline model prediction': 'Mobile GG (Offline Model Prediction)',
	};
	var header_dict3 = {
		'': '#',
		'Country': 'Country',
		'ISO3Code': 'alpha-3',
		'Ground Truth Internet GG': 'Internet GG - ITU',
		'Internet online model prediction': 'Internet GG - Online',
		'Internet Online-Offline model prediction': 'Internet GG - Combined',
		'Internet Offline model prediction': 'Internet GG - Offline',
		'Mobile_GG': 'Mobile GG - GSMA',
		'Mobile Online model prediction': 'Mobile GG - Online',
		'Mobile Online-Offline model prediction': 'Mobile GG - Combined',
		'Mobile Offline model prediction': 'Mobile GG - Offline',
	};
	var header_dict = {
		'': '#',
		'Country': 'Country',
		'ISO3Code': 'alpha-3',
		'Ground Truth Internet GG': 'ITU',
		'Internet online model prediction': 'Online',
		'Internet Online-Offline model prediction': 'Combined',
		'Internet Offline model prediction': 'Offline',
		'Mobile_GG': 'GSMA',
		'Mobile Online model prediction': 'Online',
		'Mobile Online-Offline model prediction': 'Combined',
		'Mobile Offline model prediction': 'Offline',
	};
	var class_dict = {
		'': '',
		'Country': '',
		'ISO3Code': '',
		'Ground Truth Internet GG': 'table-primary',
		'Internet online model prediction': 'table-primary',
		'Internet Online-Offline model prediction': 'table-primary',
		'Internet Offline model prediction': 'table-primary',
		'Mobile_GG': 'table-info',
		'Mobile Online model prediction': 'table-info',
		'Mobile Online-Offline model prediction': 'table-info',
		'Mobile Offline model prediction': 'table-info',
	};
	var thead1 = thead.append('tr').attr('style', 'border-bottom: 0px;')
	thead1.append('th').attr('style', 'border-bottom: 0px;')
	thead1.append('th').attr('style', 'border-bottom: 0px;')
	thead1.append('th').attr('style', 'border-bottom: 0px;')
	var theadcell1 = thead1.append('th')
			.attr('colspan', '4')
			.attr('class', 'table-primary text-center')
			.attr('style', 'border-bottom: 0px;')
		theadcell1.append('a')
			.text('Internet GG')
			.attr('href', '/indicators#internet')
			.attr('class', 'mx-1')
		theadcell1.append('a')
			.text('?')
			.attr('class', 'badge badge-secondary')
			.attr('style', 'vertical-align: super;')
			.attr('href', '/indicators#internet')
	var theadcell2 = thead1.append('th')
			.attr('colspan', '4')
			.attr('class', 'table-info text-center')
			.attr('style', 'border-bottom: 0px;')
		theadcell2.append('a')
			.text('Mobile GG')
			.attr('href', '/indicators#mobile')
			.attr('class', 'mx-1')
		theadcell2.append('a')
			.text('?')
			.attr('class', 'badge badge-secondary')
			.attr('style', 'vertical-align: super;')
			.attr('href', '/indicators#mobile')
	var thead2 = thead.append('tr')
	thead2.selectAll('th')
		.data(columns)
		.enter()
		.append('th')
		.text(function (d) { return header_dict[d] })
		.attr('class', function (d) { if (d === '') { return 'ascending ' + class_dict[d] } else { return 'header ' + class_dict[d] }})
		.attr('style', 'border-top: 0px;')
		.on('click', rowsort)

		//.append('span').selectAll('span').data(d3.range(2)).enter()
		//.append('div').attr('class', 'col').attr('data-feather', function (d) { if (d) { return 'chevron-up' } else { return 'chevron-down'} })

	var rows = tbody.selectAll('tr')
		.data(data)
		.enter()
		.append('tr')
		.attr('id', function(row) { return row['ISO3Code']})
		//.attr('class', 'row-anchor');

	//rows.selectAll('tr').append('a')

	var cells = rows.selectAll('td')
		.data(function(row) {
			return columns.map(function (column) {
				return { column: column, value: row[column] }
			})
		})
		.enter()
		.append('td')
		.attr('data-th', function (d) {
        	return header_dict3[d.column];
        })
		.text(function (d) { return d.value })
		//.attr('id', function (d) { if (d.column == 'ISO3Code') return d.value })

	feather.replace()
	d3.select('#' + mapName + '-tableshade').attr('class', 'd-none')
	scrollToWindowHash()
	return table;
}

function ready(error, us) {
    if (error) throw error;
    // We need to colorize every country based on "numberOfWhatever"
    // colors should be uniq for every value.
    // For this purpose we create palette(using min/max series-value)
    //can we get the headers from the csv read func?
    var headers = [];
    //dataset.forEach(function(obj){ onlyValues.append(obj['numberOfThings']); });
    for (var key in csvdata[Object.keys(csvdata)[0]]) {
        if ((key !== "") && (key !== 'Country') && (key !== 'ISO3Code')) {
            headers.push(key);
        }
    }
    var selCol1 = document.getElementById(mapName + '-select-column');
    d3.select('#'+ mapName + '-select-column').selectAll('option').remove()

    for (var x in headers) {
		var header_dict5 = {
			'': '',
			'Country': 'Country',
			'ISO3Code': 'alpha-3',
			'Ground Truth Internet GG': 'Internet GG - ITU',
			'Internet online model prediction': 'Internet GG - Online',
			'Internet Online-Offline model prediction': 'Internet GG - Combined',
			'Internet Offline model prediction': 'Internet GG - Offline',
			'Mobile_GG': 'Mobile GG - GSMA',
			'Mobile Online model prediction': 'Mobile GG - Online',
			'Mobile Online-Offline model prediction': 'Mobile GG - Combined',
			'Mobile Offline model prediction': 'Mobile GG - Offline',
		};
        selCol1.options.add(new Option(header_dict5[headers[x]], headers[x]));
    }
    selCol1.value = headers[1];
    d3.select('#'+ mapName + '-select-column').on('change', changeColumn)

    //tabulate(csvdatalist);
    //map.mylegend(l);
    updateMap(map, mapName + '-chart-area', dataset[0], selCol1.value);
    //map.mylegend(l);
    //map.resize()
    tabulate(csvdatalist);
    //map.resize()
    //TODO get the datestring cleanly
    var picker = document.getElementById(mapName + "-report-picker")
    var report_title = picker.options[picker.selectedIndex].text
    if (report_title == 'Latest') {
		report_title = picker.value.split('/')[1]
    }
    d3.select('#' + mapName + '-report-label').select('h2').text(report_title);
    d3.select('#' + mapName + '-report-label').select('span').attr('class', 'd-none');
    d3.select('#' + mapName + '-csvlink').on("click", function() {location.href=csv_url;});
    if (!window.location.search) {
		history.replaceState(null, '', '?report=' + report_title);
    }
	d3.select('#' + mapName + '-sharemail').on('click', function() {
		window.open("mailto:?to=&body=I'd%20like%20to%20share%20this%20Digital%20Gender%20Gaps%20report%20with%20you.%0A%0A" + window.location.href + "&subject=Digital%20Gender%20Gaps%20Report%20-%20" + report_title, '_blank');
	})
	addSearch()
	d3.select('#' + mapName + '-shade').attr('class', 'd-none')
}

function changeColumn() {
    dataset[0] = {}
    updateMap(map, mapName + '-chart-area', dataset[0], this.value);
}

function addSearch() {
    d3.select('#' + mapName + '-search')
      .on("keyup", function() {
        var searched_data = csvdatalist,
            text = this.value.trim();

        var searchResults = searched_data.map(function(r) {
          var regex = new RegExp("^" + text + ".*", "i");
          if (regex.test(r.Country)) {
            return regex.exec(r.Country)[0];
          }
        })

        searchResults = searchResults.filter(function(r){
          return r != undefined;
        })

        searched_data = searchResults.map(function(r) {
           return csvdatalist.filter(function(p) {
            return p.Country.indexOf(r) != -1;
          })
        })

		searched_data = [].concat.apply([], searched_data)

		tabulate(searched_data)
		})
}

function updateMap(map, id, dataset, column) {
    var onlyValues = [];

	//TODO dataset should not be passed in here need to ensure its empty so best to start over
	dataset = {}
    for (var key in csvdata) {
        var item = {};
        item['numberOfThings'] = csvdata[key][column] * 100;
        if (!isNaN(item['numberOfThings'])) {
            onlyValues.push(item['numberOfThings']);
            dataset[key] = item;
        }
    }
    minValue = Math.min.apply(null, onlyValues);
    //minValue = Math.min.apply(null, [50, minValue]);
    maxValue = Math.max.apply(null, onlyValues);
    //maxValue = Math.max.apply(null, [100, maxValue]);

    var paletteScale = d3.scale.linear()
        .domain([minValue, maxValue])
        .range([colour_min_value, colour_max_value]);

    // fill dataset in appropriate format
    for (var key in dataset) {
        if (isNaN(dataset[key]['numberOfThings']) || (dataset[key]['numberOfThings'] === 0)) {
            //get defaultFill from map
            dataset[key]['fillColor'] = map.options.fills.defaultFill;
        }
        else {
            dataset[key]['fillColor'] = paletteScale(dataset[key]['numberOfThings']);
        }
    }

    map.updateChoropleth(dataset, {reset: true});
    map.mylegend();
}

function createdatamap(id) {
    return new Datamap({
        element: document.getElementById(id),
        projection: 'equirectangular', // big world map
        //projection: 'mercator',
        responsive: true,
        //aspectRatio: 0.6785714285714286,
        //aspectRatio: 0.5625,
        aspectRatio: 0.5,
        // countries don't listed in dataset will be painted with this color
        fills: {defaultFill: '#F5F5F5'},
        data: {},
        geographyConfig: {
            borderColor: '#DEDEDE',
            highlightBorderWidth: 2,
            // don't change color on mouse hover
            highlightFillColor: function (geo) {
                return geo['fillColor'] || '#F5F5F5';
            },
            // only change border
            highlightBorderColor: '#B7B7B7',
            // show desired information in tooltip
            popupTemplate: function (geo, data) {
                // don't show tooltip if country don't present in dataset
                if ((!data) || (Object.keys(data).length === 0) || !('numberOfThings' in data) || isNaN(data.numberOfThings) || (data.numberOfThings === 0)) {
                	return ['<div class="hoverinfo">',
                   	 geo.properties.name, '<br />',
                  	  'No data',,
                  	  '</div>'].join('');
                }
                // tooltip content
                return ['<div class="hoverinfo">',
                    '<strong>', geo.properties.name, '</strong>',
                    '<br>', '<strong>', (data.numberOfThings / 100).toFixed(3), '</strong>',
                    '</div>'].join('');
            }
        },
        done: function(datamap) {
            datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography) {
                // alert(geography.properties.name);
                if (document.getElementById(geography.id)) {
                	window.location.href = "#" + geography.id;
                	anchorScroll(geography.id);
                }
            });
        }
    });
}

function addLegend(layer, data, options) {
	data = data || {};
	if ( !this.options.fills ) {
		return;
	}
	addVLegend(layer, data, options);
	addHLegend(layer, data, options);
	addColourPickers();
}

function addVLegend(layer, data, options) {
	let steps = d3.range(11).map(d => d3.format(".2f")((minValue + ((maxValue - minValue) * 0.1 * d))/100));
	steps.sort(d3.descending)

	d3.select('#' + mapName + '-v-legend-gradient')
		.attr('style', 'width: 15px; height: 95%; background: linear-gradient('
			+ colour_max_value + ', ' + colour_min_value + ')');

	d3.select('#' + mapName + '-v-legend-values').selectAll('div')
		.data(steps)
		.text(function(x) {
			if (x!="NaN") {
				return x;
			}
		});
}

function addHLegend(layer, data, options) {
	let steps = d3.range(11).map(d => d3.format(".2f")((minValue + ((maxValue - minValue) * 0.1 * d))/100));

	d3.select('#' + mapName + '-h-legend-gradient')
		.attr('style', 'width: 92.5%; height: 15px; background: linear-gradient(to right, '
			+ colour_min_value + ', ' + colour_max_value + ')');

	d3.select('#' + mapName + '-h-legend-values').selectAll('div')
		.data(steps)
		.text(function(x) {
			if (x!="NaN") {
				return x;
			}
		});
}

function addColourPickers() {
	d3.select('#' + mapName + '-color-min-input').attr('value', colour_min_value).on('change', function() {colour_min_value = this.value; changeColumn1(); })
	d3.select('#' + mapName + '-color-min-button').attr('style', 'background-color: ' + colour_min_value)
	d3.select('#' + mapName + '-color-min-link').attr('href', '/indicators#scale').text('Inequality')

	d3.select('#' + mapName + '-color-max-input').attr('value', colour_max_value).on('change', function() {colour_max_value = this.value; changeColumn1(); })
	d3.select('#' + mapName + '-color-max-button').attr('style', 'background-color: ' + colour_max_value)
	d3.select('#' + mapName + '-color-max-link').attr('href', '/indicators#scale').text('Equality')
}

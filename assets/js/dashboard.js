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

/*function moveUnderNav() {
    var $el, h = window.location.hash;
    if (h) {
        $el = $(h);
        if ($el.length && $el.closest('table').length) {
            $('body').scrollTop( $el.closest('table, tr').position().top - 96 );
        }
    }
}
*/

function anchorScroll(fragment) {
    "use strict";
    var amount, ttarget;
    amount = $('#nav-header').height();
    ttarget = $('#' + fragment);
    //$('html,body').animate({ scrollTop: ttarget.offset().top - amount }, 250);
    //$(ttarget).animate({ scrollTop: ttarget.offset().top - amount }, 250);
    $('html,body').scrollTop(ttarget.offset().top - amount);
    return false;
}

function outsideToHash() {
    "use strict";
    var fragment;
    if (window.location.hash) {
        fragment = window.location.hash.substring(1);
        anchorScroll(fragment);
    }
}

$(window)
    //.on("load", function () {
    //    moveUnderNav();
    //})
    .on('hashchange', function () {
        outsideToHash();
    });

//function insideToHash(nnode) {
    //"use strict";
    //var fragment;
    //fragment = $(nnode).attr('href').substring(1);
//    anchorScroll(fragment);
//}

//$(document).ready(function () {
//    "use strict";
    //$("a[href^='#']").bind('click',  function () {insideToHash(this); });
    //outsideToHash();
//});

map = createdatamap('myChart');
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

d3.json("https://s3.eu-west-3.amazonaws.com/www.digitalgendergaps.org/data/models.json", function(model_index){
	d3.select('#reportpicker').selectAll('option').remove()
	d3.select('#reportpicker')
    	.selectAll('option')
    	.data(Object.keys(model_index))
    	.enter()
    	.append('option')
    	.text(function(x){return x;})
    	.attr('value', function(x){return model_index[x];});
    d3.select('#reportpicker').select('option').attr('value', model_index['latest'])
    d3.select('#reportpicker').select('option').text('Latest')
    //var formData = new FormData(document.querySelector('form'))
    var formDict = JSON.parse(document.getElementById('formdata').innerHTML);
    //for(var pair of formData.entries()) {
	//	formDict[pair[0]] = pair[1]
    //}
    if (('report' in formDict) && (formDict['report'] in model_index))
    {
		d3.select('#reportpicker').property('value', model_index[formDict['report']])
		csv_url = base_url + model_index[formDict['report']];
    } else {
		d3.select('#reportpicker').property('value', model_index['latest'])
		csv_url = base_url + model_index['latest'];
    }

	fetch_csv();
})

function change_report() {
    var report = document.getElementById("reportpicker").value;
	csv_url = base_url + report;

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
	var table = d3.select('#modeltable');
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
	var thead1 = thead.append('tr').attr('class', 'row-anchor').attr('style', 'border-bottom: 0px;')
	thead1.append('th').attr('style', 'border-bottom: 0px;')
	thead1.append('th').attr('style', 'border-bottom: 0px;')
	thead1.append('th').attr('style', 'border-bottom: 0px;')
	thead1.append('th')
			.attr('colspan', '4')
			.text('Internet GG')
			.attr('class', 'table-primary')
			.attr('style', 'border-bottom: 0px;')
		.append('a')
			.text('?')
			.attr('class', 'badge badge-secondary')
			.attr('style', 'vertical-align: super;')
			.attr('href', '/indicators#internet')
	thead1.append('th')
			.attr('colspan', '4')
			.text('Mobile GG')
			.attr('class', 'table-info')
			.attr('style', 'border-bottom: 0px;')
		.append('a')
			.text('?')
			.attr('class', 'badge badge-secondary')
			.attr('style', 'vertical-align: super;')
			//.attr('class', 'badge badge-secondary float-right')
			.attr('href', '/indicators#mobile')
		//.append('span')
			//.attr('data-feather', 'help-circle')
	var thead2 = thead.append('tr').attr('class', 'row-anchor')
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
		.attr('class', 'row-anchor');

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
	d3.select('#tableshade').attr('class', 'd-none')
	outsideToHash()
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
    var selCol1 = document.getElementById('selCol1');
    d3.select('#selCol1').selectAll('option').remove()

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

    //tabulate(csvdatalist);
    //map.mylegend(l);
    updateMap(map, 'myChart', dataset[0], selCol1.value);
    //map.mylegend(l);
    //map.resize()
    tabulate(csvdatalist);
    //map.resize()
    //TODO get the datestring cleanly
    var picker = document.getElementById("reportpicker")
    var report_title = picker.options[picker.selectedIndex].text
    if (report_title == 'Latest') {
		report_title = picker.value.split('/')[1]
    }
    d3.select('#report').select('h2').text(report_title);
    d3.select('#report').select('span').attr('class', 'd-none');
    d3.select('#csvlink').attr('href', csv_url);
    if (!window.location.search) {
		history.replaceState(null, '', '?report=' + report_title);
    }
	d3.select('#sharemail').attr('href', "mailto:?to=&body=I'd%20like%20to%20share%20this%20Digital%20Gender%20Gaps%20report%20with%20you.%0A%0A" + window.location.href + "&subject=Digital%20Gender%20Gaps%20Report%20-%20" + report_title)
	addSearch()
	d3.select('#shade').attr('class', 'd-none')
}

function addSearch() {
    d3.select("#search")
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

function changeColumn1() {
    var selCol = document.getElementById("selCol1");
    var column = selCol.value;
    dataset[0] = {}
    updateMap(map, 'myChart', dataset[0], column);
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

function csvshare() {
    /* Get the text field */
    var copyText = document.getElementById("csvlink").getAttribute("href");

	if (navigator) {
		navigator.clipboard.writeText(copyText).then(function() {
			console.log('Async: Copying to clipboard was successful');
		}, function(err) {
			console.error('Async: Could not copy text: ', err);
		});
		/* Alert the copied text */
		//TODO toast don't alert
		alert("csv data link has been copied to your clipboard: " + copyText);
    }
    else
    {
    	alert("Can't copy link to your clipboard, please share manually" + copyText);
    }
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

	var scale = d3.select('#v-legend-gradient')
	scale.attr('style', 'width: 15px; height: 95%; background: linear-gradient(' + colour_max_value + ', ' + colour_min_value + ')');

	d3.select('#v-legend-values').selectAll('div')
		.data(steps)
		.text(function(x) {
			if (x!="NaN") {
				return x;
			}
		});
}

function addHLegend(layer, data, options) {
	let steps = d3.range(11).map(d => d3.format(".2f")((minValue + ((maxValue - minValue) * 0.1 * d))/100));

	var scale = d3.select('#h-legend-gradient')
	scale.attr('style', 'width: 92.5%; height: 15px; background: linear-gradient(to right, ' + colour_min_value + ', ' + colour_max_value + ')');

	d3.select('#h-legend-values').selectAll('div')
		.data(steps)
		.text(function(x) {
			if (x!="NaN") {
				return x;
			}
		});
}

function addColourPickers() {
	var rows = d3.select('#palette-pickers')
	var colorpick = rows.append('div').attr('class', 'col-12 d-flex justify-content-between align-items-center flex-row')
	var inequalitypickgroup = colorpick.append('div').append('div').attr('class', 'input-group d-flex')
		inequalitypickgroup.append('input').attr('type', 'color').attr('id', 'color-inequality').attr('value', colour_min_value).attr('class', 'align-self-stretch color-pick-size')
		.on('change', function() {colour_min_value = this.value; changeColumn1(); })
	inequalitypickgroup.append('button').attr('class', 'btn btn-outline-secondary color-pick-size').attr('type', 'button').attr('style', 'background-color: ' + colour_min_value)
	inequalitypickgroup.append('div').attr('class', 'input-group-append').append('span').attr('class', 'input-group-text')
		.append('a')
			.text('Inequality')
			.attr('href', '/indicators#scale')
		//.append('span')
    		//.text('?')
    		//.attr('class', 'badge badge-secondary p-1')
    		//.attr('style', 'vertical-align: super;')


	var equalitypickgroup = colorpick.append('div').append('div').attr('class', 'input-group')

	equalitypickgroup.append('div').attr('class', 'input-group-prepend').append('span').attr('class', 'input-group-text')
		.append('a')
			.text('Equality')
			.attr('href', '/indicators#scale')
	equalitypickgroup.append('input').attr('type', 'color').attr('id', 'color-equality').attr('value', colour_max_value).attr('class', 'color-pick-size color-pick-right')
		.on('change', function() {colour_max_value = this.value; changeColumn1(); })
	equalitypickgroup.append('button').attr('class', 'btn btn-outline-secondary color-pick-size').attr('type', 'button').attr('style', 'background-color: ' + colour_max_value)
}

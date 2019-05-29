<?php get_header(); ?>
<div class="container-fluid position-absolute top-0">
	<div class="row">
		<?php get_sidebar(); ?>
		<main role="main" class="col-12 col-md-10 ml-sm-auto px-4">
			<div class="d-flex justify-content-between align-items-center flex-wrap pt-3 pb-2 mb-3 border-bottom">
				<div class="flex-column">
					<div><h1 class="h2 my-0">Report</h1></div>
					<div id="report"><h2 class="h3 my-0"></h2><span class="spinner-border"></span></div>
				</div>
				<div class="btn-toolbar mb-2 mb-md-0 flex-column flex-md-row justify-content-md-end">
					<label for="reportpicker" class="sr-only">Report picker</label>
					<select class="selectpicker btn btn-sm btn-outline-secondary m-1" data-style="btn-primary" id="reportpicker"
							onchange="change_report()">
						<option value="latest">Latest<span class="spinner-border spinner-border-sm"></span></option>
						<option value="latest">2018-05</option>
						<option value="latest">2018-06-05</option>
					</select>
					<label for="selCol1" class="sr-only">Model prediction picker for map</label>
					<select class="selectpicker btn btn-sm btn-outline-secondary m-1" data-style="btn-primary" id="selCol1"
							onchange="changeColumn1()">
						<option value="Ground Truth Internet GG">Internet GG - ITU</option>
						<option value="Internet online model prediction">Internet GG - Online</option>
						<option value="Internet Online-Offline model prediction">Internet GG - Combined</option>
						<option value="Internet Offline model prediction">Internet GG - Offline</option>
						<option value="Mobile_GG">Mobile GG - GSMA</option>
						<option value="Mobile Online model prediction">Mobile GG - Online</option>
						<option value="Mobile Online-Offline model prediction">Mobile GG - Combined</option>
						<option value="Mobile Offline model prediction">Mobile GG - Offline</option>
					</select>
					<div class="btn-group btn-group-sm m-1">
						<!--<button class="btn btn-sm btn-outline-secondary" onclick="csvshare()">Share</button>-->
						<a id="sharemail" href="mailto:?to=&body=,&subject=" class="btn btn-sm btn-outline-secondary" target="_blank"><span data-feather="mail"></span><span class="pl-1">Share</span></a>
						<a id="csvlink" class="btn btn-sm btn-outline-secondary"
						   href="#"><span class="pr-1">Export</span><span data-feather="download"></span></a>
					</div>
					<!--<button class="btn btn-sm btn-outline-secondary dropdown-toggle">
						<span data-feather="calendar"></span>
						<select id="selCol2" onchange="changeColumn2()"></select>
					</button>-->
				</div>
			</div>
			<!--<div class="spinner-border spinner-border-sm"></div>-->

			<!--<div class="my-4 w-100" id="myChart1" width="900" height="475"></div>
			<div id="myChart2" style="width:700px; height:475px"></div>-->
			<!--<div id="myChart" style="width:61vh; height:90vh" style="width:100vmin; height:68vmin"></div>-->
			<!-- TODO min height set to force the scrollbar, set the empty sizes more realistically -->
			<figure class="position-relative" style="min-height: 39vw">
				<div id="shade" class="background-color-sea position-absolute w-100 h-100 d-flex justify-content-center align-items-center" style="z-index: 900;"><span class="spinner-border"></span></div>
				<div class="row" >
					<div id="map" class="col-12 col-lg-11 d-lg-flex flex-lg-column">
						<div id="myChart" class="background-color-sea"></div>
					</div>
					<div id="map-v-legend" class="col-lg-1 d-none d-lg-flex flex-lg-column"></div>
				</div>
				<div class="row">
					<div id="map-h-legend" class="col-12 col-lg-11"></div>
				</div>
				<figcaption class="sr-only">Prediction map</figcaption>
			</figure>

			<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-end pt-3 pb-2 mb-3 border-bottom">
				<h2 class="h3">Details</h2>
				<div class="btn-toolbar mb-2 mb-md-0">
					<div class="input-group my-2 my-lg-0">
					<div class="input-group-prepend">
                		<div class="input-group-text" id=""><span data-feather='filter'></span></div>
                	</div>
					<!--<form class="form-inline my-2 my-lg-0">-->

            			<input id='search' class="form-control mr-sm-2" type="text" placeholder="Filter by Country" aria-label="Filter">
            			<!--<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Filter</button>-->
            		<!--</form>-->
            		</div>
           		</div>
           	</div>
			<!-- TODO min height set to force the scrollbar -->
			<div class="table-responsive min-vh-100">
				<div id="tableshade" class="position-absolute w-100 h-100 d-flex justify-content-center" style="z-index: 900;"><span class="spinner-border"></span></div>
				<table class="table table-striped table-sm" id="modeltable">
				</table>
			</div>
		</main>
		<div class="col-12 col-md-10 ml-sm-auto px-0"><?php get_footer(); ?><div>
	</div>

</div>
<script type="application/json" id="formdata">
{
	"report": "<?php echo filter_input(INPUT_GET, 'report'); ?>"
}
</script>
<!-- Graphs -->
<script src="https://d3js.org/d3.v3.min.js"></script>
<script src="https://d3js.org/topojson.v1.min.js"></script>
<script src="https://d3js.org/d3.geo.projection.v0.min.js"></script>
<script src="https://d3js.org/d3-queue.v3.min.js"></script>
<script src="https://datamaps.github.io/scripts/0.4.4/datamaps.world.min.js"></script>
<script src="<?php echo plugins_url('digitalgendergaps/dashboard.js', ''); ?>"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.min.js"></script>

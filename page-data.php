<?php
	get_header();
	get_template_part('template-parts/navigation/navigation', 'top');
?>
<div class="container-fluid position-absolute top-0 h-100">
	<div class="row h-100">
		<?php get_sidebar(); ?>
		<main role="main" class="col-12 col-md-10 ml-sm-auto px-0">
			<div class="d-flex flex-column justify-content-between h-100 px-0">
				<div class="p-4">
					<div class="d-flex justify-content-between align-items-center flex-wrap pb-2 mb-3 border-bottom">
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

					<!-- //TODO min height set to force the scrollbar, set the empty sizes more realistically -->
					<figure id="map-contain" class="position-relative">
						<div id="shade" class="background-color-sea position-absolute w-100 h-100 d-flex justify-content-center align-items-center"><span class="spinner-border"></span></div>
						<div class="row" >
							<div id="map" class="col-12 col-lg-11 d-lg-flex flex-lg-column pr-lg-0">
								<div id="myChart" class="border background-color-sea"></div>
							</div>
							<div id="map-v-legend" class="col-lg-1 d-none d-lg-flex flex-lg-column pl-0">
								<div class="d-flex flex-row h-100">
									<div id="v-legend-gradient" class="align-self-center mr-1" style="width: 15px; height: 95%; background: linear-gradient(#00FF00, #FF0000)"></div>
									<div id="v-legend-values" class="d-flex flex-column justify-content-between">
										<div class="font-weight-bold"></div>
										<div></div>
										<div></div>
										<div></div>
										<div></div>
										<div></div>
										<div></div>
										<div></div>
										<div></div>
										<div></div>
										<div class="font-weight-bold"></div>
									</div>
								</div>
							</div>
						</div>
						<div class="row d-flex d-lg-none">
							<div id="map-h-legend" class="col-12 col-lg-11">
								<div class="row d-flex justify-content-center align-items-center">
									<div id="h-legend-gradient" style="width: 92.5%; height: 15px; background: linear-gradient(to right, #FF0000, #00FF00)"></div>
								</div>
								<div id="h-legend-values" class="d-flex flex-row justify-content-between">
									<div class="font-weight-bold"></div>
									<div class="d-none d-sm-block"></div>
									<div></div>
									<div class="d-none d-sm-block"></div>
									<div></div>
									<div class="d-none d-sm-block"></div>
									<div></div>
									<div class="d-none d-sm-block"></div>
									<div></div>
									<div class="d-none d-sm-block"></div>
									<div class="font-weight-bold"></div>
								</div>
							</div>
						</div>
						<div id="palette-pickers" class="row mt-2">
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
								<input id='search' class="form-control mr-sm-2" type="text" placeholder="Filter by Country" aria-label="Filter">
							</div>
						</div>
					</div>
					<!-- //TODO min height set to force the scrollbar -->
					<div class="table-responsive min-vh-100">
						<div id="tableshade" class="position-absolute w-100 h-100 d-flex justify-content-center"><span class="spinner-border"></span></div>
						<table class="table table-striped table-sm" id="modeltable">
						</table>
					</div>
				</div>
				<div class="mt-2">
					<?php get_template_part('template-parts/footer/footer', 'authorship'); ?>
				</div>
			</div>
		</main>
	</div>
</div>
<script type="application/json" id="formdata">
{
	"report": "<?php echo filter_input(INPUT_GET, 'report'); ?>"
}
</script>
<?php get_template_part('template-parts/footer/footer', 'keyscripts'); ?>
<?php get_template_part('template-parts/footer/footer', 'graphscripts'); ?>
<?php get_footer(); ?>

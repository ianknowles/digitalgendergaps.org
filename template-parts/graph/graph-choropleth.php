<!-- //TODO min height set to force the scrollbar, set the empty sizes more realistically -->
					<figure class="position-relative map-contain">
						<div id="<?php echo get_query_var('map-template-id'); ?>-shade" class="map-shade background-color-sea position-absolute w-100 h-100 d-flex justify-content-center align-items-center"><span class="spinner-border"></span></div>
						<div class="row" >
							<div class="col-12 col-lg-11 d-lg-flex flex-lg-column pr-lg-0">
								<div id="<?php echo get_query_var('map-template-id'); ?>-chart-area" class="border background-color-sea"></div>
							</div>
							<div id="<?php echo get_query_var('map-template-id'); ?>-v-legend" class="col-lg-1 d-none d-lg-flex flex-lg-column pl-0">
								<div class="d-flex flex-row h-100">
									<div id="<?php echo get_query_var('map-template-id'); ?>-v-legend-gradient" class="align-self-center mr-1" style="width: 15px; height: 95%;"></div>
									<div id="<?php echo get_query_var('map-template-id'); ?>-v-legend-values" class="d-flex flex-column justify-content-between">
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
						<div id="<?php echo get_query_var('map-template-id'); ?>-h-legend" class="row d-flex d-lg-none">
							<div class="col-12 col-lg-11">
								<div class="row d-flex justify-content-center align-items-center">
									<div id="<?php echo get_query_var('map-template-id'); ?>-h-legend-gradient" style="width: 92.5%; height: 15px;"></div>
								</div>
								<div id="<?php echo get_query_var('map-template-id'); ?>-h-legend-values" class="d-flex flex-row justify-content-between">
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
						<?php get_template_part('template-parts/graph/graph', 'palettepicker'); ?>
						<figcaption class="sr-only">Prediction map</figcaption>
					</figure>

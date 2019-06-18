					<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-end pt-3 pb-2 mb-3 border-bottom">
						<h2 class="h3">Details</h2>
						<div class="btn-toolbar mb-2 mb-md-0">
							<div class="input-group my-2 my-lg-0">
								<div class="input-group-prepend">
									<div class="input-group-text" id=""><span data-feather='filter'></span></div>
								</div>
								<input id="<?php echo get_query_var('map-template-id'); ?>-search" class="form-control mr-sm-2" type="text" placeholder="Filter by Country" aria-label="Filter">
							</div>
						</div>
					</div>
					<!-- //TODO min height set to force the scrollbar -->
					<div class="table-responsive min-vh-100">
						<div id="<?php echo get_query_var('map-template-id'); ?>-tableshade" class="position-absolute w-100 h-100 d-flex justify-content-center"><span class="spinner-border"></span></div>
						<table id="<?php echo get_query_var('map-template-id'); ?>-modeltable" class="table table-striped table-sm"></table>
					</div>

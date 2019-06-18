					<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-end mt-3 pb-2 mb-3 border-bottom">
						<h2 class="h3 my-0">Details</h2>
						<div class="btn-toolbar mt-2 mb-0">
							<div class="input-group">
								<div class="input-group-prepend">
									<div class="input-group-text"><span data-feather='filter'></span></div>
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

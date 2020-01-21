					<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-end mt-3 pb-1">
						<h2 id="<?php echo get_query_var('map-template-id'); ?>-table-title" class="h3 my-0"></h2>
						<div class="btn-toolbar mt-2 mb-0">
							<div class="input-group">
								<div class="input-group-prepend btn-secondary">
									<div class="input-group-text"><span data-feather='filter'></span></div>
								</div>
								<input id="<?php echo get_query_var('map-template-id'); ?>-table-filter" class="form-control mr-sm-2" type="text">
							</div>
						</div>
					</div>
					<div class="table-responsive position-relative" style="min-height: 40px;">
						<div id="<?php echo get_query_var('map-template-id'); ?>-table-shade" class="position-absolute w-100 h-100 d-flex justify-content-center"><span class="spinner-border"></span></div>
						<table id="<?php echo get_query_var('map-template-id'); ?>-table" class="table table-striped table-hover"></table>
					</div>

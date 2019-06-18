						<div id="<?php echo get_query_var('map-template-id'); ?>-palette-pickers" class="row mt-2">
							<div class="col-12 d-flex justify-content-between align-items-center flex-row">
								<div>
									<div class="input-group d-flex">
										<input type="color" id="<?php echo get_query_var('map-template-id'); ?>-color-min-input" class="align-self-stretch color-pick-size"></input>
										<button type="button" id="<?php echo get_query_var('map-template-id'); ?>-color-min-button" class="btn btn-outline-secondary color-pick-size"></button>
										<div class="input-group-append">
											<span class="input-group-text">
												<a id="<?php echo get_query_var('map-template-id'); ?>-color-min-link">Min</a>
											</span>
										</div>
									</div>
								</div>
								<div>
									<div class="input-group">
										<div class="input-group-prepend">
											<span class="input-group-text">
												<a id="<?php echo get_query_var('map-template-id'); ?>-color-max-link">Max</a>
											</span>
										</div>
										<input type="color" id="<?php echo get_query_var('map-template-id'); ?>-color-max-input" class="color-pick-size color-pick-right"></input>
										<button type="button" id="<?php echo get_query_var('map-template-id'); ?>-color-max-button" class="btn btn-outline-secondary color-pick-size"></button>
									</div>
								</div>
							</div>
						</div>

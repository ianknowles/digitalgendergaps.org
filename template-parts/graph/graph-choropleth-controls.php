					<div class="d-flex justify-content-between align-items-center flex-wrap pb-2 mb-3 border-bottom">
						<div class="flex-column">
							<div><h1 class="h2 my-0">Report</h1></div>
							<div id="<?php echo get_query_var('map-template-id'); ?>-report-label"><h2 class="h3 my-0"></h2><span class="spinner-border"></span></div>
						</div>
						<div class="btn-toolbar mb-2 mb-md-0 flex-column flex-md-row justify-content-md-end">
							<label for="<?php echo get_query_var('map-template-id'); ?>-report-picker" class="sr-only">Report picker</label>
							<select class="selectpicker btn btn-sm btn-outline-secondary m-1" data-style="btn-primary" id="<?php echo get_query_var('map-template-id'); ?>-report-picker">
								<option value="latest">Latest<span class="spinner-border spinner-border-sm"></span></option>
								<option value="latest">2018-05</option>
								<option value="latest">2018-06-05</option>
							</select>
							<label for="<?php echo get_query_var('map-template-id'); ?>-select-column" class="sr-only">Model prediction picker for map</label>
							<select id="<?php echo get_query_var('map-template-id'); ?>-select-column" class="selectpicker btn btn-sm btn-outline-secondary m-1" data-style="btn-primary">
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
								<a id="<?php echo get_query_var('map-template-id'); ?>-sharemail" href="mailto:?to=&body=,&subject=" class="btn btn-sm btn-outline-secondary" target="_blank"><span data-feather="mail"></span><span class="pl-1">Share</span></a>
								<a id="<?php echo get_query_var('map-template-id'); ?>-csvlink" class="btn btn-sm btn-outline-secondary"
								   href="#"><span class="pr-1">Export</span><span data-feather="download"></span></a>
							</div>
							<!--<button class="btn btn-sm btn-outline-secondary dropdown-toggle">
								<span data-feather="calendar"></span>
								<select id="selCol2" onchange="changeColumn2()"></select>
							</button>-->
						</div>
					</div>
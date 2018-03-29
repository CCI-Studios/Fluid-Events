<?php

$aliases['staging'] = array(
	'uri'=> 'fluidevents.ccistaging.com',
	'root' => '/home/staging/subdomains/fluidevents/public_html',
	'remote-host'=> 'host.ccistudios.com',
	'remote-user'=> 'staging',
	'path-aliases'=> array(
		'%files'=> 'sites/default/files',
	),
);

$aliases['live'] = array(
	'uri'=> 'www.fluidevents.ca',
	'root' => '/home/fluid/subdomains/live/public_html',
	'remote-host'=> 'host.cciserver2.com',
	'remote-user'=> 'fluid',
	'path-aliases'=> array(
		'%files'=> 'sites/default/files',
	),
);

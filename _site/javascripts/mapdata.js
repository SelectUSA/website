var simplemaps_usmap_mapdata = {

	main_settings:{
		//General settings
		width: 'responsive',
		background_color: '#FFFFFF',	
		background_transparent: 'no',
		border_color: '#4069AB',
		popups: 'detect', //on_click, on_hover, or detect
	
		//State defaults
		state_description:   'State description',
		state_color: '#0D3D89',
		state_hover_color: '#D12229',
		state_url: 'http://simplemaps.com',
		border_size: 1.5,		
		all_states_inactive: 'no',
		all_states_zoomable: 'no',		
		
		//Location defaults
		location_description:  'Location description',
		location_color: '#FF0067',
		location_opacity: .8,
		location_hover_opacity: 1,
		location_url: '',
		location_size: 25,
		location_type: 'square', // circle, square, image
		location_image_source: 'frog.png', //name of image in the map_images folder		
		location_border_color: '#FFFFFF',
		location_border: 2,
		location_hover_border: 2.5,				
		all_locations_inactive: 'no',
		all_locations_hidden: 'no',
		
		//Labels
		label_color: '#FFFFFF',	
		label_hover_color: '#FFFFFF',		
		label_size: 22,
		label_font: 'Arial',
		hide_labels: 'no',
		hide_eastern_labels: 'no',
		
		//Zoom settings
		zoom: 'yes', //use default regions
		back_image: 'no',   //Use image instead of arrow for back zoom				
		arrow_color: '#3B729F',
		arrow_color_border: '#88A4BC',
		initial_back: 'no', //Show back button when zoomed out and do this JavaScript upon click		
		initial_zoom: -1,  //-1 is zoomed out, 0 is for the first continent etc	
		initial_zoom_solo: 'no', //hide adjacent states when starting map zoomed in
		region_opacity: 1,
		region_hover_opacity: .6,
		zoom_out_incrementally: 'yes',  // if no, map will zoom all the way out on click
		zoom_percentage: .99,
		zoom_time: .5, //time to zoom between regions in seconds
		
		//Popup settings
		popup_color: 'white',
		popup_opacity: .9,
		popup_shadow: 1,
		popup_corners: 5,
		popup_font: '12px/1.5 Open Sans, Verdana, Arial, Helvetica, sans-serif',
		popup_nocss: 'no', //use your own css	
		
		//Advanced settings
		div: 'map',
		auto_load: 'yes',		
		url_new_tab: 'yes', 
		images_directory: 'default', //e.g. 'map_images/'
		fade_time:  .1, //time to fade out		
		link_text: '(Link)'  //Text mobile browsers will see for links	
		
	},

	state_specific:{ 
	'HI': { 
		name: 'Hawaii',
		description: 'Dept. of Business, Economic Dev. and Tourism<br><u>www.hawaii.gov/dbedt</u>',
		color: 'default',
		hover_color: 'default',
		url: 'http://www.hawaii.gov/dbedt',
		hide: 'no',
		inactive: 'no',
		zoomable: 'default'
	},
	'AK': { 
		name: 'Alaska',
		description: 'Anchorage Office of the Governor<br><u>www.alaska.gov</u>',
		color: 'default',
		hover_color: 'default',
		url: 'http://www.alaska.gov',
		hide: 'no',
		inactive: 'no',
		zoomable: 'default'
	},
	'FL': { 
		name: 'Florida',
		description: 'Enterprise Florida<br><u>www.enterpriseflorida.com</u>',
		color: 'default',
		hover_color: 'default',
		url: 'http://www.enterpriseflorida.com',
		inactive: 'no',
		hide: 'no',
		zoomable: 'default'
	},
	'NH': { 
		name: 'New Hampshire',
		description: 'Dept. of Resources and Economic Development<br><u>www.nheconomy.com</u>',
		color: 'default',
		hover_color: 'default',
		url: 'http://www.nheconomy.com',
		hide: 'no',
		inactive: 'no',
		zoomable: 'default'
	},
	'VT': { 
		name: 'Vermont',
		description: 'Department of Economic Development<br><u>accd.vermont.gov</u>',
		color: 'default',
		hover_color: 'default',
		url: 'http://accd.vermont.gov/',
		hide: 'no',
		inactive: 'no',
		zoomable: 'default'
	},
	'ME': { 
		name: 'Maine',
		description: 'Maine International Trade Center<br><u>www.mitc.com</u>',
		color: 'default',
		hover_color: 'default',
		url: 'http://www.mitc.com',
		hide: 'no',
		inactive: 'no',
		zoomable: 'default'
	},
	'RI': { 
		name: 'Rhode Island',
		description: 'Rhode Island Economic Development Corporation<br><u>www.commerceri.com</u>',
		color: 'default',
		hover_color: 'default',
		url: 'http://www.commerceri.com',
		hide: 'no',
		inactive: 'no',
		zoomable: 'default'
	},
	'NY': { 
		name: 'New York',
		description: 'Empire State Development Corporation<br><u>www.esd.ny.gov</u>',
		color: 'default',
		hover_color: 'default',
		url: 'http://www.esd.ny.gov',
		hide: 'no',
		inactive: 'no',
		zoomable: 'default'
	},
	'PA': { 
		name: 'Pennsylvania',
		description: 'Dept. of Community & Economic Development<br><u>www.newpa.com</u>',
		color: 'default',
		hover_color: 'default',
		url: 'http://www.newpa.com',
		hide: 'no',
		inactive: 'no',
		zoomable: 'default'
	},
	'NJ': { 
		name: 'New Jersey',
		description: 'New Jersey Business Action Center<br><u>www.nj.gov/state/bac/</u>',
		color: 'default',
		hover_color: 'default',
		url: 'http://www.nj.gov/state/bac/',
		hide: 'no',
		inactive: 'no',
		zoomable: 'default'
	},
	'DE': { 
		name: 'Delaware',
		description: 'Department of State<br><u>global.delaware.gov</u>',
		color: 'default',
		hover_color: 'default',
		url: 'http://global.delaware.gov/',
		hide: 'no',
		inactive: 'no',
		zoomable: 'default'
	},
	'MD': { 
		name: 'Maryland',
		description: 'Dept. of Business and Economic Development<br><u>business.maryland.gov</u>',
		color: 'default',
		hover_color: 'default',
		url: 'http://business.maryland.gov/',
		hide: 'no',
		inactive: 'no',
		zoomable: 'default'
	},
	'VA': { 
		name: 'Virginia',
		description: 'Virginia Economic Development Partnership<br><u>www.yesvirginia.org</u>',
		color: 'default',
		hover_color: 'default',
		url: 'http://www.yesvirginia.org/',
		hide: 'no',
		inactive: 'no',
		zoomable: 'default'
	},
	'WV': { 
		name: 'West Virginia',
		description: 'West Virginia Development Office<br><u>www.wvcommerce.org</u>',
		color: 'default',
		hover_color: 'default',
		url: 'http://www.wvcommerce.org/',
		hide: 'no',
		inactive: 'no',
		zoomable: 'default'
	},
	'OH': { 
		name: 'Ohio',
		description: 'Department of Commerce<br><u>www.jobs-ohio.com</u>',
		color: 'default',
		hover_color: 'default',
		url: 'http://www.jobs-ohio.com',
		hide: 'no',
		inactive: 'no',
		zoomable: 'default'
	},
	'IN': { 
		name: 'Indiana',
		description: 'Indiana Economic Development Corporation<br><u>www.iedc.in.gov</u>',
		color: 'default',
		hover_color: 'default',
		url: 'http://www.iedc.in.gov',
		hide: 'no',
		inactive: 'no',
		zoomable: 'default'
	},
	'IL': { 
		name: 'Illinois',
		description: 'Office of Trade and Investment - DCEO<br><u>www.illinois.gov/dceo</u>',
		color: 'default',
		hover_color: 'default',
		url: 'http://www.illinois.gov/dceo',
		hide: 'no',
		inactive: 'no',
		zoomable: 'default'
	},
	'CT': { 
		name: 'Connecticut',
		description: 'Dept. of Economic and Community Development<br><u>www.ct.gov/ecd/</u>',
		color: 'default',
		hover_color: 'default',
		url: 'http://www.ct.gov/ecd/',
		hide: 'no',
		inactive: 'no',
		zoomable: 'default'
	},
	'WI': { 
		name: 'Wisconsin',
		description: 'Wisconsin Economic Development Corporation<br><u>www.inwisconsin.com</u>',
		color: 'default',
		hover_color: 'default',
		url: 'http://inwisconsin.com/',
		hide: 'no',
		inactive: 'no',
		zoomable: 'default'
	},
	'NC': { 
		name: 'North Carolina',
		description: 'Economic Development Partnership of North Carolina<br><u>www.thrivenc.com</u>',
		color: 'default',
		hover_color: 'default',
		url: 'http://www.thrivenc.com/',
		hide: 'no',
		inactive: 'no',
		zoomable: 'default'
	},
	'DC': { 
		name: 'District of Columbia',
		description: 'Office of the Dep. Mayor for Planning and Econ. Dev.<br><u>dcbiz.dc.gov</u>',
		color: 'default',
		hover_color: 'default',
		url: 'http://dcbiz.dc.gov',
		hide: 'no',
		inactive: 'no',
		zoomable: 'default'
	},
	'MA': { 
		name: 'Massachusetts',
		description: 'Office of International Trade & Investment<br><u>www.mass.gov/moiti</u>',
		color: 'default',
		hover_color: 'default',
		url: 'http://www.mass.gov/moiti',
		hide: 'no',
		inactive: 'no',
		zoomable: 'default'
	},
	'TN': { 
		name: 'Tennessee',
		description: 'Dept. of Economic and Community Development<br><u>www.tnecd.com</u>',
		color: 'default',
		hover_color: 'default',
		url: 'http://www.tnecd.com/',
		hide: 'no',
		inactive: 'no',
		zoomable: 'default'
	},
	'AR': { 
		name: 'Arkansas',
		description: 'Arkansas Economic Development Commission<br><u>www.arkansasedc.com</u>',
		color: 'default',
		hover_color: 'default',
		url: 'http://www.arkansasedc.com',
		hide: 'no',
		inactive: 'no',
		zoomable: 'default'
	},
	'MO': { 
		name: 'Missouri',
		description: 'Missouri Partnership<br><u>www.missouripartnership.com</u>',
		color: 'default',
		hover_color: 'default',
		url: 'http://www.missouripartnership.com',
		hide: 'no',
		inactive: 'no',
		zoomable: 'default'
	},
	'GA': { 
		name: 'Georgia',
		description: 'Department of Economic Development<br><u>www.georgia.org</u>',
		color: 'default',
		hover_color: 'default',
		url: 'http://www.georgia.org',
		hide: 'no',
		inactive: 'no',
		zoomable: 'default'
	},
	'SC': { 
		name: 'South Carolina',
		description: 'Department of Commerce<br><u>www.sccommerce.com</u>',
		color: 'default',
		hover_color: 'default',
		url: 'http://www.sccommerce.com',
		hide: 'no',
		inactive: 'no',
		zoomable: 'default'
	},
	'KY': { 
		name: 'Kentucky',
		description: 'Cabinet for Economic Development<br><u>www.thinkkentucky.com</u>',
		color: 'default',
		hover_color: 'default',
		url: 'http://www.thinkkentucky.com',
		hide: 'no',
		inactive: 'no',
		zoomable: 'default'
	},
	'AL': { 
		name: 'Alabama',
		description: 'Department of Commerce<br><u>www.madeinalabama.com</u>',
		color: 'default',
		hover_color: 'default',
		url: 'http://www.madeinalabama.com/',
		hide: 'no',
		inactive: 'no',
		zoomable: 'default'
	},
	'LA': { 
		name: 'Louisiana',
		description: 'Department of Economic Development<br><u>www.opportunitylouisiana.com</u>',
		color: 'default',
		hover_color: 'default',
		url: 'http://www.opportunitylouisiana.com',
		hide: 'no',
		inactive: 'no',
		zoomable: 'default'
	},
	'MS': { 
		name: 'Mississippi',
		description: 'Mississippi Development Authority<br><u>www.mississippi.org</u>',
		color: 'default',
		hover_color: 'default',
		url: 'http://www.mississippi.org',
		hide: 'no',
		inactive: 'no',
		zoomable: 'default'
	},
	'IA': { 
		name: 'Iowa',
		description: 'Iowa Economic Development Authority<br><u>www.iowaeconomicdevelopment.com</u>',
		color: 'default',
		hover_color: 'default',
		url: 'http://www.iowaeconomicdevelopment.com',
		hide: 'no',
		inactive: 'no',
		zoomable: 'default'
	},
	'MN': { 
		name: 'Minnesota',
		description: 'Dept. of Employment and Economic Development   <br><u>www.mn.gov/deed/invest</u>',
		color: 'default',
		hover_color: 'default',
		url: 'http://www.mn.gov/deed/invest',
		hide: 'no',
		inactive: 'no',
		zoomable: 'default'
	},
	'OK': { 
		name: 'Oklahoma',
		description: 'Department of Commerce<br><u>www.new.okcommerce.gov</u>',
		color: 'default',
		hover_color: 'default',
		url: 'http://www.new.okcommerce.gov/',
		hide: 'no',
		inactive: 'no',
		zoomable: 'default'
	},
	'TX': { 
		name: 'Texas',
		description: 'Office of the Governor<br><u>texaswideopenforbusiness.com</u>',
		color: 'default',
		hover_color: 'default',
		url: 'https://texaswideopenforbusiness.com/',
		hide: 'no',
		inactive: 'no',
		zoomable: 'default'
	},
	'NM': { 
		name: 'New Mexico',
		description: 'Economic Development Department<br><u>gonm.biz</u>',
		color: 'default',
		hover_color: 'default',
		url: 'http://gonm.biz/',
		hide: 'no',
		inactive: 'no',
		zoomable: 'default'
	},
	'KS': { 
		name: 'Kansas',
		description: 'Department of Commerce<br><u>www.kansascommerce.com</u>',
		color: 'default',
		hover_color: 'default',
		url: 'http://www.kansascommerce.com',
		hide: 'no',
		inactive: 'no',
		zoomable: 'default'
	},
	'NE': { 
		name: 'Nebraska',
		description: 'Department of Economic Development<br><u>www.neded.org</u>',
		color: 'default',
		hover_color: 'default',
		url: 'http://www.neded.org',
		hide: 'no',
		inactive: 'no',
		zoomable: 'default'
	},
	'SD': { 
		name: 'South Dakota',
		description: 'Governor\'s Office of Economic Development<br><u>www.sdreadytowork.com</u>',
		color: 'default',
		hover_color: 'default',
		url: 'http://www.sdreadytowork.com',
		hide: 'no',
		inactive: 'no',
		zoomable: 'default'
	},
	'ND': { 
		name: 'North Dakota',
		description: 'Department of Commerce<br><u>www.business.nd.gov</u>',
		color: 'default',
		hover_color: 'default',
		url: 'http://www.business.nd.gov/',
		hide: 'no',
		inactive: 'no',
		zoomable: 'default'
	},
	'WY': { 
		name: 'Wyoming',
		description: 'Wyoming Business Council<br><u>www.wyomingbusiness.org</u>',
		color: 'default',
		hover_color: 'default',
		url: 'http://wyomingbusiness.org/',
		hide: 'no',
		inactive: 'no',
		zoomable: 'default'
	},
	'MT': { 
		name: 'Montana',
		description: 'Governor’s Office of Economic Development<br><u>business.mt.gov</u>',
		color: 'default',
		hover_color: 'default',
		url: 'http://business.mt.gov/',
		hide: 'no',
		inactive: 'no',
		zoomable: 'default'
	},
	'CO': { 
		name: 'Colorado',
		description: 'Office of Economic Development & Int\'l Trade<br><u>www.advancecolorado.com</u>',
		color: 'default',
		hover_color: 'default',
		url: 'http://www.advancecolorado.com',
		hide: 'no',
		inactive: 'no',
		zoomable: 'default'
	},
	'UT': { 
		name: 'Utah',
		description: 'Governor\'s Office of Economic Development<br><u>www.business.utah.gov</u>',
		color: 'default',
		hover_color: 'default',
		url: 'http://www.business.utah.gov',
		hide: 'no',
		inactive: 'no',
		zoomable: 'default'
	},
	'AZ': { 
		name: 'Arizona',
		description: 'Arizona Commerce Authority<br><u>www.azcommerce.com</u>',
		color: 'default',
		hover_color: 'default',
		url: 'http://www.azcommerce.com',
		hide: 'no',
		inactive: 'no',
		zoomable: 'default'
	},
	'NV': { 
		name: 'Nevada',
		description: 'Governor’s Office of Economic Dev.<br><u>www.diversifynevada.com</u>',
		color: 'default',
		hover_color: 'default',
		url: 'http://www.diversifynevada.com/',
		hide: 'no',
		inactive: 'no',
		zoomable: 'default'
	},
	'OR': { 
		name: 'Oregon',
		description: 'Business Oregon<br><u>www.oregon4biz.com</u>',
		color: 'default',
		hover_color: 'default',
		url: 'http://www.oregon4biz.com',
		hide: 'no',
		inactive: 'no',
		zoomable: 'default'
	},
	'WA': { 
		name: 'Washington',
		description: 'Department of Commerce<br><u>www.choosewashington.com</u>',
		color: 'default',
		hover_color: 'default',
		url: 'http://www.choosewashington.com',
		hide: 'no',
		inactive: 'no',
		zoomable: 'default'
	},
	'CA': { 
		name: 'California',
		description: 'Governor’s Office of Business & Economic Development<br><u>www.business.ca.gov</u>',
		color: 'default',
		hover_color: 'default',
		url: 'http://www.business.ca.gov',
		hide: 'no',
		inactive: 'no',
		zoomable: 'default'
	},
	'MI': { 
		name: 'Michigan',
		description: 'Michigan Economic Development Corporation<br><u>www.michiganbusiness.org</u>',
		color: 'default',
		hover_color: 'default',
		url: 'http://www.michiganbusiness.org',
		hide: 'no',
		inactive: 'no',
		zoomable: 'default'
	},
	'ID': { 
		name: 'Idaho',
		description: 'Economic Development Division<br><u>http://commerce.idaho.gov/</u>',
		color: 'default',
		hover_color: 'default',
		url: 'http://commerce.idaho.gov/',
		hide: 'no',
		inactive: 'no',
		zoomable: 'default'
	},
	'GU': { 
		name: 'Guam',
		description: 'Economic Development Authority<br><u>www.investguam.com</u>',
		color: 'default',
		hover_color: 'default',
		url: 'http://www.investguam.com',
		hide: 'no',
		inactive: 'no',
		zoomable: 'default'
	},
	'VI': { 
		name: 'Virgin Islands',
		description: 'Dept. of Economic Development and Commerce<br><u>www.usvieda.org</u>',
		color: 'default',
		hover_color: 'default',
		url: 'http://www.usvieda.org',
		hide: 'no',
		inactive: 'no',
		zoomable: 'default'
	},
	'PR': { 
		name: 'Puerto Rico',
		description: 'Dept. of Economic Development and Commerce<br><u>www.ddec.pr.gov</u>',
		color: 'default',
		hover_color: 'default',
		url: 'http://www.ddec.pr.gov',
		hide: 'no',
		inactive: 'no',
		zoomable: 'default'
	},
	'MP': { 
		name: 'Northern Mariana Islands',
		description: 'Department of Commerce<br><u>www.commerce.gov.mp</u>',
		color: 'default',
		hover_color: 'default',
		url: 'http://www.commerce.gov.mp',
		hide: 'no',
		inactive: 'no',
		zoomable: 'default'
	},
		"AS": {
			name: 'American Samoa',
			description: 'Department of Commerce<br><u>doc.as.gov</u>',
			color: 'default',
			hover_color: 'default',
			url: 'http://americansamoa.gov/',
			hide: 'no'
			}	
},
	
	locations:{

	},
	
	labels:{
		"HI": {
			color: 'default',
			hover_color: 'default',
			font_family: 'default',
			pill: 'yes',	
			width: 'default',			
		},
		'GU': { 
			color: 'default',
			hover_color: 'default',
			font_family: 'default',
			pill: 'yes',	
			width: 'default',
	},
	'VI': { 
			color: 'default',
			hover_color: 'default',
			font_family: 'default',
			pill: 'yes',	
			width: 'default',
	},
	'PR': { 
			color: 'default',
			hover_color: 'default',
			font_family: 'default',
			pill: 'yes',	
			width: 'default',
	},
	'MP': { 
			color: 'default',
			hover_color: 'default',
			font_family: 'default',
			pill: 'yes',	
			width: 'default',
	},
		"AS": {
			color: 'default',
			hover_color: 'default',
			font_family: 'default',
			pill: 'yes',	
			width: 'default',
			}	
	
	}
	
}





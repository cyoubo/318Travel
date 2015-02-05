function navbar_fullSence_listerner()
{
	  map.centerAndZoom(new BMap.Point(97.401082,30.067318), 7);
	  $("#subPage").load("WelcomePage.html");
}
function index_navbar_dropdown_IPLocation_listerner()
{
	function iplocation(result)
	{
		//在result.center对象中，只含有lng与lat两个属性，即为Point对象，而非localresultpoi
		G_currentLocation=result.center;
		addCurrentLoactionOverLayer();
	}
	var localcity = new BMap.LocalCity();
	localcity.get(iplocation);
	
}
function index_navbar_dropdown_DrawLocation_listerner()
{
	//设置鼠标为十字丝类型光标
	map.setDefaultCursor("crosshair")
	function drawlocation(point1)
	{
		G_currentLocation=point1.point;
		addCurrentLoactionOverLayer();
		map.removeEventListener("click",drawlocation);
		map.setDefaultCursor("default")
	}
	map.addEventListener("click",drawlocation);
	
}
function index_navbar_dropdown_distance_listerner()
{
	var myDis = new BMapLib.DistanceTool(map);
	myDis.open();
}
function index_navbar_dropdown_weather_listerner()
{
	
	
}
function index_navbar_dropdown_marker_listerner()
{
	
}
function index_navbar_dropdown_clean_listerner()
{
	map.clearOverlays();
	RemoveAllCustomLayer();
}
function index_navbar_dropdown_SpotDisplay()
{
	
	$("#subPage").load("POIInfoPage.html");
}

function addCurrentLoactionOverLayer()
{
	 if(G_currentLocationLayer!=undefined)
	 	map.removeOverlay(G_currentLocationLayer);
	 
	G_currentLocationLayer=new BMap.Marker(G_currentLocation);
		map.addOverlay(G_currentLocationLayer);
	
}



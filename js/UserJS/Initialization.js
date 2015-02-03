//获得地图样式Json字符串
function GetStyleJson()
{
     var styleJson =
    [   {"featureType": "poi","elementType": "labels",
        "stylers": {"color": "#741b47","visibility": "off"}},
        {"featureType": "label", "elementType": "all",
            "stylers": {"visibility": "on"}},
        {"featureType": "subway","elementType": "all",
            "stylers": {"visibility": "off"}},
        {"featureType": "land","elementType": "all",
            "stylers": {"color": "#b6d7a8"}},
        {"featureType": "water","elementType": "all",
            "stylers": {"color": "#1ad7ea"}},
        {"featureType": "highway","elementType": "labels",
            "stylers":
            {"featureType": "manmade","elementType": "all",
                "stylers": {"color": "#fff2cc"}}
        }]
    return styleJson;
}
function Initialization()
{
	$().ready(function()
	{
		$("#subPage").load("POIInfoPage.html");
		//绑定事件
		$("#index_navbar_FullSenceShow").click(navbar_fullSence_listerner);
		$("#index_navbar_dropdown_IPLocation").click(index_navbar_dropdown_IPLocation_listerner);
		$("#index_navbar_dropdown_distance").click(index_navbar_dropdown_distance_listerner);
		$("#index_navbar_dropdown_DrawLocation").click(index_navbar_dropdown_DrawLocation_listerner);
		//指定全局变量，表示当前位置
		G_currentLocation=undefined;
	});
	
}

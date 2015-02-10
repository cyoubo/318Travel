function index_navbar_dropdown_Food()
{
	RemoveAllCustomLayer();
	G_customLayer_Food=new BMap.CustomLayer
	({
			geotableId: 88997,
			q: '', //检索关键字
			tags: '', //空格分隔的多字符串
			filter: '' //过滤条件
	});
	map.addTileLayer(G_customLayer_Food);
	G_customLayer_Food.addEventListener('hotspotclick',HotSpotCallBack);
	$().ready(function() 
	{
		$("#subPage").load("POIInfoPage.html");
	});
}

function index_navbar_dropdown_Entertainment_listerner()
{
	RemoveAllCustomLayer();
	G_customLayer_Entertainment=new BMap.CustomLayer
	({
			geotableId: 94262,
			q: '', //检索关键字
			tags: '', //空格分隔的多字符串
			filter: '' //过滤条件
	});
	map.addTileLayer(G_customLayer_Entertainment);
	G_customLayer_Entertainment.addEventListener('hotspotclick',HotSpotCallBack);
	$().ready(function() 
	{
		$("#subPage").load("POIInfoPage.html");
	});
	
}

function HotSpotCallBack(result)
{
	var StdInfo=result.customPoi;
	var UserInfo=result.content;
	$().ready(function()
	{
		$("#POIInfoPage_address").text(StdInfo.address);
		$("#POIInfoPage_title").text(StdInfo.title);
		$("#POIInfoPage_lng").text(""+StdInfo.point.lng);
		$("#POIInfoPage_lat").text(""+StdInfo.point.lat);
		$("#POIInfoPage_number").text(UserInfo.tel);
	});
}

function RemoveAllCustomLayer()
{
	if (G_customLayer_Food!=undefined) 
	{
		map.removeTileLayer(G_customLayer_Food);
		G_customLayer_Food=undefined;
	}
	if (G_customLayer_Entertainment!=undefined) 
	{
		map.removeTileLayer(G_customLayer_Entertainment);
		G_customLayer_Entertainment=undefined;
	}
}

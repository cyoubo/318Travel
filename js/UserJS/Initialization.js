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
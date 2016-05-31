{TextLayer} = require 'TextLayer'

scroll = new ScrollComponent
	width: 1440
	height: 900

layerStartLeft = new Layer
	width: 720
	height: 900
	superLayer: scroll.content
	scroll.scrollHorizontal = false

layerLeft = new Layer
	width: 720
	height: 900
	y: 910
	superLayer: scroll.content
	scroll.scrollHorizontal = false
	
layerTest = new Layer
	superLayer: layerLeft
	y: 50
	backgroundColor: "rgba(65,123,95,0.5)"

layerStartLeftText = new TextLayer
    text: "Sarah Li"
    color: "#000"
    textAlign: "right"
    fontSize: 42
    width: 700
    height: 40
    y: 400
	superLayer: layerStartLeft
    
layerStartRightText = new TextLayer
    text: "is a designer in SF"
    color: "#000"
    fontSize: 42
    width: 700
    height: 40
    x: 740
    y: 400
	superLayer: scroll.content


	



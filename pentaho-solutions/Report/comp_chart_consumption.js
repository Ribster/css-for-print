lib('cdf-env.js');

var render_comp_chart_consumption = {
	type: "cccBarChart",
	name: "render_comp_chart_consumption",
	priority: 5,
	parameters: [],
	executeAtStart: true,
	htmlObject: "${p:html_chart_consumption}",
	listeners: [],
	chartDefinition:  {
		dataAccessId: "qry_consumption",
		path: "/public/Dashboards/Report/Quarterly-Report.cda",
		width: 468,
		height: 113,
		extensionPoints: [["axisGrid_strokeStyle","#F7F8F9"],["axisLabel_font","normal 6px \"Verdana\""],["axisRule_strokeStyle","#DDDDDD"],["label_textAngle","-1.56"],["label_textMargin","5"],["label_textAlign","left"],["label_textBaseline","middle"],["orthoAxisTitleLabel_textStyle","#7F7F7F"],["baseAxisLabel_textAngle","-0.9"],["baseAxisLabel_textAlign","right"]],
		colors: ["green"],
		animate: false,
		barOrthoSizeMin: 1.5,
		barSizeMax: 2000,
		barSizeRatio: 0.9,
		barStackedMargin: 0,
		baseAxisGrid: true,
		baseAxisOffset: 0,
		baseAxisOverlappedLabelsMode: "hide",
		baseAxisTicks: true,
		baseAxisTitleFont: "12px sans-serif",
		baseAxisTitleMargins: "0",
		baseAxisTooltipAutoContent: "value",
		baseAxisTooltipEnabled: true,
		baseAxisVisible: true,
		clearSelectionMode: "emptySpaceClick",
		clickable: false,
		color2AxisColors: [],
		color2AxisLegendClickMode: "toggleVisible",
		color2AxisLegendVisible: true,
		compatVersion: 2,
		contentMargins: "0",
		contentPaddings: "0",
		crosstabMode: true,
		ctrlSelectMode: true,
		dataIgnoreMetadataLabels: false,
		dataMeasuresInColumns: false,
		dataSeparator: "~",
		groupedLabelSep: " ~ ",
		hoverable: false,
		ignoreNulls: true,
		isMultiValued: false,
		leafContentOverflow: "auto",
		legend: false,
		legendClickMode: "toggleVisible",
		legendFont: "10px sans-serif",
		legendItemPadding: "2.5",
		legendMargins: "0",
		legendMarkerSize: 15,
		legendPaddings: "5",
		legendPosition: "bottom",
		legendTextMargin: 6,
		legendVisible: true,
		margins: "3",
		measuresIndexes: [],
		multiChartColumnsMax: 3,
		multiChartIndexes: [],
		multiChartOverflow: "grow",
		multiChartSingleColFillsHeight: true,
		multiChartSingleRowFillsHeight: true,
		nullInterpolationMode: "none",
		orientation: "vertical",
		ortho2AxisDesiredTickCount: 4,
		ortho2AxisDomainRoundMode: "tick",
		ortho2AxisDomainScope: "global",
		ortho2AxisGrid: false,
		ortho2AxisMinorTicks: true,
		ortho2AxisOffset: 0,
		ortho2AxisOverlappedLabelsMode: "hide",
		ortho2AxisTicks: true,
		ortho2AxisTickUnitMax: "Infinity",
		ortho2AxisTickUnitMin: "0",
		ortho2AxisTitleFont: "12px sans-serif",
		ortho2AxisTitleMargins: "0",
		ortho2AxisVisible: true,
		ortho2AxisZeroLine: true,
		orthoAxisDesiredTickCount: 5,
		orthoAxisDomainRoundMode: "tick",
		orthoAxisDomainScope: "global",
		orthoAxisGrid: true,
		orthoAxisMinorTicks: true,
		orthoAxisOffset: 0,
		orthoAxisOverlappedLabelsMode: "hide",
		orthoAxisTickFormatter: function(value){
    // Divide by thousand, round and add the "k" suffix
    return (value / 1000).toFixed() + "k";
    } ,
		orthoAxisTicks: true,
		orthoAxisTickUnitMax: "Infinity",
		orthoAxisTickUnitMin: "0",
		orthoAxisTitle: "kg",
		orthoAxisTitleFont: "8px \"Verdana\"",
		orthoAxisTitleMargins: "0",
		orthoAxisVisible: true,
		orthoAxisZeroLine: true,
		overflowMarkersVisible: true,
		paddings: "0",
		plot2: false,
		plot2AreasVisible: false,
		plot2ColorAxis: 2,
		plot2DotsVisible: true,
		plot2LinesVisible: true,
		plot2NullInterpolationMode: "none",
		plot2OrthoAxis: 1,
		plot2Series: [],
		plot2SeriesIndexes: -1,
		plot2Stacked: false,
		plot2ValuesFont: "10px sans-serif",
		plot2ValuesMask: "{value}",
		plot2ValuesVisible: false,
		plotFrameVisible: false,
		pointingMode: "near",
		selectable: false,
		seriesInRows: false,
		smallContentMargins: "0",
		smallContentPaddings: "0",
		smallMargins: "2%",
		smallPaddings: "0",
		smallTitleFont: "14px sans-serif",
		smallTitleMargins: "0",
		smallTitlePaddings: "0",
		smallTitlePosition: "top",
		stacked: false,
		timeSeries: false,
		timeSeriesFormat: "%Y-%m-%d",
		titleFont: "14px sans-serif",
		titleMargins: "0",
		titlePaddings: "0",
		titlePosition: "top",
		tooltipEnabled: true,
		tooltipFade: true,
		tooltipFollowMouse: false,
		tooltipHtml: true,
		tooltipOpacity: 0.9,
		trendAreasVisible: false,
		trendColorAxis: 2,
		trendDotsVisible: false,
		trendLinesVisible: true,
		trendOrthoAxis: 1,
		trendStacked: false,
		trendValuesAnchor: "right",
		trendValuesFont: "10px sans-serif",
		trendValuesVisible: false,
		valuesAnchor: "bottom",
		valuesFont: "lighter 8px \"Verdana\"",
		valuesNormalized: false,
		valuesOptimizeLegibility: false,
		valuesOverflow: "hide",
		valuesVisible: true
	}
};



cgg.render(render_comp_chart_consumption);

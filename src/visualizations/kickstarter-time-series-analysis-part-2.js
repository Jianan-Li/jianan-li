// URL: https://observablehq.com/@jianan-li/kickstarter-time-series-analysis-part-2
// Title: Kickstarter Time Series Analysis (Part 2)
// Author: Jianan Li (@jianan-li)
// Version: 620
// Runtime version: 1
/* eslint-disable */
const m0 = {
  id: "3e4f644db72483ac@620",
  variables: [
    {
      inputs: ["md"],
      value: (function(md){return(
md`# Kickstarter Time Series Analysis (Part 2) <br/><br/>`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`[Part 1 →](/@jianan-li/kickstarter-time-series-analysis-part-1)<br>
[Part 3 →](/@jianan-li/bar-chart-race)<br>
[Colab Notebook →](https://colab.research.google.com/drive/1DAsNmW9fi0t26z0mkQDRTtl_SZNpwDNn)<br>
[Data Source →](https://www.kaggle.com/kemical/kickstarter-projects)<br><br>
`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md `### The Shifting Landscape<br/>`
)})
    },
    {
      name: "question",
      inputs: ["md"],
      value: (function(md){return(
md `<a href="https://observablehq.com/@jianan-li/kickstarter-time-series-analysis-part-2" target="_blank">How has the project category composition changed since the beginning of Kickstarter? →</a><br/>`
)})
    },
    {
      name: "viewof compositionChoice",
      inputs: ["radio"],
      value: (function(radio){return(
radio({
  title: '',
  description: '',
  options: [
    { label: 'by percentage of projects', value: "0" },
    { label: 'by percentage of successful projects', value: "1" },
    { label: 'by percentage of total funding', value: "2" },
  ],
  value: "0"
})
)})
    },
    {
      name: "compositionChoice",
      inputs: ["Generators","viewof compositionChoice"],
      value: (G, _) => G.input(_)
    },
    {
      name: "chart",
      inputs: ["d3","DOM","svgWidth","svgHeight","graphName","margin","xAxis","stackedDataNumOfAllProjects","color","dataNumOfAllProjectsPerc","stackedAreaGenerator","areaTooltip","onMouseOverArea","onMouseMoveArea","onMouseOutArea","graphHeight","legend"],
      value: (function(d3,DOM,svgWidth,svgHeight,graphName,margin,xAxis,stackedDataNumOfAllProjects,color,dataNumOfAllProjectsPerc,stackedAreaGenerator,areaTooltip,onMouseOverArea,onMouseMoveArea,onMouseOutArea,graphHeight,legend)
{
  const svg = d3.select(DOM.svg(svgWidth, svgHeight));

  svg.attr("id", graphName);

  // Hide y axis
  // let yAxisContainer =
  // svg.append("g")
  //   .attr("id", "yAxis")
  //   .attr("class", "y-axis")
  //   .attr("transform", `translate(${margin.left},0)`)
  //   .call(yAxis);

  let xAxisContainer =
  svg.append("g")
    .attr("id", "xAxis")
    .attr("class", "x-axis")
    .attr("transform", `translate(0,${svgHeight - margin.bottom})`)
    .call(xAxis);

  // Remove axis line: https://github.com/d3/d3-axis/issues/48
  svg.select(".domain").remove();

  svg.selectAll(".tick").selectAll("text")
    .attr("fill","hsl(0, 0%, 40%)")
    .style("font-size","1rem");

  let stack = svg.append("g")
    .selectAll('.area')
    .data(stackedDataNumOfAllProjects)
    .enter().append('path')
      .attr('class', 'categories')
      .attr("fill", (d, i) => color(dataNumOfAllProjectsPerc.columns.slice(1)[i]))
      .attr('d', stackedAreaGenerator())
      .attr("data-tooltip", (d) => areaTooltip(d))
      .on("mouseover", onMouseOverArea)
      .on("mousemove", onMouseMoveArea)
      .on("mouseout", onMouseOutArea);

  // Add a translucent bar that indicate the position of the year
  let yearHighlight = svg.append('rect')
    .attr("id", "rectYearHighlight")
    .attr("x", margin.left)
    .attr("y", margin.top)
    .attr("height", graphHeight)
    .attr("width", 10)
    .attr("fill", "hsla(0,0%,100%,0.3)")
    .style("pointer-events", "none")
    .style("visibility", "hidden");

  svg.append("g")
    .attr("transform", `translate(${svgWidth - margin.right+50},${margin.top})`)
    .call(legend);

  return svg.node();
}
)
    },
    {
      name: "graphName",
      value: (function(){return(
"kickstarter-graph"
)})
    },
    {
      name: "graphID",
      inputs: ["graphName"],
      value: (function(graphName){return(
"#"+graphName
)})
    },
    {
      name: "toggle",
      inputs: ["chart","compositionChoice","d3","stackedDataNumOfAllProjects","graphID","stackedDataNumOfSuccessfulProjects","stackedDataTotalFunding","stackedAreaGenerator"],
      value: (function(chart,compositionChoice,d3,stackedDataNumOfAllProjects,graphID,stackedDataNumOfSuccessfulProjects,stackedDataTotalFunding,stackedAreaGenerator)
{
  // Initial rendering of the chart should trigger this block, so that data-dataset is set to 0
  chart

  // And whenever the user select a different option for the graph, this block should also run
  compositionChoice

  let areas = d3.selectAll('.categories')

  if (compositionChoice === '0') {
    areas.data(stackedDataNumOfAllProjects);
    d3.select(graphID).attr("data-dataset", "0")
  } else if (compositionChoice === '1') {
    areas.data(stackedDataNumOfSuccessfulProjects);
    d3.select(graphID).attr("data-dataset", "1")
  } else {
    areas.data(stackedDataTotalFunding);
    d3.select(graphID).attr("data-dataset", "2")
  }

  d3.selectAll(".categories")
    .transition("morph").duration(1500)
    .attr("d", stackedAreaGenerator());

}
)
    },
    {
      name: "legend",
      inputs: ["dataNumOfAllProjectsPerc","svgHeight","margin","color"],
      value: (function(dataNumOfAllProjectsPerc,svgHeight,margin,color){return(
svg => {
  const g = svg
      .attr("font-family", "sans-serif")
      .attr("font-size", "0.8rem")
      .attr("text-anchor", "start")
    .selectAll("g")
    .data(dataNumOfAllProjectsPerc.columns.slice(1))
    .join("g")
      .attr("transform", (d, i) => `translate(0,${i * (svgHeight-margin.bottom-29)/14})`);

  g.append("text")
      .attr("x", 5)
      .attr("y", 9.5)
      .attr("dy", "0.35em")
      .text(d => d);

    g.append("rect")
      .attr("x", -19)
      .attr("width", 19)
      .attr("height", 19)
      .attr("fill", color);
}
)})
    },
    {
      name: "areaTooltip",
      value: (function(){return(
(d) => `${d.key}`
)})
    },
    {
      name: "onMouseOutArea",
      inputs: ["tooltip"],
      value: (function(tooltip){return(
function onMouseOutArea (d) {
  tooltip.text("");
  // d3.selectAll(`circle.outlier[data-pid="${ d.pid }"]`).classed('active', false);

  // Hide rectYearHighlight
  // d3.select("#rectYearHighlight")
  //   .style("visibility", "hidden");

  return tooltip.style("visibility", "hidden");
}
)})
    },
    {
      name: "onMouseMoveArea",
      inputs: ["graphName","d3","margin","dataTotalFundingPerc","graphID","dataNumOfAllProjectsPerc","dataNumOfSuccessfulProjectsPerc","dataNumOfAllProjects","dataNumOfSuccessfulProjects","dataTotalFunding","tooltip"],
      value: (function(graphName,d3,margin,dataTotalFundingPerc,graphID,dataNumOfAllProjectsPerc,dataNumOfSuccessfulProjectsPerc,dataNumOfAllProjects,dataNumOfSuccessfulProjects,dataTotalFunding,tooltip){return(
function onMouseMoveArea (d) {
  // Find your root SVG element
  let svg = document.getElementById(graphName)

  // Calculate from mouse position and svg width the index of the year that's being pointed at
  // index is from 0 (2009) to 8 (2017)
  // console.log(`${d3.mouse(svg)[0]} / ${svg.getBoundingClientRect().width}`);
  let x = d3.mouse(svg)[0] - margin.left
  let y = (svg.getBoundingClientRect().width - margin.left - margin.right)/16.0
  let mouseOverYearIndex = Math.floor((Math.floor(x/y) + 1 )/2)

  let year = dataTotalFundingPerc[mouseOverYearIndex]['launch_year']
  let currentYearPercentage
  switch(d3.select(graphID).attr("data-dataset")) {
    case '0':
      currentYearPercentage =
        (dataNumOfAllProjectsPerc[mouseOverYearIndex][this.dataset.tooltip]*100).toFixed(2)+"%";
      break;
    case '1':
      currentYearPercentage =
        (dataNumOfSuccessfulProjectsPerc[mouseOverYearIndex][this.dataset.tooltip]*100).toFixed(2)+"%";
      break;
    case '2':
      currentYearPercentage =
        (dataTotalFundingPerc[mouseOverYearIndex][this.dataset.tooltip]*100).toFixed(2)+"%";
      break;
    default:
      // shouldn't reach here. something is wrong
  }

  // Show and reposition rectYearHighlight
  d3.select("#rectYearHighlight")
    .attr("x", margin.left-5+y*2*mouseOverYearIndex)
    .style("visibility", "visible");

  let tooltipText = this.dataset.tooltip + '\n' + currentYearPercentage + ' in ' + year;

  switch(d3.select(graphID).attr("data-dataset")) {
    case '0':
      tooltipText += "\n" + (dataNumOfAllProjects[mouseOverYearIndex][this.dataset.tooltip]) + " projects launched";
      break;
    case '1':
      tooltipText += "\n" + (dataNumOfSuccessfulProjects[mouseOverYearIndex][this.dataset.tooltip]) + " projects funded";
      break;
    case '2':
      tooltipText += "\n" + "$" + d3.format(",.0f")(dataTotalFunding[mouseOverYearIndex][this.dataset.tooltip]);
      break;
    default:
      // shouldn't reach here. something is wrong
  }

  tooltip.text(tooltipText)

  return tooltip.style("top", (d3.event.pageY+20)+"px").style("left",(d3.event.pageX+10)+"px");
}
)})
    },
    {
      name: "onMouseOverArea",
      inputs: ["tooltip"],
      value: (function(tooltip){return(
function onMouseOverArea (d) {
  // 'this' is the path (area) DOM element
  // console.log(this)

  // The dataset property on the HTMLElement interface provides read/write access to all the custom data attributes
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
  tooltip.text(this.dataset.tooltip);
  // d3.selectAll(`circle.outlier[data-pid="${ d.pid }"]`).classed('active', true);
  return tooltip.style("visibility", "visible");
}
)})
    },
    {
      name: "tooltip",
      inputs: ["d3"],
      value: (function(d3){return(
d3.select("body").append("div")
  .attr("class", "svg-tooltip")
  .text("")
)})
    },
    {
      inputs: ["dataNumOfAllProjectsPerc"],
      value: (function(dataNumOfAllProjectsPerc){return(
dataNumOfAllProjectsPerc.columns.slice(1)
)})
    },
    {
      name: "shuffle",
      value: (function(){return(
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
)})
    },
    {
      name: "interpolatedColors",
      inputs: ["d3","dataNumOfAllProjectsPerc"],
      value: (function(d3,dataNumOfAllProjectsPerc){return(
d3.quantize(t => d3.interpolateSpectral(t * 1 + 0.0), dataNumOfAllProjectsPerc.columns.slice(1).length)
)})
    },
    {
      name: "interpolatedColorsShuffled",
      inputs: ["shuffle","interpolatedColors"],
      value: (function(shuffle,interpolatedColors){return(
shuffle(interpolatedColors)
)})
    },
    {
      name: "color",
      inputs: ["d3","dataNumOfAllProjectsPerc"],
      value: (function(d3,dataNumOfAllProjectsPerc){return(
d3.scaleOrdinal()
    .domain(dataNumOfAllProjectsPerc.columns.slice(1))
    .range(d3.quantize(t => d3.interpolateSpectral(t * 1 + 0.0), dataNumOfAllProjectsPerc.columns.slice(1).length))
    .unknown("#ccc")
)})
    },
    {
      name: "colors",
      value: (function(){return(
{
  "Art": ["#DA4251", "#DA4251", "#FFD6DC"],
  "Comics": ["#ED6F48", "#ED6F48", "#FFE4DB"],
  "Crafts": ["#F7A65B", "#F7A65B", "#FFEEDE"],
  "Dance": ["#FAD785","#FAD785","#FFF8E6"],
  "Design": ["#F6F3A7", "#E8E18B", "#FEFDEE"],
  "Fashion": ["#D6EA92", "#BDD289", "#F8FCEA"],
  "Film & Video": ["#A2D69A","#A2D69A","#ECF9EB"],
  "Food": ["#64B8A4","#64B8A4","#DFF5F0"],
  "Games": ["#4288B5","#4288B5","#D9EFFF"],
  "Journalism": ["#DA4251", "#DA4251", "#FFD6DC"],
  "Music": ["#ED6F48", "#ED6F48", "#FFE4DB"],
  "Photography": ["#F7A65B", "#F7A65B", "#FFEEDE"],
  "Publishing": ["#FAD785","#FAD785","#FFF8E6"],
  "Technology": ["#F6F3A7", "#E8E18B", "#FEFDEE"],
  "Theater": ["#D6EA92", "#BDD289", "#F8FCEA"]
}
)})
    },
    {
      name: "csvNumOfAllProjects",
      value: (function(){return(
`launch_year,Art,Comics,Crafts,Dance,Design,Fashion,Film & Video,Food,Games,Journalism,Music,Photography,Publishing,Technology,Theater
2009,169,23,11,8,31,26,329,32,46,41,295,73,129,60,56
2010,856,266,55,169,166,173,3685,258,234,188,2466,466,705,225,607
2011,2339,590,117,413,903,603,8003,628,801,170,6615,870,2256,457,1471
2012,3433,1165,316,510,1841,1647,9397,1810,2781,278,8860,1184,5349,812,1778
2013,3440,1396,483,541,3246,2410,9534,2259,4090,209,6887,1239,5801,1826,1475
2014,5044,1582,1922,703,5394,4341,9697,6462,6008,930,7062,2376,7214,6455,1803
2015,5321,1922,2587,623,6704,5276,9695,6162,7418,1472,7069,2189,7094,9703,1684
2016,3581,1870,1773,430,5905,4120,6831,3791,6937,839,5400,1340,5560,7026,1132
2017,3774,1928,1469,352,5570,3966,5191,3014,6622,596,4594,993,4971,5621,864
`
)})
    },
    {
      name: "csvNumOfAllProjectsPerc",
      value: (function(){return(
`launch_year,Art,Comics,Crafts,Dance,Design,Fashion,Film & Video,Food,Games,Journalism,Music,Photography,Publishing,Technology,Theater
2009,0.127163280662152,0.01730624529721595,0.008276899924755455,0.006019563581640331,0.023325808878856283,0.019563581640331076,0.24755455229495862,0.024078254326561323,0.0346124905944319,0.030850263355906696,0.2219714070729872,0.05492851768246802,0.09706546275395034,0.045146726862302484,0.042136945071482315
2010,0.08137655670691131,0.02528757486453085,0.00522863390056089,0.016066165985359825,0.015780967772601958,0.01644643026903698,0.3503184713375796,0.024527046297176537,0.022245460595113602,0.017872421332826315,0.23443293088696643,0.044300789048388634,0.06702157999809868,0.021389865956840004,0.05770510504800837
2011,0.08915230980332367,0.022488184174416833,0.0044595212684860495,0.01574172892209178,0.03441835645677695,0.022983686537581947,0.30503887787772527,0.023936575697514863,0.030530568684250647,0.006479646287543833,0.2521344717182497,0.0331605427656655,0.08598871779234639,0.017418813843573716,0.05606799817045281
2012,0.08340419328976459,0.028303491168824857,0.007677170136779962,0.012390369524549938,0.044726804499404776,0.0400136051116348,0.22829863220038385,0.04397366439104978,0.06756395617210466,0.006753966132989966,0.21525230193629893,0.028765093170719857,0.12995311095454434,0.019727411870459902,0.043196229440489786
2013,0.07672406102239272,0.031135694531180303,0.010772593451690606,0.012066196806137925,0.07239718083682754,0.05375144972789723,0.21264162726380587,0.05038362030511196,0.09122133999464715,0.004661432777232581,0.15360424658756355,0.027634044071728075,0.12938263895084307,0.04072620215897939,0.032897671513961994
2014,0.07529144836027644,0.023614407475407877,0.028689564581374172,0.010493633663218545,0.08051587479288881,0.0647978146970579,0.14474646604869165,0.09645783887868882,0.08968101144895735,0.013882047378084277,0.10541399847745286,0.03546639201110564,0.1076828922424731,0.09635335035003657,0.02691325959428597
2015,0.07102337190832766,0.02565437338992779,0.03453062640985598,0.008315647566037988,0.08948330863999786,0.07042272320773102,0.12940642560632148,0.08224882873503384,0.09901360135613128,0.019647886383961345,0.09435523698928176,0.02921822234680121,0.09468893071183544,0.12951320759753868,0.022477609151216646
2016,0.0633412930043336,0.033076855045547006,0.03136110374104537,0.007605907844697975,0.1044485716812594,0.07287521004687361,0.12082780578402759,0.06705580613779075,0.12270275050853453,0.014840364376050234,0.09551605200318387,0.023702131423012293,0.09834615724772265,0.12427699655080923,0.020022994605111876
2017,0.07620393740535084,0.03892983341746593,0.02966178697627461,0.007107521453811207,0.11246845027763756,0.08008076728924786,0.10481574962140333,0.06085815244825846,0.1337102473498233,0.012034326097930339,0.09276123170116103,0.020050479555779908,0.10037354871277132,0.11349823321554771,0.017445734477536598
`
)})
    },
    {
      name: "csvNumOfSuccessfulProjects",
      value: (function(){return(
`launch_year,Art,Comics,Crafts,Dance,Design,Fashion,Film & Video,Food,Games,Journalism,Music,Photography,Publishing,Technology,Theater
2009,77,12,4,3,8,4,124,17,23,20,157,31,57,19,23
2010,382,110,19,108,69,43,1473,120,70,68,1295,190,222,65,359
2011,1189,268,46,299,302,186,3317,258,284,67,3763,331,758,140,963
2012,1694,548,126,368,760,435,3771,682,941,88,4944,407,1639,325,1164
2013,1684,753,213,388,1255,776,4029,947,1490,81,3757,443,1951,672,963
2014,1783,820,381,413,1718,978,3599,1385,1984,172,3127,543,2050,1142,1011
2015,1707,994,526,293,2046,1094,3004,1171,2263,248,2611,539,1973,1601,901
2016,1311,1097,401,262,2130,926,2391,791,2592,145,2340,469,1849,1307,664
2017,1683,1240,399,204,2261,1151,1904,714,2871,123,2111,352,1801,1162,486
`
)})
    },
    {
      name: "csvNumOfSuccessfulProjectsPerc",
      value: (function(){return(
`launch_year,Art,Comics,Crafts,Dance,Design,Fashion,Film & Video,Food,Games,Journalism,Music,Photography,Publishing,Technology,Theater
2009,0.13298791018998274,0.02072538860103627,0.0069084628670120895,0.0051813471502590676,0.013816925734024179,0.0069084628670120895,0.2141623488773748,0.02936096718480138,0.039723661485319514,0.03454231433506045,0.2711571675302245,0.0535405872193437,0.09844559585492228,0.03281519861830743,0.039723661485319514
2010,0.08317004136729807,0.023949488351839757,0.004136729806226867,0.023514043109079032,0.015022860875244938,0.009362072719355541,0.3207054212932724,0.02612671456564337,0.0152405834966253,0.014805138253864576,0.28195079468756806,0.04136729806226867,0.048334421946440234,0.014151970389723493,0.07816242107554974
2011,0.09769123325938707,0.02201955467915537,0.003779475803138608,0.024566592720400952,0.024813080272779557,0.015282228247473502,0.27253307041327746,0.02119792950456002,0.02333415495850793,0.005504888669788843,0.30917755320023005,0.02719579327910607,0.0622791882343275,0.011502752444334895,0.07912250431353217
2012,0.09467918622848201,0.030628213726805277,0.007042253521126761,0.020567851553767048,0.04247708473060586,0.02431254191817572,0.2107645875251509,0.03811759445562263,0.05259333780460541,0.0049183992845964674,0.2763246143527834,0.022747596691258663,0.09160518667560921,0.018164542812430136,0.06505700871898056
2013,0.0867951757550768,0.038810431914235645,0.010978249664982991,0.019997938356870425,0.06468405319039275,0.03999587671374085,0.2076590042263684,0.04880940109267086,0.07679620657664159,0.004174827337387898,0.19363983094526338,0.022832697660035046,0.10055664364498505,0.03463560457684775,0.04963405834450057
2014,0.08447834738936795,0.03885151141855397,0.01805173884203544,0.01956789538519852,0.08139865441106794,0.046337534350421684,0.17052023121387283,0.06562115038377712,0.09400170567611106,0.008149341419501563,0.14815692220221738,0.025727281341798542,0.09712877854638491,0.054107836634132475,0.04790107078555861
2015,0.08139812121501121,0.0473987888035859,0.02508225644938248,0.013971675170473511,0.09756330170235086,0.05216727862286014,0.14324543417099805,0.055839015783701304,0.10791092461017596,0.011825854751800105,0.1245052691812503,0.02570216012588813,0.09408230413428068,0.07634352200658051,0.04296409327166086
2016,0.07020080321285141,0.05874163319946452,0.02147255689424364,0.014029451137884872,0.1140562248995984,0.04958500669344043,0.12803212851405624,0.04235609103078983,0.13879518072289157,0.007764390896921017,0.12530120481927712,0.025113788487282462,0.09900937081659973,0.06998661311914324,0.035555555555555556
2017,0.09116022099447514,0.06716498754197811,0.021611959701007474,0.011049723756906077,0.12246777163904236,0.06234427472646517,0.10313075506445672,0.03867403314917127,0.15550861228469287,0.006662333441663958,0.11434297475896436,0.019066190011916367,0.09755172787346983,0.06294009316433756,0.026324341891452715
`
)})
    },
    {
      name: "csvTotalFunding",
      value: (function(){return(
`launch_year,Art,Comics,Crafts,Dance,Design,Fashion,Film & Video,Food,Games,Journalism,Music,Photography,Publishing,Technology,Theater
2009,349826.94,79747.33,13089.0,21561.37,35719.22,13543.99,664185.7999999999,83853.05,70035.74,53622.12,700861.1699999998,80797.57,220850.49,75402.07999999999,66572.17
2010,1345933.4899999998,460689.55999999994,69784.19,326227.15,1672274.99,197121.92,10243987.820000002,788757.8799999999,461431.27,276340.14,6431651.690000001,841419.9099999999,885000.2299999997,747739.7799999999,1314750.85
2011,5458378.799999993,1532276.45,118592.23999999999,1020860.9600000002,12341673.19999999,1195282.93,28755771.939999994,2594624.5499999993,3821336.4599999995,522554.63,19447403.099999983,1745278.5399999993,4244131.309999997,5499397.469999998,3901589.299999998
2012,8650052.110000005,8645455.939999998,312016.76999999996,1664339.17,43810178.76000005,5331568.159999998,48150108.10999998,9204632.400000004,82370836.58999997,1116987.69,31571720.93000001,2675952.5,12057768.429999994,24745240.159999993,6152967.689999998
2013,11380514.58999999,11641577.409999996,1414292.99,2154871.170000001,61089640.93999998,17239841.179999996,72428388.1499998,17213870.200000003,99073910.21000011,1083835.2699999998,30234284.32999999,3743951.6900000004,18352704.220000003,65048693.78999998,7450357.5
2014,12820139.93999999,8813945.450000001,1735114.9999999998,2489310.3900000006,86119277.68999991,19181094.800000004,53203375.30000006,23122220.499999978,75857963.25000006,1595525.9700000004,27074279.270000007,5766409.119999995,18406137.41999998,103501215.51000005,7035551.020000004
2015,13456894.58,12116763.659999993,2770603.8400000012,1596042.83,146332287.50000003,25346756.19000001,54221599.49999996,20882166.099999998,133281245.63999978,2414389.11,22277349.439999945,6342378.029999999,19474877.04999999,140770491.14999992,5606351.720000002
2016,11923348.429999994,11824587.700000001,3102777.060000001,1691505.7199999997,166070861.96999973,23140416.86000001,34499381.74999996,16466345.620000005,136390248.88999978,1927518.9100000001,20653512.379999995,6199452.279999994,20522360.580000002,134264306.09,4526706.3199999975
2017,14861420.839999989,11399983.589999996,2370537.8299999987,1178890.93,145674016.48999995,21817079.070000008,27382016.390000008,15214570.98999999,147508548.7399998,1478315.8799999997,18755110.939999994,6023496.819999998,21910172.200000037,121498736.30000003,2973616.890000001
`
)})
    },
    {
      name: "csvTotalFundingPerc",
      value: (function(){return(
`launch_year,Art,Comics,Crafts,Dance,Design,Fashion,Film & Video,Food,Games,Journalism,Music,Photography,Publishing,Technology,Theater
2009,0.1382896627021465,0.03152482014991975,0.005174196690250314,0.008523398983212041,0.014120121468586053,0.005354058234455142,0.26255848178403673,0.033147847335731846,0.027685743304089815,0.021197295120192926,0.2770565777476478,0.03193998924854979,0.087304138925675,0.029807104650774647,0.02631656365473155
2010,0.0516413215871801,0.01767592373365827,0.0026775080821347854,0.012516815495555613,0.06416252450987633,0.007563253710703336,0.3930454760790418,0.030263381985912552,0.017704381963518076,0.010602730479042002,0.24677221848460024,0.03228394009436985,0.033956047473161804,0.028689582902426555,0.05044489341881849
2011,0.05920205000480093,0.016619203308879726,0.0012862617234738931,0.011072346536643657,0.13385885822532356,0.01296414235518888,0.3118875971595326,0.028141522965167653,0.04144654676404818,0.0056676728510487925,0.21092822117617066,0.01892944245595158,0.04603221638658742,0.05964694205818328,0.04231697602899902
2012,0.030196388263588045,0.030180343535523894,0.0010892165055027216,0.0058100264762009435,0.15293655470639228,0.018611922814548636,0.16808677461519916,0.032132367555644956,0.2875476045274602,0.0038992821712479026,0.1102134335410297,0.009341458252199944,0.042092354181750016,0.08638293388813942,0.021479338965572112
2013,0.02712547894092152,0.027747722686594513,0.0033709701273304167,0.005136139678041922,0.1456072795058407,0.04109119540902253,0.17263320581426458,0.04102929352703875,0.2361428601266887,0.0025833235008236133,0.07206347625158213,0.008923716227397994,0.04374370665681577,0.15504368977177316,0.017757941775863657
2014,0.028698278905365734,0.019730288902039827,0.0038841084758770347,0.0055723981320475995,0.19278066088538032,0.04293747266854413,0.11909739754886398,0.05175980417732983,0.1698103918311431,0.0035716341242850932,0.06060660970072239,0.012908284775572003,0.04120270665701085,0.23169066512938152,0.01574929808643654
2015,0.022173524405493954,0.019965331015516664,0.004565247316085855,0.0026298708392808587,0.24111822596985882,0.04176497880977456,0.08934334386516149,0.03440847492006796,0.21961344316284073,0.003978296444003489,0.03670738063384278,0.01045061869222681,0.0320896220888853,0.23195380646935956,0.009237835367601062
2016,0.02009993507410695,0.019933447927268512,0.005230545582188315,0.002851477112246106,0.2799560511793224,0.03900924972581467,0.05815776812552896,0.027758349914278703,0.22992158314627767,0.003249339325489578,0.034816919116928316,0.010450804910598778,0.03459582831510125,0.2263377482443515,0.007630952300498157
2017,0.026536047401687062,0.020355422821247204,0.004232751693233956,0.002104987533607787,0.2601105673804998,0.038955834075409666,0.048892396810614296,0.027166620293821983,0.26338624574732816,0.002639630536587829,0.03348848796396373,0.010755350976214691,0.03912205800090428,0.2169440096214838,0.005309589143395616
`
)})
    },
    {
      name: "dataNumOfAllProjects",
      inputs: ["d3","csvNumOfAllProjects"],
      value: (function(d3,csvNumOfAllProjects){return(
d3.csvParse(csvNumOfAllProjects, d => {
  return {
    launch_year: new Date(d.launch_year, 1, 1, 0, 0, 0, 0).getFullYear(),
    Art: +d.Art,
    Comics: +d.Comics,
    Crafts: +d.Crafts,
    Dance: +d.Dance,
    Design: +d.Design,
    Fashion: +d.Fashion,
    "Film & Video": +d["Film & Video"],
    Food: +d.Food,
    Games: +d.Games,
    Journalism: +d.Journalism,
    Music: +d.Music,
    Photography: +d.Photography,
    Publishing: +d.Publishing,
    Technology: +d.Technology,
    Theater: +d.Theater
  }
})
)})
    },
    {
      name: "dataNumOfAllProjectsPerc",
      inputs: ["d3","csvNumOfAllProjectsPerc"],
      value: (function(d3,csvNumOfAllProjectsPerc){return(
d3.csvParse(csvNumOfAllProjectsPerc, d => {
  return {
    launch_year: new Date(d.launch_year, 1, 1, 0, 0, 0, 0).getFullYear(),
    Art: +d.Art,
    Comics: +d.Comics,
    Crafts: +d.Crafts,
    Dance: +d.Dance,
    Design: +d.Design,
    Fashion: +d.Fashion,
    "Film & Video": +d["Film & Video"],
    Food: +d.Food,
    Games: +d.Games,
    Journalism: +d.Journalism,
    Music: +d.Music,
    Photography: +d.Photography,
    Publishing: +d.Publishing,
    Technology: +d.Technology,
    Theater: +d.Theater
  }
})
)})
    },
    {
      name: "dataNumOfSuccessfulProjects",
      inputs: ["d3","csvNumOfSuccessfulProjects"],
      value: (function(d3,csvNumOfSuccessfulProjects){return(
d3.csvParse(csvNumOfSuccessfulProjects, d => {
  return {
    launch_year: new Date(d.launch_year, 1, 1, 0, 0, 0, 0).getFullYear(),
    Art: +d.Art,
    Comics: +d.Comics,
    Crafts: +d.Crafts,
    Dance: +d.Dance,
    Design: +d.Design,
    Fashion: +d.Fashion,
    "Film & Video": +d["Film & Video"],
    Food: +d.Food,
    Games: +d.Games,
    Journalism: +d.Journalism,
    Music: +d.Music,
    Photography: +d.Photography,
    Publishing: +d.Publishing,
    Technology: +d.Technology,
    Theater: +d.Theater
  }
})
)})
    },
    {
      name: "dataNumOfSuccessfulProjectsPerc",
      inputs: ["d3","csvNumOfSuccessfulProjectsPerc"],
      value: (function(d3,csvNumOfSuccessfulProjectsPerc){return(
d3.csvParse(csvNumOfSuccessfulProjectsPerc, d => {
  return {
    launch_year: new Date(d.launch_year, 1, 1, 0, 0, 0, 0).getFullYear(),
    Art: +d.Art,
    Comics: +d.Comics,
    Crafts: +d.Crafts,
    Dance: +d.Dance,
    Design: +d.Design,
    Fashion: +d.Fashion,
    "Film & Video": +d["Film & Video"],
    Food: +d.Food,
    Games: +d.Games,
    Journalism: +d.Journalism,
    Music: +d.Music,
    Photography: +d.Photography,
    Publishing: +d.Publishing,
    Technology: +d.Technology,
    Theater: +d.Theater
  }
})
)})
    },
    {
      name: "dataTotalFunding",
      inputs: ["d3","csvTotalFunding"],
      value: (function(d3,csvTotalFunding){return(
d3.csvParse(csvTotalFunding, d => {
  return {
    launch_year: new Date(d.launch_year, 1, 1, 0, 0, 0, 0).getFullYear(),
    Art: +d.Art,
    Comics: +d.Comics,
    Crafts: +d.Crafts,
    Dance: +d.Dance,
    Design: +d.Design,
    Fashion: +d.Fashion,
    "Film & Video": +d["Film & Video"],
    Food: +d.Food,
    Games: +d.Games,
    Journalism: +d.Journalism,
    Music: +d.Music,
    Photography: +d.Photography,
    Publishing: +d.Publishing,
    Technology: +d.Technology,
    Theater: +d.Theater
  }
})
)})
    },
    {
      name: "dataTotalFundingPerc",
      inputs: ["d3","csvTotalFundingPerc"],
      value: (function(d3,csvTotalFundingPerc){return(
d3.csvParse(csvTotalFundingPerc, d => {
  return {
    launch_year: new Date(d.launch_year, 1, 1, 0, 0, 0, 0).getFullYear(),
    Art: +d.Art,
    Comics: +d.Comics,
    Crafts: +d.Crafts,
    Dance: +d.Dance,
    Design: +d.Design,
    Fashion: +d.Fashion,
    "Film & Video": +d["Film & Video"],
    Food: +d.Food,
    Games: +d.Games,
    Journalism: +d.Journalism,
    Music: +d.Music,
    Photography: +d.Photography,
    Publishing: +d.Publishing,
    Technology: +d.Technology,
    Theater: +d.Theater
  }
})
)})
    },
    {
      name: "x",
      inputs: ["d3","margin","graphWidth"],
      value: (function(d3,margin,graphWidth){return(
d3.scaleLinear()
    .domain([2009, 2017])
    .range([margin.left-5, graphWidth+margin.left+5])
)})
    },
    {
      name: "y",
      inputs: ["d3","margin","graphHeight"],
      value: (function(d3,margin,graphHeight){return(
d3.scaleLinear()
    .domain([0, 1])
    .range([margin.top, graphHeight+margin.top])
)})
    },
    {
      name: "xAxis",
      inputs: ["d3","x"],
      value: (function(d3,x){return(
d3.axisBottom(x).tickSize(0).tickPadding(10).tickFormat(d3.format("d"))
)})
    },
    {
      name: "yAxis",
      inputs: ["d3","y"],
      value: (function(d3,y){return(
d3.axisLeft(y).tickSize(0).tickPadding(10)
)})
    },
    {
      name: "stackedAreaGenerator",
      inputs: ["d3","x","y"],
      value: (function(d3,x,y){return(
function(reality) {
  return d3.area()
    .curve(d3.curveLinear)
    .x(d => x(d.data.launch_year))
    .y0(d => y(d[0]) )
    .y1(d => y(d[1]) );
}
)})
    },
    {
      name: "stackedDataNumOfAllProjects",
      inputs: ["dataNumOfAllProjectsPerc","d3"],
      value: (function(dataNumOfAllProjectsPerc,d3)
{
  const keys = dataNumOfAllProjectsPerc.columns.slice(1);
  const stack = d3.stack()
  	.keys(keys)
  	.order(d3.stackOrderAescending);
  return stack(dataNumOfAllProjectsPerc);
}
)
    },
    {
      name: "stackedDataNumOfSuccessfulProjects",
      inputs: ["dataNumOfSuccessfulProjectsPerc","d3"],
      value: (function(dataNumOfSuccessfulProjectsPerc,d3)
{
  const keys = dataNumOfSuccessfulProjectsPerc.columns.slice(1);
  const stack = d3.stack()
  	.keys(keys)
  	.order(d3.stackOrderAescending);
  return stack(dataNumOfSuccessfulProjectsPerc);
}
)
    },
    {
      name: "stackedDataTotalFunding",
      inputs: ["dataTotalFundingPerc","d3"],
      value: (function(dataTotalFundingPerc,d3)
{
  const keys = dataTotalFundingPerc.columns.slice(1);
  const stack = d3.stack()
  	.keys(keys)
  	.order(d3.stackOrderAescending);
  return stack(dataTotalFundingPerc);
}
)
    },
    {
      inputs: ["d3"],
      value: (function(d3){return(
d3.select(d3.select("graphID").parentNode)
)})
    },
    {
      value: (function(){return(
document.getElementsByClassName("observablehq")[0].parentElement.clientWidth
)})
    },
    {
      name: "svgWidth",
      value: (function(){return(
document.getElementsByClassName("observablehq")[0].parentElement.clientWidth-32
)})
    },
    {
      name: "svgHeight",
      inputs: ["svgWidth"],
      value: (function(svgWidth){return(
svgWidth * 0.55
)})
    },
    {
      name: "margin",
      value: (function(){return(
{ top:10, right:135, bottom:50, left:30 }
)})
    },
    {
      name: "graphWidth",
      inputs: ["svgWidth","margin"],
      value: (function(svgWidth,margin){return(
svgWidth - margin.left - margin.right
)})
    },
    {
      name: "graphHeight",
      inputs: ["svgHeight","margin"],
      value: (function(svgHeight,margin){return(
svgHeight - margin.top - margin.bottom
)})
    },
//     {
//       inputs: ["$"],
//       value: (function($){return(
// $( "*" ).css( "font-family", "-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif" )
// )})
//     },
//     {
//       name: "$",
//       inputs: ["require"],
//       value: (function(require){return(
// require("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js")
// )})
//     },
    {
      from: "@jashkenas/inputs",
      name: "slider",
      remote: "slider"
    },
    {
      from: "@jashkenas/inputs",
      name: "radio",
      remote: "radio"
    },
    {
      from: "@jashkenas/inputs",
      name: "button",
      remote: "button"
    },
    {
      name: "d3",
      inputs: ["require"],
      value: (function(require){return(
require("d3@5")
)})
    },
    {
      name: "styles",
      inputs: ["html"],
      value: (function(html){return(
html`
  <style>

  .y-axis-label,
  .x-axis-label {
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple       Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 12px;
    text-transform: uppercase;
  }

  .y-axis line {
    stroke-dasharray: 2 2;
    stroke: #bababa;
  }

  .y-axis .domain {
    fill-opacity: 0;
    stroke-opacity: 0;
  }

  .svg-tooltip {
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple   Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    background: rgba(69,77,93,.9);
    border-radius: .1rem;
    color: #fff;
    display: block;
    font-size: 0.7rem;
    max-width: 400px;
    line-height: 1.15rem;
    padding: .2rem .4rem;
    position: absolute;
    text-overflow: ellipsis;
    white-space: pre;
    z-index: 300;
    visibility: hidden;
  }
</style>`
)})
    }
  ]
};

const m1 = {
  id: "@jashkenas/inputs",
  variables: [
    {
      name: "slider",
      inputs: ["input"],
      value: (function(input){return(
function slider(config = {}) {
  let {value, min = 0, max = 1, step = "any", precision = 2, title, description, getValue, format, display, submit} = config;
  if (typeof config == "number") value = config;
  if (value == null) value = (max + min) / 2;
  precision = Math.pow(10, precision);
  if (!getValue) getValue = input => Math.round(input.valueAsNumber * precision) / precision;
  return input({
    type: "range", title, description, submit, format, display,
    attributes: {min, max, step, value},
    getValue
  });
}
)})
    },
    {
      name: "radio",
      inputs: ["input","html"],
      value: (function(input,html){return(
function radio(config = {}) {
  let { value: formValue, title, description, submit, options } = config;
  if (Array.isArray(config)) options = config;
  options = options.map(
    o => (typeof o === "string" ? { value: o, label: o } : o)
  );
  const form = input({
    type: "radio",
    title,
    description,
    submit,
    getValue: input => {
      const checked = Array.prototype.find.call(input, radio => radio.checked);
      return checked ? checked.value : undefined;
    },
    form: html`
      <form>
        ${options.map(({ value, label }) => {
          const input = html`<input type=radio name=input ${
            value === formValue ? "checked" : ""
          } style="vertical-align: baseline;" />`;
          input.setAttribute("value", value);
          const tag = html`
          <label style="display: inline-block; margin: 5px 10px 3px 0; font-size: 0.85em;">
           ${input}
           ${label}
          </label>`;
          return tag;
        })}
      </form>
    `
  });
  form.output.remove();
  return form;
}
)})
    },
    {
      name: "button",
      inputs: ["input"],
      value: (function(input){return(
function button(config = {}) {
  let {value, title, description, disabled} = config;
  if (typeof config == "string") value = config;
  if (!value) value = "Ok";
  const form = input({
    type: "button", title, description,
    attributes: {disabled, value}
  });
  form.output.remove();
  return form;
}
)})
    },
    {
      name: "input",
      inputs: ["html","d3format"],
      value: (function(html,d3format){return(
function input(config) {
  let {
    form,
    type = "text",
    attributes = {},
    action,
    getValue,
    title,
    description,
    format,
    display,
    submit,
    options
  } = config;
  const wrapper = html`<div></div>`;
  if (!form)
    form = html`<form>
	<input name=input type=${type} />
  </form>`;
  const input = form.input;
  Object.keys(attributes).forEach(key => {
    const val = attributes[key];
    if (val != null) input.setAttribute(key, val);
  });
  if (submit)
    form.append(
      html`<input name=submit type=submit style="margin: 0 0.75em" value="${
        typeof submit == "string" ? submit : "Submit"
      }" />`
    );
  form.append(
    html`<output name=output style="font: 14px Menlo, Consolas, monospace; margin-left: 0.5em;"></output>`
  );
  if (title)
    form.prepend(
      html`<span style="font: 300 0.9rem sans-serif;">${title}</span>`
    );
  if (description)
    form.append(
      html`<div style="font-size: 0.85rem; font-style: italic;">${description}</div>`
    );
  if (format) format = d3format.format(format);
  if (action) {
    action(form);
  } else {
    const verb = submit
      ? "onsubmit"
      : type == "button"
      ? "onclick"
      : type == "checkbox" || type == "radio"
      ? "onchange"
      : "oninput";
    form[verb] = e => {
      e && e.preventDefault();
      const value = getValue ? getValue(input) : input.value;
      if (form.output) {
        const out = display ? display(value) : format ? format(value) : value;
        if (out instanceof window.Element) {
          while (form.output.hasChildNodes()) {
            form.output.removeChild(form.output.lastChild);
          }
          form.output.append(out);
        } else {
          form.output.value = out;
        }
      }
      form.value = value;
      if (verb !== "oninput")
        form.dispatchEvent(new CustomEvent("input", { bubbles: true }));
    };
    if (verb !== "oninput")
      wrapper.oninput = e => e && e.stopPropagation() && e.preventDefault();
    if (verb !== "onsubmit") form.onsubmit = e => e && e.preventDefault();
    form[verb]();
  }
  while (form.childNodes.length) {
    wrapper.appendChild(form.childNodes[0]);
  }
  form.append(wrapper);
  return form;
}
)})
    },
    {
      name: "d3format",
      inputs: ["require"],
      value: (function(require){return(
require("d3-format@1")
)})
    }
  ]
};

const notebook = {
  id: "3e4f644db72483ac@620",
  modules: [m0,m1]
};

export default notebook;

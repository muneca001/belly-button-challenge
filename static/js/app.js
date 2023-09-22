//Initializes the page when loads
function init() {
  let url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json';

  d3.json(url).then((data) => {
    //uses dropdown element with the id 'selDataset'
    let dropdown = d3.select("#selDataset");

    //extracts sample ids from data
    let sampleIDs = data.names;

    //populates dropdown
    sampleIDs.forEach((sample) => {
      dropdown.append("option").text(sample).property("value", sample);
    })

    //default values are the first sample in the list
    let initialSample = sampleIDs[0];
    let initialSampleData = data.samples.find(item => item.id === initialSample);
    let initialMetadataPane1 = d3.select('#sample-metadata');
    optionChanged(initialSample);
    createBarChart(initialSampleData, data);
    createBubbleChart(initialSampleData, data);
    displayMetadata(initialSample);
  })
};

//Function which calls new sample when selected from dropdown
function optionChanged(newSample){
  let url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json';
  
  //fetches data
  d3.json(url).then((data) => {
    let info = data.metadata;
    let filteredData = info.filter(item => item.id === newSample)[0];

    //calls other functions for visuals.
    createBarChart(newSample, data);
    createBubbleChart(newSample, data);
    displayMetadata(newSample);
  })
}

//Creates horizontal bar chart using selected sample and json data containing sample information
function createBarChart(sample, data){
  let sampleData = data.samples.find(item => item.id === sample);

  //extracts top 10 OTUs
  let otuIds = sampleData.otu_ids.slice(0,10);
  let sampleValues = sampleData.sample_values.slice(0,10);
  let otuLabels = sampleData.otu_labels.slice(0,10);

  //displays sample value on x-axis and ids on y axis with lables
  let trace = {
    x: sampleValues,
    y: otuIds.map(id => `OTU ${id}`),
    text: otuLabels,
    type: "bar",
    orientation: "h",
  };

  let layout = {
    title: "Top 10 OTUs",
    yaxis: {title: "OTU ID"},
  };

  let info = [trace];
  Plotly.newPlot("bar", info, layout);
}

//Creates bubble chart using selected sample and json data containing sample information
function createBubbleChart(sample, data){
  let sampleData = data.samples.find(item => item.id === sample);

  //displays OTU IDs on x-axis and sample on y-axis
  //marker size represents sample values
  //marker color represents OTU IDs
  let trace = {
    x: sampleData.otu_ids,
    y: sampleData.sample_values,
    text: sampleData.otu_labels,
    mode: 'markers',
    marker: {
      size: sampleData.sample_values,
      color: sampleData.otu_ids,
      colorscale: 'Viridis',
      opacity: 0.5,
    }
  };

  let layout = {
    title: 'Bubble Chart',
    xaxis: {title: 'OTU ID'},
    yaxis: {title: 'Sample Values'},
  };

  let info = [trace];
  Plotly.newPlot('bubble', info, layout);
}

//Displays sample metadata containing demographic information
function displayMetadata(sample) {
  d3.json('samples.json').then((data) => {
    let metadata = data.metadata;
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    let metadataPane1 = d3.select('#sample-metadata');
    metadataPane1.html("");

    //clears exisiting metdata, appends key-value pairs to HTML element, 'sample-metadata'
    Object.entries(result).forEach(([key, value]) => {
    metadataPane1.append('p').text(`${key}: ${value}`);
  });
});
}

init();










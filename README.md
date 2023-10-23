# Belly Button Biodiversity Dashboard

Welcome to the Belly Button Biodiversity Dashboard project! This interactive dashboard allows you to explore the fascinating world of microbial communities found in human navels. The dataset used in this project catalogs the microbes that colonize human navels, with a particular focus on the operational taxonomic units (OTUs) present in individuals.

## Project Overview

The main goal of this project is to create a dynamic web-based visualization of the Belly Button Biodiversity dataset, which is hosted at the following URL: [Belly Button Biodiversity Dataset](https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json). The visualization includes the following features:

- **Horizontal Bar Chart:** This chart displays the top 10 OTUs found in a selected individual. It uses the sample values as the heights of the bars, OTU IDs as the labels for the bars, and OTU labels as hover text for additional information.

- **Bubble Chart:** The bubble chart visualizes the entire sample. It uses OTU IDs for the x-axis, sample values for the y-axis, sample values for marker size, OTU IDs for marker colors, and OTU labels for text values.

- **Sample Metadata Display:** This section displays the demographic information of the selected individual, showing each key-value pair from the metadata JSON object.

- **Dropdown Menu:** A dropdown menu allows you to select different individuals for exploration, and all visualizations update when a new sample is chosen.

## Getting Started

To explore the Belly Button Biodiversity Dashboard, follow these steps:

1. Clone or download this repository to your local machine.

2. Open your terminal and navigate to the project directory by using the `cd` command. For example:

   ```bash
   cd path/to/belly-button-challenge
3. Once you are inside the project folder, start a Python HTTP server by running the following command:
   
    ```bash
    python -m http.server
4. After starting the server, open your web browser, preferably Google Chrome, and enter the following URL in the address bar.
   
5. Select an individual from the dropdown menu to view their microbial data and demographic information.

## Technologies Used

This project utilizes the following technologies and libraries:

- D3.js: Used to read the dataset and create interactive visualizations.
- HTML and CSS: Used for creating the webpage layout and styling.
- JavaScript: Used to handle data manipulation, dynamic updates, and interactivity.
- JSON: The dataset is provided in JSON format for easy access and utilization.


# Text Entity Analysis
Text Entity Analysis is a web tool that provides a convenient way to compare entity metrics between webpage content.
- Will scrape user provided pages and use Google's Natual Language API to retrieve entity data
- Side by side entity cards comparison ordered by salience
- Scatter plot chart comparing entity mentions vs salience
- Bar graph of entity type totals
- Pie chart with total entity mentions 

![Alt Text](https://media.giphy.com/media/jOcBoZeBf8AgBtC4ax/giphy.gif)


## Clone
Clone this repo to your local machine using https://github.com/AJBenjumea/text-entity-analysis.git

## Setup
Install npm packages
```bash
npm install
```

Create a Natural Langage API key
If you don't already have one, you'll need to create a project in Google Cloud Console and enable the Cloud Natural Language API for your project. You can then [creat an API key](https://cloud.google.com/docs/authentication/api-keys#creating_an_api_key).

## Configuration
Create a .env file and set the following variables:
- API_KEY: Set this to your Natural Language API key
- PORT_A: Set this to the port you want server to run on  
- API_PATH: Can be local path and server port

## Contributing 
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)

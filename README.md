# Ultimate Mortal Kombat 3 Wiki

Welcome to the Ultimate Mortal Kombat 3 Wiki! This web application allows you to explore the diverse roster of characters from the iconic fighting game, Ultimate Mortal Kombat 3. You can search for characters, view their moves, combos, fatalities, and transformations.

## Features

- **Character Listing**: Browse through the list of characters from Ultimate Mortal Kombat 3.
- **Search Functionality**: Quickly find characters by name.
- **Detailed Character Information**: View detailed information about each character, including their moves, combos, fatalities, and transformations.

### Data

The application fetches character data from a local JSON file (`data.json`). Each character entry in the JSON file includes the following details:

- `name`: Character's name.
- `image`: URL to the character's image.
- `moveList`: List of moves with their names and combinations.
- `combos`: List of combos with their names and combinations.
- `finalRoundSpecial`: List of Fatalities with their names, combinations, and optional distance.
- `transformations`: List of transformations with their names and combinations (optional).

### User Interface

- **Search Input**: A text input field where users can type the name of a character to search.
- **Search Button**: A button to initiate the search based on the text input.
- **Clear Search**: A button to clear the search input and reset the character list to show all characters.

### JavaScript Functionality

- **Fetch Data**: The application uses the `fetch` API to retrieve character data from `data.json`.
- **Mount Character Cards**: `mountCharacterCard` function creates HTML elements to display character information.
- **Filter Characters**: `filterCharacters` function filters the characters based on the search input and updates the displayed list.
- **Start Application**: `startApplication` function initializes the character list when the application loads.

## Getting Started

1. **Clone the Repository**

   ```bash
   git clone git@github.com:Leeo-Henrique/umk3_android.git

2. **Navigate to the Project Directory**

   ```bash
   cd umk3

3. **Ensure data.json File is Present**

  Make sure that data.json is located in the project directory and contains the character data.

4. **Open the Application**
  Open index.html in your preferred web browser.
  
Contributing
Feel free to contribute to this project by submitting issues or pull requests. Your contributions are welcome!

License
This project is licensed under the MIT License. See the LICENSE file for more details.
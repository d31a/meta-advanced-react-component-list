function DessertsList(props) {
  // Implement the component here.
  // Return a ul element that contains a list of li elements with JSX statements

  const lowCaloriesDesserts = props.data
    .filter((dessert) => dessert.calories < 500) // Filter desserts with calories < 500
    .sort((a, b) => {
      return a.calories - b.calories;
    }) // Sorting the list by calories in ascending order (low to high cal count)
    .map((dessert) => {
      return (
        <li>
          {dessert.name} - {dessert.calories} cal
        </li>
      );
    });

  return <ul>{lowCaloriesDesserts}</ul>;
}

export default DessertsList;

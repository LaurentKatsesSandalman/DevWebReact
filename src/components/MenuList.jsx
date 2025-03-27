import MenuItem from './MenuItem';

function MenuList({ foodItems }) {
  console.log(foodItems);

  return (
    <>
      {/* render a MenuItem component for each element of the foodItems array */}
      {foodItems.map((menuItem) => (
        <MenuItem key={menuItem.id} {...menuItem} />))}
    </>
  );
}

export default MenuList;

/*itemName={menuItem.itemName} description={menuItem.description} foodImage={menuItem.foodImage}*/
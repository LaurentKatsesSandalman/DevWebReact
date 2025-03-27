import MenuItem from './MenuItem';

function MenuList({ foodItems }) {
  console.log(foodItems);

  return (
    <>
      {foodItems.map((menuItem) => (
        <MenuItem key={menuItem.id} {...menuItem} />))}
    </>
  );
}

export default MenuList;
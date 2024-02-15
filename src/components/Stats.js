export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to Your packing list ⛱✈</em>
      </p>
    );

  const numItems = items.length;
  const numberOfPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numberOfPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go 🚅🚍✈"
          : `👜You have ${numItems} items on your list, and you already packed
        ${numberOfPacked} ${percentage}%`}
      </em>
    </footer>
  );
}

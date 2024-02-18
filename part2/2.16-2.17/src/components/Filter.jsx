export const Filter = ({ filterText, handleFilterTextChange }) => {
  return (
    <div>
      filter shown with:{" "}
      <input value={filterText} onChange={handleFilterTextChange} />
    </div>
  )
}

export const Search = ({ search, handleSearchChange }) => {
  return (
    <div>
      find countries{" "}
      <input
        type="text"
        value={search}
        onChange={e => handleSearchChange(e.target.value)}
      />
    </div>
  )
}

export const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  const { content, status } = message
  const style = {
    color: status === "success" ? "green" : "red",
    background: "lightgrey",
    fontSize: 20,
    borderStyle: "solid",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  }

  return <div style={style}>{content}</div>
}

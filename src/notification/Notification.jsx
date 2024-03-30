const Notification = ({ notificacionData }) => {

  const colors = {
    success: 'green',
    error: 'red',
    warning: 'orange',
    info: 'blue'
  }

  const title = {
    success: 'Correcto',
    error: 'Error',
    warning: 'Advertencia',
    info: 'Información'
  }

  const notificationStyle = {
    position: 'absolute',
    top: 100,
    right: 0,
    left: 0,
    width: "fit-content",
    margin: "0 auto",
    justifyContent: "justify-center",
    backgroundColor: colors[notificacionData.type],
    color: 'white',
    padding: 20,
    borderRadius: 10
  }

  return (
    <article style={notificationStyle}>
      <h3>{ title[notificacionData.type] }</h3>
      { notificacionData.text }
    </article>
  )
}

export default Notification;

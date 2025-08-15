interface NotificationProps {
  data: {
    message: string;
  };
}

const Notification = ({ data }: NotificationProps) => {
  return (
    <div className="msg-container">
      <p className="msg-title">{data.message}</p>
    </div>
  );
};

export default Notification;

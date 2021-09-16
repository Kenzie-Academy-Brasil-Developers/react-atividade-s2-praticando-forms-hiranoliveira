const Card = ({ cardUser }) => {
  return (
    <>
      <p>{cardUser.name}</p>
      <p>{cardUser.user}</p>
      <p>{cardUser.address}</p>
      <p>{cardUser.email}</p>
      <p>{cardUser.cellphone}</p>
    </>
  );
};

export default Card;

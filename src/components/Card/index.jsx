const Card = ({ cardUser }) => {
  return (
    <>
      <p>{cardUser[0].name}</p>
      <p>{cardUser[0].user}</p>
      <p>{cardUser[0].address}</p>
      <p>{cardUser[0].email}</p>
      <p>{cardUser[0].cellphone}</p>
    </>
  );
};

export default Card;

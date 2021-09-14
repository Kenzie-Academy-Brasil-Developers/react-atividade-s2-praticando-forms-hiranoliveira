import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Card from "../Card";
import { useState } from "react";

const Form = () => {
  const formSchema = yup.object().shape({
    user: yup.string().required("Usuário obrigatório"),
    name: yup
      .string()
      .required("Nome obrigatório")
      .max(18, "Máximo de 18 caracteres"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    cellphone: yup.string().required("Telefone obrigatório"),
    address: yup.string().required("Endereço obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const [cardUser, setCardUser] = useState([]);

  const onSubmitFunction = (data) => setCardUser([data]);
  return (
    <>
      <div>
        <h3>Formulário</h3>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <input placeholder="Nome de usuário*" {...register("user")} />
          {errors.user?.message}
          <br />
          <input placeholder="Nome completo*" {...register("name")} />
          {errors.name?.message}
          <br />
          <input placeholder="Endereço*" {...register("address")} />
          {errors.address?.message}
          <br />
          <input placeholder="Endereço de Email*" {...register("email")} />
          {errors.email?.message}
          <br />
          <input placeholder="Telefone*" {...register("cellphone")} />
          {errors.cellphone?.message}
          <br />
          <input required type="password" placeholder="Senha*" />
          <br />
          <input required type="password" placeholder="Confirme sua senha*" />
          <br />
          <input required type="checkbox" name="checkbox" id="checkbox" />
          <label>Eu aceito os termos de uso da aplicação</label>
          <br />
          <button type="submit">CADASTRAR</button>
        </form>
        <Card cardUser={cardUser}></Card>
      </div>
    </>
  );
};

export default Form;

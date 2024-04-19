import { useForm } from "react-hook-form";
import { api } from "../config_axios";
import { useState } from "react";
import { Helmet } from "react-helmet";

const Cadastrar_prestador = () => {
  const { register, handleSubmit, reset } = useForm();
  const [aviso, setAviso] = useState("");

  const salvar = async (campos) => {
    try {
      const response = await api.post("usuarios", campos);
      setAviso("Prestador cadastrado com sucesso!");
      reset();
    } catch (error) {
      setAviso("Erro ao cadastrar prestador!");
    }
  };

  return (
    <><Helmet>
      <title>Cadastro de Prestadores</title>
    </Helmet>
    <div className="container p-5 bg-light text-dark rounded" style={{ borderColor: "#4e9c9c", borderWidth: "20px", borderStyle: "solid" }}> 
        <div className="container p-5 bg-light text-dark rounded">
          <h4 className="fst-italic mb-3">Preencha os campos para se cadastrar</h4>
          <form onSubmit={handleSubmit(salvar)}>
            <div className="row">
              <div className="col">
                <label htmlFor="username">Nome:</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  required
                  autoFocus
                  {...register("username")}
                />
              </div>
              <div className="col">
                <label htmlFor="cnpj">CNPJ:</label>
                <input
                  type="text"
                  className="form-control"
                  id="cnpj"
                  required
                  autoFocus
                  {...register("cnpj")}
                />
              </div>
              <div className="col">
                <label htmlFor="cpf">CPF:</label>
                <input
                  type="text"
                  className="form-control"
                  id="cpf"
                  required
                  autoFocus
                  {...register("cpf")}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="telefone">Telefone:</label>
                <input
                  type="text"
                  className="form-control"
                  id="telefone"
                  required
                  autoFocus
                  {...register("telefone")}
                />
              </div>
              <div className="col">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  required
                  {...register("email")}
                />
              </div>
              <div className="col">
                <label htmlFor="razao_social">Razão Social:</label>
                <input
                  type="text"
                  className="form-control"
                  id="razao_social"
                  required
                  {...register("razao_social")}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="status">Senha:</label>
                <input
                  type="password"
                  className="form-control"
                  id="senha"
                  required
                  {...register("senha")}
                />
              </div>
              <div className="col">
                <label htmlFor="rua">Rua:</label>
                <input
                  type="text"
                  className="form-control"
                  id="rua"
                  required
                  autoFocus
                  {...register("rua")}
                />
              </div>
              <div className="col">
                <label htmlFor="cidade">Cidade:</label>
                <input
                  type="text"
                  className="form-control"
                  id="cidade"
                  required
                  autoFocus
                  {...register("cidade")}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="estado">Estado:</label>
                <input
                  type="text"
                  className="form-control"
                  id="estado"
                  required
                  autoFocus
                  {...register("estado")}
                />
              </div>
              <div className="col">
                <label htmlFor="pais">País:</label>
                <input
                  type="text"
                  className="form-control"
                  id="pais"
                  required
                  autoFocus
                  {...register("pais")}
                />
              </div>
              <div className="col">
                <label htmlFor="cep">CEP:</label>
                <input
                  type="text"
                  className="form-control"
                  id="cep"
                  required
                  autoFocus
                  {...register("cep")}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="numero">Número:</label>
                <input
                  type="number"
                  className="form-control"
                  id="numero"
                  required
                  autoFocus
                  {...register("numero")}
                />
              </div>
              <div className="col">
                <label htmlFor="complemento">Complemento:</label>
                <input
                  type="text"
                  className="form-control"
                  id="complemento"
                  required
                  autoFocus
                  {...register("complemento")}
                />
              </div>
            </div>
            <input
              type="submit"
              className="btn btn-primary mt-3"
              value="Cadastrar"
            />
            <input
              type="reset"
              className="btn btn-danger mt-3 ms-3"
              value="Cancelar"
            />
          </form>
          <div className="alert mt-3">{aviso}</div>
        </div>
      </div>
    </>
  );
};

export default Cadastrar_prestador;

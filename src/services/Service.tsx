import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000" // porta do seu backend
});

// 🔹 GET /categoria
export const buscarCategorias = async (url: string, setDados: Function) => {
  const resposta = await api.get(url);
  setDados(resposta.data);
};
// 🔹 GET /categoria/:id
export const buscarCategoriaPorId = async (id: number, setDados: Function) => {
  const resposta = await api.get(`/categoria/${id}`);
  setDados(resposta.data);
};

// 🔹 GET /categoria/descricao/:descricao
export const buscarCategoriaPorDescricao = async (
  descricao: string,
  setDados: Function
) => {
  const resposta = await api.get(`/categoria/descricao/${descricao}`);
  setDados(resposta.data);
};

// 🔹 POST /categoria
export const cadastrarCategoria = async (
  dados: object,
  setDados: Function
) => {
  const resposta = await api.post("/categoria", dados);
  setDados(resposta.data);
};

// 🔹 PUT /categoria
export const atualizarCategoria = async (
  dados: object,
  setDados: Function
) => {
  const resposta = await api.put("/categoria", dados);
  setDados(resposta.data);
};

// 🔹 DELETE /categoria/:id
export const deletarCategoria = async (id: number) => {
  await api.delete(`/categoria/${id}`);
};

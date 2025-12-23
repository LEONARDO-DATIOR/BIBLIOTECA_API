import database from "../../../infraestrutura/database.js";

async function livros(request, response) {
  const resultado = await database.testeConsultaSql();
  response.status(200).json({
    result: resultado,
  });
}

export default livros;

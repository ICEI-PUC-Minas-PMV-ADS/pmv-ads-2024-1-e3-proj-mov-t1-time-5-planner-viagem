import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseAsync("notas.db");

const createTableQuery = `CREATE TABLE IF NOT EXISTS notas (id TEXT PRIMARY KEY NOT NULL, texto TEXT NOT NULL);`;

db.then((database) => {
  database
    .execAsync(createTableQuery)
    .then(() => {
      console.log("Table 'notas' created successfully.");
    })
    .catch((error) => {
      console.error("Error creating table:", error);
    });
}).catch((error) => {
  console.error("Error opening database:", error);
});

export const getNotas = async () => {
  try {
    const database = await db;
    const result = await database.getAllAsync("SELECT * FROM notas");
    return result;
  } catch (error) {
    throw new Error("Erro ao buscar notas: " + error);
  }
};

export const insertNota = async (nota) => {
  try {
    const database = await db;
    const result = await database.runAsync(
      "INSERT INTO notas (id, texto) VALUES (?, ?)",
      nota.id,
      nota.texto
    );
    return result;
  } catch (error) {
    throw new Error("Erro ao adicionar nota: " + error);
  }
};

export const updateNota = async (nota) => {
  try {
    const database = await db;
    const result = await database.runAsync(
      "UPDATE notas SET texto = ? WHERE id = ?",
      nota.texto,
      nota.id
    );
    return result;
  } catch (error) {
    throw new Error("Erro ao atualizar nota: " + error);
  }
};

export const deleteNota = async (id) => {
  try {
    const database = await db;
    const result = await database.runAsync(
      "DELETE FROM notas WHERE id = ?",
      id
    );
    return result;
  } catch (error) {
    throw new Error("Erro ao excluir nota: " + error);
  }
};

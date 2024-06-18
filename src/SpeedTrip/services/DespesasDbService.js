import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseAsync('despesas.db');

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS despesas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    descricao TEXT NOT NULL,
    valor REAL NOT NULL
  );
`;

const setupDatabaseAsync = async () => {
  try {
    const database = await db;
    await database.execAsync(createTableQuery);
    console.log("Table 'despesas' created successfully.");
  } catch (error) {
    console.error("Error creating table:", error);
  }
};

setupDatabaseAsync(); 

const getDespesas = async () => {
  try {
    const database = await db;
    const result = await database.getAllAsync('SELECT * FROM despesas');
    return result;
  } catch (error) {
    throw new Error("Erro ao buscar despesas: " + error);
  }
};

const insertDespesa = async (descricao, valor) => {
  try {
    const database = await db;
    const result = await database.runAsync(
      'INSERT INTO despesas (descricao, valor) VALUES (?, ?)',
      [descricao, valor]
    );
    return result;
  } catch (error) {
    throw new Error("Erro ao adicionar despesa: " + error);
  }
};

const updateDespesa = async (id, descricao, valor) => {
  try {
    const database = await db;
    const result = await database.runAsync(
      'UPDATE despesas SET descricao = ?, valor = ? WHERE id = ?',
      [descricao, valor, id]
    );
    return result;
  } catch (error) {
    throw new Error("Erro ao atualizar despesa: " + error);
  }
};

const deleteDespesa = async (id) => {
  try {
    const database = await db;
    const result = await database.runAsync(
      'DELETE FROM despesas WHERE id = ?',
      [id]
    );
    return result;
  } catch (error) {
    throw new Error("Erro ao excluir despesa: " + error);
  }
};

export {
  setupDatabaseAsync,
  getDespesas,
  insertDespesa,
  updateDespesa,
  deleteDespesa,
};

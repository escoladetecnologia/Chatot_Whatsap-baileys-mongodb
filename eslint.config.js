import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import { fileURLToPath } from "url";

// Mimic CommonJS variables (caso você esteja usando ES Modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Cria uma instância do FlatCompat com base no diretório atual
const compat = new FlatCompat({
    baseDirectory: __dirname,  // Define o diretório base para o projeto
});

// Definindo o objeto de configuração para estender a configuração recomendada
export default [
    // Utilizando a configuração recomendada do ESLint de maneira correta
    compat.extends("eslint:recommended"),
];

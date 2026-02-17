# Lanche_sabor_Raiz
 site de pedido de lanche
 <!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sabor Raiz</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            min-height: 100vh;
            margin: 0;
        }
        header img {
            
            width: 1500px;
            height: 400px;
        }
        h1, p {
            text-align: center;
            margin: 10px 0;
        }
        form {
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            width: 300px;
            margin-top: 20px;
        }
        h2 {
            text-align: center;
            margin-bottom: 20px;
        }
        label {
            font-weight: bold;
            display: block;
            margin-top: 10px;
        }
        input {
            width: 100%;
            padding: 8px;
            margin-top: 5px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        button {
            margin-top: 15px;
            width: 100%;
            padding: 10px;
            background-color: #28a745;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        button:hover {
            background-color: #218838;
        }
    </style>
</head>
<body>
    <header>
        <img src="imagem/Painel.jpg" alt="Painel">
    </header>

    <h1>Bem Vindo ao Sabor Raiz</h1>
    <p>O melhor da culinária tradicional brasileira!</p>   

    <form action="processa_cadastro.php" method="POST">
        <h2>Cadastro</h2>
        
        <label for="nome">Nome completo:</label>
        <input type="text" id="nome" name="nome" required minlength="3">

        <label for="email">E-mail:</label>
        <input type="email" id="email" name="email" required>

        <label for="senha">Senha:</label>
        <input type="password" id="senha" name="senha" required minlength="6">

        <label for="telefone">Telefone:</label>
        <input type="tel" id="telefone" name="telefone" pattern="\d{4,4}" placeholder="Apenas números">

        <button type="submit">Cadastrar</button>
    </form>
    RewriteEngine On
RewriteCond %{HTTPS} !=on
RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

</body>
</html>

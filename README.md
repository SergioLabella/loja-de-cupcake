# loja-de-cupcake
Loja virtual de Cupcake de vendas online
Escopo do Projeto: Loja Virtual de Cupcakes
1. Objetivo do Projeto
Desenvolver uma plataforma de comércio eletrônico para a venda de cupcakes, onde os usuários poderão realizar compras online de forma intuitiva e segura. O sistema permitirá a personalização dos cupcakes, o acompanhamento de pedidos, a gestão de estoque, e o processo de pagamento.
2. Requisitos Funcionais
2.1. Cadastro de Usuários
•	O sistema permitirá que os usuários se cadastrem com informações como nome, e-mail, endereço, telefone e preferências.
•	O usuário poderá optar por se cadastrar como cliente comum ou administrador da loja (gestor do sistema).
2.2. Navegação no Catálogo de Cupcakes
•	O cliente poderá visualizar os cupcakes disponíveis para venda organizados por categorias, como "Sabor", "Tamanho", "Decoração", etc.
•	O cliente poderá filtrar os produtos por categorias, popularidade, preço e sabor.
•	O sistema deve permitir a busca por nome de cupcakes ou ingredientes específicos.
2.3. Personalização de Cupcakes
•	O usuário poderá personalizar cupcakes, escolhendo sabor, cobertura, recheio e decoração.
•	O cliente poderá adicionar mensagens personalizadas (ex: "Parabéns!", "Feliz Aniversário", etc.).
2.4. Carrinho de Compras
•	O sistema permitirá que os usuários adicionem cupcakes ao carrinho e visualizem o total da compra, incluindo impostos e taxas de entrega.
•	O cliente poderá editar ou remover itens do carrinho antes de finalizar a compra.
2.5. Processamento de Pedidos
•	O cliente poderá escolher entre diferentes opções de pagamento: cartão de crédito, boleto bancário ou pagamento via plataformas como PayPal.
•	O sistema gerará um número de pedido único, permitindo que o cliente acompanhe o status da entrega (aguardando pagamento, em processamento, enviado, entregue).
•	O cliente poderá realizar o rastreamento do pedido e receber notificações sobre o status do pedido via e-mail ou SMS.
2.6. Gestão de Estoque e Produtos
•	O sistema permitirá que o administrador gerencie o estoque de cupcakes e ingredientes, com alertas para itens com baixo estoque.
•	O administrador poderá cadastrar novos produtos (sabores, coberturas e decorações), atualizar preços e criar promoções.
•	O sistema deve ter controle de quantidades de cupcakes disponíveis para venda, evitando vendas de itens esgotados.
2.7. Gerenciamento de Promoções
•	O administrador poderá criar promoções de descontos, como “Compre 2, leve 3” ou “Desconto de 10% em compras acima de R$100”.
•	O sistema aplicará automaticamente o desconto ao total da compra, conforme a regra de promoção.
2.8. Funcionalidades de IHC (Interface Humano-Computador)
•	O site será responsivo, adaptando-se a diferentes dispositivos (desktop, tablet e mobile).
•	O design será intuitivo, com foco na experiência do usuário (UX), facilitando a navegação e compra.
•	O sistema exibirá mensagens de erro claras e amigáveis, caso o usuário cometa algum erro ao realizar o cadastro ou a compra.
•	As telas de pagamento e finalização de pedido devem ser seguras e simples de entender, com opções claras de confirmação e informações detalhadas de entrega.
3. Requisitos Não Funcionais
3.1. Desempenho
•	O site deve ser capaz de suportar até 10.000 acessos simultâneos, garantindo que os usuários não enfrentem lentidão, mesmo durante promoções especiais ou datas comemorativas.
3.2. Segurança
•	A plataforma deve utilizar HTTPS para garantir a segurança da comunicação entre o cliente e o servidor.
•	O sistema deve ser integrado com um sistema de pagamento seguro, como Stripe ou PayPal, garantindo que os dados financeiros dos clientes sejam protegidos.
•	O sistema deve realizar a validação e o controle de acessos para evitar fraudes.
3.3. Usabilidade
•	A navegação deve ser intuitiva, com menus claros e fáceis de entender.
•	As páginas devem carregar rapidamente, mesmo em conexões lentas.
3.4. Acessibilidade
•	A plataforma deve ser compatível com leitores de tela e outros dispositivos de apoio, garantindo a inclusão de pessoas com deficiência.
4. Requisitos de Modelagem e Design
4.1. Diagrama de Classes
•	Classes principais: Cliente, Produto (Cupcake), Carrinho, Pedido, Pagamento, Estoque, Promoção.
•	Relacionamentos: Um cliente pode ter muitos pedidos. Cada pedido pode conter muitos produtos. O estoque é gerenciado pela classe Estoque e vinculado aos produtos.
4.2. Diagrama de Casos de Uso
•	Atores: Cliente (usuário comum), Administrador, Sistema de Pagamento.
•	Casos de uso:
o	O cliente pode "Cadastrar-se", "Comprar Cupcake", "Visualizar Carrinho", "Efetuar Pagamento".
o	O administrador pode "Gerenciar Produtos", "Gerenciar Pedidos", "Criar Promoções".
4.3. Diagrama de Sequência
•	Fluxo de compra:
1.	O cliente navega pelo catálogo e escolhe um cupcake.
2.	O cliente personaliza o cupcake e adiciona ao carrinho.
3.	O cliente finaliza a compra e escolhe o método de pagamento.
4.	O sistema valida o pagamento e gera um pedido.
5.	O sistema envia a confirmação ao cliente e atualiza o estoque.
4.4. Diagrama de Atividades
•	A atividade de "Compra de Cupcake" pode incluir as seguintes etapas:
1.	Seleção de produto.
2.	Personalização do cupcake.
3.	Adição ao carrinho.
4.	Finalização do pedido.
5.	Escolha de pagamento.
6.	Processamento do pagamento e confirmação do pedido.
5. Cronograma do Projeto
•	Fase de Planejamento: Definição do escopo e levantamento de requisitos (1 semana).
•	Fase de Design: Elaboração dos diagramas UML e protótipos da interface (2 semanas).
•	Fase de Implementação: Desenvolvimento da plataforma (4 semanas).
•	Fase de Testes: Testes de usabilidade, performance e segurança (2 semanas).
•	Fase de Deploy: Lançamento da loja virtual (1 semana).
6. Tecnologias Utilizadas
•	Frontend: HTML, CSS, JavaScript, React (ou outro framework de sua escolha).
•	Backend: Node.js com Express ou Django (Python).
•	Banco de Dados: MySQL ou PostgreSQL.
•	Sistema de Pagamento: Stripe, PayPal ou outro gateway de pagamento.
•	Plataforma de Deploy: AWS, Heroku ou DigitalOcean.
7. Critérios de Aceitação
•	O cliente deve ser capaz de navegar, personalizar, comprar e pagar por cupcakes sem dificuldades.
•	O sistema de pagamento deve ser seguro e eficaz.
•	O administrador deve ser capaz de gerenciar produtos e pedidos facilmente.
•	O site deve ser funcional e responsivo em diferentes dispositivos.
________________________________________
Conclusão
O escopo detalhado para a loja virtual de cupcakes está organizado em várias partes-chave: objetivos, requisitos funcionais e não funcionais, modelagem e design (diagramas UML), cronograma de execução e tecnologias utilizadas. Cada uma dessas áreas é fundamental para garantir que o projeto atenda aos padrões de qualidade exigidos, com foco na experiência do usuário e na escalabilidade do sistema.


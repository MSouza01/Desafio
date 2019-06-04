# Desafio

PS.: Para alterar/deletar um cadastro, basta deslizar o card do aluno para a esquerda que os botões aparecem.

commit 01:
	- Repositório inicializado

commit 02: 
	- Projeto adicionado ao repositório

commit 03: 
	- Botão flutuante adicionado para registrar um novo aluno 
	- Pressionar o botão aciona um alerta para feedback

commit 04: 
	- Página de registro criada e navegação pronta

commit 05: 
	- Página de registro populada e validação de entrada

commit 06: 
	- Projeto refeito do zero com storage e todas as operações CRUD funcionando
	- Passos feitos anteriormente refeitos (execto forms validation)
	- Selects de cidade e estado populados corretamente

commit 07:
	- Validação de formulário refeita

Progresso:

O planejamento para criar a página foi feito lendo a documentação do Ionic v3, desde o tutorial até os componentes. A partir daí, foi decidido qual componente seria utilizado em cada funcionalidade da aplicação.

Para realizar os commits no GitHub, foi acessada a página https://stackoverflow.com/questions/47755083/how-to-commit-push-ionic-3-blank-to-my-github-repository .

O primeiro componente implementado foi o botão flutuante. É utilizado para criar um novo cadastro de aluno. Para criar a função de clique do botão, foi acessada a página https://forum.ionicframework.com/t/how-to-add-a-function-to-a-ion-button-solved/96595 , juntamente com as documentações do botão flutuante e do controlador de alertas.

O segundo passo foi a criação da página de cadastro de aluno, acessada por meio do botão flutuante. Para criar uma nova página, foi acessada a documentação dos comandos Ionic https://ionicframework.com/docs/v3/cli/generate/ . Foi utilizado o comando 'generate' para criar a nova página 'register'.

Para realizar a navegação para a nova página criada, foi acessada a página de tutorial de navegação e a página https://stackoverflow.com/questions/39871376/no-component-factory-found-for-error-when-trying-to-push-from-one-page-to-anot .

A página de registro foi populada com o forms e os inputs correspondentes a cada campo. A verificação das entradas é feita com forms validation por meio de formgroup, foi utilizada a página https://www.joshmorony.com/advanced-forms-validation-in-ionic-2/ como guia. A validação dos campos estado e cidade foi iniciada com a variável 'states' que contém um objeto JSON com todos os estados brasileiros e suas respectivas cidades obtido do módulo br-cidades-estados (https://www.npmjs.com/package/br-cidades-estados).

O projeto foi refeito do zero seguindo os passos da página http://www.fabricadecodigo.com/como-armazenar-dados-offline-com-ionic-storage/ para realizar o armazenamento dos alunos cadastrados. Essa página também foi utilizada como guia, juntamente com a documentação do ion-select para popular os selects de cidade e estado.

A validação do formulário foi refeita manualmente, sem utilizar FormGroup, criando o ValidationProvider. Ao clicar em 'Salvar', as entradas são verificadas. Se forem todas válidas, o novo aluno é cadastrado/cadastro é alterado. Se houver algo inválido, é mostrado um alerta indicando ao usuário o que ele precisa corrigir. Não consegui fazer a indicação dos erros na própria página com ngIf.

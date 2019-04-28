# cielo-API-3.0-Nodejs

API de vendas da Cielo

## Limitações

Por envolver a interface de usuário da aplicação, o SDK funciona apenas como um framework para criação das transações. Nos casos onde a autorização é direta, não há limitação; mas nos casos onde é necessário a autenticação ou qualquer tipo de redirecionamento do usuário, o desenvolvedor deverá utilizar o SDK para gerar o pagamento e, com o link retornado pela Cielo, providenciar o redirecionamento do usuário.

## Utilizando o SDK

Para criar um pagamento simples com cartão de crédito com o SDK, basta fazer:

### Criando um pagamento com cartão de crédito

```typescript
async function venda() {
  // ...
  // Configure seu merchant
  const merchant = new Merchant('MERCHANT ID', 'MERCHANT KEY');

  // Crie uma instância de Sale informando o ID do pagamento
  let sale = new Sale('ID do pagamento');

  // Crie uma instância de Customer informando o nome do cliente
  sale.customer = new Customer('Comprador Teste');

  // Crie uma instância de Payment informando o valor do pagamento
  sale.payment = new Payment(15700);

  // Crie  uma instância de Credit Card utilizando os dados de teste
  // esses dados estão disponíveis no manual de integração
  let creditCard = new CreditCard('123', CardBrands.Visa)
    .setExpirationDate('12/2020')
    .setCardNumber('0000000000000001')
    .setHolder('Fulano de Tal');

  sale.payment.setCreditCard(creditCard);

  // Crie o pagamento na Cielo
  try {
    // Configure o SDK com seu merchant e o ambiente apropriado para criar a venda
    sale = await new CieloEcommerce(merchant, Environment.SANDBOX()).createSale(sale);

    // Com a venda criada na Cielo, já temos o ID do pagamento, TID e demais
    // dados retornados pela Cielo
    let paymentId = sale.payment.paymentId;
    console.log(paymentId);

    // // Com o ID do pagamento, podemos fazer sua captura, se ela não tiver sido capturada ainda
    let saleResponse = await new CieloEcommerce(merchant, Environment.SANDBOX()).captureSale(paymentId, 15700, 0);
    console.log(saleResponse);

    // // E também podemos fazer seu cancelamento, se for o caso
    // let saleResponse2 = new CieloEcommerce(merchant, Environment.SANDBOX()).cancelSale(paymentId, 15700);
    // console.log(saleResponse2);
  } catch (err) {
    // Em caso de erros de integração, podemos tratar o erro aqui.
    // os códigos de erro estão todos disponíveis no manual de integração.
    console.log(err);
  }
  // ...
}

venda();
```

### Criando um card token para armazenamento seguro do cartão

```typescript
async function venda() {
  // Configure seu merchant
  const merchant = new Merchant('MERCHANT ID', 'MERCHANT KEY');

  // Informe os dados do cartão que irá tokenizar
  let cardToken = new CardToken()
    .setBrand('Visa')
    .setCardNumber('4532117080573700')
    .setHolder('Comprador T Cielo')
    .setExpirationDate('12/2020');

  // Crie o Token para o cartão
  try {
    // // Configure o SDK com seu merchant e o ambiente apropriado para
    // gerar o token
    cardToken = await new CieloEcommerce(merchant, Environment.SANDBOX()).createCardToken(cardToken);

    let generatedToken = cardToken.cardToken;

    console.log('token', generatedToken);
  } catch (err) {
    console.log(err);
  }
  // ...
}

venda();
```

## Manual

Para mais informações sobre a integração com a API 3.0 da Cielo, vide o manual em: [Integração API 3.0](https://developercielo.github.io/Webservice-3.0/)



THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

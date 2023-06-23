const { Order } = require("../../models");
const sendEmail = require("../../helpers/sendMail");

const addOrder = async (req, res) => {
  const newOrder = req.body;
  const result = await Order.create(newOrder);
  const email = {
    to: result.userEmail,
    subject: `Нове замовлення №${result.numberOrder}`,
    html: `<h1>Вітаємо ${result.userName} ваше замовлення №${result.numberOrder}</h1>
    <p>Дякуємо за ваше замовлення в інтернет-магазині <a href="veselavutivka.kr" target="_blank">veselavutivka.kr</a></p>
    <p>Деталі замовлення:</p>
    <ul>
    <li>Спосіб доставки:${result.deliveryMethod}</li>
    <li>Дата свята: ${result.deliveryDate}</li>
    <li>Час доставки:${result.deliveryTime}</li>
    <li>Адреса:${result.userAddress}</li>
    <li>Коментарі до замовлення:${result.comment}</li>
    </ul>
    `,
  };
  await sendEmail(email);
  res.status(201).json({
    status: "success",
    code: 201,
    data: result,
  });
};

module.exports = addOrder;

"use strict";
var statusPedido;
(function (statusPedido) {
    statusPedido[statusPedido["ENVIADO"] = 1] = "ENVIADO";
    statusPedido[statusPedido["ENTREGUE"] = 2] = "ENTREGUE";
    statusPedido[statusPedido["PAGO"] = 3] = "PAGO";
})(statusPedido || (statusPedido = {}));
console.log(statusPedido);

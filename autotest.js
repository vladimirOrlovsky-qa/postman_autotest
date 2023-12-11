pm.test("Ожидаю статус ответа 200", function() {pm.response.to.have.status(200);
})

pm.test("Ожидаю, что ответ придёт быстрее 200ms", function () {pm.expect(pm.response.responseTime).to.be.below(200);
});

pm.test("Ожидаю нужную планету", function () {
    pm.expect(pm.response.text()).to.include("Dagobah");
});

pm.test("Статус код ОК", function () {
    pm.response.to.have.status("OK");
});

pm.test("Ожидаю, что ответ придёт быстрее 200ms", function () {pm.expect(pm.response.responseTime).to.be.below(200);
});



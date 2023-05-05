const { browser, element, by } = require("protractor");

describe("Test Register + Login", () => {
  beforeEach(() => {
    browser.get("http://localhost:8080/");
  });

  it("register and login", async () => {
    // các hằng số
    const FIRSTNAME = "Nguyen Thanh";
    const LASTNAME = "Tung";
    const USERNAME = "tungctn";
    const PASSWORD = "123456";

    // click vào nút Register chuyen sang trang register
    await element(by.css("a")).click();
    // nhập thông tin vào các input
    await element(by.css("input[formControlName='firstName']")).sendKeys(
      FIRSTNAME
    );
    browser.sleep(3000);
    await element(by.css("input[formControlName='lastName']")).sendKeys(
      LASTNAME
    );
    browser.sleep(3000);
    await element(by.css("input[formControlName='username']")).sendKeys(
      USERNAME
    );
    browser.sleep(3000);
    await element(by.css("input[formControlName='password']")).sendKeys(
      PASSWORD
    );

    await browser.sleep(3000);

    // click vào nút Register
    await element(by.css("button")).click();

    // nhập thông tin vào các input
    await browser.sleep(3000);
    await element(by.css("input[formControlName='username']")).sendKeys(
      USERNAME
    );
    await browser.sleep(3000);
    await element(by.css("input[formControlName='password']")).sendKeys(
      PASSWORD
    );
    await browser.sleep(3000);
    await element(by.css("button")).click();
    await browser.sleep(3000);

    // lấy thông tin đăng nhập localStorage
    const currentUser = await browser.executeScript(
      "return localStorage.getItem('currentUser');"
    );
    console.log(currentUser);

    const currentUserObj = JSON.parse(currentUser);
    expect(currentUserObj.username).toEqual(USERNAME);
    // expect(browser.getCurrentUrl()).toEqual(URL);
    await browser.sleep(3000);
  });
});

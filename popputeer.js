const puppeteer = require("puppeteer");

(async () => {
  // Khởi tạo trình duyệt với headless mode mới
  const browser = await puppeteer.launch({
    headless: true,
    executablePath:
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  });

  // Mở trang web Google
  const page = await browser.newPage();
  await page.goto("https://www.google.com", { waitUntil: "networkidle2" });

  // Tăng kích thước của cửa sổ trình duyệt
  await page.setViewport({ width: 1280, height: 800 });

  // Nhập từ khóa "Puppeteer" vào ô tìm kiếm và bấm nút tìm kiếm
  await page.waitForSelector('input[name="q"]');
  await page.type('input[name="q"]', "Puppeteer");
  await page.keyboard.press("Enter");

  // Chờ kết quả tìm kiếm xuất hiện
  await page.waitForSelector("#search .g");

  // Kiểm tra xem kết quả có đúng không
  const searchResults = await page.$$("#search .g");
  console.log("Kết quả tìm kiếm:", searchResults.length);

  // Đóng trình duyệt
  await browser.close();
})();

{
  // Nullish coalescing operator ??
  // โ Bad Code ๐ฉ
  function printMessage(text) {
    let message = text;
    if (text == null || text == undefined) {
      message = "Nothing to display ๐ ";
    }
    console.log(message);
  }

  // โ Good Code โจ
  function printMessage(text) {
    const message = text ?? "Nothing to display ๐ ";
    console.log(message);
  }

  // ๐จ Default parameter is only for undefined
  // => undefined์ผ ๊ฒฝ์ฐ๋ง ์ ์ฉ๋จ (null์ ํด๋นํ์ง ์์)
  function printMessage(text = "Nothing to display ๐ ") {
    console.log(text);
  }

  // ๐จ Logical OR operator ||
  //  => falsy๊ฐ์ ์ ์ฉ
  // falsy: null, undefined, 0, -0, false, NaN, ""
  // nullish: null, undefined
  function printMessage(text) {
    const message = text || "Nothing to display ๐ ";
    console.log(message);
  }

  printMessage("Hello");
  printMessage(undefined);
  printMessage(null);
  printMessage(0);
  printMessage("");

  // =======================================================
  // value๊ฐ ์๋๊ณ  expression์ด๊ธฐ ๋๋ฌธ์ ์ฝ๋๋ฅผ ์คํํด์ ์คํ๋ ๊ฐ์ ํ ๋นํ  ๋๋ ๋ง์ด ์ฐ์ด๊ณ  ์์!
  const result = getInitalState() ?? fetchFromServer();
  console.log(result);

  function getInitalState() {
    return null;
  }
  function fetchFromServer() {
    return "Hiya from ๐ป";
  }
}

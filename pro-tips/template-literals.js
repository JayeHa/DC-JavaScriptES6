// Template Literals (Template String)
const person = {
  name: "Julia",
  score: 4,
};

// β Bad Code π©
console.log("Hello" + person.name + ", Your current score is:" + person.score);

// β Good Code β¨
console.log(`Hello ${person.name}, Your current scroe is: ${person.score}`);

// β Good Code β¨
const { name, score } = person;
console.log(`Hello ${name}, Your current scroe is: ${score}`);

// νλ¨κ³λ!] κΈλ‘λ²μ μΌλ‘ λ¬΄μΈκ°λ₯Ό μ€μ νκ³  μ½λλ₯Ό μμ±νκΈ°λ³΄λ€λ μ¬μ¬μ©μ΄ κ°λ₯νλλ‘ ν¨μλ₯Ό λ§λ€λ©΄
// μμ ν λλ ν κ³³μμλ§ λ°κΎΈλ©΄ λκ³ , νμ₯μ± μ μ§λ³΄μμ±μΌλ‘ μ’μ :)
// β Good Code β¨
function greetings(person) {
  const { name, score } = person;
  console.log(`Hello ${name}, Your current scroe is: ${score}`);
}

// π©
function deleteUser(id, softDelete = false) {
  if (softDelete) {
    // don't delete from db but only mark as deleted.
    return this._softDelete(id);
  }
  return db.removeById(id);
}

// λ―Έλμ νμνμ§λ μμ κ·Έλ° κΈ°λ₯λλ¬Έμ λ³΅μ‘μ±μ μΆκ°νλ κ²μ μ’μ§ μμ => νμν κΈ°λ₯λ§ μ΄μ μ λκ³  μμ±μ ν΄λκ°μΌ ν¨
// κ·Έλ¦¬κ³  λ μ΄μ νμμμ΄μ§ μ½λλ μ£ΌμμΌλ‘ λ¨κ²¨λκΈ° λ³΄λ€λ λ²μ κ΄λ¦¬ ν΄μ μ΄μ©νμ

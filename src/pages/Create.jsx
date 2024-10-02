export default function Create() {
  return <div>
    <h1>Criar DevMon</h1>
    <form>
      <div>
        <label htmlFor="nome">Nome*: </label>
        <input type="text" id="nome" name="nome" placeholder="Digite o nome" />
      </div>
      <div>
        <label htmlFor="imagem">Imagem (URL)*: </label>
        <input type="text" id="imagem" name="imagem" placeholder="Insira a URL da imagem" />
      </div>
      <div>
        <label htmlFor="evoluiPara">Evolui Para: (Opcional)</label>
        <input type="text" id="evoluiPara" name="evoluiPara" placeholder="Insira o nome para evolução" />
      </div>
      <div>
        <button type="submit" >Criar</button>
        <button type="reset" >Reiniciar</button>
      </div>
    </form>
  </div>
}
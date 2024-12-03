<div id="contactenos" style="margin-top: 10%; padding-bottom: 2%;" class="recuadro">
  <div style="text-align: center;">
    <br><br>
    <h1>Administraci&oacute;n de Posts</h1>
  </div>
  <div>
    <br><br>
    <div class="container">
      <form id="form_hotel">
        <div class="form-group">
          <label for="titulo">Titulo</label>
          <input type="text" class="form-control" id="titulo" name="titulo" placeholder="las tablas de multiplicar">
          <input type="hidden" id="id_post" name="id_post" >   
        </div>
        <div class="form-group">
          <label for="contenido">Contenido</label>
          <input type="text" class="form-control" id="contenido" name="contenido" placeholder="sirven para...">
        </div>
        <div class="form-group">
          <label for="categoria">Categoria</label>
          <input type="text" class="form-control" id="categoria" name="categoria" placeholder="Matematicas">
        </div>
      </form>
      <button class="btn btn-primary" id="btn_guardar_posts">Guardar</button>
      <button class="btn btn-primary oculto" id="btn_editar_posts">Guardar</button>
      <div style="margin-top: 2%">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Id posts</th>
              <th scope="col">Titulo</th>
              <th scope="col">Contenido</th>
              <th scope="col">Categoria</th>
              <th scope="col">Fecha creacion</th>
              <th scope="col">Opciones</th>
            </tr>
          </thead>
          <tbody id="tb_posts">
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
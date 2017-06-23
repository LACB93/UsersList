/*
	Lista de usuarios
*/


// Contiene los elementos de la lista
var ListaUsuarios = React.createClass({
				CrearElementosDeLista: function(itemText) {
				return <li> <div className="checkbox">
																<button className="btn btn-danger" onClick={this.props.EstadoBorrar.bind(this, itemText)} >x</button> <label>{itemText}</label>
												</div></li>;
			 },
			 // Se devuelve un lista que contiene elementos de la lista
				render: function() {
				return <ol>{this.props.ElementosLista.map(this.CrearElementosDeLista)}</ol>;
			}
		});
		var AplicacionLista = React.createClass({
						getInitialState: function() { return {ElementosLista: ["Luis Angel Cruz Benitez","Javier Hernández Balcazar"], text: ''};
					},
					// Borra un elemento de la lista
					 EstadoBorrar: function(ElementoAborrar, e) {
					 	// Se crean los elementos de la lista
							 var LosElementosLista = this.state.ElementosLista;
							 var indice = LosElementosLista.indexOf(ElementoAborrar);
							 LosElementosLista.splice(indice, 1);
							 this.setState({ElementosLista: LosElementosLista});
						},
						// Agrega el elemento texto a el valor del cual se esta recolectando
						EstadoCambio: function(e) {
							this.setState({text: e.target.value});
						},


						EstadoSubmit: function(e) {
							e.preventDefault();
							var nextElementosLista = this.state.ElementosLista.concat([this.state.text]);
							var nextText = '';
							this.setState({ElementosLista: nextElementosLista, text: nextText});
						},
						// Devuelve todo el contenido del formulario
						render: function() {
						return (
								<div>
										<h3>Lista de Usuarios</h3>

									<form onSubmit={this.EstadoSubmit} >
										<input className="form-control" placeholder="Agregar a la lista"  onChange={this.EstadoCambio} value={this.state.text} />
										<br/><button className="btn btn-primary btn-rounded waves-effect waves-light btn-block">{'Agregar Usuario'}</button>
									</form>
									<hr/>
									<ListaUsuarios ElementosLista={this.state.ElementosLista}
											EstadoBorrar={this.EstadoBorrar} />
								</div>
										);
						}
		});
		React.render(<AplicacionLista />, document.getElementById('UserList'));
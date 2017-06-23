/*
	Lista de usuarios
*/

// Contiene los elementos de la lista
var ListaUsuarios = React.createClass({
	displayName: "ListaUsuarios",

	CrearElementosDeLista: function (itemText) {
		return React.createElement(
			"li",
			null,
			" ",
			React.createElement(
				"div",
				{ className: "checkbox" },
				React.createElement(
					"button",
					{ className: "btn btn-danger", onClick: this.props.EstadoBorrar.bind(this, itemText) },
					"x"
				),
				" ",
				React.createElement(
					"label",
					null,
					itemText
				)
			)
		);
	},
	// Se devuelve un lista que contiene elementos de la lista
	render: function () {
		return React.createElement(
			"ol",
			null,
			this.props.ElementosLista.map(this.CrearElementosDeLista)
		);
	}
});
var AplicacionLista = React.createClass({
	displayName: "AplicacionLista",

	getInitialState: function () {
		return { ElementosLista: ["Luis Angel Cruz Benitez", "Javier Hernández Balcazar"], text: '' };
	},
	// Borra un elemento de la lista
	EstadoBorrar: function (ElementoAborrar, e) {
		// Se crean los elementos de la lista
		var LosElementosLista = this.state.ElementosLista;
		var indice = LosElementosLista.indexOf(ElementoAborrar);
		LosElementosLista.splice(indice, 1);
		this.setState({ ElementosLista: LosElementosLista });
	},
	// Agrega el elemento texto a el valor del cual se esta recolectando
	EstadoCambio: function (e) {
		this.setState({ text: e.target.value });
	},

	EstadoSubmit: function (e) {
		e.preventDefault();
		var nextElementosLista = this.state.ElementosLista.concat([this.state.text]);
		var nextText = '';
		this.setState({ ElementosLista: nextElementosLista, text: nextText });
	},
	// Devuelve todo el contenido del formulario
	render: function () {
		return React.createElement(
			"div",
			null,
			React.createElement(
				"h3",
				null,
				"Lista de Usuarios"
			),
			React.createElement(
				"form",
				{ onSubmit: this.EstadoSubmit },
				React.createElement("input", { className: "form-control", placeholder: "Agregar a la lista", onChange: this.EstadoCambio, value: this.state.text }),
				React.createElement("br", null),
				React.createElement(
					"button",
					{ className: "btn btn-primary btn-rounded waves-effect waves-light btn-block" },
					'Agregar Usuario'
				)
			),
			React.createElement("hr", null),
			React.createElement(ListaUsuarios, { ElementosLista: this.state.ElementosLista,
				EstadoBorrar: this.EstadoBorrar })
		);
	}
});
React.render(React.createElement(AplicacionLista, null), document.getElementById('UserList'));
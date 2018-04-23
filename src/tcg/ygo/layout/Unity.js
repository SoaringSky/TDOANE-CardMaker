define(["react", "react-class", "draw/Group", "./component/All"], function Ritual(React, ReactClass, Group, C)
{
	var Unity = ReactClass({
		render: function render()
		{
			return React.createElement(
				Group,
				this.props,
				React.createElement(C.Image, { value: this.props.image, pendulum: true }),
				React.createElement(C.Border, { value: "Unity" }),
				React.createElement(C.CardName, { value: this.props.name }),
				React.createElement(C.Attribute, { value: this.props.attribute }),
				React.createElement(C.Level, { value: this.props.level, star: "Normal" }),
				
				React.createElement(C.Pendulum, Object.assign({}, this.props.pendulum, { enabled: true })),
		
				React.createElement(C.Type, { value: this.props.type }),
				React.createElement(C.Effect, { value: this.props.effect }),
				React.createElement(C.Atk, { value: this.props.atk }),
				React.createElement(C.Def, { value: this.props.def }),
				
				React.createElement(C.Serial, { value: this.props.serial }),
				React.createElement(C.Copyright, { value: this.props.copyright })
			);
		}
	});
	Unity.displayName = "Unity";
	Unity.defaultProps = {
	};
	return Unity;
});
